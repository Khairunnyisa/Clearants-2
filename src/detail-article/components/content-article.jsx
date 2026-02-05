import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ContentArticle({ data }) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-14 pb-24">
        <div className="markdown-container text-gray-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data?.data?.attributes?.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
