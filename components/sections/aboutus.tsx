export default function AboutUs() {
  return (
    <section className="bg-[#F8F7F3] py-28 px-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Label */}
        <p className="mb-5 text-sm font-normal text-[#F15E01]">
          ABOUT US
        </p>

        {/* Heading */}
        <h2 className="max-w-2xl font-serif font-medium text-4xl leading-tight text-[#2A1A0B]">
          A place to connect, relax,
          <br />
          and create moments.
        </h2>

        {/* Description */}
        <p className="mt-10  text-sm font-normal leading-8 text-[#737373]">
          At Monkey Coffee Coffee, we believe every cup is an invitation to
          slow down and savor life's simple pleasures. Whether you're meeting a
          friend, working on your next big idea, or simply enjoying a quiet
          moment alone, our doors are open to those who appreciate the art of a
          well-crafted brew and the warmth of genuine community.
        </p>
      </div>
    </section>
  );
}