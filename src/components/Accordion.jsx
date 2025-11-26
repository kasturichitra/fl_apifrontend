""

import { useState, useRef, useEffect } from 'react'

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className=" bg-violet-300 rounded-2xl px-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-800 dark:text-gray-100 focus:outline-none"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          transition: 'height 300ms ease',
          overflow: 'hidden',
        }}
        aria-hidden={!isOpen}
      >
        <div className="pb-4 text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  )
}

