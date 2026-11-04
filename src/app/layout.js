import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Moh. Irfan Syah | Portofolio",
    template: "%s | Moh. Irfan Syah",
  },
  description: "Portofolio Moh. Irfan Syah, siswa SMKN 1 Pasuruan calon Junior Web Developer UBIG.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
