import React, { useRef, useState } from "react";
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
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <h2
          className="text-center text-[28px]
    sm:text-[32px]
    md:text-[45px] font-subtitle mb-12"
        >
          Explore <span className="primary">Idea & Insights</span>
        </h2>

        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6">
          <button
            onClick={slideLeft}
            className="hidden md:flex w-14 h-14 rounded-full 
            bg-red-500 text-white items-center justify-center 
            hover:bg-red-600 transition"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-10 overflow-x-scroll scrollbar-hide scroll-smooth"
          >
            {data?.data?.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/article/${item.id}`)}
                className="min-w-[350px] max-w-[350px]
                   bg-[#E9EFF5] rounded-xl p-5 shadow-sm
                   cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={`https://cms.i3gis.id/${item.attributes.image.data[0].attributes.url}`}
                  className="w-full h-[200px] object-cover rounded-lg"
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

          <button
            onClick={slideRight}
            className="hidden md:flex w-14 h-14 rounded-full 
            bg-red-500 text-white items-center justify-center 
            hover:bg-red-600 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
