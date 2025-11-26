// components/MobileDropdown.js
"";
import { useState, useEffect } from "react";
import { GuidesData } from "../utils/constant";
import Dropdown from "@/components/Dropdown";

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile dropdown toggle button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-gray-800 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle documentation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile dropdown overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile dropdown content */}
      <div className={`
        md:hidden fixed top-0 left-0 z-35 h-screen w-72 bg-[#111827] 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        overflow-y-auto custom-scroll
      `}>
        <div className="p-4 pt-16">
          {GuidesData.map((pagee, i) => (
            <Dropdown pageData={pagee} key={i} />
          ))}
        </div>
        
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 p-2 text-white"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </>
  );
}