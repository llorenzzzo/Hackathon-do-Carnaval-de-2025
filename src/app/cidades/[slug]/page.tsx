import { Footer } from "@/components/footer";
import { Select, SelectIcon, SelectInput } from "@/components/select";
import { Calendar } from "lucide-react";

export default function Bloco() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[517px] bg-[url(/background-home.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="font-heading text-4xl md:text-6xl text-center text-pretty text-yellow-400">
          Blocos em Joinville
        </h1>
      </div>
      <div className="w-full max-w-[1240px]">
        <div className="">
          <div>
            <Select>
              <SelectIcon>
                <Calendar />
              </SelectIcon>
              <SelectInput>
                <option>Selecione a data</option>
                <option>2</option>
              </SelectInput>
            </Select>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
