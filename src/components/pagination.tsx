"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { IconButton } from "./base/iconButton";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type PaginationProps = {
  links: {
    url: string;
    label: string;
    active: boolean;
    id: number;
  }[];
  maxPage: number;
};

export function Pagination({ links, maxPage }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClickPage(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    if (pageNumber > 1) {
      if (pageNumber > maxPage) {
        params.set("page", maxPage.toString());
      } else {
        params.set("page", pageNumber.toString());
      }
    } else {
      params.delete("page");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="mx-auto flex w-full justify-center gap-4 ">
      <IconButton
        onClick={() =>
          handleClickPage(Number(searchParams.get("page") || 1) - 1)
        }
        nome="sla"
      >
        <ArrowLeft />
      </IconButton>
      {links.map((link) => {
        if (link.label.includes("Anterior") || link.label.includes("Próximo")) {
          return null;
        }

        if (link.label === "...") {
          return (
            <IconButton key={link.id} size="square">
              ...
            </IconButton>
          );
        }

        return (
          <IconButton
            key={link.id}
            onClick={() => handleClickPage(Number(link.label))}
            isActive={link.active === true}
            size="square"
          >
            {link.label}
          </IconButton>
        );
      })}

      <IconButton
        onClick={() =>
          handleClickPage(Number(searchParams.get("page") || 1) + 1)
        }
        nome="sla"
      >
        <ArrowRight />
      </IconButton>
    </div>
  );
}
