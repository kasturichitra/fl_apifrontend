// SideBar.jsx
import React, { useEffect, useState, useRef } from "react";
import { GuidesData } from "../utils/constant";
import Dropdown from "./DocumentDropDown";
import "../styles/document_page.css";

const SideBar = ({ activeSection, onSlugClick }) => {
  const [openParent, setOpenParent] = useState(null);

  return (
    <section className="docs_head">
      <div className="document_page_parent">
        <aside className="document_aside_menu">

          {GuidesData.map((group, i) => (
            <Dropdown
              key={i}
              pageData={group}
              groupIndex={i}
              openParent={openParent}
              setOpenParent={setOpenParent}
              activeSlug={activeSection}
              onSlugClick={onSlugClick}
            />
          ))}

        </aside>
      </div>
    </section>
  );
};

export default SideBar;
