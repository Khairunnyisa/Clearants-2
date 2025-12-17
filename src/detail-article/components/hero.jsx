export default function DetailHero() {
  return (
    <section className="w-full bg-white">
      {/* HERO HEADER */}
      <div className="bg-[#E9F0F9] pt-12 pb-[400px]">
        <div className="max-w-5xl mx-auto text-center px-6 md:px-12">
          <p className="text-gray-600 text-sm mb-4">
            <span className="opacity-70">Article</span>
            <span className="mx-2">›</span>
            <span className="font-medium">Article Title</span>
          </p>

          <h1 className="font-subtitle md:text-5xl  mb-6 leading-tight">
            Lorem ipsum dolor sit amet, consectetur elit.
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-3 h-3 font-desc bg-green-400 rounded-full"></span>
              Application Security
            </span>

            <span className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              November 12, 2023
            </span>

            <span className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5.5 19a6.5 6.5 0 0113 0M12 11a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
              Writer Name
            </span>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative -mt-75 z-10">
        <div className="rounded-sm overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200"
            alt="Article Cover"
            className="w-full h-[520px] md:h-[620px] object-cover"
          />
        </div>
      </div>

     
    </section>
  );
}
