import Hero from '@/components/hero';
import SkillCard from '@/components/skillCard';

const skills = [
  { nama: 'HTML', level: 'Menegah' },
  { nama: 'CSS', level: 'Menengah' },
  { nama: 'Git dan Github', level: 'Dasar' },
  { nama: 'Desain poster dengan Canva', level: 'Mahir' },
  { nama: 'JavaScript', level: 'Dasar' },
];
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Moh. Irfan Syah"
        tagLine="Siswa kelas XI SMKN 1 Pasuruan, Calon Junior Web Developer di Kelas Industri UBIG" />

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </section>
    </main>
  );
}