import Image from "next/image";
import localFont from "next/font/local";

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
                className="w-40 h-40 rounded-full overflow-hidden object-cover"
            />
            <div>
                <h1 className="text-3xl font-bold text-utama">
                    <span className={`${geforce.className}`}>Halo, saya {nama}</span>
                    <p className="mt-3 text-lg text-gray-700">
                        {tagLine}
                    </p>
                </h1>
            </div>
        </section>
    );
}