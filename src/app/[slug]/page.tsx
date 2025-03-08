import { Footer } from "@/components/footer";
import {
  BadgeInfoIcon,
  Calendar,
  Info,
  InfoIcon,
  MapPin,
  Ticket,
  TicketCheck,
} from "lucide-react";
import { Badge, BadgeIcon } from "./badge";
import Image from "next/image";

export default function Bloco() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[300px] bg-purple-900 flex flex-col items-center justify-center md:px-5 px-5 lg:px-0">
        <div className="w-full max-w-[1240px] flex flex-col items-start justify-center gap-3">
          <h1 className="font-heading text-2xl md:text-4xl text-start text-pretty text-yellow-400">
            Nome do bloco
          </h1>
          <div className="space-y-2">
            <Badge info="04/03/2025 - Terça - 11:00">
              <BadgeIcon>
                <Calendar className="size-5 text-purple-200" />
              </BadgeIcon>
            </Badge>
            <Badge info="R. Augusta, 1300">
              <BadgeIcon>
                <MapPin className="size-5 text-purple-200" />
              </BadgeIcon>
            </Badge>
            <Badge info="Grátis">
              <BadgeIcon>
                <Ticket className="size-5 text-purple-200" />
              </BadgeIcon>
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[800px] mt-21 gap-16 md:px-5 px-5 lg:px-0 items-center justify-start">
        <div className="w-full space-y-4">
          <div className="flex flex-row gap-2 items-center">
            <span>
              <BadgeInfoIcon className="size-8 text-purple-500" />
            </span>
            <h2 className="font-heading text-3xl">Descrição</h2>
          </div>
          <p className="text-[#333333] text-pretty">
            Juntos, vamos fazer do Carnaval 2025 uma festa inesquecível para a
            criançada! Com muita música, dança, fantasia e alegria, vamos
            celebrar a magia do Carnaval e criar memórias que vão durar para
            sempre!
          </p>
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-row gap-2 items-center justify-start">
            <span>
              <TicketCheck className="size-8 text-purple-500" />
            </span>
            <h2 className="font-heading text-3xl">Ingresso</h2>
          </div>
          <p className="text-[#333333] font-bold text-pretty">
            {/*{price === "Grátis" ? price : `R$ ${price}`}*/}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
