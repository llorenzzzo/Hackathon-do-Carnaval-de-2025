import { Footer } from "@/components/footer";
import {
  BadgeInfoIcon,
  Calendar,
  LinkIcon,
  MapPin,
  Ticket,
  TicketCheck,
} from "lucide-react";
import { Badge, BadgeIcon } from "./badge";
import Link from "next/link";
import { formatDate } from "@/utils/formattedDate";
import axios from "axios";

interface BlocoAtual {
  id: string;
  title: string;
  description: string;
  neighborhood: string;
  price: string;
}

async function getBlocoByTitle(title: string) {
  const response = await axios.get(
    `https://apis.codante.io/api/bloquinhos2025/agenda?search=rataria+lunatica`
  );

  // add searchParams com ?search para encontrar o bloco

  console.log(response);

  const BlocoAtual = response.data[0];
  console.log("Bloco ATUAL", BlocoAtual);
  return BlocoAtual;
}

export default async function Bloco({
  params: { title },
}: {
  params: { title: string };
}) {
  // const BlocoAtual: BlocoAtual = await getBlocoByTitle(title);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[300px] bg-purple-900 flex flex-col items-center justify-center md:px-5 px-5 lg:px-0">
        <div className="w-full max-w-[1240px] flex flex-col items-start justify-center gap-3">
          <h1 className="font-heading text-2xl md:text-4xl text-start text-pretty text-yellow-400">
            {/* {BlocoAtual.title} */}
          </h1>
          <div className="space-y-2">
            {/* {blocoAtual.date_time && (
              <Badge info={formattedDate}>
                <BadgeIcon>
                  <Calendar className="size-5 text-purple-200" />
                </BadgeIcon>
              </Badge>
            )} */}
            <Badge info="Bairro">
              <BadgeIcon>
                <MapPin className="size-5 text-purple-200" />
              </BadgeIcon>
            </Badge>
            <Badge info="Preço">
              <BadgeIcon>
                <Ticket className="size-5 text-purple-200" />
              </BadgeIcon>
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[800px] mt-21 gap-12 md:px-5 px-5 lg:px-0 items-center justify-start">
        <div className="w-full space-y-4">
          <div className="flex flex-row gap-2 items-center">
            <span>
              <BadgeInfoIcon className="size-8 text-purple-500" />
            </span>
            <h2 className="font-heading text-3xl">Descrição</h2>
          </div>
          <p className="text-[#333333] text-pretty">"BlocoAtual.description"</p>
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-row gap-2 items-center justify-start">
            <span>
              <TicketCheck className="size-8 text-purple-500" />
            </span>
            <h2 className="font-heading text-3xl">Valor do Ingresso</h2>
          </div>
          <p className="text-[#333333] font-bold text-pretty">Preço</p>
        </div>
        {/* {blocoAtual.date_time && (
          <div className="w-full space-y-4">
            <div className="flex flex-row gap-2 items-center justify-start">
              <span>
                <LinkIcon className="size-8 text-purple-500" />
              </span>
              <h2 className="font-heading text-3xl">Mais informações</h2>
            </div>
            <Link
              className="text-[#333333] font-bold text-pretty hover:underline"
              href="{blocoAtual.event_url}"
              target="_blank"
            >
              Veja mais
            </Link>
          </div>
        )} */}
      </div>
      <Footer />
    </div>
  );
}
