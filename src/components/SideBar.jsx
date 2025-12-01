import React, { useEffect, useState, useRef } from "react";
import Dropdown from "./Dropdown";
import { GuidesData } from "../utils/constant";
import "../styles/document_page.css";

const SideBar = ({ children }) => {
  const [pageTitle, setPageTitle] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [parentIndex, setParentIndex] = useState(null);
  const [activeSlug, setActiveSlug] = useState("");

  const sidebarRef = useRef(null); // ref for the sidebar container

  useEffect(() => {
    setPageTitle("Lending, Reinvented");
  }, []);

  /** 🔥 ScrollSpy: detect which section is visible */
  useEffect(() => {
    const sections = document.querySelectorAll(".guide_section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSlug(id);

            // Find matching sidebar item
            const activeLink = document.querySelector(
              `.submenu_item[data-slug='${id}']`
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


          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  /** 🔥 Smooth scroll handler */
  const scrollToSection = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSlug(slug);
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
              activeSlug={activeSlug}            // ScrollSpy highlight
              scrollToSection={scrollToSection}  // Smooth scroll
            />
          ))}
        </aside>

        {/* RIGHT SIDE CONTENT */}
        {children}
      </div>
    </section>
  );
};

export default SideBar;
