import { useRouter } from "next/router";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useMemo, useCallback, useState, useEffect, useRef } from "react";
import { XIcon, MenuAlt3Icon,ChevronRightIcon } from "@heroicons/react/solid";
// import {
//   disableBodyScroll,
//   enableBodyScroll,
//   clearAllBodyScrollLocks,
// } from "body-scroll-lock";

export default function TWMobileNav({ menu = [] }: { menu: any }) {
  const router = useRouter();
  const [versionPath, setVersionPath] = useState<string>();
  const [isShowing, setIsShowing] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initialMenuState = useMemo(() => {
    const currentIndex = menu.map((menuItem: any) => menuItem.pathPrefix).indexOf(`/${router.asPath.split('/')[1]}/`);
    const arr = new Array(menu.length).fill(false);
    arr[currentIndex] = true;
    return arr
  }, [menu, router]);

  const [menuState, setMenuState] = useState<boolean[]>(initialMenuState);

  const toggleMenuState = useCallback((index: number) => {
    setMenuState((oldValue: boolean[]) => {
      const newValue = [...oldValue];
      newValue[index] = !newValue[index];
      return newValue;
    })
  }, [setMenuState]);

  useEffect(() => {
    if (router.query.slug && router.query.slug.length > 1) {
      setVersionPath(`${router.query.slug[0]}/`);
    } else {
      setVersionPath(undefined);
    }
    if (isShowing) {
      setIsShowing(false);
    }
  }, [router.query]);

  // TODO: uncomment again, once we identified the issue on iOS Safari
  // useEffect(() => {
  //   if (!containerRef.current) return;
  //   if (isShowing) {
  //     disableBodyScroll(containerRef.current);
  //   } else {
  //     enableBodyScroll(containerRef.current);
  //   }
  //   return () => clearAllBodyScrollLocks();
  // }, [isShowing]);

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
            {menu.map((submenu: any, index: number) => (
              <li key={submenu.subMenuTitle}>
                <button className="flex justify-between items-center w-full text-xl text-white mb-3 font-medium" onClick={() => toggleMenuState(index)}>
                  {submenu.subMenuTitle}<ChevronRightIcon className={`${menuState[index] ? 'transform rotate-90' : ''} w-5 h-5`}/>
                </button>
                <ol className={menuState[index] ? "mb-8" : "mb-8 hidden"}>
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
