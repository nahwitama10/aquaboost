export default function Manfaat() {
  return (
    <main className="bg-black text-white min-h-screen p-16">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Manfaat AquaBoost
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-3 text-red-500">
            Pigment Booster
          </h2>
          <p className="text-gray-400">
            Membantu meningkatkan warna merah pada ikan predator seperti
            arwana super red dan louhan.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-3 text-red-500">
            Protein Tinggi
          </h2>
          <p className="text-gray-400">
            Mengandung lebih dari 45% protein untuk pertumbuhan optimal.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-3 text-red-500">
            Air Lebih Bersih
          </h2>
          <p className="text-gray-400">
            Formulasi khusus yang membantu menjaga air aquarium tetap jernih.
          </p>
        </div>

      </div>

    </main>
  )
}