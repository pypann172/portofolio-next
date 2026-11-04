"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

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
  { href: "/", label: "Home" },
  { href: "/tentang", label: "About" },
  { href: "/proyek", label: "Projects" },
  { href: "/kontak", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-utama/90 text-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className={`${geforce.className} font-bold`}>
          Irfan Syah
        </Link>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
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
        </ul>
      </nav>
    </header>
  );
}
