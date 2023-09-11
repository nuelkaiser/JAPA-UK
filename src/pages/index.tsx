import Header from "@/components/header/Header";
import TravelWithUs from "@/components/travel/TravelWithUs";
import Story from '@/components/story/Story';
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <TravelWithUs />
      <Story />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
