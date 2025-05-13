import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
const NavBar = () => {
   // State for toggling audio and visual indicator
   const [isAudioPlaying, setIsAudioPlaying] = useState(true); // Set to true by default
   const [isIndicatorActive, setIsIndicatorActive] = useState(true);
   const audioElementRef = useRef(null);
    // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };
  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);


  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-black-500 items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">PS</p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium sm:gap-5 sm:justify-end" >
            <NavLink 
                to="/about" 
                className={({isActive})=> 
                    `${isActive ? 'text-red-500' : 'text-orange-500'} relative group`
                }
            >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink 
                to="/contacts" 
                className={({isActive})=> 
                    `${isActive ? 'text-red-500' : 'text-orange-500'} relative group`
                }
            >
                Contacts
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5 transform scale-300 animate-heartbeat text-orange-500"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/assets/songs/song.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
            
        </nav>
    </header>
  )
}

export default NavBar