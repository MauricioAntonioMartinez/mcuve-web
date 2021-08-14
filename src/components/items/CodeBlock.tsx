import Highlight, { defaultProps, Language } from "prism-react-renderer";
import React from "react";

interface Props {
  className: string;
}

export const CodeBlock: React.FC<Props> = ({ className, children }) => {
  const language = className.replace(/language-/, "") as Language;

  return (
    <Highlight {...defaultProps} code={children as string} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "20px", overflowX: "scroll" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
