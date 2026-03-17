"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen pt-28">

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* GLOW EFFECT */}
        <div className="absolute w-[400px] h-[400px] bg-red-600/30 blur-[120px] rounded-full"></div>

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="text-gray-200">Red Maggot</span>
            <br />
            <span className="text-red-500">AquaBoost</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Pakan ikan hias predator berbahan dasar maggot BSF kering
            berprotein tinggi.
          </p>

          <p className="mt-4 text-gray-400">
            Pakan fungsional yang tidak hanya memberi nutrisi, tetapi
            membantu meningkatkan warna merah pada ikan predator.
          </p>

          <div className="flex gap-6 mt-6 text-sm text-gray-300">
            <span>• Double pigment booster</span>
            <span>• Protein 45%+</span>
            <span>• Anti-cloudy water</span>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
              Beli Sekarang
            </button>

            <button className="border border-red-600 px-6 py-3 rounded-lg hover:bg-red-600">
              Lihat Komposisi
            </button>
          </div>

        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex flex-col items-center gap-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/redmaggot.jpg"
              width={350}
              height={350}
              alt="AquaBoost Product"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/redfish.jpg"
              width={350}
              height={250}
              alt="Red Fish"
            />
          </motion.div>

        </div>

      </div>

    </section>
  )
}