import React from "react";

const articles = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    date: "APPSEC - NOV 12, 2023",
    title: "Lorem ipsum he le consectetur elit sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat volutpat...",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1604076913837-52ab5629fba3?q=80&w=1200",
    date: "APPSEC - NOV 12, 2023",
    title: "Lorem ipsum he le consectetur elit sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat volutpat...",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
    date: "APPSEC - NOV 12, 2023",
    title: "Lorem ipsum he le consectetur elit sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat volutpat...",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    date: "APPSEC - NOV 12, 2023",
    title: "Lorem ipsum he le consectetur elit sit amet.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat volutpat...",
  },
];

export default function CardDetailArticle() {
  return (
    <section className="py-10">
      <h2 className="text-center font-subtitle mb-8">Read More</h2>

      <div className="relative overflow-hidden">
        {/* wrapper untuk scroll */}
        <div className="flex w-max animate-marquee gap-6">
          {[...articles, ...articles].map((item, index) => (
            <div
              key={index}
              className="w-[280px] bg-[#061025] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt=""
                className="h-40 w-full object-cover"
              />

              <div className="p-4 text-white">
                <p className="text-xs opacity-70 mb-2">{item.date}</p>
                <h3 className="font-semibold leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80 line-clamp-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="font-subtitle2 hover:underline flex items-center justify-center gap-2 mx-auto">
          View More →
        </button>
      </div>
    </section>
  );
}
