import { useNavigate } from "react-router-dom";

export default function ArticleList() {
  const dummy = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  return (
    <div className="flex-1">
      <div className="space-y-5">
        {dummy.map((item) => (
          <div
            key={item}
            className="bg-white grey-outline rounded-xl overflow-hidden flex h-[180px] cursor-pointer"
            onClick={() => navigate("/detail-article")}
          >
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600"
              className="w-[220px] h-full object-cover"
              alt=""
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between">
              <p className="font-desc text-gray-400">
                Januari 12, 2025 - November 12, 2025
              </p>

              <h2 className="font-subtitle2 mt-1 line-clamp-2">
                Lorem ipsum he le consectetur elit sit amet.
              </h2>

              <p className="font-desc mt-1 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat volutpat, lectus amet commodo dolor venenatis...
              </p>

              <span
                className="mt-2 primary font-desc cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // biar tidak trigger klik card
                  navigate("/detail-article");
                }}
              >
                Selengkapnya
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-600 flex items-center justify-between">
        <p>Showing 1 to 8 of 8 entries</p>
        <p>Row per page: 10 • 1–10 of 20</p>
      </div>
    </div>
  );
}
