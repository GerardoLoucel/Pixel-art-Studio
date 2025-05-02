import {Suspense, useState, useRef, useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import { TiLocationArrow } from "react-icons/ti";
import {Html} from '@react-three/drei'
import { FaQuestionCircle } from "react-icons/fa"; // Import the question icon
import { MdScreenRotation } from "react-icons/md"; // Import phone rotation icon

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
 
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div id="features" className="relative size-full h-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative h-full z-10 flex size-full flex-col justify-between p-5 text-orange-500">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
     
        </div>
          <div className='bottom-5 left-2'>
          {description && (
            <p className=" mt-3 max-w-64 text-xs md:text-base font-black ">{description}</p>
          )}
            {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="  border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-orange-500/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px,rgba(116, 21, 21, 0.53), #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">more information</p>
          </div>
        )}
          </div>


      
      </div>
    </div>
  );
};


const Home = () => {
  
  const [isRotating, setIsRotating] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility
  const [showTooltip, setShowTooltip] = useState(false); // State to control tooltip visibility
  const [showRotatePhone, setShowRotatePhone] = useState(false); // State to control phone rotation icon visibility
  const scrollInterval = useRef(null);
  const counterInterval = useRef(null);

  const startCounter = (direction) => {
    if (!counterInterval.current) {
      counterInterval.current = setInterval(() => {
        setCounter((prev) => {
          const newCounter = prev + (direction === 'forward' ? 1 : -1);
          return newCounter >= 75 ? 0 : newCounter; // Reset to 0 if counter reaches 75
        });
      }, 1000);
    }
  };

  const stopCounter = () => {
    clearInterval(counterInterval.current);
    counterInterval.current = null;
  };

  useEffect(() => {
    if (counter >= 3 && counter < 12) { // Adjusted range to 3 to 6 seconds
      setShowText(true);
    }
    else if (counter >= 17 && counter < 26) { // Adjusted range to 3 to 6 seconds
      setShowText2(true);
    }
    else if (counter >= 31 && counter < 40) { // Adjusted range to 3 to 6 seconds
      setShowText3(true);
    }
    else if (counter >= 45 && counter < 54) { // Adjusted range to 3 to 6 seconds
      setShowText4(true);
    }
    else if (counter >= 60 && counter < 69) { // Adjusted range to 3 to 6 seconds
      setShowText5(true);
    }
    else {
      setShowText(false);
      setShowText2(false);
      setShowText3(false);
      setShowText4(false);
      setShowText5(false);
    }
  }, [counter]);

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      startCounter('forward'); // Scroll down -> forward
    } else {
      startCounter('backward'); // Scroll up -> backward
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      startCounter('forward'); // Down arrow -> forward
    } else if (event.key === 'ArrowUp') {
      startCounter('backward'); // Up arrow -> backward
    }
  };

  const handleKeyUp = () => {
    stopCounter();
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleMouseDown = () => {
    scrollInterval.current = setInterval(() => {
      window.dispatchEvent(new WheelEvent('wheel', { deltaY: 1 })); // Simulate scroll down
    }, 50); // Trigger every 50ms
    startCounter('forward');
  };

  const handleMouseUp = () => {
    clearInterval(scrollInterval.current); // Stop the interval
    scrollInterval.current = null;
    stopCounter();
  };

  const handleMouseEnter = () => {
    setIsGrabbing(true);
  };

  const handleMouseLeave = () => {
    setIsGrabbing(false);
    clearInterval(scrollInterval.current); // Ensure interval stops if mouse leaves
    scrollInterval.current = null;
    stopCounter();
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3, -15]; // Adjusted Z-axis to bring the model closer
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [3, 3, 3]; // Escala para pantallas pequeñas
    } else {
      screenScale = [5, 5, 5]; // Escala base
    }
    return [screenScale, screenPosition, rotation];
  };


  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000); // Minimum 10 seconds delay
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowTitle(true), 1000); // Delay to ensure loader fade-out completes
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isLoading]);

  useEffect(() => {
    const handleResize = () => {
      setShowRotatePhone(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className='w-full h-screen relative'>
      {/* Help Icon */}
      <div
        className={`absolute ${window.innerWidth < 768 ? 'top-20' : 'top-5'} left-5 z-50 flex items-center`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip((prev) => !prev)} // Toggle tooltip on click or tap
      >
        
        <span
  class="💀"
  data-content="📫"
  data-hover-content="📪"
  data-active-content="📬"
></span>

        {showTooltip && (
          <div
            className="absolute top-12 left-0 bg-black bg-opacity-75 text-white text-sm p-3 rounded-lg w-64"
            style={{ pointerEvents: "none" }}
          >
            
To interact with the page, you can click the orange button at the bottom of the page or use the up and down arrow keys on your keyboard to advance through the story.
          </div>
        )}
      </div>
      <div 
        className={`absolute top-1/2 right-10 transform -translate-y-1/2 z-30  rounded-lg transition-opacity duration-500 ${
          showText ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowTooltip(true)} // Show tooltip on click or tap
        style={{
          
          maxWidth: '300px', // Limit horizontal width
          width: '100%', // Responsive width
        }}
      >
     
        <BentoTilt className="border-hsla relative mb-9 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/src/assets/video/video1.mp4"
          title={
            <>
              Unlocking Digital Dimensions
            </>
          }
          description="
           At PixelShape Studios, we transform your wildest ideas into digital masterpieces."
          isComingSoon
        />
      </BentoTilt>
             {/* Pulsating Circle with Rotating Gradient Circles */}
        <div className="absolute top-0 right-0 flex items-center justify-center z-40">
          <div className="relative w-16 h-16 rounded-full border-2 border-orange-500 animate-pulse">
            {/* Inner Rotating Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full border-2 animate-spin"
                style={{
                  borderImage: "linear-gradient(to right, black 50%, white 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full border-2 animate-spin-reverse"
                style={{
                  borderImage: "linear-gradient(to right, white 50%, black 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
            </div>
          </div>
        </div>

      
      </div>

      <div 
        className={`absolute top-1/2 right-10 transform -translate-y-1/2 z-30  rounded-lg transition-opacity duration-500 ${
          showText2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowTooltip(true)} // Show tooltip on click or tap
        style={{
          
          maxWidth: '300px', // Limit horizontal width
          width: '100%', // Responsive width
        }}
      >
     
        <BentoTilt className="border-hsla relative mb-9 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/src/assets/video/video2.mp4"
          title={
            <>
              Where Creativity Meets Technology
            </>
          }
          description="
           We specialize in exceptional 3D modeling and custom web development"
          isComingSoon
        />
      </BentoTilt>
             {/* Pulsating Circle with Rotating Gradient Circles */}
        <div className="absolute top-0 right-0 flex items-center justify-center z-40">
          <div className="relative w-16 h-16 rounded-full border-2 border-orange-500 animate-pulse">
            {/* Inner Rotating Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full border-2 animate-spin"
                style={{
                  borderImage: "linear-gradient(to right, black 50%, white 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full border-2 animate-spin-reverse"
                style={{
                  borderImage: "linear-gradient(to right, white 50%, black 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
            </div>
          </div>
        </div>

      
      </div>

      <div 
        className={`absolute top-1/2 right-10 transform -translate-y-1/2 z-30  rounded-lg transition-opacity duration-500 ${
          showText3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowTooltip(true)} // Show tooltip on click or tap
        style={{
          
          maxWidth: '300px', // Limit horizontal width
          width: '100%', // Responsive width
        }}
      >
     
        <BentoTilt className="border-hsla relative mb-9 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/src/assets/video/video3.mp4"
          title={
            <>
              Crafting Digital Masterpieces
            </>
          }
          description="
           we combine artistic vision with advanced technology to deliver outstanding 3D models and dynamic web solutions"
          isComingSoon
        />
      </BentoTilt>
             {/* Pulsating Circle with Rotating Gradient Circles */}
        <div className="absolute top-0 right-0 flex items-center justify-center z-40">
          <div className="relative w-16 h-16 rounded-full border-2 border-orange-500 animate-pulse">
            {/* Inner Rotating Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full border-2 animate-spin"
                style={{
                  borderImage: "linear-gradient(to right, black 50%, white 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full border-2 animate-spin-reverse"
                style={{
                  borderImage: "linear-gradient(to right, white 50%, black 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
            </div>
          </div>
        </div>

      
      </div>

      <div 
        className={`absolute top-1/2 right-10 transform -translate-y-1/2 z-30  rounded-lg transition-opacity duration-500 ${
          showText4 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowTooltip(true)} // Show tooltip on click or tap
        style={{
          
          maxWidth: '300px', // Limit horizontal width
          width: '100%', // Responsive width
        }}
      >
     
        <BentoTilt className="border-hsla relative mb-9 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/src/assets/video/video4.mp4"
          title={
            <>
              Pixel Perfect 3D Modeling & Web Solutions
            </>
          }
          description="
           We creates flawless 3D designs and builds responsive websites with precision and expertise"
          isComingSoon
        />
      </BentoTilt>
             {/* Pulsating Circle with Rotating Gradient Circles */}
        <div className="absolute top-0 right-0 flex items-center justify-center z-40">
          <div className="relative w-16 h-16 rounded-full border-2 border-orange-500 animate-pulse">
            {/* Inner Rotating Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full border-2 animate-spin"
                style={{
                  borderImage: "linear-gradient(to right, black 50%, white 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full border-2 animate-spin-reverse"
                style={{
                  borderImage: "linear-gradient(to right, white 50%, black 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
            </div>
          </div>
        </div>

      
      </div>

      <div 
        className={`absolute top-1/2 right-10 transform -translate-y-1/2 z-30  rounded-lg transition-opacity duration-500 ${
          showText5 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowTooltip(true)} // Show tooltip on click or tap
        style={{
          
          maxWidth: '300px', // Limit horizontal width
          width: '100%', // Responsive width
        }}
      >
     
        <BentoTilt className="border-hsla relative mb-9 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/src/assets/video/video5.mp4"
          title={
            <>
              Innovative 3D Modeling & Web Development
            </>
          }
          description="
           We are your partner in creating visually stunning 3D models and high-performance websites."
          isComingSoon
        />
      </BentoTilt>
             {/* Pulsating Circle with Rotating Gradient Circles */}
        <div className="absolute top-0 right-0 flex items-center justify-center z-40">
          <div className="relative w-16 h-16 rounded-full border-2 border-orange-500 animate-pulse">
            {/* Inner Rotating Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full border-2 animate-spin"
                style={{
                  borderImage: "linear-gradient(to right, black 50%, white 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full border-2 animate-spin-reverse"
                style={{
                  borderImage: "linear-gradient(to right, white 50%, black 50%) 1",
                  borderStyle: "solid",
                  borderRadius: "50%", // Ensure circular shape
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
            </div>
          </div>
        </div>

      
      </div>

      {/* Rotate Phone Icon */}
      {showRotatePhone && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
          <MdScreenRotation className="text-orange-500 text-4xl animate-spin-slow" />
          <p className="text-white text-sm mt-2">Rotate your phone for a better experience</p>
        </div>
      )}

      {/* Scroll Icon */}
      {!isLoading && (
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown} // Handle touch start for mobile
          onTouchEnd={handleMouseUp} // Handle touch end for mobile
        >
          <div 
            className={`scroll-icon w-6 h-10 border-2 border-orange-500 rounded-full flex items-center justify-center opacity-50 animate-bounce ${
              isGrabbing ? 'cursor-grab' : 'cursor-pointer'
            }`}
          >
            <span className="block w-2 h-2 bg-orange-500 rounded-full"></span>
          </div>
        </div>
      )}

      <Canvas  className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor" : "cursor"
        }`}
      camera={{near:0.1,far:5000}} // Increased far value for greater viewing distance
      >
            {isLoading && (
          <Html>
            <div
              className={`fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center transition-opacity duration-1000 ${ // Increased duration to 1000ms
                isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Full-screen loader */}
              <Loader />
            </div>
          </Html>
        )}
        {!isLoading && (
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={0.5}/>
          <ambientLight intensity={0.1}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Sky/>
          <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          />
    
        </Suspense>
             )}
      </Canvas>

      {/* Add custom animation for slow spin */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Home