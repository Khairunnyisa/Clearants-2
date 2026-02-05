import { useState } from "react";
import ArticleHero from "./components/hero";
import LeftFilter from "./components/search-filtering";
import ArticleList from "./components/article-list";
import useGetArticleCategories from "../hooks/queries/article/getArticleCategory";

export function MainArticle() {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState(""); 
  const { data: articlesCategories} = useGetArticleCategories({condition : true});
  const [selectedCategories, setSelectedCategories] = useState([]);
  

  return (
     <div className="min-h-screen w-full light-secondary">
      <ArticleHero />

      <div className="px-4 sm:px-8 lg:px-15 pb-10 flex flex-col lg:flex-row gap-8">
        <LeftFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <ArticleList
  searchValue={searchValue}
  selectedCategories={selectedCategories}
/>
      </div>
    </div>
  );
}
