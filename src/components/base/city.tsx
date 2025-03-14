import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

interface CityProps extends ComponentProps<"div"> {
  city: string;
  children?: ReactNode;
  cityUrl: string;
}

export function City({ city, cityUrl, children, ...props }: CityProps) {
  return (
    <Link href={`/cidades/${cityUrl}`}>
      <div
        className="bg-purple-50 border-2 border-purple-200 hover:border-purple-800 rounded-full h-[120px] w-[120px] min-h-[120px] min-w-[120px] flex flex-col items-center align-top justify-center p-4 gap-2 transition-colors duration-300"
        {...props}
      >
        {children}
        <p className="font-heading text-purple-950 text-center leading-4">
          {city}
        </p>
      </div>
    </Link>
  );
}

interface CityIconProps extends ComponentProps<"span"> {}

export function CityIcon(props: CityIconProps) {
  return <span className="text-purple-500" {...props}></span>;
}
