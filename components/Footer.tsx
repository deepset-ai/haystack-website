import { FC } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light-grey-BG text-medium-grey w-full px-3 py-6 sm:pl-64 sm:pr-8 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="flex mb-5 sm:m-0">
          <Link href="https://www.deepset.ai/imprint">
            <a
              target="_blank"
              href="https://www.deepset.ai/imprint"
              className="text-sm font-semibold mr-3 hover:text-dark-grey"
              rel="noopener noreferrer"
            >
              Imprint
            </a>
          </Link>
          <Link href="https://www.deepset.ai/privacy">
            <a
              target="_blank"
              href="https://www.deepset.ai/privacy"
              className="text-sm font-semibold hover:text-dark-grey"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </Link>
        </div>
        <div className="flex mb-5 sm:m-0">
          <a
            target="_blank"
            href="https://twitter.com/deepset_ai"
            className="mr-3 sm:mr-6"
            rel="noreferrer noopener"
            aria-label="Go to our Twitter page"
          >
            <AiOutlineTwitter className="h-9 w-9 hover:text-dark-grey" />
          </a>
          <a
            target="_blank"
            href="https://github.com/deepset-ai"
            className="mr-3 sm:mr-6"
            rel="noreferrer noopener"
            aria-label="Go to our GitHub page"
          >
            <AiFillGithub className="h-8 w-8 hover:text-dark-grey" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC5dfn9m310oyt-cbeegfvZw"
            rel="noreferrer noopener"
            aria-label="Go to our YouTube channel"
          >
            <AiFillYoutube className="h-9 w-9 hover:text-dark-grey" />
          </a>
        </div>
      </div>
      <p className="text-xs">© 2020 - {year} deepset. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
