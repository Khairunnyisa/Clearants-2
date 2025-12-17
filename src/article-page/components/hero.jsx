export default function ArticleHero() {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      
      <div className="font-desc mx-auto text-gray-700 mt-6 flex items-center gap-2 text-lg md:text-xl">
        <p className="opacity-60">Home</p>
        <p>/</p>
        <p className="font-semibold">Articles</p>
      </div>

      <div className="mx-auto relative">
        <img
          src="images/content/article/hero-article.png"
          alt="Articles"
          className="w-full object-cover"
        />

        <h1 className="absolute bottom-8 left-10 font-subtitle white drop-shadow-lg">
          Articles
        </h1>
      </div>

    </section>
  );
}
