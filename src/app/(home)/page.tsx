import { Cidades } from "./cidades";
import { SectionHeading } from "@/components/section-heading";
import { Footer } from "@/components/footer";
import { Bloquinho } from "@/components/bloquinho";
import axios from "axios";
import { SelectCity } from "@/components/selectCity";
import { SearchInput } from "@/components/searchInput";
import { DateSelector } from "@/components/dateSelector";
import { Pagination } from "@/components/pagination";
import { BlocoProps, SearchParams } from "@/app/types/types";

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const response = await axios.get(
    "https://apis.codante.io/api/bloquinhos2025/agenda",
    {
      params: {
        city: searchParams?.city,
        search: searchParams?.search,
        sort: searchParams?.sort,
        date: searchParams?.date_time,
        page: searchParams?.page,
      },
    }
  );
  const blocos = response.data.data;
  const maxPage = response.data.meta.last_page;
  let links: { url: string; label: string; active: boolean; id: number }[] =
    response.data.meta.links;

  links = links.map((link, index) => ({ ...link, id: index }));

  const cityTexts: Record<string, string> = {
    "São Paulo": "em São Paulo",
    "Rio de Janeiro": "no Rio de Janeiro",
    "Belo Horizonte": "em Belo Horizonte",
    Salvador: "em Salvador",
    Recife: "em Recife e Olinda",
    Brasilia: "em Brasília",
  };

  const defaultText = "em todas as cidades";

  const cityText = searchParams?.city
    ? cityTexts[searchParams?.city] || `em ${searchParams?.city}`
    : defaultText;

  return (
    <div className="">
      <div className="w-full h-[50vh] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center">
        <div className="bg-purple-900 mx-20 my-auto w-full max-w-[1140px] min-h-[300px] rounded-4xl flex flex-col items-center justify-center p-4 gap-6">
          <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
            Encontre seu bloquinho de carnaval
          </h1>
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            <SelectCity />
            <DateSelector />
            <SearchInput />
          </div>
        </div>
      </div>
      <div id="blocos-section" className="w-full">
        <div className="max-w-[1240px] mx-auto px-6 mt-20">
          <SectionHeading title={`Próximos Blocos ${cityText}`} />
          <div className="flex flex-row flex-wrap mt-6 gap-6 ">
            {blocos.length > 0 ? (
              blocos.map((bloquinho: BlocoProps) => (
                <Bloquinho
                  key={bloquinho.id}
                  title={bloquinho.title}
                  date={bloquinho.date_time}
                  neighborhood={bloquinho.neighborhood}
                  price={bloquinho.price}
                  id={bloquinho.id}
                />
              ))
            ) : (
              <div className="space-y-2">
                <p className="font-heading text-3xl">Oops!</p>
                <div>
                  <p>
                    Não encontramos nenhum bloco. Ajuste a busca e tente
                    novamente.
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-row w-full justify-center gap-4 mt-16">
              <Pagination links={links} maxPage={maxPage} />
            </div>
          </div>
          <Cidades />
        </div>
      </div>
      <Footer />
    </div>
  );
}
