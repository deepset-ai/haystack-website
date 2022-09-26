import { IoConstructOutline } from 'react-icons/io5'

export default function Banner({name = "technical documentation"}:{name: string}) {
  return (
    <div className="bg-teal-600 mb-3">
      <div className="mx-auto max-w-fit py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex justify-center align-middle">
            <span className="bg-teal-700 flex items-center rounded-lg px-4 py-2">
              <IoConstructOutline className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 mr-3 font-medium text-white shrink text-center">
              <span className="md:inline">🎉 We are working to make this website better, stay tuned. In the meantime, have a look at our up to date {name} section in the new docs. </span>
            </p>
          <div className="w-full sm:w-auto">
            <a
              href="https://docs.haystack.deepset.ai"
              className="banner flex items-center justify-center rounded-md border border-transparent bg-yellow-light-theme px-4 py-2 text-center text-sm font-small text-black hover:text-teal-700 shadow-sm hover:bg-teal-100 h-full"
            >
              New Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}