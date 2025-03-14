"use client";

import { MapPin } from "lucide-react";
import { Select, SelectIcon, SelectInput } from "./base/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function NeighborhoodSelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const searchString = event.currentTarget.value;

    if (searchString) {
      params.set("neighborhood", searchString);
    } else {
      params.delete("neighborhood");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <Select>
      <SelectIcon>
        <MapPin />
      </SelectIcon>
      <SelectInput defaultValue="Selecione a cidade" onChange={handleChange}>
        {bloquinho.map((bloquinho: string) => (
          <option>{bloquinho.neighborhood}</option>
        ))}
      </SelectInput>
    </Select>
  );
}
