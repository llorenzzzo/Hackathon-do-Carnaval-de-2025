import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "p-1.5 text-purple-950 bg-purple-100 rounded-2xl border-2 border-purple-100 cursor-pointer transition-colors duration-300 hover:bg-purple-900 hover:border-purple-900 hover:text-purple-50",
  variants: {
    size: {
      square: "w-10 h-10",
    },
    active: {
      true: "border-2 bg-purple-800 border-purple-600 text-purple-50",
      disabled: "bg-purple-50 text-purple-200",
    },
    nome: {
      sla: "bg-purple-300 border-purple-300 border-2",
    },
  },
  defaultVariants: {
    active: false,
  },
});
interface IconButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {
  isActive?: boolean;
  isDisabled?: string;
}

export function IconButton({
  isActive,
  size,
  nome,
  ...props
}: IconButtonProps) {
  return (
    <button className={button({ active: isActive, size, nome })} {...props} />
  );
}
