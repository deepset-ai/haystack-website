import Link from "next/link";
import VersionSelect from "./VersionSelect";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { SearchModal } from "./SearchModal";
import { SearchIcon } from "./SearchIcon";

type Props = {
  docsType: string;
};

export default function Header({ docsType = "haystack" }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleChange = () => {
    if (localStorage.theme === undefined) {
      localStorage.theme = "light";
      setDarkMode(false);
    }
    localStorage.theme === "light"
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  });

  return (
    <header className="sticky top-0 p-2 sm:px-6 sm:py-3 z-10 w-full xl:max-w-8xl mx-auto flex items-center justify-between bg-dark-blue border-b border-medium-grey dark:bg-black">
      <Link href="/" passHref>
        <div className="w-44 lg:w-60 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 184 47"
            role="img"
            focusable="false"
            aria-label="Haystack logo"
          >
            <path
              d="M61.91 11.64c-2.23 0-3.67 1.1-4.53 2.63V5.58c0-.28-.18-.46-.46-.46h-3.3c-.28 0-.46.18-.46.46v20.96c0 .28.18.46.46.46h3.3c.28 0 .46-.18.46-.46v-7.77c0-2.11 1.16-3.24 2.94-3.24 1.81 0 2.78 1.13 2.78 3.24v7.77c0 .28.18.46.46.46h3.27c.28 0 .49-.18.49-.46v-8.72c0-3.92-2.29-6.18-5.41-6.18zm14.78 15.73c2.23 0 3.86-.95 4.9-2.48l.06 1.65c0 .28.18.46.46.46h2.97c.28 0 .49-.18.49-.46V12.47c0-.28-.18-.46-.46-.46h-3c-.28 0-.46.18-.46.46l-.06 1.65c-1.01-1.56-2.63-2.48-4.9-2.48-4.22 0-7.13 3.43-7.13 7.86 0 4.47 2.91 7.87 7.13 7.87zm.89-3.86c-2.23 0-3.89-1.59-3.89-4.01 0-2.39 1.65-4.01 3.89-4.01s3.79 1.59 3.79 4.01-1.56 4.01-3.79 4.01zm17.05 9.3c.24 0 .46-.12.55-.37l7.93-19.92c.12-.34-.03-.52-.37-.52h-3.37c-.24 0-.46.12-.55.37l-3.55 9.73-3.58-9.73a.57.57 0 00-.55-.37h-3.37c-.34 0-.49.18-.37.52l5.78 14.5-2.17 5.26c-.15.34.03.52.37.52l3.25.01zm15.09-5.44c3 0 5.6-1.56 5.63-4.59.03-2.3-1.47-3.58-3.37-4.35l-2.11-.83c-.83-.31-1.44-.73-1.44-1.47 0-.64.46-1.19 1.44-1.19.89 0 1.74.43 2.72 1.25.28.21.49.24.7 0l1.35-1.62c.15-.18.21-.43.03-.64-1.26-1.5-3.06-2.3-5.02-2.3-2.78 0-5.23 1.65-5.23 4.53 0 2.08 1.35 3.34 3.27 4.1l1.9.77c1.1.46 1.56.83 1.56 1.56 0 .86-.67 1.25-1.68 1.25-1.16 0-2.2-.52-3.46-1.47-.24-.18-.52-.24-.76.12l-1.07 1.5c-.21.34-.25.67-.06.89 1.19 1.42 3.09 2.49 5.6 2.49zm14.01 0c1.01 0 2.54-.18 2.54-.89v-2.23c0-.31-.21-.46-.55-.43-.37.03-.67.03-.95.03-.79 0-1.32-.43-1.32-1.32v-7.25h2.36c.28 0 .46-.18.46-.46v-2.36c0-.28-.18-.46-.46-.46h-2.36V8.49c0-.28-.18-.46-.46-.46h-3.33c-.28 0-.46.18-.46.46v3.52h-1.9c-.28 0-.46.18-.46.46v2.36c0 .28.18.46.46.46h1.9V23c0 3.27 2.14 4.37 4.53 4.37zm11.45 0c2.23 0 3.86-.95 4.9-2.48l.06 1.65c0 .28.18.46.46.46h2.97c.27 0 .49-.18.49-.46V12.47c0-.28-.18-.46-.46-.46h-3c-.27 0-.46.18-.46.46l-.06 1.65c-1.01-1.56-2.63-2.48-4.9-2.48-4.22 0-7.13 3.43-7.13 7.86 0 4.47 2.91 7.87 7.13 7.87zm.89-3.86c-2.23 0-3.89-1.59-3.89-4.01 0-2.39 1.65-4.01 3.89-4.01 2.23 0 3.79 1.59 3.79 4.01s-1.56 4.01-3.79 4.01zm18.79 3.86c2.42 0 4.47-1.04 5.75-2.69.18-.21.12-.46-.06-.64l-1.84-1.81a.546.546 0 00-.79 0c-.83.83-1.71 1.25-2.88 1.25-2.48 0-4.04-1.84-4.04-4.04s1.56-3.92 3.95-3.92c1.22 0 2.11.43 2.94 1.25.21.21.55.24.8 0l1.84-1.81c.18-.18.25-.43.06-.64-1.29-1.65-3.34-2.69-5.81-2.69-4.5 0-7.83 3.37-7.83 7.8-.01 4.51 3.35 7.94 7.91 7.94zm12.5-.37c.28 0 .46-.18.46-.46v-3.18l1.87-2.11 4.04 5.48c.15.21.31.28.55.28h3.55c.37 0 .49-.24.28-.55l-5.88-8.11 5.08-5.78c.24-.31.15-.55-.25-.55h-3.76c-.21 0-.4.06-.55.24l-4.93 5.81V5.58c0-.28-.18-.46-.46-.46h-3.34c-.27 0-.46.18-.46.46v20.96c0 .28.18.46.46.46h3.34z"
              fill="#f3f3f7"
            />
            <path
              d="M57.88 44.18c2.06 0 3.48-1.67 3.48-3.86 0-2.17-1.42-3.85-3.48-3.85-1.02 0-1.78.38-2.28 1.03v-4c0-.14-.09-.23-.22-.23h-1.64c-.13 0-.22.09-.22.23v10.27c0 .14.1.23.24.23h1.47c.14 0 .23-.09.23-.23l.03-.81c.5.75 1.28 1.22 2.39 1.22zm-.43-1.89c-1.11 0-1.88-.78-1.88-1.97 0-1.18.76-1.97 1.88-1.97 1.08 0 1.89.8 1.89 1.97 0 1.19-.81 1.97-1.89 1.97zm7.9 4.56c.12 0 .22-.06.27-.18l3.88-9.76c.06-.17-.01-.26-.18-.26h-1.65c-.12 0-.23.06-.27.18l-1.74 4.77-1.76-4.77a.279.279 0 00-.27-.18h-1.65c-.16 0-.24.09-.18.26l2.83 7.11-1.06 2.58c-.07.17.02.26.18.26l1.6-.01zm11.55-2.67c1.09 0 1.89-.47 2.4-1.22l.03.81c0 .14.09.23.22.23h1.46c.13 0 .24-.09.24-.23V33.5c0-.14-.09-.23-.22-.23h-1.64c-.14 0-.22.09-.22.23v4c-.5-.66-1.25-1.03-2.26-1.03-2.07 0-3.5 1.68-3.5 3.85-.01 2.19 1.42 3.86 3.49 3.86zm.43-1.89c-1.1 0-1.9-.78-1.9-1.97 0-1.17.81-1.97 1.9-1.97s1.86.78 1.86 1.97-.76 1.97-1.86 1.97zm9.36 1.89c1.03 0 1.98-.3 2.61-.93.13-.12.15-.23.07-.33l-.56-.76c-.07-.1-.15-.12-.25-.06-.6.35-1.14.45-1.71.45-1.19 0-1.95-.51-2.18-1.44h4.47c.64 0 .81-.41.81-1.12 0-1.86-1.29-3.51-3.53-3.51-2.26 0-3.78 1.67-3.78 3.83.02 2.2 1.64 3.87 4.05 3.87zm-2.04-4.53c.18-.97.89-1.47 1.8-1.47.88 0 1.54.49 1.66 1.47h-3.46zm10.37 4.53c1.04 0 1.98-.3 2.61-.93.14-.12.15-.23.08-.33l-.56-.76c-.08-.1-.15-.12-.26-.06-.6.35-1.14.45-1.71.45-1.18 0-1.95-.51-2.18-1.44h4.47c.65 0 .81-.41.81-1.12 0-1.86-1.29-3.51-3.53-3.51-2.26 0-3.78 1.67-3.78 3.83.01 2.2 1.63 3.87 4.05 3.87zm-2.04-4.53c.18-.97.89-1.47 1.8-1.47.89 0 1.54.49 1.67 1.47h-3.47zm8.56 7.2c.13 0 .22-.09.22-.22v-3.5c.51.66 1.28 1.05 2.28 1.05 2.06 0 3.48-1.67 3.48-3.86 0-2.17-1.42-3.85-3.48-3.85-1.12 0-1.9.45-2.4 1.22l-.03-.81c0-.14-.09-.23-.22-.23H99.9c-.13 0-.22.09-.22.23v9.75c0 .13.09.22.22.22h1.64zm2.07-4.56c-1.11 0-1.88-.78-1.88-1.97 0-1.18.76-1.97 1.88-1.97 1.08 0 1.89.8 1.89 1.97 0 1.19-.82 1.97-1.89 1.97zm7.68 1.89c1.47 0 2.75-.77 2.76-2.25.01-1.12-.72-1.76-1.65-2.13l-1.04-.4c-.4-.15-.7-.36-.7-.72 0-.32.22-.58.7-.58.44 0 .86.21 1.34.61.13.1.24.12.34 0l.66-.79c.07-.09.1-.21.01-.32-.61-.74-1.5-1.12-2.46-1.12-1.36 0-2.57.81-2.57 2.22 0 1.02.66 1.63 1.61 2.01l.93.38c.54.23.76.41.76.77 0 .42-.33.61-.83.61-.57 0-1.08-.26-1.69-.72-.12-.09-.25-.12-.38.06l-.52.74c-.11.17-.12.33-.03.44.6.66 1.53 1.19 2.76 1.19zm7.82 0c1.04 0 1.98-.3 2.61-.93.14-.12.15-.23.07-.33l-.56-.76c-.07-.1-.15-.12-.25-.06-.6.35-1.14.45-1.71.45-1.18 0-1.95-.51-2.18-1.44h4.47c.65 0 .81-.41.81-1.12 0-1.86-1.29-3.51-3.53-3.51-2.26 0-3.78 1.67-3.78 3.83.02 2.2 1.64 3.87 4.05 3.87zm-2.04-4.53c.18-.97.89-1.47 1.8-1.47.89 0 1.54.49 1.67 1.47h-3.47zm9.48 4.53c.49 0 1.24-.09 1.24-.44v-1.1c0-.15-.1-.22-.27-.21-.18.01-.33.01-.47.01-.39 0-.64-.21-.64-.65v-3.56h1.15c.14 0 .22-.09.22-.22v-1.15c0-.14-.09-.23-.22-.23h-1.15v-1.72c0-.14-.09-.23-.22-.23h-1.64c-.14 0-.22.09-.22.23v1.72h-.93c-.14 0-.22.09-.22.23v1.15c0 .13.09.22.22.22h.93v3.78c0 1.63 1.05 2.17 2.22 2.17z"
              fill="#a0a0c0"
            />
            <path
              d="M3.56 0h29.88C35.41 0 37 1.59 37 3.56v39.88C37 45.4 35.41 47 33.44 47H3.56C1.59 47 0 45.4 0 43.44V3.56C0 1.59 1.59 0 3.56 0z"
              fill="#03af9d"
              className="haystack-logo_svg__green-area"
            />
            <path
              d="M7 18.51C7 12.15 12.16 7 18.52 7s11.52 5.16 11.52 11.52V35.5c0 .28-.22.5-.5.5-2.49 0-4.5-2.01-4.5-4.5V18.51c0-3.6-2.92-6.52-6.52-6.52S12 14.92 12 18.51v4.98c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5v-4a2.5 2.5 0 015 0v20c0 .28-.22.5-.5.5-2.49 0-4.5-2.01-4.5-4.5v-6c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5v2c0 2.49-2.01 4.5-4.5 4.5a.48.48 0 01-.5-.49V18.51z"
              fill="#f3f3f7"
            />
          </svg>
          <span className="sr-only">Haystack docs home page</span>
        </div>
      </Link>
      <div className="hidden lg:flex w-full justify-end">
        <div className="mr-8 xl:mr-12 2xl:mr-16">
          <Link href="/overview/intro">
            <div className="text-white font-bold lg:text-xl xl:text-2xl cursor-pointer">
              Haystack Docs
            </div>
          </Link>
        </div>
        {/* <div className="mr-8 xl:mr-12 2xl:mr-16">
          <Link href="/overview/get-started">
            <div className="text-white font-bold lg:text-xl xl:text-2xl cursor-pointer">
              Haystack Hub Docs
            </div>
          </Link>
        </div> */}
        <div className="mr-8 xl:mr-12 2xl:mr-16">
          <Link href="/benchmarks/latest">
            <div className="text-white font-bold lg:text-xl xl:text-2xl cursor-pointer">
              Benchmarks
            </div>
          </Link>
        </div>
        <div className="mr-8 xl:mr-12 2xl:mr-16">
          <Link href="/community/join">
            <div className="font-bold lg:text-xl xl:text-2xl cursor-pointer text-green-dark-theme">
              Join Slack
            </div>
          </Link>
        </div>
        <div className="mr-8 xl:mr-12 2xl:mr-16">
          <Link href="https://www.meetup.com/de-DE/open-nlp-meetup/">
            <a
              target="_blank"
              href="https://www.meetup.com/de-DE/open-nlp-meetup/"
              className="text-white font-bold lg:text-xl xl:text-2xl cursor-pointer text-green-dark-theme"
              rel="noopener noreferrer"
            >
              Join Open NLP
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex mr-8 xl:mr-12 2xl:mr-16">
        <button className="" onClick={() => setSearchModal(true)}>
          <SearchIcon />
        </button>
        <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
      </div>
      <div className="hidden lg:flex items-center mr-8 xl:mr-12 2xl:mr-16">
        <Switch
          checked={darkMode}
          onChange={handleChange}
          className="relative flex-shrink-0 flex items-center h-8 w-16 border-2 border-white rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span className="sr-only">Toggle dark mode</span>
          <span
            aria-hidden="true"
            className={`${darkMode ? "translate-x-8" : "translate-x-0"}
            p-1 bg-white border border-white pointer-events-none inline-block h-7 w-7 rounded-full shadow-lg transform transition ease-in-out duration-200`}
          >
            {darkMode ? (
              <SunIcon className="h-full w-full text-black" />
            ) : (
              <MoonIcon className="h-full w-full text-dark-blue" />
            )}
          </span>
        </Switch>
      </div>
      <VersionSelect docsType={docsType} />
    </header>
  );
}
