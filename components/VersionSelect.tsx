import { Fragment } from "react";
import { useRouter } from "next/router";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";

const versionRoutes: { [key: string]: string } = {
  "v0.9.0": "/overview/intro",
  "v0.8.0": "/overview/v0.8.0/intro",
  "v0.7.0": "/overview/v0.7.0/intro",
  "v0.6.0": "/overview/v0.6.0/intro",
  "v0.5.0": "/usage/v0.5.0/intro",
  "v0.4.0": "/usage/v0.4.0/intro",
};

export default function VersionSelect() {
  const router = useRouter();
  const versions = Object.keys(versionRoutes);
  const versionInUrl = versions?.find((v) => router.asPath.includes(v));

  const handleVersionChange = (version: string) => {
    return router.push(versionRoutes[`${version}`]);
  };

  return (
    <div className="w-28">
      <Listbox
        value={versionInUrl || versions[0]}
        onChange={handleVersionChange}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">
              {versionInUrl || versions[0]}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {versions.map((version, versionIdx) => (
                <Listbox.Option
                  key={versionIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-dark-blue bg-light-grey-BG"
                        : "text-gray-900"
                    }
                        cursor-pointer select-none relative py-2 pl-10 pr-4`
                  }
                  value={version}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {version}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-dark-blue" : "text-medium-grey"
                          }
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon
                            className="w-5 h-5 text-green-light-theme"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
