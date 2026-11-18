"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import TombolTema from "./tombolTema";

const geforce = localFont({
  src: [
    {
      path: "../fonts/gflight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gfbold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/buku-tamu", label: "Buku Tamu" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={`${geforce.className} bg-utama/90 text-white dark:bg-utama/60`}>
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-2 py-4 md:flex-row md:items-center md:justify-between md:px-4 md:py-4">
        <Link href="/" className="font-bold">
          Irfan Syah
        </Link>

        <ul className="flex flex-wrap gap-x-2 gap-y-2">
          {menu.map((item) => {
            let kelas = "text-gray-400 hover:text-white";

            let aktif = pathname.startsWith(item.href);

            if (item.href === "/") {
              aktif = pathname === "/";
            }

            if (aktif) {
              kelas = "font-bold text-white underline underline-offset-8";
            }

            return (
              <li key={item.href}>
                <Link href={item.href} className={kelas}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        <TombolTema />
        </ul>
      </nav>
    </header>
  );
}
