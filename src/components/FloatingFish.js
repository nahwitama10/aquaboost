"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function FloatingFish() {
    const { scrollY } = useScroll()

    const y1 = useTransform(scrollY, [0, 1000], [0, 200])
    const y2 = useTransform(scrollY, [0, 1000], [0, -150])
    const y3 = useTransform(scrollY, [0, 1000], [0, 120])  
    const opacity = useTransform(scrollY, [0, 800], [1, 0.4])
    return (
    <>
      {/* Fish 1 */}
      <motion.div
        style={{ y: y1, opacity}}
        className="absolute top-40 left-10"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Image
          src="/fish1.png"
          width={240}
          height={160}
          alt="Fish"
        />
      </motion.div>

      {/* Fish 2 */}
      <motion.div
        style={{ y: y2, opacity}}
        className="absolute top-[500px] right-20"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}        
      >
        <Image
          src="/fish2.png"
          width={480}
          height={240}
          alt="Fish"
        />
      </motion.div>

      {/* Fish 3 */}
      <motion.div
        style={{ y: y3, opacity}}
        className="absolute top-[750px] left-20"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}        
      >
        <Image
          src="/fish3.png"
          width={480}
          height={240}
          alt="Fish"
        />
      </motion.div>
    </>
  )
}