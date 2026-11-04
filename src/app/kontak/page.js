export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama">Hubungi Saya</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="nama" className="block font-semibold">
            Nama lengkap
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Contoh:
Budi Santoso"
            required
            className="mt-1 w-full rounded-lg border
border-gray-300 bg-white p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Contoh:
budi.santoso@example"
            required
            className="mt-1 w-full rounded-lg
border border-gray-300 bg-white p-2"
          />
        </div>
        <div>
          <label htmlFor="pesan" className="block font-semibold">
            Pesan
          </label>
          <textarea
            id="pesan"
            name="pesan"
            rows="4"
            placeholder="Tulis pesan
saya disini..."
            required
            className="mt-1 w-full rounded-lg                 border border-gray-300 bg-white p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-utama px-5 py-2 font-semibold text-white"
        >
          Kirim Pesan
        </button>
      </form>
    </main>
  );
}
