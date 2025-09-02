import React, { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";


function Eye2() {
  const [pos, setPos] = useState({
    pupilX: 0,
    pupilY: 0,
    whiteX: 0,
    whiteY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Limit movement
      const maxDistPupil = 25; // black part (pupil)
      const maxDistWhite = 40; // white highlight (more movement)

      setPos({
        pupilX: Math.cos(angle) * Math.min(distance, maxDistPupil),
        pupilY: Math.sin(angle) * Math.min(distance, maxDistPupil),
        whiteX: Math.cos(angle) * Math.min(distance, maxDistWhite),
        whiteY: Math.sin(angle) * Math.min(distance, maxDistWhite),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-speed=".3" className="bg-[#cdea68]  w-full min-h-screen rounded-t-3xl flex flex-col items-center justify-center text-black">
      {/* Heading */}
      <h1 className='font-["Founders Grotesk X-Condensed"] leading-none uppercase text-[140px] font-bold text-center mt-20 tracking-tighter'>
        Ready <br /> to start <br /> the <br /> project?
      </h1>

      {/* Eyes */}
      <div data-scroll data-scroll-speed=".3" className="flex items-center justify-center mt-12 gap-10">
        {/* Left Eye */}
        <div className="w-[200px] h-[200px] rounded-full bg-zinc-100 flex items-center justify-center relative">
          {/* Pupil */}
          <div
            style={{ transform: `translate(${pos.pupilX}px, ${pos.pupilY}px)` }}
            className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center relative transition-transform duration-75"
          >
            {/* White highlight */}
            <div
              style={{
                transform: `translate(${pos.whiteX}px, ${pos.whiteY}px)`,
              }}
              className="w-6 h-6 rounded-full bg-zinc-100 absolute"
            ></div>
          </div>
        </div>

        {/* Right Eye */}
        <div className="w-[200px] h-[200px] rounded-full bg-zinc-100 flex items-center justify-center relative">
          <div
            style={{ transform: `translate(${pos.pupilX}px, ${pos.pupilY}px)` }}
            className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center relative transition-transform duration-75"
          >
            <div
              style={{
                transform: `translate(${pos.whiteX}px, ${pos.whiteY}px)`,
              }}
              className="w-6 h-6 rounded-full bg-zinc-100 absolute"
            ></div>
          </div>
        </div>
      </div>

      {/* Button 1 */}
      <div className="flex items-center justify-center mt-10">
        <a
          href="https://ochi.design/clients-success-stories-presentation-design/"
          className="group relative inline-flex items-center justify-center px-5 py-2 rounded-full bg-black text-white uppercase text-sm tracking-wide overflow-hidden transition-all duration-500 ease-out"
        >
          <span className="relative z-10">Start the project</span>
          <span className="relative z-10 ml-4 flex items-center justify-center w-12 h-12">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-white rounded-full transition-transform duration-500 ease-out group-hover:scale-[4]">
              <span className="opacity-0 text-black text-xs font-bold transition-all duration-500 ease-out transform group-hover:opacity-100 group-hover:scale-100 scale-75">
                <span className="rotate-[45deg] text-black flex items-center justify-center">
                  <IoArrowUp />
                </span>
              </span>
            </span>
          </span>
        </a>
      </div>

      {/* OR Section */}
      <div className="uppercase mt-4">
        <h1>or</h1>
      </div>

      {/* Button 2 */}
      <div className="flex items-center justify-center mt-5">
        <a
          href="mailto:hello@ochi.design"
          className="group relative inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#cdea68] text-black font-semibold border-2 border-black uppercase text-sm tracking-wide overflow-hidden transition-all duration-500 ease-out"
        >
          <span className="relative z-10">hello@ochi.design</span>
          <span className="relative z-10 ml-4 flex items-center justify-center w-12 h-12">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-black rounded-full transition-transform duration-500 ease-out group-hover:scale-[4]">
              <span className="opacity-0 text-white text-xs font-bold transition-all duration-500 ease-out transform group-hover:opacity-100 group-hover:scale-100 scale-75">
                <span className="rotate-[45deg] text-white flex items-center justify-center">
                  <IoArrowUp />
                </span>
              </span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Eye2;
