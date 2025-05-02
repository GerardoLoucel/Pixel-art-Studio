import {Suspense, useState, useRef, useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Head from '../models/Head'
import Head2 from '../models/Head2'
import Head3 from '../models/Head3'
import {useNavigate} from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]); // Estado para la rotación
  const [galaxyRotation, setGalaxyRotation] = useState([0, 0, 0]);
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility
  const [showTitle, setShowTitle] = useState(false); // State to control title visibility
  const navigate = useNavigate(); // Hook to navigate between routes
  const textRef = useRef(null); // Ref for the text container
  const servicesRef = useRef(null); // Ref for the "Services" section
  const valuesRef = useRef(null); // Ref for the "Our Values" section
  
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

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 1.5, ease: "power3.out" }
        );
      });
      return () => ctx.revert(); // Cleanup GSAP context on unmount
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          servicesRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%", // Trigger when the top of the section is 80% down the viewport
              toggleActions: "play none none none", // Play animation on scroll
            },
          }
        );
      }, servicesRef);
      return () => ctx.revert(); // Cleanup GSAP context on unmount
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          valuesRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%", // Trigger when the top of the section is 80% down the viewport
              toggleActions: "play none none none", // Play animation on scroll
            },
          }
        );
      }, valuesRef);
      return () => ctx.revert(); // Cleanup GSAP context on unmount
    }
  }, [isLoading]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -10, -13]; // Adjusted Z-axis to bring the model closer
    if (window.innerWidth < 768) {
      screenScale = [2.5, 2.5, 2.5]; // Larger scale for small screens
    } else {
      screenScale = [40, 40, 40]; // Default scale for larger screens
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  const adjustIslandForScreenSize2 = () => {
    let screenScale = null;
    let screenPosition = [0, -10, -13]; // Adjusted Z-axis to bring the model closer
    if (window.innerWidth < 768) {
      screenScale = [2.5, 2.5, 2.5]; // Larger scale for small screens
    } else {
      screenScale = [8, 8, 8]; // Default scale for larger screens
    }
    return [screenScale, screenPosition];
  };
  const [islandScale2, islandPosition2] = adjustIslandForScreenSize2();
  const adjustIslandForScreenSize3 = () => {
    let screenScale = null;
    let screenPosition = [0, -1, -13]; // Adjusted Z-axis to bring the model closer
    if (window.innerWidth < 768) {
      screenScale = [2.5, 2.5, 2.5]; // Larger scale for small screens
    } else {
      screenScale = [40, 40, 40]; // Default scale for larger screens
    }
    return [screenScale, screenPosition];
  };
  const [islandScale3, islandPosition3] = adjustIslandForScreenSize3();
  return (
    <div
      id="about"
      className={`absolute w-screen overflow-x-hidden ${
        window.innerWidth < 768 ? "flex flex-col items-center" : "grid grid-cols-2 gap-10"
      } min-h-screen px-10 mt-20`} // Added mt-20 for spacing
    >
      {isLoading && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center transition-opacity duration-1000 ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Loader />
        </div>
      )}
      {!isLoading && (
        <>
          <div
            ref={textRef}
            className={`text-white self-center ${
              window.innerWidth < 768 ? "text-center mb-10" : "text-left"
            }`}
          >
            <h1 className="text-xs uppercase tracking-wide">Welcome to</h1>
            <h2 
              className="text-8xl font-bold bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pixel Shape Studio
            </h2>
            <p className="mt-4 text-lg leading-relaxed max-w-[30rem] mx-auto">
              Where creativity takes shape. We are a high-end 3D modeling studio dedicated to turning ideas into stunning visual experiences. Whether it's for video games, animation, 3D printing, or augmented reality projects, we're here to bring your concepts to life.
            </p>
          </div>
          {window.innerWidth >= 768 && (
            <Canvas
              className={`w-full min-h-screen bg-transparent ${
                isRotating ? "cursor" : "cursor"
              }`}
              camera={{near:0.1,far:5000}}
            >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={0.5}/>
                <ambientLight intensity={0.1}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                <Head
                  position={islandPosition}
                  scale={islandScale}
                  rotation={rotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                />
              </Suspense>
            </Canvas>
          )}
          <div
            ref={servicesRef}
            className={`text-white self-center ${
              window.innerWidth < 768 ? "text-center mb-10" : "text-right ml-auto"
            }`}
          >
            <h1 className="text-xs uppercase tracking-wide">Services</h1>
            <h2 
              className="text-8xl font-bold bg-gradient-to-r from-[#42aaff] to-[#08f3f3] bg-clip-text text-transparent" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Do
            </h2>
            <p className="mt-4 text-lg leading-relaxed max-w-[30rem] mx-auto">
              <strong className="block text-center">3D Modeling</strong>
              <span className="block text-center">
                From detailed characters to immersive environments, we craft models tailored to your project's needs.
              </span><br /><br />
              <strong className="block text-center">Texturing & Rendering</strong>
              <span className="block text-center">
                High-quality textures and photorealistic renders to bring your assets to life.
              </span><br /><br />
              <strong className="block text-center">3D Animation</strong>
              <span className="block text-center">
                Breathe life into your creations with smooth, expressive animations.
              </span><br /><br />
              <strong className="block text-center">3D Printing Models</strong>
              <span className="block text-center">
                Optimized, print-ready models—perfect for prototyping or final production.
              </span><br /><br />
              <strong className="block text-center">Architectural Visualization</strong>
              <span className="block text-center">
                Transform blueprints into vivid, realistic 3D renders for presentations and marketing.
              </span><br /><br />
              <strong className="block text-center">Web Development</strong>
              <span className="block text-center">
                Build modern, responsive websites to showcase your projects.
              </span>
            </p>
          </div>
          {window.innerWidth >= 768 && (
            <Canvas
              className={`w-full min-h-screen bg-transparent ${
                isRotating ? "cursor" : "cursor"
              }`}
              camera={{near:0.1,far:5000}}
            >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={0.5}/>
                <ambientLight intensity={0.1}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                <Head2
                  position={islandPosition2}
                  scale={islandScale2}
                  rotation={rotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                />
              </Suspense>
            </Canvas>
          )}
          <div
            ref={valuesRef}
            className={`text-white self-center ${
              window.innerWidth < 768 ? "text-center mb-10" : "text-left"
            }`}
          >
            <h1 className="text-xs uppercase tracking-wide">Our Values</h1>
            <h2 
              className="text-8xl font-bold bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Stand For
            </h2>
            <p className="mt-4 text-lg leading-relaxed max-w-[30rem] mx-auto">
              <strong className="block">Creativity</strong>
              <span className="block">We believe in original, bold design.</span><br />
              <strong className="block">Precision</strong>
              <span className="block">Every polygon, every texture—done with care.</span><br />
              <strong className="block">Collaboration</strong>
              <span className="block">We work closely with clients to deliver exactly what they need.</span><br />
              <strong className="block">Innovation</strong>
              <span className="block">We embrace new tools, trends, and technologies.</span><br />
              <strong className="block">Integrity</strong>
              <span className="block">Transparent communication and honest work.</span>
            </p>
          </div>
          {window.innerWidth >= 768 && (
            <Canvas
              className={`w-full min-h-screen bg-transparent ${
                isRotating ? "cursor" : "cursor"
              }`}
              camera={{near:0.1,far:5000}}
            >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={0.5}/>
                <ambientLight intensity={0.1}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                <Head3
                  position={islandPosition3}
                  scale={islandScale3}
                  rotation={rotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                />
              </Suspense>
            </Canvas>
          )}
        </>
      )}
      <footer className="relative bottom-0 left-0 w-screen bg-black text-white text-center py-6 mt-10 flex flex-col items-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="socialContainer containerOne">
            <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
            </svg>
          </a>
          <a href="#" className="socialContainer containerTwo">
            <svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
          </a>
          <a href="#" className="socialContainer containerThree">
            <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
          <a href="#" className="socialContainer containerFour">
            <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
          </a>
        </div>
        <nav className="flex justify-center space-x-6 mb-4">
          <a href="#home" className="text-sm bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent">Home</a>
          <a href="#services" className="text-sm bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent">Services</a>
          <a href="#about" className="text-sm bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent">About</a>
          <a href="#terms" className="text-sm bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent">Terms</a>
          <a href="#privacy" className="text-sm bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent">Privacy Policy</a>
        </nav>
        <p className="text-sm bg-gradient-to-r from-[#ffad42] to-[#f30808] bg-clip-text text-transparent">
        Pixel Shape Studios © 2025
        </p>
      </footer>
    </div>
  )
}

export default About