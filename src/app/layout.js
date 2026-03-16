import Hero from "@/components/sections/Hero"
import Benefits from "@/components/sections/Benefits"
import ProductSpotlight from "@/components/sections/ProductSpotlight"
import FishShowcase from "@/components/sections/FishShowcase"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative overflow-x-hidden">

        <main>

          <Hero />

          <Benefits />

          <ProductSpotlight />

          <FishShowcase />

        </main>

      </body>
    </html>
  )
}