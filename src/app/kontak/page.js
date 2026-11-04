import FormKontak from "@/components/formKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Moh. Irfan Syah melalui form kontak, email, atau GitHub.",
};

const github = "https://github.com/pypann172";
const email = "irfansyahipann@gmail.com";

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        <aside className="h-fit rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-utama dark:text-sky-200">Temukan Saya di</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-aksen dark:text-red-300 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="text-aksen dark:text-red-300 hover:underline">
                {email}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}