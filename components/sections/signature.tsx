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
    <section className="py-28 px-24">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[#F15E01] font-normal text-sm">
          OUR CRAFT
        </p>

        <h2 className="text-4xl md:text-5xl text-[#2A1A0B] font-medium mt-5">
          Highlighted Signature
        </h2>

        <p className="text-[#6B6B6B] text-base font-normal mt-5">
          From classic espresso to signature blends,
          each cup tells a story.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden  transition"
          >
            <div className="w-[400px]">
            <Image
                src={menu.image}
                alt={menu.title}
                width={400}
                height={467}
                className="w-full h-[467px] rounded-2xl object-cover"
            />
            </div>


            <p className="text-xs font-normal uppercase tracking-wider text-[#F15E01] mt-4">
                {menu.category}
            </p>

              <h3 className="text-xl font-medium text-[#583120] mt-2">
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
        <button className="bg-[#843919] text-white px-6 py-4 rounded-4xl hover:bg-[#5A3E2C] transition">
          Explore Full Menu
        </button>
      </div>
    </section>
  );
}