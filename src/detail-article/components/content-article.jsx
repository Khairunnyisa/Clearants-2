import MarkdownComponent from "./markdown-component";


export default function ContentArticle({ data }) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-14 pb-24">
        <div>
         <MarkdownComponent markdown={data?.data?.attributes?.content} />
        </div>
      </div>
    </section>
  );
}
