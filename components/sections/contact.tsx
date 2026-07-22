import Image from "next/image";

const contact = {
  address: `Jl. Kh. A. Dahlan No.3, RW.5, Darat Sekip, 
Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78117`,

  hours: "Everyday: 06:00 AM - 02:00 AM",

  phone: "+628 1234 5678 90",
};


export default function Contact() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-normal text-[#F15E01]">
            VISIT US
          </p>

          <h2 className="mb-12 font-playfair font-medium text-4xl text-[#2A1A0B] sm:text-5xl lg:text-6xl">
           Come say hello!
          </h2>

          <div className="space-y-8 text-sm text-[#737373]">
            <div>
              <h3 className="mb-2 text-xs text-[#2A1A0B]">
                ADDRESS
              </h3>
              <p className="max-w-sm whitespace-pre-line leading-7">{contact.address}</p>
            </div>

            <div>
              <h3 className="mb-2 text-xs text-[#2A1A0B]">
                HOURS
              </h3>
              <p>{contact.hours}</p>
            </div>

            <div>
              <h3 className="mb-2 text-xs text-[#2A1A0B]">
                Contact
              </h3>
              <p>{contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
            <Image
              src="/images/monkeyground.jpg"
              alt="Branding Coffee shop"
              width={480}
              height={715}
              className="h-auto w-full max-w-[480px] rounded-xl object-cover"
    
            />
          </div>
        </div>
    </section>
  );
}