import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderSection = () => {
  const sliderRef = useRef(null);

  const ideas = [
    {
      id: 1,
      title: "Lorem ipsum he le consectetur elit sit amet.",
      date: "APSEC - NOV 12, 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat volutpat, lectus amet commodo dolor venenatis venenatis, natoque....",
      image: "images/slider-1.png",
    },
    {
      id: 2,
      title: "Lorem ipsum he le consectetur elit sit amet.",
      date: "APSEC - NOV 12, 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat volutpat, lectus amet commodo dolor venenatis venenatis, natoque....",
      image: "images/slider-2.png",
    },
    {
      id: 3,
      title: "Lorem ipsum he le consectetur elit sit amet.",
      date: "APSEC - NOV 12, 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat volutpat, lectus amet commodo dolor venenatis venenatis, natoque....",
      image: "images/slider-3.png",
    },
  ];

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <h2 className="text-center font-subtitle mb-12">
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
            {ideas.map((item) => (
              <div
                key={item.id}
                className="min-w-[350px] max-w-[350px] 
                bg-[#E9EFF5] rounded-xl p-5 shadow-sm"
              >
                <img
                  src={item.image}
                  className="w-full h-[200px] object-cover rounded-lg"
                  alt={item.title}
                />

                <p className="font-desc text-gray-700 mt-4">{item.date}</p>

                <h3 className="font-subtitle2 text-lg mt-2">{item.title}</h3>

                <p className="font-desc secondary mt-3">{item.desc}</p>
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
