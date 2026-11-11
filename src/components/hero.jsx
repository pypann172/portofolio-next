
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { buttonVariants } from "@/components/ui/button";

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

export default function Hero({ nama, tagLine }) {
  return (
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
      <Image
        src="/assets/img/ipannOsis1.JPG"
        alt={`Foto profil ${nama}`}
        width={180}
        height={180}
        loading="eager"
        className="w-40 h-40 rounded-full overflow-hidden object-cover border-3 border-primary md:w-50 md:h-50"
      />
      <div>
        <h1 className="text-3xl font-bold text-primary ">
          <span className={`${geforce.className}`}>Halo, saya {nama}</span>
          <p className="mt-3 text-lg text-muted-foreground  ">
            {tagLine}
          </p>
        </h1>

        <div className="mt-5 flex justify-center gap-3 md:justify-start">
          <Link href="/proyek" className={buttonVariants({ size: "lg" })}>
            Lihat Proyek
          </Link>

          <Link
            href="/kontak"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}
