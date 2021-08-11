import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({
  options,
}: {
  options: { title: string; content: string | JSX.Element }[];
}) {
  return (
    <div className="p-4 bg-dark-blue rounded mb-4">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {options?.map((option) => (
            <Tab
              key={option.title}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {option.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {options?.map((option, idx) => (
            <Tab.Panel key={idx} className="bg-white rounded-xl px-3 pb-3 pt-6">
              {option.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
