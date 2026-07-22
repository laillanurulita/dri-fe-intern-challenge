import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex h-[100px] max-w-screen-2xl items-center justify-between px-20 py-5">
        {/* Logo */}
        <Image
        src="/images/Logo.png"
        alt="Coffee Shop Logo"
        width={64}
        height={64}
        />

        {/* Button */}
        <button className="rounded-[20px] bg-[#843919] hover:bg-[#5A3E2C] px-4 py-2 text-sm text-white">
          Visit Us
        </button>
      </div>
    </nav>
  );
}