export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-20 py-28"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
         <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-6xl md:text-6xl font-medium leading-tight">
          Find Your Coffee, Bar & 
          <br/>Dining Escape
        </h1>

        <p className="mt-8 text-2xl md:text-xl text-white">
          A cozy space to sip, work, and connect.
        </p>


        <button
          className="
            mt-8 
            bg-white 
            text-[#2A1A0B] 
            px-6 
            py-4 
            rounded-[36px] 
            font-medium
            hover:bg-gray-200
            transition
          "
        >
          CHECK OUR MENUS
        </button>

      </div>

    </section>
  );
}