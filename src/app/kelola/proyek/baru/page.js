
import { redirect } from "next/navigation";
import FormProyek from "@/components/formProyek";
import { Card, CardContent } from "@/components/ui/card";
import { sudahMasuk } from "@/lib/pin";
import { tambahProyek } from "../../actions";

export const metadata = {
  title: "Tambah Proyek",
};

export default async function TambahProyek() {
  if (!(await sudahMasuk())) {
    redirect("/kelola");
  }

  const proyekKosong = {
    id: "",
    judul: "",
    slug: "",
    kategori: "",
    waktu: "",
    deskripsi: "",
    fitur: [],
    gambar_url: "",
  };

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary">Tambah Proyek</h1>
      <Card className="mt-6">
        <CardContent>
          <FormProyek
            aksi={tambahProyek}
            proyek={proyekKosong}
            teksTombol="Simpan Proyek"
          />
        </CardContent>
      </Card>
    </main>
  );
}
