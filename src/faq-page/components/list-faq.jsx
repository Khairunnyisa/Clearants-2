import React, { useState, useRef } from "react";
import useGetFAQs from "../../hooks/queries/getFAQs";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [page, setPage] = useState(1);
  const refs = useRef([]);

  const { data, isLoading, error } = useGetFAQs({
    condition: true,
    limit: 10,
    page: page,
    searchValue: "",
  });

  const faqs = data?.data ?? [];
  const pagination = data?.meta?.pagination;

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  if (isLoading) return <p>Loading FAQs...</p>;
  if (error) return <p>Gagal memuat FAQ</p>;

  const rows = [];
  for (let i = 0; i < faqs.length; i += 2) {
    rows.push([faqs[i], faqs[i + 1]]);
  }

  return (
    <div className="max-w-7xl mx-auto px-8 xl:px-0 mt-8 relative">
      <div className="flex flex-col gap-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {row.map((item, colIndex) => {
              if (!item) return <div key="empty" />;

              const originalIndex = rowIndex * 2 + colIndex;
              const isOpen = openIndex === originalIndex;

              return (
                <div
                  key={item.id}
                  className={`w-full transition-all duration-300 ${
                    isOpen
                      ? "bg-white p-7 shadow rounded-2xl"
                      : "bg-secondary p-6 rounded-2xl"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(originalIndex)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span
                      className={`font-desc font-medium ${
                        isOpen ? "text-black" : "text-gray-800"
                      }`}
                    >
                      {item.attributes.question}
                    </span>

                    <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full font-desc">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  <div
                    ref={(el) => (refs.current[originalIndex] = el)}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen
                        ? `${refs.current[originalIndex]?.scrollHeight}px`
                        : "0px",
                    }}
                  >
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {item.attributes.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-8 flex items-center justify-end gap-3 text-sm text-gray-600">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded disabled:opacity-40"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <span>
          Page {page} of {pagination?.pageCount ?? 1}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= pagination?.pageCount}
          className="w-8 h-8 flex items-center justify-center rounded disabled:opacity-40"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FaqList;
