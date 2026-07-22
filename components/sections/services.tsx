"use client";

import { motion } from "motion/react";
import { Coffee, Wifi, Heart, Clock3 } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Crafted Beverages",
    description:
      "Every drink is meticulously crafted by our expert baristas using premium beans.",
  },
  {
    icon: Wifi,
    title: "Cozy Workspace",
    description:
      "Fast WiFi, comfortable seating, and the perfect ambiance for productivity.",
  },
  {
    icon: Heart,
    title: "All-Day Dining",
    description:
      "From breakfast pastries to evening treats, we've got you covered.",
  },
  {
    icon: Clock3,
    title: "Open Late",
    description:
      "Extended hours to accommodate your schedule and lifestyle.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8F7F3] px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto w-full px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-sm font-normal text-[#F15E01]">
            WHAT WE SERVE
          </p>

          <h2 className="font-playfair font-medium text-4xl text-[#2A1A0B]">
            More Than Coffee
          </h2>
        </motion.div>


        {/* Cards */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >

                {/* Icon Circle */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-[#F4EFEB] transition-all duration-300 group-hover:bg-[#E8DCCF]"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    className="text-[#6B4F3A] cursor-pointer"
                  />
                </motion.div>


                <h3 className="mb-4 font-playfair font-semibold text-xl text-[#1F1F1F] transition-colors duration-300 group-hover:text-[#843919]">
                  {service.title}
                </h3>


                <p className="text-sm font-normal leading-6 text-[#6B6B6B]">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}