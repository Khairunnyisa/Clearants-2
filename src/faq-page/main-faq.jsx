import FaqList from "./components/list-faq";
import TitleFaq from "./components/title";

export function Faq() {
  
  
  return (
    <div className="min-h-screen bg-[#E9EEF4] w-full py-20 ">
      <div className="mt-20">
        <TitleFaq />
      </div>
      
      <FaqList />
    </div>
  );
}
