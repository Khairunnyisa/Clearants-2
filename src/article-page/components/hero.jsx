import CardBackgroundPath from "../../components/cards/cardBackgroundPath";
import CardHeroArticle from "../../components/cards/cardHeroArticle";

export default function ArticleHero() {
  return (
    <section className="w-full pt-30 pb-20">
      
     
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <div className="font-desc text-gray-700 mt-6 flex items-center gap-2 text-lg md:text-xl">
          <p className="opacity-60">Home</p>
          <p>/</p>
          <p className="font-semibold">Articles</p>
        </div>
      </div>

   
      <div className="max-w-7xl mx-auto px-8 xl:px-0 mt-8 relative h-[360px]">
        <CardHeroArticle image="/images/content/article/hero-article.png" />

        <h1 className="absolute bottom-8 left-8 font-subtitle text-white drop-shadow-lg">
          Articles
        </h1>
      </div>

    </section>
  );
}
