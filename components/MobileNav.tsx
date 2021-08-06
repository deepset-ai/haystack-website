import { useRouter } from "next/router";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export default function TWMobileNav({ menu = [] }: { menu: any }) {
  const router = useRouter();
  const [versionPath, setVersionPath] = useState<string>();
  const [isShowing, setIsShowing] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (router.query.slug && router.query.slug.length > 1) {
      setVersionPath(`${router.query.slug[0]}/`);
    } else {
      setVersionPath(undefined);
    }
  }, [router.query]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (isShowing) {
      disableBodyScroll(containerRef.current);
    } else {
      enableBodyScroll(containerRef.current);
    }
    return () => clearAllBodyScrollLocks();
  }, [isShowing]);

  return (
    <div className="sm:hidden" ref={containerRef}>
      <button
        onClick={() => setIsShowing((isShowing) => !isShowing)}
        className="fixed bottom-2 right-2 bg-dark-blue rounded-full p-4 z-10 shadow border border-off-white"
      >
        {isShowing ? (
          <XIcon className="text-off-white w-6 h-6" />
        ) : (
          <MenuAlt3Icon className="text-off-white w-6 h-6" />
        )}
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity ease-linear duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-0 left-0 bottom-0 p-3 bg-dark-blue text-medium-grey z-10 w-4/5 shadow-lg border-r-2 border-off-white overflow-y-scroll">
          <ol>
            {menu.map((submenu: any) => (
              <li key={submenu.subMenuTitle}>
                <p className="text-2xl text-white mb-3 font-medium">
                  {submenu.subMenuTitle}
                </p>
                <ol className="mb-8">
                  {submenu.items.map((item: any) => (
                    <li
                      key={item.title}
                      className={`mb-2 text-lg ${
                        router.asPath ===
                        `${submenu.pathPrefix}${
                          versionPath ? versionPath : ""
                        }${item.slug}`
                          ? "text-yellow-dark-theme"
                          : "hover:text-light-grey"
                      }`}
                    >
                      <Link
                        href={`${submenu.pathPrefix}${
                          versionPath ? versionPath : ""
                        }${item.slug}`}
                      >
                        <a
                          href={`${submenu.pathPrefix}${
                            versionPath ? versionPath : ""
                          }${item.slug}`}
                        >
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </Transition>
    </div>
  );
}
