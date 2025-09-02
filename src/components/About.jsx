import React from 'react'
import { IoArrowUp } from "react-icons/io5";

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      
      {/* Main Heading */}
      <h1 className="font-['Neue Montreal'] text-[3.5vw] leading-[4vw] tracking-tighter">
        We craft category-defining presentations, brand<br/> identities, and digital experiences that{" "}
        <span className='underline decoration-black decoration-2 underline-offset-4'>drive funding</span>,<br/>{" "}
        <span className='underline decoration-black decoration-2 underline-offset-4'>sales</span>, and{" "}
        <span className='underline decoration-black decoration-2 underline-offset-4'>market leadership.</span>
      </h1>

      {/* Divider Section */}
      <div className='border-t border-gray-400 w-full pb-8 mt-12 '>
        
        {/* What you can expect */}
        <div className='flex items-center gap-[40vw]'>
          <h1 className='-mt-16 text-lg'>What you can expect:</h1>
          <h1 className='mt-4'>
            We don't just make slides. We shape <br />
            strategy, storytelling, design scalable <br />
            brand systems, and build presentations <br />
            that make people say: "I want in!"
          </h1>
        </div>

        {/* Clients Section */}
        <div className='flex items-center justify-center ml-[32vw] mt-6'>
          <h1>
            Our clients make the world go round – <br />
            from deep tech, aerospace and robotics <br />
            to music festivals and Michelin-starred <br />
            restaurants.
          </h1>
        </div>

        {/* Since 2019 + Social Links */}
        <div className='flex items-start justify-center ml-[48vw] mt-6'>
          <div>
            <h1>
              Since 2019, we've been the go-to partner <br />
              for Yahoo, Medallia, Uber, Lexus, <br />
              Salience Labs, Trawa and AllThingsGo.
            </h1>
          </div>
          <div className='ml-40 -mt-5'>
            <h1>
              <span className='flex mb-4'>S: </span> 
              <span className='underline decoration-black decoration-1 underline-offset-4 leading-5'>Instagram</span><br />
              <span className='underline decoration-black decoration-1 underline-offset-4 leading-5'>Behance</span><br />
              <span className='underline decoration-black decoration-1 underline-offset-4 leading-5'>Facebook</span><br />
              <span className='underline decoration-black decoration-1 underline-offset-4 leading-5'>Linkedin</span><br />
            </h1>
          </div>
        </div>
      </div>
      <div className='w-full border-t-[2px] border-[#a1b562] mt-12 flex gap-5'>

        {/* Left Column */}
        <div className='w-1/2'>
          <h1 className='text-6xl mt-2 tracking-tighter '>How we can help:</h1>
          <div className="flex items-center justify-center mt-5">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center px-4 py-2 -ml-[32vw] rounded-full bg-zinc-900 text-white uppercase text-xm tracking-wide overflow-hidden transition-all duration-500 ease-out"
            >
              {/* Button Text */}
              <span className="relative z-10">Read More</span>

              {/* Circle + Arrow */}
              <span className="relative z-10 ml-4 flex items-center  justify-center w-12 h-12">
                {/* Dot (circle) */}
                <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full transition-transform duration-500 ease-out group-hover:scale-110">
                  {/* Arrow inside circle */}
                  <span className="opacity-0 text-black text-sm font-bold transition-all duration-500 ease-out transform group-hover:opacity-100 group-hover:scale-100 scale-500">
                    <span className="rotate-[45deg] text-zinc-700   flex items-center justify-center">
                      <IoArrowUp className="text-lg" />
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-1/2 h-[70vh] rounded-3xl mt-5 overflow-hidden group transition-transform duration-500 ease-in-out hover:scale-105">
          <img
            className="rounded-2xl w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default About
