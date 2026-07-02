import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import WhyWebsite from "../sections/WhyWebsite";
import OwnYourPractice from "../sections/OwnYourPractice";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../components/layout/Footer";
import Founder from "../sections/Founder";

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <WhyWebsite />
        <OwnYourPractice />
        <Services />
        <Portfolio />
        <Founder />
        <Testimonials />
        <CTA />
        <Footer />
    </>
  );
};

export default Home;