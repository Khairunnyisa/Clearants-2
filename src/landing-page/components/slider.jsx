import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useGetArticles from "../../hooks/queries/article/getArticles";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const SliderSection = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const { data } = useGetArticles({
    condition: true,
    limit: 10,
    page: 1,
    searchValue: "",
  });

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <h2
          className="text-center text-[28px]
          sm:text-[32px]
          md:text-[45px] font-subtitle mb-12"
        >
          Explore <span className="primary">Idea & Insights</span>
        </h2>

        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">
          {/* LEFT BUTTON */}
          <button
            onClick={slideLeft}
            className="
              flex
              w-10 h-10 md:w-14 md:h-14
              rounded-full
              bg-red-500 text-white
              items-center justify-center
              hover:bg-red-600 transition
            "
          >
            <ChevronLeft size={20} className="md:hidden" />
            <ChevronLeft size={28} className="hidden md:block" />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="
              flex
              gap-6
              overflow-x-scroll
              scrollbar-hide
              scroll-smooth

              snap-x snap-mandatory

              px-[calc((110vw-85vw)/2)]
              md:px-0
            "
          >
            {data?.data?.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/article/${item.id}`)}
                className="
    flex-shrink-0
    snap-center

    w-[85vw] max-w-[320px]   /* mobile lebih kecil */
    md:min-w-[350px] md:max-w-[350px]

    bg-[#E9EFF5]
    rounded-2xl
    p-5
    shadow-sm
    cursor-pointer
    hover:shadow-lg
    transition
    scale-90 md:scale-100  /* mobile lebih kecil, desktop normal */
  "
              >
                <img
                  src={`https://cms.i3gis.id/${item.attributes.image.data[0].attributes.url}`}
                  className="w-full h-[200px] object-cover rounded-xl"
                  alt={item.attributes.title}
                />
                <p className="font-desc text-gray-700 mt-4">
                  {moment(item.attributes.publishedAt).format("MMM DD, YYYY")}
                </p>
                <h3 className="font-subtitle2 text-lg mt-2 line-clamp-2">
                  {item.attributes.title}
                </h3>
                <p className="font-desc secondary mt-3 line-clamp-3">
                  {item.attributes.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={slideRight}
            className="
              flex
              w-10 h-10 md:w-14 md:h-14
              rounded-full
              bg-red-500 text-white
              items-center justify-center
              hover:bg-red-600 transition
            "
          >
            <ChevronRight size={20} className="md:hidden" />
            <ChevronRight size={28} className="hidden md:block" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
