import ArticleHero from "./components/hero";
import LeftFilter from "./components/search-filtering";
import ArticleList from "./components/article-list";
import Navbar from "../navbar";
import Footer from "../landing-page/components/footer";

export function MainArticle() {
  return (
    <div className="min-h-screen w-full light-secondary">
      <Navbar/>
     
      <ArticleHero />

      <div className="px-15  flex gap-8">
        <LeftFilter />
        <ArticleList />
      </div>

      <Footer/>
    </div>
  );
}
