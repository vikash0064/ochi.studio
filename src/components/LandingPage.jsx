import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div  data-scroll data-scroll-speed="-.3" className="w-full h-screen  pt-1">
      
      {/* Heading Section */}
      import { motion } from "framer-motion";

function TextStructure() 
    <div className="textstructure text-black mt-52 px-12">
      {["We Create", "Eye opening", "Presentations"].map((item, index) => (
        <div className="masker mb-4" key={index}>
          <div className="w-fit flex leading-1 items-center gap-4">
            
            {/* Image only for second line */}
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                }}
                className="overflow-hidden  rounded-md flex-shrink-0"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmppGQjeHP-TEZQ-pyUHr-ZMCS3OOEOm3Eq0p98WvMpIKVLbpPMVPCBmHVGKIF4cWOp7o&usqp=CAU"
                  alt="Eye opening"
                  className="w-[9vw] h-[6vw] object-cover rounded-md"
                />
              </motion.div>
            )}

            {/* Text */}
            <h1 className="uppercase text-[6vw] leading-[6vw] font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter">
              {item}
            </h1>
          </div>
        </div>
      ))}
    </div>

      {/* Footer Section */}
      <div className="border-t-[1px]  text-black border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
        
        {/* Left Side Text */}
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className="text-md font-normal tracking-tighter leading-none">
              {item}
            </p>
          ))}
        

        {/* Right Side Button */}
<div className="start flex items-center gap-5">
  {/* Button 1 */}
  <div className="px-5 py-2 border-[1px] border-black rounded-full uppercase font-light text-md cursor-pointer 
    transition-all duration-500 ease-in-out 
    hover:bg-black hover:text-white hover:scale-105">
    start the project
  </div>

  {/* Arrow Button */}
  <div className="w-10 h-10 flex items-center justify-center border-black rounded-full border-[1px] 
    transition-all duration-500 ease-in-out 
    hover:bg-black hover:text-white hover:rotate-180">
    <span className="rotate-[45deg]">
      <FaArrowUpLong />
    </span>
  </div>
</div>

      </div>
    </div>
  )
}

export default LandingPage
