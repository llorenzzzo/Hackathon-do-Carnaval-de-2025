import { Calendar, Search } from "lucide-react";
import { Cidades } from "./cidades";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Bloquinho } from "@/components/bloquinho";
import { Select, SelectIcon, SelectInput } from "@/components/select";
import { Input, InputIcon, InputRoot } from "@/components/input";

export default function Home() {
  return (
    <div className="">
      <div className="w-full h-[517px] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center">
        <div className="bg-purple-900 mx-20 my-auto w-full max-w-[1140px] h-[300px] rounded-4xl flex flex-col items-center justify-center gap-4">
          <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
            Encontre seu bloquinho de carnaval
          </h1>
          <div className="flex flex-row gap-6">
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
            <Bloquinho
              title="Teste"
              date={new Date("2025-02-28T18:00:00.000Z")}
              neighborhood="Testeaaaaaaaaaaaaaaaaaa"
              price="Grátis"
            />
          </div>
          <Cidades />
          <div className="max-w-[1240px] mx-auto px-6 mt-20">
            <SectionHeading title="Blocos Grátis em Joinville" link="#" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-6">
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaaaaaaa"
                price="Grátis"
              />
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaaaaaaa"
                price="Grátis"
              />
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaa"
                price="Grátis"
              />
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaaaaaaa"
                price="Grátis"
              />
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto px-6 mt-20">
            <SectionHeading title="Blocos Pagos em Joinville" link="#" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-6">
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaaaaaaa"
                price="Grátis"
              />
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaaaaaaa"
                price="Grátis"
              />
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaa"
                price="Grátis"
              />
              <Bloquinho
                title="Teste"
                date={new Date("2025-02-28T18:00:00.000Z")}
                neighborhood="Testeaaaaaaaaaaaaaaaaaa"
                price="Grátis"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
