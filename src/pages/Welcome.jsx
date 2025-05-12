import { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, extend } from '@react-three/fiber' // Corregir la importación
import { Html } from '@react-three/drei'
import { OrbitControls, TransformControls } from 'three-stdlib'
import Loader from '../components/Loader'
import AnimatedTitle from "./../components/AnimatedTitle";
import Galaxy from '../models/Galaxy'
import { useNavigate } from 'react-router-dom'

// Extender el catálogo de JSX
extend({ OrbitControls, TransformControls })

const Welcome = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]); // Estado para la rotación
  const [galaxyRotation, setGalaxyRotation] = useState([0, 0, 0]);
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility
  const [showTitle, setShowTitle] = useState(false); // State to control title visibility
  const navigate = useNavigate(); // Hook to navigate between routes

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth } = window;
      const x = (event.clientX / innerWidth) * 2 - 1; // Normalize X value
      const slowFactor = 0.3; // Factor to reduce rotation speed
      setRotation([0, x * Math.PI * slowFactor, 0]); // Update only Y-axis rotation
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalaxyRotation(([x, y, z]) => [x, y + 0.005, z]); // Slower Y-axis rotation
    }, 16); // Approximately 60 FPS
    return () => clearInterval(interval);
  }, []);

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

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, -13]; // Adjusted Z-axis to bring the model closer
    if (window.innerWidth < 768) {
      screenScale = [2.5, 2.5, 2.5]; // Larger scale for small screens
    } else {
      screenScale = [3.5, 3.5, 3.5]; // Default scale for larger screens
    }
    return [screenScale, screenPosition];
  };

  const handleStartAdventure = () => {
    navigate('/Home'); // Navigate to the Home route
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg transition-opacity duration-500 flex flex-col items-center space-y-12 ${
          isLoading ? 'hidden' : '' // Hide text and button while loading
        }`}
      >
        {showTitle && ( // Show title only after loader finishes
          <AnimatedTitle
            title="Welcome To <br/> Pixel Shape Studio"
            containerClass={`mt-1 !text-white text-center ${
              window.innerWidth <= 800 ? 'text-sm' : 'text-lg'
            }`} // Adjust size based on screen width
          />
        )}
        <button 
          className="btn"
          onClick={handleStartAdventure} // Add click handler
        >
           <strong>START THE ADVENTURE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
        </button>
      </div>
  
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor" : "cursor"
        }`}
        camera={{near:0.1,far:5000}}
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
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,1]} intensity={0.5}/>
            <ambientLight intensity={0.1}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <Galaxy
              position={islandPosition}
              scale={islandScale}
              rotation={rotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
          </Suspense>
        )}
      </Canvas>
    </section>
  );
};

export default Welcome