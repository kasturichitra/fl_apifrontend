"";

import React, { useEffect, useState } from "react";

export default function TableContents() {
  const [headings, setHeadings] = useState([]);
  //

  useEffect(() => {
    // Small delay to ensure DOM is rendered
    const timer = setTimeout(() => {
      const collected = Array.from(
        document.querySelectorAll("h1[id], h2[id],h3[id]")
      ).map((el) => ({
        id: el.id,
        text: el.innerText || el.textContent,
        level: el.tagName.toLowerCase(),
      }));
      setHeadings(collected);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    headings.length > 0 && (
      <aside className="side_bar">
        <div className="toc_main">
          <h2 className="toc_header">Table of Contents</h2>
          <nav>
            <ul className="space-y-2 text-sm">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`toc_ele dark:hover:text-blue-400 ${
                      heading.level === "h2"
                        ? "pl-4"
                        : heading.level === "h3"
                        ? "pl-8"
                        : "pl-2"
                    }`}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    )
  );
}

const scrollToHeading = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
