import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/sections/hero";
import Mark from "@/components/sections/mark";
import SignatureMenu from "@/components/sections/signature";
import Contact from "@/components/sections/contact";
import AboutUs from "@/components/sections/aboutus";
import Services from "@/components/sections/services";
import Ambience from "@/components/sections/ambience";


export default function Home() {
  return (
    <>
      <Navbar />

       <main>
        <Hero />
        <Mark />
        <SignatureMenu />
        <Services />
        <Ambience />
        <AboutUs />
        <Contact />
      </main>


      <Footer />
    </>
  );
}