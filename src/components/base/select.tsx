import { ComponentProps, ReactNode } from "react";

interface SelectProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <div
      className="group cursor-pointer w-fit bg-purple-800 focus-within:border-purple-100 purple-800 border-2 border-purple-600 text-purple-300 font-normal flex flex-row gap-3 py-3 px-6 rounded-2xl"
      {...props}
    >
      {children}
    </div>
  );
}

interface SelectIconProps extends ComponentProps<"span"> {}

export function SelectIcon(props: SelectIconProps) {
  return <span className="text-purple-300 cursor-pointer" {...props}></span>;
}

interface SelectInputProps extends ComponentProps<"select"> {
  onChange?: any;
}

export function SelectInput({ onChange, ...props }: SelectInputProps) {
  return (
    <select
      onChange={onChange}
      className="outline-0 cursor-pointer"
      {...props}
    ></select>
  );
}
