export default function IkanCocok() {
  return (
    <main className="bg-black text-white min-h-screen p-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Ikan yang Cocok
      </h1>

      <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-zinc-900 p-6 rounded-xl text-center">
          <h2 className="text-lg font-semibold">Arwana</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl text-center">
          <h2 className="text-lg font-semibold">Louhan</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl text-center">
          <h2 className="text-lg font-semibold">Oscar</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl text-center">
          <h2 className="text-lg font-semibold">Cichlid</h2>
        </div>

      </div>

    </main>
  )
}