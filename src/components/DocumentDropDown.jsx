import React, { useState } from "react";

const Dropdown = ({
  pageData,
  groupIndex,
  openParent,
  setOpenParent,
  activeSlug,
  onSlugClick,
}) => {
  return (
    <div className="w-full">
      {pageData.title && (
        <h2 className="document_asd_head">{pageData.title.toUpperCase()}</h2>
      )}

      <ul className="space-y-0.5">
        {pageData.pages.map((page, index) => (
          <LinkComponent
            key={index}
            page={page}
            groupIndex={groupIndex}
            pageIndex={index}
            openParent={openParent}
            setOpenParent={setOpenParent}
            activeSlug={activeSlug}
            onSlugClick={onSlugClick}
          />
        ))}
      </ul>
    </div>
  );
};


const LinkComponent = ({
  page,
  groupIndex,
  pageIndex,
  openParent,
  setOpenParent,
  activeSlug,
  onSlugClick
}) => {

  const hasChildren = Array.isArray(page.pages);
  const isActive = activeSlug === page.slug;

  // Parent is open only if it matches
  const isParentOpen = openParent?.group === groupIndex &&
                       openParent?.page === pageIndex;

  const [openChildren, setOpenChildren] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();

    if (hasChildren) {
      // toggle current; close others
      const alreadyOpen = isParentOpen;

      setOpenParent(alreadyOpen ? null : { group: groupIndex, page: pageIndex });
      setOpenChildren(!openChildren);
      return;
    }

    // highlight + scroll
    onSlugClick(page.slug);

    const element = document.getElementById(page.slug);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <img
              src="/arrow_icon_100.png"
              className={`docs_nav_icon ${isParentOpen ? "open" : ""}`}
              alt=""
            />
          )}
        </span>
      </li>

      {hasChildren && isParentOpen && (
        <ul className="docs_nav_lst">
          {page.pages.map((sub, idx) => (
            <LinkComponent
              key={idx}
              page={sub}
              groupIndex={groupIndex}
              pageIndex={idx}
              openParent={openParent}
              setOpenParent={setOpenParent}
              activeSlug={activeSlug}
              onSlugClick={onSlugClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
