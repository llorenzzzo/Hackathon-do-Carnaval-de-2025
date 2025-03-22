import { ComponentProps, ReactNode } from "react";

interface BadgeProps extends ComponentProps<"div"> {
  children?: ReactNode;
  info: string;
}

export function Badge({ info, children, ...props }: BadgeProps) {
  return (
    <div
      className="w-fit bg-purple-800 border-2 border-purple-600 flex flex-row gap-3 px-3 py-1 rounded-2xl items-center justify-start"
      {...props}
    >
      {children}
      <p className="text-purple-200 text-[14px]">{info}</p>
    </div>
  );
}

type BadgeIconProps = ComponentProps<"span">;

export function BadgeIcon(props: BadgeIconProps) {
  return <span {...props} />;
}
