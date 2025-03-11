import { Cidades } from "@/app/(home)/cidades";
import { Bloquinho } from "@/components/bloquinho";
import { Footer } from "@/components/footer";
import { IconButton } from "@/components/iconButton";
import { Input, InputIcon, InputRoot } from "@/components/input";
import { Select, SelectIcon, SelectInput } from "@/components/select";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ListFilter,
  MapPin,
  MapPinned,
  Search,
} from "lucide-react";

export default function Bloco() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[87vh] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
          Blocos em Joinville
        </h1>
      </div>
      <div className="w-full max-w-[1240px] flex flex-col items-center justify-center">
        <div className="w-full flex justify-center md:justify-between mt-21 flex-wrap gap-3">
          <div className="w-full flex flex-row flex-wrap gap-3 justify-start">
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
            <Select>
              <SelectIcon>
                <Calendar />
              </SelectIcon>
              <SelectInput>
                <option>Selecione a data</option>
                <option>2</option>
              </SelectInput>
            </Select>
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
            <Select>
              <SelectIcon>
                <ListFilter />
              </SelectIcon>
              <SelectInput>
                <option disabled selected>
                  Ordenar
                </option>
                <option>Mais próximos</option>
                <option>2</option>
              </SelectInput>
            </Select>
          </div>
          <div className="w-full max-w-[1240px] items-center justify-center flex flex-row flex-wrap mt-6 gap-6 ">
            <Bloquinho
              id=""
              title="Teste"
              date={new Date("2025-02-28T18:00:00.000Z")}
              neighborhood="Testeaaaaaaaaaaaaaaaaaa"
              price="Grátis"
            />
          </div>
          <div className="flex flex-row w-full justify-center gap-4 mt-16">
            <IconButton>
              <ArrowLeft />
            </IconButton>
            <IconButton>
              <ArrowRight />
            </IconButton>
          </div>
        </div>
        <Cidades />
      </div>
      <Footer />
    </div>
  );
}
