"use client"

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Components } from "react-markdown";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-node";

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
  useEffect(() => {
    Prism.highlightAll();
  }, [content]); 
  
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
