"use client"

import { motion } from "framer-motion"

export default function Benefits() {
  return (
    <section id="manfaat" className="bg-zinc-950 text-white py-24">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Manfaat AquaBoost
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 p-8 rounded-xl"
        >
          <h3 className="text-xl text-red-500 mb-3">Pigment Booster</h3>
          <p>Meningkatkan warna merah ikan predator.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-900 p-8 rounded-xl"
        >
          <h3 className="text-xl text-red-500 mb-3">Protein Tinggi</h3>
          <p>45%+ protein untuk pertumbuhan optimal.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-zinc-900 p-8 rounded-xl"
        >
          <h3 className="text-xl text-red-500 mb-3">Air Lebih Bersih</h3>
          <p>Mengurangi kekeruhan air aquarium.</p>
        </motion.div>

      </div>

    </section>
  )
}