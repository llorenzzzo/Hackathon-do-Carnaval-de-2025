import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-20 bg-yellow-400 h-[120px] flex items-center justify-center">
      <div className="w-full max-w-[1240px] items-center justify-center px-6">
        <p className="text-purple-950 font-bold text-center text-pretty">
          Esta aplicação foi desenvolvida por{" "}
          <Link
            className="text-purple-700 hover:underline"
            href="https://www.lorenzogg.com/"
            target="_blank"
          >
            Lorenzo
          </Link>{" "}
          para o{" "}
          <Link
            className="text-purple-700 hover:underline"
            href="https://codante.io/mini-projetos/hackathon-do-carnaval-de-2025"
            target="_blank"
          >
            Hackathon do Carnaval de 2025
          </Link>{" "}
          da Codante.
        </p>
      </div>
    </footer>
  );
}
