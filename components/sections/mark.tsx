import Image from "next/image";

export default function Mark() {
  return (
    <section className="py-28 px-20 text-center">

      <div className="flex justify-center gap-2 mb-6">
        {[1,2,3,4,5].map((item) => (
          <Image
            key={item}
            src="/icons/star.png"
            alt="star"
            width={20}
            height={20}
          />
        ))}
      </div>

      <h2 className="text-4xl md:text-5xl font-medium text-[#2A1A0B]">
        Loved by Coffee Lovers & Creatives
      </h2>

      <p className="mt-4 text-[#6B6B6B] text-base font-normal ">
        Top-rated hangout spot in the city
      </p>

    </section>
  );
}