import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex gap-6 items-center px-20'> 
      
      {/* Left Card */}
      <div className='cardcontainer w-1/2 h-[55vh]'>
        <div className='relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo1" />
          
          {/* Animated Button */}
          <button className="absolute left-10 bottom-10 overflow-hidden uppercase border-2 rounded-full px-3 py-1 text-[#cdea68] border-[#cdea68] group cursor-pointer">
            {/* Background grows */}
            <span className="absolute left-0 top-0 w-full h-0 bg-[#cdea68] transition-all duration-300 group-hover:h-full rounded-full" />
            
            {/* Text on top */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              ©2019-2025
            </span>
          </button>
        </div>
      </div>

      {/* Right Card Container */}
      <div className='cardcontainer w-1/2 h-[55vh] flex gap-6'>
        
        {/* Middle Card with animated button */}
        <div className='relative card rounded-md w-1/2 h-full bg-zinc-900 flex items-center justify-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="logo2" />
          
          <button className="absolute left-8 bottom-10 overflow-hidden uppercase border-2 rounded-full px-3 py-1 text-white border-white group cursor-pointer">
            {/* Background grows */}
            <span className="absolute left-0 top-0 w-full h-0 bg-zinc-200 transition-all duration-300 group-hover:h-full rounded-full" />
            
            {/* Text on top */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Rating 5.0 on clutch
            </span>
          </button>
        </div>

        {/* Right Card with logo3 */}
        <div className='relative card rounded-xl w-1/2 h-full bg-zinc-900 flex items-center justify-center '>
          <img  className='w-28 h-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="logo3" />
           <button className="absolute left-10 bottom-10 overflow-hidden uppercase border-2 rounded-full px-3 py-1 text-white border-white group cursor-pointer">
            {/* Background grows */}
            <span className="absolute left-0 top-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-full rounded-full" />
            
            {/* Text on top */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              business bootcamp alumni
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards  