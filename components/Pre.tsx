import { useEffect, useRef, useState, FC } from "react";
import classNames from "classnames";
import { copyToClipboard } from "lib/copyToClipboard";

type Props = {
  className: string;
};

const Pre: FC<Props> = ({ children, className, ...props }) => {
  const preRef = useRef<HTMLPreElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      copyToClipboard(preRef.current.innerText);
      setCopied(true);
    }
  };

  return (
    <div className="relative group shadow-lg bg-monokai-dark-grey p-4 mb-4 rounded">
      <div className="absolute bg-monokai-dark-grey flex items-center space-x-2 top-0 right-0 m-2">
        <span
          className={`${
            copied ? "flex" : "hidden"
          } pl-3 fade-in text-xs text-green-dark-theme`}
        >
          Copied!
        </span>

        <button
          type="button"
          aria-label="Copy to Clipboard"
          onClick={onClick}
          disabled={copied}
          className={classNames(
            "clipboard-button transition border rounded-md p-2 focus:outline-none group-hover:flex fade-in",
            {
              "text-green-dark-theme border-green-dark-theme": copied,
              "hover:border-off-white border-medium-grey focus:ring-4 focus:ring-green-dark-theme focus:ring-opacity-50":
                !copied,
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("h-4 w-4 pointer-events-none", {
              "text-medium-grey hover:text-off-white": !copied,
              "text-green-dark-theme": copied,
            })}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              className={classNames({ block: !copied, hidden: copied })}
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              className={classNames({ block: copied, hidden: !copied })}
            />
          </svg>
        </button>
      </div>
      <pre
        {...props}
        ref={preRef}
        className={classNames(className, "overflow-x-auto focus:outline-none")}
      >
        {children}
      </pre>
    </div>
  );
};

export default Pre;
