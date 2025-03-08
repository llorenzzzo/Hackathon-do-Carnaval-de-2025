import { Building } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

interface CityProps extends ComponentProps<"div"> {
  city: string;
  children?: ReactNode;
}

export function City({ city, children, ...props }: CityProps) {
  return (
    <div
      className="bg-purple-50 border-2 border-purple-200 rounded-full h-[120px] w-[120px] min-h-[120px] min-w-[120px] flex flex-col items-center align-top justify-center p-4 gap-2"
      {...props}
    >
      {children}
      <p className="font-heading text-purple-950 text-center leading-4">
        {city}
      </p>
    </div>
  );
}

interface CityIconProps extends ComponentProps<"span"> {}

export function CityIcon(props: CityIconProps) {
  return <span className="text-purple-500" {...props}></span>;
}
