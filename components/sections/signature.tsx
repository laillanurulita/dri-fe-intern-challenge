import Image from "next/image";

const menus = [
  {
    image: "/images/menu1.jpg",
    category: "COFFEE",
    title: "Classic Espresso",
    description: "Rich, bold, and perfectly balanced single-origin espresso",
  },
  {
    image: "/images/menu2.jpg",
    category: "COFFEE",
    title: "Signature Latte",
    description: "Smooth espresso with velvety steamed milk and latte art",
  },
  {
    image: "/images/menu3.jpg",
    category: "COFFEE",
    title: "Artisan Cappuccino",
    description: "Perfect harmony of espresso, steamed milk, and foam",
  },
  {
    image: "/images/menu4.jpg",
    category: "SIGNATURE",
    title: "Cold Brew Delight",
    description: "Smooth, naturally sweet cold-brewed for 24 hours",
  },
  {
    image: "/images/menu5.jpg",
    category: "SIGNATURE",
    title: "Vanilla Bean Latte",
    description: "House-made vanilla bean syrup with premium espresso",
  },
  {
    image: "/images/menu6.jpg",
    category: "NON-COFFE",
    title: "Mocha Indulgence",
    description: "Rich chocolate with steamed milk and whipped cream",
  },
];

export default function SignatureMenu() {
  return (
    <section className="py-16 lg:py-28">
    <div className="mx-auto max-w-7xl px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[#F15E01] font-normal text-sm">
          OUR CRAFT
        </p>

        <h2 className="text-4xl md:text-5xl text-[#2A1A0B] font-medium font-playfair mt-5 sm:text-4xl lg:text-6xl">
          Highlighted Signature
        </h2>

        <p className="text-[#6B6B6B] text-base font-normal mt-5">
          From classic espresso to signature blends,
          each cup tells a story.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white transition transition-all duration-300 hover:-translate-y-3  cursor-pointer"
          >
            <Image
                src={menu.image}
                alt={menu.title}
                width={400}
                height={467}
                className="w-full h-[300px] sm:h-[360px] lg:h-[467px] rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
            />


            <p className="text-xs font-normal text-[#F15E01] mt-4">
                {menu.category}
            </p>

              <h3 className="text-xl font-semibold font-playfair text-[#583120] mt-2">
                {menu.title}
              </h3>

              <p className="text-[#737373] text-sm font-normal mt-2">
                {menu.description}
              </p>
            </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-16">
        <button className="bg-[#843919] text-white px-6 py-4 rounded-4xl hover:bg-[#5A3E2C] transition-all duration-300 hover:scale-105 active:scale-95">
          Explore Full Menu
        </button>
      </div>
      </div>
    </section>
  );
}