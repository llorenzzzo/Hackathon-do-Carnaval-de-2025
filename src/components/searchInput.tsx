"use client";

import { Search } from "lucide-react";
import { InputRoot, InputIcon, Input } from "./base/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const searchString = event.currentTarget.value;

    if (searchString) {
      params.set("search", searchString);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <InputRoot>
      <InputIcon>
        <Search />
      </InputIcon>
      <Input
        onChange={handleChange}
        type="text"
        name="data"
        id="select-data"
        placeholder="Busque por blocos na cidade escolhida"
      ></Input>
    </InputRoot>
  );
}
