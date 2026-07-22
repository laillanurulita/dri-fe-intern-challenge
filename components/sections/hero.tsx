"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-6 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      {/* Overlay */}
      <div 
      className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
         <div className="relative z-10 text-center text-white px-6">

        <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-6xl md:text-6xl font-medium font-playfair leading-tight sm:text-7xl lg:text-8xl">
          Find Your Coffee, Bar & 
         <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Dining Escape
        </motion.h1>

        <motion.p 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="mx-auto mt-8 text-2xl md:text-xl text-white sm:text-3xl lg:mt-10 lg:text-4xl">
          A cozy space to sip, work, and connect.
        </motion.p>


        <motion.button
          
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            mt-8 
            bg-white 
            text-[#2A1A0B] 
            px-6 
            py-4 
            rounded-[36px] 
            font-medium
            hover:bg-gray-200
            sm:px-8
            sm:py-5
            sm:text-base
            transition-all
            duration-300
            hover:scale-105
            active:scale-95
          "
        >
          CHECK OUR MENUS
        </motion.button>

      </div>

    </section>
  );
}