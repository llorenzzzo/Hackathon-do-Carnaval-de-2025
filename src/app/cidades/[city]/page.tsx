import { Cidades } from "@/app/(home)/cidades";
import { Bloquinho } from "@/components/bloquinho";
import { Footer } from "@/components/footer";
import { IconButton } from "@/components/base/iconButton";
import { Select, SelectIcon, SelectInput } from "@/components/base/select";
import { ArrowLeft, ArrowRight, Calendar, MapPinned } from "lucide-react";
import axios from "axios";
import { SearchInput } from "@/components/searchInput";
import { SortBlocos } from "@/components/sort";
import { DateSelector } from "@/components/dateSelector";
import { Pagination } from "@/components/pagination";

export default async function Bloco({
  params,
  searchParams,
}: {
  params: { city: string };
  searchParams?: {
    search?: string;
    sort?: string;
    date_time?: string;
    page?: number;
  };
}) {
  const { city } = params;

  const cityTexts: Record<string, string> = {
    "São Paulo": "Blocos em São Paulo",
    "Rio de Janeiro": "Blocos no Rio de Janeiro",
    "Belo Horizonte": "Blocos em Belo Horizonte",
    Salvador: "Blocos em Salvador",
    Recife: "Blocos em Recife e Olinda",
    Brasilia: "Blocos em Brasília",
    Fortaleza: "Blocos em Fortaleza",
    "Porto Alegre": "Blocos em Porto Alegre",
    default: `Confira os bloquinhos em ${city}!`, // Texto padrão
  };

  const pageTitle = cityTexts[decodeURI(city)] || cityTexts.default;

  const response = await axios.get(
    `https://apis.codante.io/api/bloquinhos2025/agenda?city=${city}`,
    {
      params: {
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

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[50vh] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
          {pageTitle}
        </h1>
      </div>
      <div className="w-full max-w-[1240px] flex flex-col items-center justify-center">
        <div className="w-full flex justify-center md:justify-between mt-21 flex-wrap gap-3">
          <div className="w-full flex flex-row flex-wrap gap-3 justify-start">
            <SearchInput />
            <DateSelector />
            <Select>
              <SelectIcon>
                <MapPinned />
              </SelectIcon>
              <SelectInput>
                <option disabled selected>
                  Filtrar por bairro
                </option>
                <option>2</option>
              </SelectInput>
            </Select>
            <SortBlocos />
          </div>
          <div className="w-full max-w-[1240px] items-center justify-center flex flex-row flex-wrap mt-6 gap-6 ">
            {blocos.map((bloquinho: any) => (
              <Bloquinho
                key={bloquinho.id}
                title={bloquinho.title}
                date={bloquinho.date_time}
                neighborhood={bloquinho.neighborhood}
                price={bloquinho.price}
                id={bloquinho.id}
              />
            ))}
          </div>
          <div className="flex flex-row w-full justify-center gap-4 mt-16">
            <Pagination links={links} maxPage={maxPage} />
          </div>
        </div>
        <Cidades />
      </div>
      <Footer />
    </div>
  );
}
