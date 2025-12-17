import Footer from "../landing-page/components/footer";
import Navbar from "../navbar";
import FaqList from "./components/list-faq";
import TitleFaq from "./components/title";

export function Faq() {
  return (
    <div className="min-h-screen bg-[#E9EEF4] w-full pt-24">
      <Navbar />
      <TitleFaq />
      <FaqList/>
      <Footer/>
    </div>
  );
}
