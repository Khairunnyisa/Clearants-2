import ArticleHero from "./components/hero";
import LeftFilter from "./components/search-filtering";
import ArticleList from "./components/article-list";

export function MainArticle() {
  return (
    <div className="min-h-screen w-full light-secondary">
      <ArticleHero />

      <div className="px-15  flex gap-8">
        <LeftFilter />
        <ArticleList />
      </div>
    </div>
  );
}
