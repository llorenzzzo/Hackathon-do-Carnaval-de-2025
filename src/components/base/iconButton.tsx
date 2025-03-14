import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="p-1.5 text-purple-50 bg-purple-600 rounded-2xl cursor-pointer transition-colors duration-300 hover:bg-purple-400 hover:text-purple-950"
      {...props}
    />
  );
}
