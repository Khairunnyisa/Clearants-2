
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
    <section className="w-full py-20 px-20 relative">
      <h2 className="text-center font-subtitle mb-12">
        Explore <span className="primary">Idea & Insights</span>
      </h2>

      <div className="relative w-full flex items-center justify-center">

        <button
          onClick={slideLeft}
          className="absolute left-0 z-10 w-15 h-15 rounded-full bg-red-500 white flex items-center justify-center hover:bg-red-600 transition"
        >
          <ChevronLeft size={30} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {ideas.map((item) => (
            <div
              key={item.id}
              className="min-w-[350px] max-w-[350px] bg-[#E9EFF5] rounded-xl p-5 shadow-sm"
            >
              <img
                src={item.image}
                className="w-full h-[200px] object-cover rounded-lg"
              />

              <p className="font-desc text-gray-700 mt-4">{item.date}</p>

              <h3 className="fonts-subtitle2 text-lg mt-2">
                {item.title}
              </h3>

              <p className="font-desc secondary mt-3 ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={slideRight}
          className="absolute right-0 z-10 w-15 h-15 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default SliderSection;
