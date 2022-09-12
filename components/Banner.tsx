import { BellIcon } from '@heroicons/react/outline'

export default function Banner({name = "technical documentation"}:{name: string}) {
  return (
    <div className="bg-teal-600 mb-3">
      <div className="mx-auto max-w-fit py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between align-middle">
            <span className="flex rounded-lg bg-teal-700 p-2 ml-2">
              <BellIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white">
              <span className="hidden md:inline">This website is being revamped. For up to date {name} go to our new Documentation website. Stay tuned 🎉</span>
            </p>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://docs.haystack.deepset.ai"
              className="banner flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm hover:bg-teal-100"
            >
              New Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}