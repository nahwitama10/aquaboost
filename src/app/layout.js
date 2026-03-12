import Navbar from "@/components/Navbar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  )
}