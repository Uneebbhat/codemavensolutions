import AboutUsSection from "@/components/Home/AboutUsSection";
import HireUsOnUpworkSection from "@/components/Home/HireUsOnUpworkSection";
import MainSection from "@/components/Home/MainSection";
import OurProcessSection from "@/components/Home/OurProcessSection";
import OurProjectSection from "@/components/Home/OurProjectSection";
import OurServicesSection from "@/components/Home/OurServicesSection";
import TechStackSlider from "@/components/Home/TechStackSlider";

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutUsSection />
      <OurServicesSection />
      <TechStackSlider />
      <OurProjectSection />
      <HireUsOnUpworkSection />
      <OurProcessSection />
    </>
  );
}
