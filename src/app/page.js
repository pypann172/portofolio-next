import Link from "next/link";
import Hero from "@/components/hero";
import SkillCard from "@/components/skillCard";
import Kartu from "@/components/kartu";
import ProyekCard from "@/components/proyekCard";
import { proyek } from "@/data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "Editor Capcut", level: "Menengah" },
];

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Moh. Irfan Syah"
        tagLine="Siswa kelas XI SMKN 1 Pasuruan, Calon Junior Web Developer di Kelas Industri UBIG"
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className="mt-6 inline-block rounded-lg bgutama px-5 py-2 font-semibold text-white"
        >
          Lihat semua proyek
        </Link>
      </section>

      <section className="mt-10">
        <div className="mt-10">
          <Kartu judul="Keahlian">
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.nama}
                  nama={skill.nama}
                  level={skill.level}
                />
              ))}
            </div>
          </Kartu>
        </div>
      </section>
    </main>
  );
}
