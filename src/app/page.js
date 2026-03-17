import Hero from "@/components/sections/Hero"
import Benefits from "@/components/sections/Benefits"
import ProductSpotlight from "@/components/sections/ProductSpotlight"
import FishShowcase from "@/components/sections/FishShowcase"
import FloatingFish from "@/components/FloatingFish"

export default function Home() {
  return (
    <main className="relative">

      <FloatingFish />

      <Hero />

      <Benefits />

      <ProductSpotlight />

      <FishShowcase />

    </main>
  )
}