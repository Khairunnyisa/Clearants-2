import AsocSection from "./components/asoc";
import CdIntegration from "./components/cd-integration";
import ContactSection from "./components/contact";
import FAQSection from "./components/faq";
import Hero from "./components/hero";
import ModulesSection from "./components/module/module-section";
import Reports from "./components/reports";
import SliderSection from "./components/slider";
import WhyChoose from "./components/why-choose";

export function MainLanding() {
  return (
    <>
      <Hero />
      <ModulesSection />
      <CdIntegration />
      <Reports />
      <WhyChoose />
      <SliderSection />
      <AsocSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
