const ContactSection = () => {
  return (
    <section className="relative w-full mt-20 py-40 px-6">
      <img
        src="images/contact-bg.png"
        alt="Background Shape"
        className="
          absolute inset-0 
          w-[75%] 
          h-auto 
          top-10 
          left-1/2 
          -translate-x-1/2
          pointer-events-none
          select-none
        "
      />

      <div className="relative z-10 max-w-7xl mt-10 mx-auto">
        <h2 className="font-subtitle leading-snug mb-10">
          Interested in seeing <span className="text-red-500">Clearants</span>{" "}
          in flight?
        </h2>

        <div className="bg-white/70 p-8 rounded-2xl max-w-2xl w-full">
          <p className="font-medium mb-6 text-lg">Book a live demo!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              className="w-full p-3 rounded-2xl shadow-sm border-0 bg-white/80 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Name*"
            />
            <input
              className="w-full p-3 rounded-2xl shadow-sm border-0 bg-white/80 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Email*"
            />
          </div>

          <input
            className="w-full p-3 rounded-2xl shadow-sm border-0 bg-white/80 mt-5 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Company"
          />

          <textarea
            className="w-full p-3 rounded-2xl shadow-sm border-0 bg-white/80 mt-5 h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Description"
          />

          <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl">
            Request Live Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
