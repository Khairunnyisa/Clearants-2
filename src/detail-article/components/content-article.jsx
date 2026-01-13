export default function ContentArticle({ data }) {
  return (
    <section className="w-full bg-white">
      {/* ARTICLE CONTENT */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-14 pb-24">
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            {data?.data?.attributes?.content}
            
          </p>
        </div>
        
       
      </div>
    </section>
  );
}
