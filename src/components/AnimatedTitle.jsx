import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import clsx from "clsx";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animated-word",
        {
          opacity: 0,
          transform: "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.05,
          duration: 0.8,
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []); // Empty dependency array to run only on mount

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-10 px-0 md:gap-15"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
