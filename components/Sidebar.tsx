import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { menu } from "lib/constants";

export default function Sidebar() {
  const router = useRouter();
  const [versionPath, setVersionPath] = useState<string>();

  useEffect(() => {
    if (router.query.slug && router.query.slug.length > 1) {
      setVersionPath(`${router.query.slug[0]}/`);
    } else {
      setVersionPath(undefined);
    }
  }, [router.query]);

  return (
    <div className="fixed inset-0 p-6 pt-24 w-60 bg-dark-blue col-span-2 sm:block hidden overflow-y-scroll text-medium-grey">
      <ol>
        {menu.map((submenu) => (
          <li key={submenu.subMenuTitle}>
            <p className="text-xl text-white mb-3 font-medium">
              {submenu.subMenuTitle}
            </p>
            <ol className="mb-8">
              {submenu.items.map((item) => (
                <li
                  key={item.title}
                  className={`mb-2 ${
                    router.asPath ===
                    `${submenu.pathPrefix}${versionPath ? versionPath : ""}${
                      item.slug
                    }`
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
  );
}
