import { Calendar, MapPin, Search } from "lucide-react";
import { Cidades } from "./cidades";
import { SectionHeading } from "@/components/section-heading";
import { Footer } from "@/components/footer";
import { Bloquinho } from "@/components/bloquinho";
import { Select, SelectIcon, SelectInput } from "@/components/select";
import { Input, InputIcon, InputRoot } from "@/components/input";
import axios from "axios";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    status?: string;
    sort?: string;
  };
}) {
  const response = await axios.get(
    "https://apis.codante.io/api/bloquinhos2025/agenda",
    {
      params: {
        search: searchParams?.search,
        status: searchParams?.status,
        sort: searchParams?.sort,
      },
    }
  );
  const blocos = response.data.data;

  return (
    <div className="">
      <div className="w-full h-[87vh] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center">
        <div className="bg-purple-900 mx-20 my-auto w-full max-w-[1140px] h-[300px] rounded-4xl flex flex-col items-center justify-center gap-6">
          <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
            Encontre seu bloquinho de carnaval
          </h1>
          <div className="flex flex-row gap-4 justify-between">
            <Select>
              <SelectIcon>
                <MapPin />
              </SelectIcon>
              <SelectInput>
                <option>Selecione a cidade</option>
                <option value="São%20Paulo">São Paulo</option>
                <option value="Rio%20de%20Janeiro">Rio de Janeiro</option>
                <option value="Belo%20Horizonte">Belo Horizonte</option>
                <option value="Salvador">Salvador</option>
                <option value="Recife">Recife e Olinda</option>
                <option value="Brasilia">Brasília</option>
                <option value="Fortaleza">Fortaleza</option>
                <option value="Porto%20Alegre">Porto Alegre</option>
              </SelectInput>
            </Select>
            <Select>
              <SelectIcon>
                <Calendar />
              </SelectIcon>
              <SelectInput>
                <option>Selecione a data</option>
                <option>1</option>
              </SelectInput>
            </Select>
            <InputRoot>
              <InputIcon>
                <Search />
              </InputIcon>
              <Input
                type="text"
                name="data"
                id="select-data"
                placeholder="Busque por blocos na cidade escolhida"
              ></Input>
            </InputRoot>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-6 mt-20">
          <SectionHeading title="Próximos Blocos em Joinville" />
          <div className="flex flex-row flex-wrap mt-6 gap-6 ">
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
          <Cidades />
        </div>
      </div>
      <Footer />
    </div>
  );
}
