"use client";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section className="bg-[#F8F7F3] px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Label */}
        <motion.p 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-sm sm:text-base font-normal text-[#F15E01]">
          ABOUT US
        </motion.p>

        {/* Heading */}
        <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl font-playfair font-medium text-4xl leading-tight text-[#2A1A0B]">
          A place to connect, relax,
          <br />
          and create moments.
        </motion.h2>

        {/* Description */}
        <motion.p 
         initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10  text-sm font-normal leading-8 text-[#737373]  text-balance sm:mt-12 sm:text-lg sm:leading-10">
          At Monkey Coffee Coffee, we believe every cup is an invitation to
          slow down and savor life's simple pleasures. Whether you're meeting a
          friend, working on your next big idea, or simply enjoying a quiet
          moment alone, our doors are open to those who appreciate the art of a
          well-crafted brew and the warmth of genuine community.
        </motion.p>
      </div>
    </section>
  );
}