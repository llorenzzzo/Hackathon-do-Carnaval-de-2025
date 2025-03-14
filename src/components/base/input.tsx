import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="group w-fit focus-within:border-purple-100 bg-purple-800 purple-800 border-2 border-purple-600 text-purple-300 font-normal flex flex-row gap-3 py-3 px-6 rounded-2xl"
      {...props}
    ></div>
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
  return <span {...props}></span>;
}

interface InputProps extends ComponentProps<"input"> {}

export function Input(props: InputProps) {
  return (
    <input
      className="outline-0 w-full appearance-none bg-purple-800 focus:text-purple-50 placeholder-purple-300 text-sm"
      {...props}
    ></input>
  );
}
