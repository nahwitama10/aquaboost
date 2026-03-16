"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FishCard({ name, image }) {

  return (
    <motion.div
      whileHover={{
        rotateX: 10,
        rotateY: -10,
        scale: 1.05
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center shadow-lg 
                 hover:shadow-red-500/30 transform-gpu"
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