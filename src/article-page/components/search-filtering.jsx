import { Search } from "lucide-react";
import useGetArticleCategories from "../../hooks/queries/article/getArticleCategory";

function SectionCard({ children }) {
  return <div className="bg-white p-4 rounded-xl grey-outline">{children}</div>;
}

function ListFilter({
  title,
  items,
  selectedCategories,
  setSelectedCategories,
}) {
  const handleChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <SectionCard>
      <h3 className="font-subtitle2 secondary mb-3">{title}</h3>
      <hr className="mb-5 secondary" />

      <div className="space-y-3 font-desc secondary">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <span>{item.attributes.label}</span>
              <span className="secondary">
                ({item.attributes.articles?.data?.length || 0})
              </span>
            </label>

            <input
              type="checkbox"
              checked={selectedCategories.includes(item.id)}
             onChange={() => handleChange(item.id)}
              className="w-4 h-4 accent-blue-600 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default function Filtering({
  searchValue,
  setSearchValue,
  selectedCategories,
  setSelectedCategories,
}) {
  const { data: articlesCategories } = useGetArticleCategories({
    condition: true,
  });

  return (
    <aside className="w-full lg:w-[360px] flex-shrink-0 space-y-6">
      <div className="flex items-center gap-2 bg-white grey-outline px-3 py-5 rounded-lg">
        <Search size={18} className="secondary" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search article title..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      <ListFilter
        title="Kategori"
        items={articlesCategories || []}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </aside>
  );
}
