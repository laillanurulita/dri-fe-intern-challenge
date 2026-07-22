import Image from "next/image";

export default function Ambience() {
  return (
    <section className="bg-[#FCFAF8] py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-5 text-xs font-normal text-[#F15E01]">
            AMBIENCE
          </p>

          <h2 className="mb-6 font-serif font-medium text-4xl text-[#2A1A0B]">
            Where Moments Happen
          </h2>

          <p className="max-w-3xl text-sm font-normal leading-8 text-[#737373]">
            A space designed for those who appreciate the finer details. From
            the natural light that fills our space to the carefully curated
            seating arrangements, every element is crafted to create an
            atmosphere of comfort and inspiration.
          </p>
        </div>

        {/* Gallery */}
       <div className="grid grid-cols-12 gap-4">
          {/* Gambar besar kiri */}
          <div className="col-span-8 row-span-2">
            <Image
                src="/images/galerry1.jpg"
                alt=""
                width={784}
                height={784}
                className="h-[784px] w-full rounded-xl object-cover"
            />
            </div>

          {/* Kanan atas */}
          <div className="col-span-4">
            <Image
                src="/images/galerry2.jpg"
                alt=""
                width={384}
                height={384}
                 className="h-[384px] w-full rounded-xl object-cover"
            />
            </div>

          {/* Kanan tengah */}
          <div className="col-span-4">
              <Image
                src="/images/galerry3.jpg"
                alt="Coffee Shop"
                width={384}
                height={384}
                  className="h-[384px] w-full rounded-xl object-cover"
              />
            </div>
          {/* Bawah kiri */}
          <div className="col-span-4">
              <Image
                src="/images/galerry6.jpg"
                alt="Coffee Shop"
                width={384}
                height={384}
                  className="h-[384px] w-full rounded-xl object-cover"
              />
            </div>

          {/* Bawah tengah */}
          <div className="col-span-4">
              <Image
                src="/images/galerry5.jpg"
                alt="Roastery"
                width={384}
                height={384}
                  className="h-[384px] w-full rounded-xl object-cover"
              />
            </div>

          {/* Bawah kanan */}
          <div className="col-span-4">
              <Image
                src="/images/galerry4.jpg"
                alt="Coffee Bar"
                width={384}
                height={384}
             className="h-[384px] w-full rounded-xl object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
}