import { useNavigate } from "react-router-dom";
import useGetArticles from "../../hooks/queries/article/getArticles";
import moment from "moment/moment";

export default function ArticleList() {
  const navigate = useNavigate();

  const { data } = useGetArticles({
    condition: true,
    limit: 9,
    page: 1,
    searchValue: "",
  });

  return (
    <div className="flex-1">
      <div className="space-y-5">
        {data?.data?.map((item) => (
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
                  e.stopPropagation(); // biar tidak trigger klik card
                  navigate(`/article/${item.id}`);
                }}
              >
                Selengkapnya
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-600 flex items-center justify-between">
        <p>Showing 1 to 8 of 8 entries</p>
        <p>Row per page: 10 • 1–10 of 20</p>
      </div>
    </div>
  );
}
