import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade + scale
      gsap.from(heroRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
      });

      // Text slide-in
      gsap.from(textRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Button pop
      gsap.from(buttonRef.current.children, {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        delay: 0.6,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-[#f5c1b3] via-white to-[#ba6a5a]/20 px-6"
    >
      {/* Futuristic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

      {/* Logo */}
      <img
        src="/logo/logo-black.png"
        alt="Anthem Logo"
        className="w-32 md:w-40 mb-6"
      />

      {/* Hero Text */}
      <div ref={textRef} className="space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#ba6a5a] to-[#f5c1b3] bg-clip-text text-transparent">
          Welcome to Anthem
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Experience the future of cooling with our premium <br />
          next-gen ceiling fans designed for performance and elegance.
        </p>
      </div>

      {/* Buttons */}
      <div ref={buttonRef} className="flex gap-4 mt-8 flex-wrap justify-center">
        <a
          href="#evaara"
          className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[#ba6a5a] to-[#f5c1b3] shadow-lg hover:scale-105 transform transition duration-300"
        >
          Explore Products
        </a>
        <a
          href="#support"
          className="px-6 py-3 rounded-full border-2 border-[#ba6a5a] text-[#ba6a5a] hover:bg-[#ba6a5a] hover:text-white shadow-md transition duration-300"
        >
          Support Center
        </a>
      </div>
    </section>
  );
};

export default Home;
