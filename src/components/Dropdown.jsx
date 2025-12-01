import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom instead of next/link

function Dropdown({
  pageData,
  pageTitle,
  setPageTitle,
  index,
  parentIndex,
  setParentIndex,
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
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}
            index={index}
            pageIdx={i}
            parentIndex={parentIndex}
            setParentIndex={setParentIndex}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        ))}
      </ul>
    </div>
  );
}

const LinkComponent = ({
  page,
  pageTitle,
  setPageTitle,
  index,
  parentIndex,
  setParentIndex,
  pageIndex,
  setPageIndex,
  pageIdx,
}) => {
  const [openList, setOpenList] = useState(false);
  const condition = openList && index === parentIndex && pageIdx === pageIndex;
  const hasChildren = page.pages?.length > 0;

  const handleLinkClick = () => {
    setOpenList(!openList);
    setPageTitle(page.title);
    setPageIndex(pageIdx);
    setParentIndex(index);
  };

  return (
    <>
      <li
        className={`docs_nav_item ${pageTitle === page?.title ? "active" : ""}`}
        onClick={handleLinkClick}
      >
        <Link to={`/guides/${page.slug}`} className="docs_nav_btn">
          {page.title}

          {hasChildren && (
            <span className="flex items-center">
              <img
                src="/arrow_icon_100.png"
                alt=""
                className={`docs_nav_icon ${condition ? "open" : ""}`}
              />
            </span>
          )}
        </Link>
      </li>

      {hasChildren && condition && (
        <ul className={`docs_nav_lst ${condition ? "open" : ""}`}>
          {page.pages.map((subPage, idx) => (
            <LinkComponent
              key={idx}
              page={subPage}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              index={index}
              pageIdx={pageIdx}
              parentIndex={parentIndex}
              setParentIndex={setParentIndex}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
