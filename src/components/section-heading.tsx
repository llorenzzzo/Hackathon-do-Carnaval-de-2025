import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  link?: string;
}

export function SectionHeading({ title, link }: SectionHeadingProps) {
  return (
    <div className="flex flex-row md:justify-between items-center justify-center flex-wrap gap-2">
      <h2 className="font-heading text-purple-950 text-3xl md:text-4xl text-center md:text-start">
        {title}
      </h2>
      {link && (
        <Link
          className="font-bold text-purple-600 hover:underline text-nowrap"
          href={link}
        >
          Ver mais
        </Link>
      )}
    </div>
  );
}
