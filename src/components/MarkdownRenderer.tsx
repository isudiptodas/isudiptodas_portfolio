// MarkdownRenderer.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Components } from "react-markdown";

type Props = {
  content: string;
};

const components: Components = {
  code({ className, children, ...props }) {
    const isBlock = typeof className === "string" && className.startsWith("language-");

    if (!isBlock) {
      return (
        <code className="inline-code" {...props}>
          {children}
        </code>
      );
    }

    return (
      <pre className="code-block">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}