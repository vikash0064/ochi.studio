import React, { useEffect, useState } from "react";

function Eyes() {
  const [pos, setPos] = useState({ pupilX: 0, pupilY: 0, whiteX: 0, whiteY: 0 });

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
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.8" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-96 flex gap-10">
          
          {/* Left Eye */}
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center relative">
            {/* Pupil (black part) */}
            <div
              style={{ transform: `translate(${pos.pupilX}px, ${pos.pupilY}px)` }}
              className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative flex items-center justify-center transition-transform duration-75"
            >
              {/* White highlight */}
              <div
                style={{ transform: `translate(${pos.whiteX}px, ${pos.whiteY}px)` }}
                className="w-6 h-6 rounded-full bg-zinc-100 absolute"
              ></div>
            </div>

            {/* Fixed Text (doesn't move with pupil) */}
            <span className="absolute text-white text-xl tracking-wide select-none">
              PLAY
            </span>
          </div>

          {/* Right Eye */}
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center relative">
            {/* Pupil */}
            <div
              style={{ transform: `translate(${pos.pupilX}px, ${pos.pupilY}px)` }}
              className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative flex items-center justify-center transition-transform duration-75"
            >
              <div
                style={{ transform: `translate(${pos.whiteX}px, ${pos.whiteY}px)` }}
                className="w-6 h-6 rounded-full bg-zinc-100 absolute"
              ></div>
            </div>

            {/* Fixed Text */}
            <span className="absolute text-white text-xl  tracking-wide select-none ">
            PLAY
            </span>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyes;
