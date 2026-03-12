import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/fish-food">Fish Food</Link>
      <Link href="/feeding-guide">Feeding Guide</Link>
    </nav>
  )
}