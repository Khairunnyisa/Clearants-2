import Footer from "../landing-page/components/footer";
import Navbar from "../navbar";
import CardDetailArticle from "./components/card-article";
import ContentArticle from "./components/content-article";
import DetailHero from "./components/hero";

export function DetailArticle() {
  return (
     <div className="min-h-screen w-full ">  
        <Navbar />
        <DetailHero />
        <ContentArticle />
        <CardDetailArticle />
        <Footer />
    </div>
  );
}
