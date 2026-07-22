import Image from "next/image";

export default function Ambience() {
  return (
    <section className="bg-[#FCFAF8] py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-5 text-xs font-normal text-[#F15E01]">
            AMBIENCE
          </p>

          <h2 className="mb-6 font-playfair text-3xl font-medium text-[#2A1A0B] md:text-4xl">
            Where Moments Happen
          </h2>

          <p className="max-w-3xl text-sm leading-8 text-[#737373]">
            A space designed for those who appreciate the finer details. From
            the natural light that fills our space to the carefully curated
            seating arrangements, every element is crafted to create an
            atmosphere of comfort and inspiration.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Gambar besar */}
          <div className="lg:col-span-8">
            <Image
              src="/images/galerry1.jpg"
              alt=""
              width={784}
              height={784}
              className="h-[350px] w-full rounded-xl object-cover sm:h-[500px] lg:h-[784px] animate-wiggle"
            />
          </div>

          {/* Kanan */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            <Image
              src="/images/galerry2.jpg"
              alt=""
              width={384}
              height={384}
              className="h-[250px] w-full rounded-xl object-cover sm:h-[300px] lg:h-[384px] animate-wiggle"
            />

            <Image
              src="/images/galerry3.jpg"
              alt=""
              width={384}
              height={384}
              className="h-[250px] w-full rounded-xl object-cover sm:h-[300px] lg:h-[384px] animate-wiggle"
            />
          </div>

          {/* Bawah */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3">
            <Image
              src="/images/galerry6.jpg"
              alt=""
              width={384}
              height={384}
              className="h-[250px] w-full rounded-xl object-cover sm:h-[300px] lg:h-[384px] animate-wiggle"
            />

            <Image
              src="/images/galerry5.jpg"
              alt=""
              width={384}
              height={384}
              className="h-[250px] w-full rounded-xl object-cover sm:h-[300px] lg:h-[384px] animate-wiggle"
            />

            <Image
              src="/images/galerry4.jpg"
              alt=""
              width={384}
              height={384}
              className="h-[250px] w-full rounded-xl object-cover sm:h-[300px] lg:h-[384px] animate-wiggle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}