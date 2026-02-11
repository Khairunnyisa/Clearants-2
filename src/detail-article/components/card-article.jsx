import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import useGetArticles from "../../hooks/queries/article/getArticles";
import { motion, useAnimation } from "framer-motion";

export default function CardDetailArticle() {
  const navigate = useNavigate();
  const controls = useAnimation();

  const { data } = useGetArticles({
    condition: true,
    limit: 10,
    page: 1,
    searchValue: "",
  });

  const articles = data?.data || [];

  useEffect(() => {
    if (!articles.length) return;

    controls.start({
      x: "-50%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [articles, controls]);

  return (
    <section className="py-16 overflow-hidden">
      <h2 className="text-center font-subtitle mb-10">Read More</h2>

      <div className="relative w-full ">
        <motion.div
          className="flex gap-6 w-max"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: "-50%",
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              },
            })
          }
        >
          {[...articles, ...articles].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              onClick={() => navigate(`/article/${item.id}`)}
              whileHover={{ y: -8 }}          
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                bg-[#E9EFF5]
                rounded-2xl
                p-5
                cursor-pointer
                shadow-sm
                hover:shadow-lg
                w-[320px]
                flex-shrink-0
              "
            >
              <img
                src={`https://cms.i3gis.id/${item.attributes.image.data[0].attributes.url}`}
                alt={item.attributes.title}
                className="w-full h-[180px] object-cover rounded-xl"
              />

              <p className="font-desc text-gray-600 mt-4 text-sm">
                {moment(item.attributes.publishedAt).format("MMM DD, YYYY")}
              </p>

              <h3 className="font-subtitle2 text-[16px] mt-2 line-clamp-2">
                {item.attributes.title}
              </h3>

              <p className="font-desc secondary mt-3 line-clamp-3 text-sm">
                {item.attributes.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/article")}
          className="font-subtitle2 text-[18px] hover:underline inline-flex items-center gap-2"
        >
          View More →
        </button>
      </div>
    </section>
  );
}
