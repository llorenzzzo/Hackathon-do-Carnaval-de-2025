import { Footer } from "@/components/footer";
import {
  BadgeInfoIcon,
  Calendar,
  Info,
  InfoIcon,
  Link2,
  LinkIcon,
  MapPin,
  Ticket,
  TicketCheck,
} from "lucide-react";
import { Badge, BadgeIcon } from "./badge";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    blocoId: string;
  }>;
}

interface BlocoProps {
  id: string;
  title: string;
  description: string;
  neighborhood: string;
  price: string;
}

export default async function Bloco(props: PageProps) {
  const { blocoId } = await props.params;

  const response = await fetch(
    "https://apis.codante.io/api/bloquinhos2025/agenda/"
  );
  const blocos = await response.json();

  const blocoAtual = blocos.data.find(
    (bloquinho: BlocoProps) => bloquinho.id == blocoId
  );

  console.log("Bloco atula", blocoAtual);

  if (!blocoAtual) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Bloco não encontrado</h1>
        <Link href="/" className="mt-4 text-purple-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(blocoAtual.date_time).toLocaleDateString(
    "pt-BR",
    {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  console.log(formattedDate);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[300px] bg-purple-900 flex flex-col items-center justify-center md:px-5 px-5 lg:px-0">
        <div className="w-full max-w-[1240px] flex flex-col items-start justify-center gap-3">
          <h1 className="font-heading text-2xl md:text-4xl text-start text-pretty text-yellow-400">
            {blocoAtual.title}
          </h1>
          <div className="space-y-2">
            {blocoAtual.date_time && (
              <Badge info={formattedDate}>
                <BadgeIcon>
                  <Calendar className="size-5 text-purple-200" />
                </BadgeIcon>
              </Badge>
            )}
            <Badge info={blocoAtual.neighborhood}>
              <BadgeIcon>
                <MapPin className="size-5 text-purple-200" />
              </BadgeIcon>
            </Badge>
            <Badge info={blocoAtual.price}>
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
          <p className="text-[#333333] text-pretty">{blocoAtual.description}</p>
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-row gap-2 items-center justify-start">
            <span>
              <TicketCheck className="size-8 text-purple-500" />
            </span>
            <h2 className="font-heading text-3xl">Ingresso</h2>
          </div>
          <p className="text-[#333333] font-bold text-pretty">
            {blocoAtual.price === "Grátis"
              ? blocoAtual.price
              : `R$${blocoAtual.price}`}
          </p>
        </div>
        {blocoAtual.date_time && (
          <div className="w-full space-y-4">
            <div className="flex flex-row gap-2 items-center justify-start">
              <span>
                <LinkIcon className="size-8 text-purple-500" />
              </span>
              <h2 className="font-heading text-3xl">Mais informações</h2>
            </div>
            <Link
              className="text-[#333333] font-bold text-pretty hover:underline"
              href={blocoAtual.event_url}
              target="_blank"
            >
              Veja mais
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
