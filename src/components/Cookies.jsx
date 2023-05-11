import { Fragment, useState, React } from 'react'
import { Transition } from '@headlessui/react'
import { InboxIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Footer from './Footer'
import Header from './Header'
export default function Cookies() {
  const [show, setShow] = useState(true)

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
        <div className="pointer-events-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
          <p className="text-sm leading-6 text-gray-900">
            This website uses cookies to supplement a balanced diet and provide a much deserved
            reward to the senses after consuming bland but nutritious meals. Accepting our cookies
            is optional but recommended, as they are delicious. See our{' '}
            <a href="#" className="font-semibold text-indigo-600">
              cookie policy
            </a>
            .
          </p>
          <div className="mt-4 flex items-center gap-x-5">
            <button
              type="button"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Accept all
            </button>
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Reject all
            </button>
          </div>
        </div>
      </div>

      {/* Global notification live region, render this permanently at the end of the document */}
      {/* <div
        aria-live="assertive"
        className="pointer-events-none fixed bottom-0 inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
      {/* <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <InboxIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-lg font-bold text-gray-900">Cookies, At Nando's?</p>
                    <p className="text-sm font-medium text-gray-900">
                      Yes, really. But probably not the kind you're thinking of...
                    </p>
                    <br></br>
                    <p className="mt-1 text-sm text-gray-500">
                      We use cookies to make your experience (even) better. By accepting, you're
                      agreeing you're happy for us to do that.{' '}
                    </p>
                    <div className="mt-3 flex justify-center p-2 space-x-7">
                      <button
                        type="button"
                        className="rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        NO THANKS
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        YES I'M HAPPY
                      </button>
                    </div>
                    <button
                      type="button"
                      className="rounded-md border-black w-full text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      MANAGE COOKIES
                    </button>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition> */}
      {/* </div>
      </div> */}
    </>
  )
}
