import React, { useEffect, useState, useRef } from "react";
import { GuidesData } from "../utils/constant";
import "../styles/document_page.css";
import Dropdown from "./DocumentDropDown";

const SideBar = ({ activeSection }) => {
  const [pageTitle, setPageTitle] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [parentIndex, setParentIndex] = useState(null);

  const sidebarRef = useRef(null);

  useEffect(() => {
    setPageTitle("Lending, Reinvented");
  }, []);

  /** Apply active section highlight & auto-scroll sidebar */
  useEffect(() => {
    if (!activeSection) return;

    const activeLink = document.querySelector(
      `.submenu_item[data-slug='${activeSection}']`
    );

    if (activeLink && sidebarRef.current) {
      const sidebar = sidebarRef.current;
      const linkOffsetTop = activeLink.offsetTop;
      const sidebarHeight = sidebar.clientHeight;
      const linkHeight = activeLink.clientHeight;

      const scrollPosition =
        linkOffsetTop - sidebarHeight / 2 + linkHeight / 2;

      sidebar.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  /** Smooth scroll when clicking sidebar items */
  const scrollToSection = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="docs_head">
      <div className="document_page_parent">
        {openMenu && (
          <div className="bring_cover" onClick={() => setOpenMenu(false)} />
        )}

        {/* LEFT SIDEBAR */}
        <aside
          ref={sidebarRef}
          className={`document_aside_menu ${openMenu ? "increase" : ""}`}
        >
          {GuidesData.map((pageGroup, groupIndex) => (
            <Dropdown
              key={groupIndex}
              pageData={pageGroup}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              index={groupIndex}
              parentIndex={parentIndex}
              setParentIndex={setParentIndex}
              scrollToSection={scrollToSection}
              activeSlug={activeSection}  // highlight driven by parent
            />
          ))}
        </aside>
      </div>
    </section>
  );
};

export default SideBar;
