import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
      <div className="text border-t-2 border-b-2 py-2 border-zinc-300  flex gap-10 overflow-hidden whitespace-nowrap">
        
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] pt-10 font-bold uppercase tracking-tighter mb-10  '
        >
          we are ochi
        </motion.h1>
        
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] pt-10 font-bold uppercase tracking-tighter -mb-[vw] '
        >
          we are ochi
        </motion.h1>

      </div>
    </div>
  )
}

export default Marquee
