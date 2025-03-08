import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="group-hover:text-purple-950 group-hover:bg-purple-300 w-full md:max-w-[200px] bg-purple-950 font-bold rounded-3xl h-10 text-purple-50 px-16 py-3 leading-none hover:bg-purple-300 hover:text-purple-950 transition-colors duration-300"
      {...props}
    />
  );
}
