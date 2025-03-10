"use client";

import { Calendar, MapPin, Ticket } from "lucide-react";
import { ComponentProps } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface BloquinhoProps {
  title: string;
  date: Date;
  neighborhood: string;
  price: string;
  id: string;
}

export function Bloquinho({
  title,
  date,
  neighborhood,
  price,
  id,
}: BloquinhoProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/bloco/${id}`);
  };

  const formattedDate = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group flex flex-row w-full min-w-[264px] bg-purple-50 border-2 border-purple-200 p-4 items-center justify-between rounded-2xl gap-6 flex-wrap hover:border-purple-800 transition-all duration-300">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl text-purple-950">{title}</p>
        <div className="flex flex-row gap-6 flex-wrap w-full text-wrap">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-purple-500 size-5">
              <Calendar />
            </span>
            <p className="font-semibold text-purple-900 text-pretty">
              {formattedDate}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-purple-500 size-5">
              <MapPin />
            </span>
            <p className="font-semibold text-purple-900 text-pretty">
              {neighborhood}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-purple-500 size-5">
              <Ticket />
            </span>
            <p className="font-semibold text-purple-900 text-pretty">{price}</p>
          </div>
        </div>
      </div>
      <Button onClick={handleClick}>Ver mais</Button>
    </div>
  );
}
