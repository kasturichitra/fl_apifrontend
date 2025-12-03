import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import "../styles/guides.css";
import Introduction from "../documents/Introduction";

// const apiComponentMap = {
//   apimodule_guide: Introduction,
// };

const Guides = () => {
  const [activeSection, setActiveSection] = useState("");
  const { slug } = useParams();
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    if (slug) setSelectedSlug(slug);
  }, [slug]);

  // const ApiComponent = selectedSlug ? apiComponentMap[selectedSlug] : null;

  /** Main ScrollSpy observer */
  useEffect(() => {
    const sections = document.querySelectorAll(".guide_section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="guides_main_s">
      <div className="sidebar_wrapper">
          {/* <aside ref={sidebarRef} className="document_aside_menu"> */}
        <SideBar activeSection={activeSection} />
  {/* </aside> */}
      </div>

      <div className="guides_content">
        {/* {ApiComponent ? (
          <ApiComponent />
        ) : (
          <h2>Select an API from the sidebar to view its documentation.</h2>
        )} */}
        {<Introduction/>}
      </div>
    </div>
  );
};

export default Guides;
