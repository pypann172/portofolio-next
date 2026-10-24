import Image from "next/image";

export default function Hero({ nama, tagLine }) {
    return (
        <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <Image
                src="/img/ipannOsis1.JPG"
                alt={`Foto profil ${nama}`}
                width={180}
                height={180}
                loading="eager"
                className="w-40 h-40 rounded-full overflow-hidden object-cover"
            />
            <div>
                <h1 className="text-3xl font-bold text-utama">
                    Halo, saya {nama}!
                    <p className="mt-3 text-lg text-gray-700">
                        {tagLine}
                    </p>
                </h1>
            </div>
        </section>
    );
}