"use client";
import { MapPin } from "lucide-react";
import { Select, SelectIcon, SelectInput } from "./base/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function SelectCity() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChangeFilter(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    console.log("value", value);

    if (value) {
      params.set("city", value);
    } else {
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Select>
      <SelectIcon>
        <MapPin />
      </SelectIcon>
      <SelectInput onChange={handleChangeFilter}>
        <option disabled selected>
          Selecione a cidade
        </option>
        <option value="São Paulo">São Paulo</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Belo Horizonte">Belo Horizonte</option>
        <option value="Salvador">Salvador</option>
        <option value="Recife">Recife e Olinda</option>
        <option value="Brasilia">Brasília</option>
        <option value="Fortaleza">Fortaleza</option>
        <option value="Porto Alegre">Porto Alegre</option>
      </SelectInput>
    </Select>
  );
}
