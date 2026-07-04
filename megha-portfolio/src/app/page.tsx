import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import IndexRail from "@/components/IndexRail";

export default function Home() {
  return (
    <>
      <IndexRail />
      <Header />
      <main>
        <Hero />
        <Work />
        <Process />
        <Services />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
