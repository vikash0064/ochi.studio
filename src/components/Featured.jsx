import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoArrowUp } from "react-icons/io5";




function Featured() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const data=[
    { left: "Medallia", middle: "Becky Chastain", right: "Read" },
    { left: "Google", middle: "Sundar Pichai", right: "Open" },
    { left: "Meta", middle: "Mark Zuckerberg", right: "View" },
    { left: "Amazon", middle: "Jeff Bezos", right: "Explore" },
    { left: "Tesla", middle: "Elon Musk", right: "Check" },
    { left: "Microsoft", middle: "Satya Nadella", right: "Learn" },
    { left: "Netflix", middle: "Reed Hastings", right: "Watch" },
    { left: "Apple", middle: "Tim Cook", right: "See" },
    { left: "Adobe", middle: "Shantanu Narayen", right: "Details" },
    { left: "SpaceX", middle: "Gwynne Shotwell", right: "Launch" },
  ];

  const handleHover =()=>{
    setHovering(true);
      
    }


  return (
    <div   className="w-full py-10  bg-zinc-100">

      {/* Heading */}
      <div className="w-full px-14 border-b-[1px] border-zinc-400 pb-10">
        <h1 className="text-6xl tracking-tight text-black">
          Featured projects
        </h1>
      </div>

      {/* Dot + Text Section */}
      <div className="flex w-1/2 items-center justify-between text-black mt-5">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <div className="ml-14 h-3 w-3 bg-black rounded-full"></div>
          <h1 className="uppercase">Salience Labs</h1>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2 -mr-48">
          <div className="ml-14 h-3 w-3 bg-black rounded-full"></div>
          <h1 className="uppercase">Medallia Experience</h1>
        </div>
      </div>

      {/* Cards */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {/* Card 1 */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 0 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
<h1
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap"
>
  {"SALIENCE LABS".split('').map((item, index) => (
    <motion.span
      initial={{ y: "100%" }}
      animate={hoveredCard === 0 ? { y: "0" } : { y: "100%" }}
      transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
      className="inline-block"
      key={index}
    >
      {item}
    </motion.span>
  ))}
</h1>

            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 0 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" 
                alt="Salience Labs"
              />
            </motion.div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 1 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
  {"Medallia Experience".split('').map((item, index) => (
    <motion.span
      initial={{ y: "100%" }}
      animate={hoveredCard === 1 ? { y: "0" } : { y: "100%" }}
      transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
      className="inline-block"
      key={index}
    >
      {item === " " ? "\u00A0" : item} 
    </motion.span>
  ))}
</h1>

            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 1 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" 
                alt="Medallia Experience"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tags Section */}
        <div className="text-zinc-700 mt-5 flex gap-x-4">
          {["Brand Identity","Pitch deck","Conference","Executive Keynote","Product launch"].map((item,index)=>(  
            <a 
              key={index} 
              className={`
                relative inline-block 
                uppercase text-[14px] font-semibold mt-3 px-3 py-1.5
                border-[2px] border-zinc-700 whitespace-nowrap rounded-full
                overflow-hidden group
                ${index===2 && "ml-[28vw]"}
              `}
            >
              {/* Text */}
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                {item}
              </span>
              {/* Hover Background */}
              <span 
                className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-full rounded-b-[14px]"
              />
            </a>  
          ))}
        </div>

        {/* Dot + Text Section */}
        <div className="flex w-full items-center justify-between text-black mt-5">
          {/* Left side */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <h1 className="uppercase">AH2 & Matt Horn</h1>
          </div>
          {/* Right side */}
          <div className="flex items-center justify-center gap-1">
            <div className="h-3 w-3 bg-black rounded-full -ml-[84vw]"></div>
            <h1 className="uppercase">Visa</h1>
          </div>
        </div>
      </div>

      {/* Second Cards Section */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-5">
          {/* Card 1 */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 2 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"AH2 & Matt Horn".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 2 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.02}}
                  className='inline-block'
                  key={index}
                >{item === " " ? "\u00A0" : item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 2 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" 
                alt="AH2 & Matt Horn"
              />
            </motion.div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] bg-red-700 relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 3 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"Visa".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 3 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.02}}
                  className='inline-block'
                  key={index}
                >{item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full  rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 3 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" 
                alt="Visa"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tags Section under 2nd Cards */}
        <div className="text-zinc-700 mt-5 flex gap-x-4 ">
          {["Pitch deck","Agency","Company presentation"].map((item,index)=>(  
            <a 
              key={index} 
              className={`
                relative inline-block 
                uppercase text-[14px] font-semibold mt-3 px-3 py-1.5
                border-[2px] border-zinc-700 whitespace-nowrap rounded-full
                overflow-hidden group
                ${index===1 && "ml-[38vw]"}
              `}
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                {item}
              </span>
              <span 
                className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-800 group-hover:h-full rounded-b-[14px]"
              />
            </a>  
          ))}
        </div>



        <div className="flex w-full items-center justify-between text-black mt-5">
          {/* Left side */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <h1 className="uppercase">Softstart</h1>
          </div>
          {/* Right side */}
          <div className="flex items-center justify-center gap-1">
            <div className="h-3 w-3 bg-black rounded-full -ml-[84vw]"></div>
            <h1 className="uppercase">Fyde</h1>
          </div>
        </div>
      </div>

      {/* Third Cards Section */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-5">
          {/* Card 1: Softstart */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[68vh]  relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 4 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"Softstart".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 4 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.06}}
                  className='inline-block'
                  key={index}
                >{item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 4 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg" 
                alt="Softstart"
              />
            </motion.div>
          </motion.div>
          {/* Card 2: Fyde */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 5 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"Fyde".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 5 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.06}}
                  className='inline-block'
                  key={index}
                >{item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 5 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" 
                alt="Fyde"
              />
            </motion.div>
          </motion.div>
        </div>
        {/* Tags Section */}
        <div className="text-zinc-700 mt-5 flex gap-x-4">
          {["Branded Template","sales deck","Adult","copyWriting","sales deck","Slides design"].map((item,index)=>(  
            <a 
              key={index} 
              className={`
                relative inline-block 
                uppercase text-[14px] font-semibold mt-3 px-3 py-1.5
                border-[2px] border-zinc-700 whitespace-nowrap rounded-full
                overflow-hidden group
                ${index===2 && "ml-[27vw]"}
              `}
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                {item}
              </span>
              <span 
                className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-full rounded-b-[14px]"
              />
            </a>
          ))}
        </div>
      </div>
      {/* ========= Section 3 ========= */}
      <div className="px-20 mt-5">
        {/* Dot + Text Section */}
        <div className="flex w-full items-center text-black mt-5">
          {/* Centered Project Names */}
          <div className=" flex justify-center items-center">
            <div className="flex items-center  gap-[36vw]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-black rounded-full"></div>
                <h1 className="uppercase">All Things Go</h1>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="h-3 w-3 bg-black rounded-full "></div>
                <h1 className="uppercase">Trawa</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="cards w-full flex gap-10">
          {/* Card 1: All Things Go */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 6 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"All Things Go".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 6 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.06}}
                  className='inline-block'
                  key={index}
                >{item === " " ? "\u00A0" : item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 6 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png" 
                alt="All Things Go"
              />
            </motion.div>
          </motion.div>

          {/* Card 2: Trawa */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(7)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 7 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"Trawa".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 7 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.06}}
                  className='inline-block'
                  key={index}
                >{item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 7 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" 
                alt="Trawa"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tags */}
        <div className="text-zinc-700 flex gap-x-4 mt-5">
          {["Branded identity","pitch deck","brand identity","design research","investor deck"].map((item,index)=>(  
            <a 
              key={index} 
              className={`
                relative inline-block uppercase text-[14px] font-semibold px-3 py-1.5
                border-[2px] border-zinc-700 whitespace-nowrap rounded-full
                overflow-hidden group
                ${index===2 && "ml-[27vw]"}
              `}
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">{item}</span>
              <span className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-full rounded-b-[14px]"/>
            </a>
          ))}
        </div>
      </div>
      {/* ========= Section 4 ========= */}
      <div className="px-20 mt-20">
        {/* Dot + Text Section */}
        <div className="flex w-full items-center justify-between text-black mt-5">
          {/* Centered Project Names */}
          <div className=" flex justify-center">
            <div className="flex items-center gap-[34vw]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-black rounded-full"></div>
                <h1 className="uppercase ">Cardboard Spaceship</h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-black rounded-full"></div>
                <h1 className="uppercase">Premium Blend</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="cards w-full flex gap-10 mt-10">
          {/* Card 1: Cardboard Spaceship */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(8)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 8 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"Cardboard Spaceship".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 8 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.06}}
                  className='inline-block'
                  key={index}
                >{item === " " ? "\u00A0" : item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 8 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" 
                alt="Cardboard Spaceship"
              />
            </motion.div>
          </motion.div>

          {/* Card 2: Premium Blend */}
          <motion.div
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(9)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{ scale: hoveredCard === 9 ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[#CDEA68] z-[9] uppercase text-6xl font-bold leading-none 
             tracking-tighter overflow-hidden whitespace-nowrap">
              {"Premium Blend".split('').map((item,index)=>
                <motion.span
                  initial={{y:"100%"}}
                  animate={hoveredCard === 9 ? {y:"0"} : {y:"100%"}}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.06}}
                  className='inline-block'
                  key={index}
                >{item === " " ? "\u00A0" : item}</motion.span>
              )}
            </h1>
            <motion.div
              className="card w-full h-full bg-green-600 rounded-xl overflow-hidden"
              animate={{ scale: hoveredCard === 9 ? 1.10 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img 
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" 
                alt="Premium Blend"
              />
            </motion.div>
          </motion.div>
        </div>
        {/* Tags */}
        <div className="text-zinc-700 flex gap-x-4 mt-5">
          {["Branded Template","sales deck","social media templates","Branded template"].map((item,index)=>(  
            <a 
              key={index} 
              className={`
                relative inline-block uppercase text-[14px] font-semibold px-3 py-1.5
                border-[2px] border-zinc-700 whitespace-nowrap rounded-full
                overflow-hidden group
                ${index===1 && "ml-[34vw]"}
              `}
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">{item}</span>
              <span className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-full rounded-b-[14px]"/>
            </a>
          ))}
        </div>
      </div>


<div className="flex items-center justify-center mt-24">
  <a
    href="https://ochi.design/clients-success-stories-presentation-design/"
    className="group relative inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#212121] text-white uppercase text-xm tracking-wide overflow-hidden transition-all duration-500 ease-out"
  >
    {/* Button Text */}
    <span className="relative z-10">View all case studies</span>

    {/* Circle + Arrow */}
    <span className="relative z-10 ml-4 flex items-center justify-center w-12 h-12">
      {/* Dot (circle) */}
      <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full transition-transform duration-500 ease-out group-hover:scale-[4]">
        {/* Arrow inside circle */}
        <span className="opacity-0 text-black text-xs font-bold transition-all duration-500 ease-out transform group-hover:opacity-100 group-hover:scale-100 scale-75">
          <span className="rotate-[45deg] text-zinc-700  flex items-center justify-center ">
            <IoArrowUp />
          </span>
        </span>
      </span>
    </span>

    {/* Background Hover Animation */}
    <span className="absolute inset-0 rounded-full bg-white opacity-0 scale-50 transition-all duration-500 ease-out group-hover:opacity-5 group-hover:scale-100"></span>
  </a>
</div>
<div className='mt-28 ml-14'>
          <h1 className='text-black text-[3.8vw] '>Clients’ reviews</h1>
        </div>
        <div className='border-[1px] border-zinc-300 mt-6'>
      </div>



{/*new page*/}
      <div className='w-full cards flex gap-10 mt-4 '>
      <div className='cardcontainer rounded-xl w-1/2 h-[60vh] relative ml-5 text-black flex bg-zinc-100 justify-evenly'>
      <snap><h1 className='text-lg underline  underline-offset-4 whitespace-nowrap  ml-10'>Karman Ventures</h1></snap>
      <snap><h1 className=' text-lg ml-48'>Services:</h1></snap>

<div className='mt-28 mr-48'>
        <h1 className='relative  uppercase text-[14px] font-semibold px-4 py-1.5
                border-[2px] border-zinc-500 text-zinc-600 whitespace-nowrap rounded-full'>investor deck</h1>
        <h1 className='relative  uppercase text-[14px] font-semibold px-3 py-1.5
                border-[2px] border-zinc-500 text-zinc-600 whitespace-nowrap rounded-full mt-2
                overflow-hidden group justify-center items-center flex'>sales deck</h1>
        </div>
      </div>
      
    <div className='cardcontainer rounded-xl w-1/2 h-[60vh] relative bg-zinc-100 '>
      <div className="flex justify-between items-start">
      <h1 className="text-lg underline-offset-4 whitespace-nowrap text-black ml-8">William Barnes
      </h1>
      <h1 className="text-lg text-zinc-400 mr-8 uppercase">Read</h1>
    </div>
    <div className='h-[14vh] w-[14vh] mt-16  ml-5'>
      <div className=''><img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" /></div>
    </div>
    <div className=' mt-5 ml-5 tracking-tight text-black'>
      <h1>They were transparent about thetime and the stages of the<br/> project. The end product is high quality, and I feel confident about<br/> how they were handholding the client through the process. I feel <br/>like I can introduce them to someone who needs to put a sales <br/>deck together from scratch, and they would be able to handhold <br/>the client experience from 0 to 100 very effectively from story to <br/>design. 5/5</h1>
    </div>
      </div>
    </div>


    {/*box */}

return (
    <div className="w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-zinc-700 bg-zinc-100 border-t-[1px] border-zinc-300 text-lg flex items-center justify-between "
        >
          <h1 className="mt-3.5 mb-3.5 ml-12 underline underline-offset-4">
            {item.left}
          </h1>
          <h1 className="mt-3.5 mb-3.5 ml-12">{item.middle}</h1>
          <h1 className="uppercase mt-3.5 mb-3.5 mr-12 underline underline-offset-4">
            {item.right}
          </h1>
        </div>
      ))}
    </div>     
</div>


  )
}

export default Featured

