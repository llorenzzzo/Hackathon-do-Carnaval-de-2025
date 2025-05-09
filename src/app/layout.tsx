import "./globals.css";

import type { Metadata } from "next";
import { Poetsen_One, Inter } from "next/font/google";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const poetsenOne = Poetsen_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poetsen-one",
});

const inter = Inter({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bloquinhos de Carnaval - 2025",
  description:
    "Esta aplicação foi desenvolvida por Lorenzo para o Hackathon do Carnaval de 2025 da Codante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${poetsenOne.variable} ${inter.variable} selection:bg-purple-300 selection:text-purple-600`}
    >
      <body className="bg-[#FEFCFF] text-gray-800 antialiased">
        <div className="w-full bg-purple-950 h-20 flex flex-row items-center justify-center py-15 md:p-0">
          <div className="w-full max-w-[1240px] flex flex-row items-center justify-center md:justify-between md:mx-5 flex-wrap gap-4">
            <Link href="/">
              <Image src={Logo} alt="Bloquinhos 2025" />
            </Link>
            <nav>
              <div className="flex flex-row gap-6 text-yellow-400 font-bold">
                <Link
                  className="hover:underline hover:text-yellow-200"
                  href="/"
                >
                  Home
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
