import React, { useState, useEffect } from "react";

function Dropdown({
  pageData,
  index,
  parentIndex,
  setParentIndex,
  activeSlug,           
  scrollToSection,      
}) {
  const [pageIndex, setPageIndex] = useState(null);
  const { title, pages } = pageData;

  return (
    <div className="w-full">
      {title && <h2 className="document_asd_head">{title.toUpperCase()}</h2>}

      <ul className="space-y-0.5">
        {pages.map((page, i) => (
          <LinkComponent
            key={i}
            page={page}
            index={index}
            pageIdx={i}
            parentIndex={parentIndex}
            setParentIndex={setParentIndex}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            activeSlug={activeSlug}
            scrollToSection={scrollToSection}
          />
        ))}
      </ul>
    </div>
  );
}


const LinkComponent = ({
  page,
  index,
  parentIndex,
  setParentIndex,
  pageIndex,
  setPageIndex,
  pageIdx,
  activeSlug,
  scrollToSection,
}) => {

  const [openList, setOpenList] = useState(false);

  const hasChildren = Array.isArray(page.pages);
  const isActive = activeSlug === page.slug;

  /** Auto-open parent when child is active */
  useEffect(() => {
    if (isActive) {
      setParentIndex(index);
      setPageIndex(pageIdx);
      setOpenList(true);
    }
  }, [isActive]);

  /** Proper open/close handling */
  const handleClick = (e) => {
    e.stopPropagation();

    // Clicking parent item toggles
    if (hasChildren) {
      setOpenList(!openList);
      setParentIndex(index);
      setPageIndex(pageIdx);
      return;
    }

    // Clicking child scrolls to relevant section
    scrollToSection(page.slug);
    setParentIndex(index);
    setPageIndex(pageIdx);
  };

  return (
    <>
      <li
        className={`submenu_item ${isActive ? "active" : ""}`}
        data-slug={page.slug}
        onClick={handleClick}
      >
        <span className="docs_nav_btn">
          {page.title}

          {hasChildren && (
            <span className="flex items-center">
              <img
                src="/arrow_icon_100.png"
                className={`docs_nav_icon ${openList ? "open" : ""}`}
                alt=""
              />
            </span>
          )}
        </span>
      </li>

      {/* Children */}
      {hasChildren && openList && (
        <ul className="docs_nav_lst">
          {page.pages.map((subPage, idx) => (
            <LinkComponent
              key={idx}
              page={subPage}
              index={index}
              parentIndex={parentIndex}
              setParentIndex={setParentIndex}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              pageIdx={pageIdx}
              activeSlug={activeSlug}
              scrollToSection={scrollToSection}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
