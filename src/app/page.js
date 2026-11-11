import Link from "next/link";
import Hero from "@/components/hero";
import SkillCard from "@/components/skillCard";
import Kartu from "@/components/kartu";
import ProyekCard from "@/components/proyekCard";
import { supabase } from "@/lib/supabase";
import { buttonVariants } from "@/components/ui/button";

export const revalidate = 60;

export default async function Home() {
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("id");

  const { data: proyekTerbaru } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Moh. Irfan Syah"
        tagLine="Siswa kelas XI SMKN 1 Pasuruan, Calon Junior Web Developer di Kelas Industri UBIG"
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary ">
          Proyek Terbaru
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className={buttonVariants({ size: "lg", className: "mt-6" })}
        >
          Lihat semua proyek
        </Link>
      </section>

      <section className="mt-10">
        <div className="mt-10">
          <Kartu judul="Keahlian">
            <div className="grid gap-4 md:grid-cols-3">
              {skills && skills.map((skill) => (
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
