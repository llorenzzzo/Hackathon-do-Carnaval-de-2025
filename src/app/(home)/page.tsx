import { Calendar, MapPin, Search } from "lucide-react";
import { Cidades } from "./cidades";
import { SectionHeading } from "@/components/section-heading";
import { Footer } from "@/components/footer";
import { Bloquinho } from "@/components/bloquinho";
import { Select, SelectIcon, SelectInput } from "@/components/select";
import { Input, InputIcon, InputRoot } from "@/components/input";

export default async function Home() {
  const response = await fetch(
    "https://apis.codante.io/api/bloquinhos2025/agenda?city=Rio%20de%20Janeiro&date=2025-02-28"
  );
  const blocos = await response.json();
  console.log(blocos);

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
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-de-janeiro">Rio de Janeiro</option>
                <option value="belo-horizonte">Belo Horizonte</option>
                <option value="salvador">Salvador</option>
                <option value="recife-olinda">Recife e Olinda</option>
                <option value="brasilia">Brasília</option>
                <option value="fortaleza">Fortaleza</option>
                <option value="porto-alegre">Porto Alegre</option>
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
            {blocos.data.map((bloquinho: any) => (
              <Bloquinho
                key={bloquinho.id}
                title={bloquinho.title}
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood={bloquinho.neighborhood}
                price={bloquinho.price}
                id={bloquinho.id}
              />
            ))}
          </div>
          <Cidades />
          <div className="max-w-[1240px] mx-auto px-6 mt-20">
            <SectionHeading title="Blocos Grátis em Joinville" link="#" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-6">
              {blocos.data.slice(0, 4).map((bloquinho: any) => (
                <Bloquinho
                  key={bloquinho.id}
                  title={bloquinho.title}
                  date={new Date("2025-02-28T18:00:00.000Z")}
                  neighborhood={bloquinho.neighborhood}
                  price={bloquinho.price}
                  id={bloquinho.id}
                />
              ))}
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto px-6 mt-20">
            <SectionHeading title="Blocos Pagos em Joinville" link="#" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-6"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
