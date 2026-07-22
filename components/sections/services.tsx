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
    <section className="bg-[#F8F7F3] py-28 px-20">
      <div className="mx-auto w-full px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-5 text-sm font-normal text-[#F15E01]">
           WHAT WE SERVE
          </p>

          <h2 className="font-serif font-medium text-4xl text-[#2A1A0B]">
            More Than Coffee
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-[#F4EFEB]">
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    className="text-[#6B4F3A]"
                  />
                </div>

                <h3 className="mb-4 font-serif font-medium text-xl text-[#1F1F1F]">
                  {service.title}
                </h3>

                <p className="text-sm font-normal leading-6 text-[#6B6B6B]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}