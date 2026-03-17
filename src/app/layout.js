import "./globals.css"
import Navbar from "@/components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative overflow-x-hidden">

        <Navbar />

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}