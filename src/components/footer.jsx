export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <footer className="mt-auto px-4 py-4 text-center text-sm text-gray-900 bg-blue-500/20 ">
            <div className="container mx-auto text-center">
                <p>&copy; {tahun} Moh. Irfan Syah.<br/>Dibuat dengan Next.js di Kelas Industri UBIG. </p>
            </div>
        </footer>
    );
}