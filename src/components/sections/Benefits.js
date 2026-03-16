export default function Benefits() {
  return (
    <section id="manfaat" className="bg-zinc-950 text-white py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
        Manfaat AquaBoost
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-zinc-900 p-8 rounded-xl">
          <h3 className="text-xl text-red-500 mb-3">Pigment Booster</h3>
          <p>Meningkatkan warna merah ikan predator.</p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl">
          <h3 className="text-xl text-red-500 mb-3">Protein Tinggi</h3>
          <p>45%+ protein untuk pertumbuhan optimal.</p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl">
          <h3 className="text-xl text-red-500 mb-3">Air Lebih Bersih</h3>
          <p>Mengurangi kekeruhan air aquarium.</p>
        </div>

      </div>

    </section>
  )
}