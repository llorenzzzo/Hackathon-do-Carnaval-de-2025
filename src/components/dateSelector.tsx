"use client";

import { Calendar } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { InputRoot, InputIcon, Input } from "./base/input";

export function DateSelector() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const searchString = event.currentTarget.value;

    if (searchString) {
      params.set("date_time", searchString);
    } else {
      params.delete("date_time");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Calendar />
      </InputIcon>
      <Input
        onChange={handleChange}
        type="date"
        name="data"
        id="select-data"
        placeholder="Busque por blocos na cidade escolhida"
      ></Input>
    </InputRoot>
  );
}
