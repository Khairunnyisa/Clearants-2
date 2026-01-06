import CardDetailArticle from "./components/card-article";
import ContentArticle from "./components/content-article";
import DetailHero from "./components/hero";

export function DetailArticle() {
  return (
    <div className="min-h-screen w-full ">
      <DetailHero />
      <ContentArticle />
      <CardDetailArticle />
    </div>
  );
}
