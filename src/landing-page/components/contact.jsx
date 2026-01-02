import CardBackgroundPath from "../../components/cards/cardBackgroundPath";

const ContactSection = () => {
  return (
    <section className="relative w-full mt-20 py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden rounded-[20px]">
        <div className="absolute inset-0 z-0">
          <CardBackgroundPath
            tabPosition="right"
            fill="#e2e8f0"
            borderRadius={20}
            heightCorner={40}
            tabWidth={50}
            tabStart={300}
          />
        </div>

        {/* content */}
        <div className="relative z-10 pb-12 pt-24 flex justify-between items-end">
          <div className="flex-1">
            <h2 className="font-subtitle leading-snug mb-10 max-w-xl">
              Interested in seeing{" "}
              <span className="text-red-500">Clearants</span> in flight?
            </h2>

            <div className="bg-white/70 p-8 rounded-2xl max-w-xl w-full relative z-20">
              {/* Menambahkan z-20 pada form agar pasti di atas gambar jika ada overlap */}
              <p className="font-medium mb-6 text-lg">Book a live demo!</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  className="w-full p-3 rounded-2xl shadow-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Name*"
                />
                <input
                  className="w-full p-3 rounded-2xl shadow-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Email*"
                />
              </div>

              <input
                className="w-full p-3 rounded-2xl shadow-sm bg-white/80 mt-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Company"
              />

              <textarea
                className="w-full p-3 rounded-2xl shadow-sm bg-white/80 mt-5 h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Description"
              />

              <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl">
                Request Live Demo
              </button>
            </div>
          </div>

          <div className="absolute bottom-[-20px] right-[-140px] z-0 pointer-events-none">
            <img
              src="images/ant-rocket.png"
              alt="Clearants Rocket Ant"
              className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[550px] object-contain drop-shadow-2xl transform transition-transform duration-500"
            />
            <div className="absolute bottom-[-50px] right-[-50px] md:bottom-[-100px] md:right-[-100px] -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none">
              <div className="absolute inset-0 bg-red-400/30 blur-[100px] rounded-full"></div>
              <div
                className="absolute inset-0 bg-red-200/40 rounded-full mix-blend-overlay opacity-80 blur-[30px]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
