import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useMemo } from "react";

type Props = {
  menu: any;
};

export default function Sidebar({ menu = [] }: Props) {
  const router = useRouter();
  const [versionPath, setVersionPath] = useState<string>();
  
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
  }, [router.query]);

  return (
    <div className="fixed inset-0 p-6 pt-24 w-60 bg-dark-blue sm:block hidden overflow-y-scroll text-medium-grey dark:bg-black">
      <ol>
        {menu.map((submenu: any, index: number) => (
          <li key={submenu.subMenuTitle}>
            <button className="text-xl text-white mb-3 font-medium" onClick={() => toggleMenuState(index)}>
              {submenu.subMenuTitle}
            </button>
            <ol className={menuState[index] ? "mb-8" : "mb-8 hidden"}>
              {submenu.items.map((item: any) => (
                <li
                  key={item.title}
                  className={`mb-2 ${router.asPath ===
                      `${submenu.pathPrefix}${versionPath ? versionPath : ""}${item.slug
                      }`
                      ? "text-yellow-dark-theme"
                      : "hover:text-light-grey"
                    }`}
                >
                  <Link
                    href={`${submenu.pathPrefix}${versionPath ? versionPath : ""
                      }${item.slug}`}
                  >
                    <a
                      href={`${submenu.pathPrefix}${versionPath ? versionPath : ""
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
  );
}
