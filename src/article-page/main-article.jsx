import { useState } from "react";
import ArticleHero from "./components/hero";
import Filtering from "./components/search-filtering";
import ArticleList from "./components/article-list";

export function MainArticle() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="min-h-screen w-full light-secondary">
      <ArticleHero />

      <section className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT */}
            <Filtering
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />

            {/* RIGHT */}
            <ArticleList
              searchValue={searchValue}
              selectedCategories={selectedCategories}
            />

          </div>
        </div>
      </section>
    </div>
  );
}
