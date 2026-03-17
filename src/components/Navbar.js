import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white">

      <div className="font-bold text-xl">
        AquaBoost <span className="text-gray-400">Red Maggot</span>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300">
        <Link href="#manfaat">Manfaat</Link>
        <Link href="#ikan">Ikan Cocok</Link>
        <Link href="#komposisi">Komposisi</Link>
        <Link href="#carapakai">Cara Pakai</Link>
        <Link href="#kontak">Kontak</Link>
      </div>

      <button className="bg-red-600 px-5 py-2 rounded-lg">
        Beli Sekarang
      </button>

    </nav>
  )
}