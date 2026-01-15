import { useState } from "react";
import ArticleHero from "./components/hero";
import LeftFilter from "./components/search-filtering";
import ArticleList from "./components/article-list";

export function MainArticle() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen w-full light-secondary">
      <ArticleHero />

      <div className="px-4 sm:px-8 lg:px-15 pb-10 flex flex-col lg:flex-row gap-8">
        <LeftFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <ArticleList searchValue={searchValue} />
      </div>
    </div>
  );
}
