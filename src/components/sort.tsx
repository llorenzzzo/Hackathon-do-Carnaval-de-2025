"use client";

import { ChevronsDown, ChevronsUp, ChevronsUpDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SortBlocos() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClick(sort: string) {
    const params = new URLSearchParams(searchParams);
    if (params.get("sort") === "asc") {
      params.set("sort", "desc");
    } else if (params.get("sort") === "desc") {
      params.delete("sort");
    } else {
      params.set("sort", "asc");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function getSortIcon(sort: string) {
    if (searchParams.get("sort") === "asc") {
      return <ChevronsDown className="w-5 text-purple-300" />;
    } else if (searchParams.get("sort") === "desc") {
      return <ChevronsUp className="w-5 text-purple-300" />;
    }
    return <ChevronsUpDown className="w-5 text-purple-300" />;
  }

  return (
    <div
      className="flex flex-row justify-center items-center p-4 bg-purple-800 rounded-2xl gap-2 cursor-pointer"
      onClick={() => handleClick("sort")}
    >
      <p className="text-purple-300">Ordernar</p>
      {getSortIcon("date")}
    </div>
  );
}
