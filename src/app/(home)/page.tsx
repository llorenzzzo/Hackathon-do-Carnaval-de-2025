import { Cidades } from "./cidades";
import { SectionHeading } from "@/components/section-heading";
import { Footer } from "@/components/footer";
import { Bloquinho } from "@/components/bloquinho";
import axios from "axios";
import { SelectCity } from "@/components/selectCity";
import { SearchInput } from "@/components/searchInput";
import { DateSelector } from "@/components/dateSelector";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    city?: string;
    search?: string;
    sort?: string;
    date_time?: string;
  };
}) {
  const response = await axios.get(
    "https://apis.codante.io/api/bloquinhos2025/agenda",
    {
      params: {
        city: searchParams?.city,
        search: searchParams?.search,
        sort: searchParams?.sort,
        date: searchParams?.date_time,
      },
    }
  );
  const blocos = response.data.data;

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
      <div className="w-full h-[87vh] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center">
        <div className="bg-purple-900 mx-20 my-auto w-full max-w-[1140px] h-[300px] rounded-4xl flex flex-col items-center justify-center gap-6">
          <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
            Encontre seu bloquinho de carnaval
          </h1>
          <div className="flex flex-row gap-4 justify-between">
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
              blocos.map((bloquinho: any) => (
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
          </div>
          <Cidades />
        </div>
      </div>
      <Footer />
    </div>
  );
}
