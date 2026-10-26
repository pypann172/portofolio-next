import Hero from "@/components/hero";
import SkillCard from "@/components/skillCard";
import Kartu from "@/components/kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "Editor Capcut", level: "Menengah" },
];

const hobi = [
  "Belajar Pemrograman",
  "Eksplorasi Teknologi",
  "Mengembangkan Bisnis Digital",
  "Mempelajari Investasi",
  "Belajar Bahasa Inggris",
];

const citaCita = [
  "Menjadi Pengusaha Teknologi yang Sukses",
  "Membangun Perusahaan Sendiri",
  "Memiliki Penghasilan Mandiri Sejak Muda",
  "Melanjutkan Pendidikan ke Perguruan Tinggi",
  "Membahagiakan Orang Tua",
];

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00 - 20.00",
    kegiatan: "Belajar Pemrograman",
  },
  {
    hari: "Rabu",
    waktu: "19.00 - 20.00",
    kegiatan: "Mengerjakan Project",
  },
  {
    hari: "Jumat",
    waktu: "19.00 - 19.30",
    kegiatan: "Belajar Bahasa Inggris",
  },
  {
    hari: "Sabtu",
    waktu: "19.00 - 20.00",
    kegiatan: "Mengembangkan Rexxarion Store",
  },
  {
    hari: "Minggu",
    waktu: "19.00 - 19.30",
    kegiatan: "Evaluasi Mingguan",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Moh. Irfan Syah"
        tagLine="Siswa kelas XI SMKN 1 Pasuruan, Calon Junior Web Developer di Kelas Industri UBIG"
      />
      <div className="mt-10">
        <Kartu judul="Tentang Saya">
          <p>
            Saya adalah siswa kelas XI SMKN 1 Pasuruan yang memiliki minat besar
            dalam bidang teknologi, pemrograman, dan bisnis digital. Saya senang
            mempelajari hal-hal baru, mengeksplorasi teknologi, serta
            mengembangkan kemampuan berpikir logis dan pemecahan masalah. Selain
            belajar pemrograman, saya juga mengembangkan bisnis digital secara
            mandiri dan mempelajari investasi untuk menambah wawasan finansial.
            Saya memiliki semangat untuk terus berkembang, menjadi seorang
            pengusaha di bidang teknologi, serta membanggakan orang tua melalui
            pencapaian dan usaha saya.
          </p>
        </Kartu>
      </div>
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
     
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>
        <Kartu judul="Cita-cita">
          <ol className="list-decimal pl-5">
            {citaCita.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>
      <div className="mt-10">
        <Kartu judul="Jadwal Belajar">
          <table className="w-full text-left">
            <thead className="bg-utama text-white">
              <tr>
                <th className="p-2">Hari</th>
                <th className="p-2">Waktu</th>
                <th className="p-2">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((j) => (
                <tr key={j.hari} className="border-b border-gray-200">
                  <td className="p-2">{j.hari}</td>
                  <td className="p-2">{j.waktu}</td>
                  <td className="p-2">{j.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Kartu>
      </div>
    </main>
  );
}
