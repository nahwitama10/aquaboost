import Image from "next/image"

export default function ProductSpotlight() {
  return (
    <section className="bg-black text-white py-32">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-10">

        {/* LEFT SIDE — STICKY PRODUCT */}
        <div className="sticky top-32 h-fit flex justify-center">

          <Image
            src="/redmaggot.jpg"
            width={400}
            height={400}
            alt="AquaBoost Product"
            className="drop-shadow-[0_0_40px_rgba(255,0,0,0.4)]"
          />

        </div>

        {/* RIGHT SIDE — FEATURES */}
        <div className="space-y-32">

          <div>
            <h3 className="text-3xl font-bold text-red-500 mb-4">
              Double Pigment Booster
            </h3>
            <p className="text-gray-400 text-lg">
              Formula khusus yang membantu meningkatkan warna merah alami
              pada ikan predator seperti arwana dan louhan.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-red-500 mb-4">
              High Protein Growth
            </h3>
            <p className="text-gray-400 text-lg">
              Kandungan protein lebih dari 45% membantu pertumbuhan ikan
              menjadi lebih cepat dan sehat.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-red-500 mb-4">
              Cleaner Aquarium
            </h3>
            <p className="text-gray-400 text-lg">
              Formulasi AquaBoost membantu menjaga air aquarium tetap
              jernih dan tidak cepat keruh.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-red-500 mb-4">
              Premium Maggot Source
            </h3>
            <p className="text-gray-400 text-lg">
              Dibuat dari maggot BSF berkualitas tinggi yang diproses
              secara higienis untuk menjaga nutrisi terbaik.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}