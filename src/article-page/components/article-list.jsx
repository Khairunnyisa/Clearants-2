import { useNavigate } from "react-router-dom";
import useGetArticles from "../../hooks/queries/article/getArticles";
import moment from "moment";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function ArticleList({ searchValue }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetArticles({
    condition: true,
    limit: 4,
    page,
    searchValue: searchValue,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const articles = data?.data || [];

  return (
    <div className="flex-1">
      <div className="space-y-5">
        {articles.map((item) => (
          <div
            key={item.id}
            className="bg-white grey-outline rounded-xl overflow-hidden flex h-[180px] cursor-pointer"
            onClick={() => navigate(`/article/${item.id}`)}
          >
            {/* Image */}
            <img
              src={`https://cms.i3gis.id/${item.attributes.image.data[0].attributes.url}`}
              className="w-[220px] h-full object-cover"
              alt=""
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between">
              <p className="font-desc text-gray-400">
                {moment(item.attributes.publishedAt).format("LLLL")}
              </p>

              <h2 className="font-subtitle2 mt-1 line-clamp-2">
                {item.attributes.title}
              </h2>

              <p className="font-desc mt-1 line-clamp-3">
                {item.attributes.description}
              </p>

              <span
                className="mt-2 primary font-desc cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/article/${item.id}`);
                }}
              >
                Selengkapnya
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-6 text-sm text-gray-600 flex items-center justify-between">
        <p>
          Page {page} of {data?.meta?.pagination?.pageCount}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded disabled:opacity-40"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= data?.meta?.pagination?.pageCount}
            className="w-8 h-8 flex items-center justify-center rounded disabled:opacity-40"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
