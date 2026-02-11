import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";

const MarkdownComponent = ({ markdown }) => {
  return (
    <div
      className="
        prose prose-lg max-w-none prose-gray
        prose-p:my-4
        prose-p:leading-relaxed
        prose-li:my-2
        prose-ol:pl-6
        prose-ul:pl-6
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

MarkdownComponent.propTypes = {
  markdown: PropTypes.string,
};

export default MarkdownComponent;
