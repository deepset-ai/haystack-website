import Link from "next/link";
import { PencilAltIcon } from "@heroicons/react/solid";
import { StaticPageProps } from "lib/utils";

type TocProps = Pick<StaticPageProps, "toc" | "editOnGitHubLink" | "stars">;

export default function Toc({ stars, editOnGitHubLink, toc }: TocProps) {
  return (
    <div className="sticky top-20 lg:block hidden w-60 2xl:w-80 pl-10 break-words">
      <Link href="https://github.com/deepset-ai/haystack">
        <a
          href="https://github.com/deepset-ai/haystack"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-8"
        >
          <div className="flex items-center text-medium-grey hover:text-dark-grey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              role="img"
              aria-label="GitHub logo"
              focusable="false"
              className="w-6 fill-current mr-2"
            >
              <path
                d="M10 0C4.48 0 0 4.59 0 10.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.5l-.01-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.25-4.55-1.13-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.09-2.71 0 0 .84-.28 2.75 1.05a9.43 9.43 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71a4.02 4.02 0 011.03 2.75c0 3.94-2.34 4.8-4.57 5.06.36.31.68.94.68 1.9l-.01 2.81c0 .28.18.59.69.49a10.23 10.23 0 006.83-9.72A10.12 10.12 0 0010 0z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg mr-2 font-bold">Stars</p>
            <span className="mr-2 text-2xl text-dark-grey">|</span>
            <p className="text-lg font-bold">{stars}</p>
          </div>
        </a>
      </Link>
      {editOnGitHubLink && (
        <Link href={editOnGitHubLink}>
          <a
            href={editOnGitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-10"
          >
            <div className="border-2 border-gray-400 hover:border-gray-700 rounded px-4 py-2 hover:cursor-pointer text-sm flex items-center justify-center">
              <PencilAltIcon className="hidden h-5 w-5 mr-1 sm:block dark:text-off-white" />
              <span className="hidden sm:block dark:text-off-white">
                Edit on GitHub
              </span>
            </div>
          </a>
        </Link>
      )}
      {toc && (
      <ul className="border-l-4 pl-4">
        {toc?.map((c) => (
          c.level < 3 && (
          <li
            key={c.text}
            className={`mb-3 text-gray-400 hover:text-gray-700 ${
              c.level === 3 && "pl-6"
            } ${c.level === 4 && "pl-9"} first:pl-0`}
          >
            <a href={`#${c.link}`}>{c.text}</a>
          </li>
          )
        ))}
      </ul>
      )}
    </div>
  );
}
