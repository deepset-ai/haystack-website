import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Disclosures({
  options,
}: {
  options: { title: string; content: string | JSX.Element }[];
}) {
  return (
    <div className="w-full">
      {options.map((option, idx) => (
        <Disclosure key={idx}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "rounded-tl-lg rounded-tr-lg" : "mb-1 rounded-lg"
                } flex justify-between w-full px-4 py-2 font-medium text-left text-light-grey bg-dark-blue hover:text-off-white border-yellow-dark-theme`}
              >
                <span>{option.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-off-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 bg-light-grey mb-3 rounded-bl-lg rounded-br-lg">
                {option.content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
