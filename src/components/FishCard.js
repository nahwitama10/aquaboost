"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FishCard({ name, image }) {

  return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
        rotateX: 10,
        rotateY: -10,
        scale: 1.05
      }}
      transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center shadow-lg 
           hover:shadow-red-500/30 transform-gpu relative overflow-hidden"
    >

      <Image
        src={image}
        width={240}
        height={160}
        alt={name}
        className="mx-auto"
      />

      <h3 className="mt-4 text-lg font-semibold">
        {name}
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Cocok untuk meningkatkan warna dan pertumbuhan.
      </p>

    </motion.div>
  )
}