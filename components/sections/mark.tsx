"use client";
import { motion } from "motion/react";
import Image from "next/image";


export default function Mark() {
  return (
    <section className="px-6 py-16 text-center sm:px-8 sm:py-20 md:px-12 lg:px-20 lg:py-28">

      <div className="flex justify-center gap-2 mb-6">
        {[1,2,3,4,5].map((item,index) => (
          <motion.img
            key={item}
            src="/icons/star.png"
            alt="star"
            width={20}
            height={20}
            initial={{
            opacity: 0,
            scale: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          />
        ))}
      </div>

      <h2 className="text-4xl md:text-5xl font-medium font-playfair text-[#2A1A0B]">
        Loved by Coffee Lovers & Creatives
      </h2>

      <p className="mt-4 text-[#6B6B6B] text-base font-normal ">
        Top-rated hangout spot in the city
      </p>

    </section>
  );
}