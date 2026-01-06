import FaqList from "./components/list-faq";
import TitleFaq from "./components/title";

export function Faq() {
  return (
    <div className="min-h-screen bg-[#E9EEF4] w-full pt-24">
      <TitleFaq />
      <FaqList />
    </div>
  );
}
