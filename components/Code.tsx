import Highlight, { defaultProps } from "prism-react-renderer";

export default function Code({ children }: { children: string }) {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language="python"
      theme={undefined}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <code className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
}
