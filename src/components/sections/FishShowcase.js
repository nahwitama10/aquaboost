import FishCard from "@/components/FishCard"

export default function FishShowcase() {
  return (
    <section id="ikan" className="bg-black text-white py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
        Ikan yang Cocok
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-8">

        <FishCard
          name="Arwana"
          image="/arwana.jpg"
        />

        <FishCard
          name="Louhan"
          image="/louhan.jpg"
        />

        <FishCard
          name="Oscar"
          image="/oscar.jpg"
        />

        <FishCard
          name="Cichlid"
          image="/cichlid.jpg"
        />

      </div>

    </section>
  )
}