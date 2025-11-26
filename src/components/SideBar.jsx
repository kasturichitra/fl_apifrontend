import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { GuidesData } from "../utils/constant";
import "../styles/document_page.css";

const SideBar = ({ children }) => {
  const [pageTitle, setPageTitle] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [parentIndex, setParentIndex] = useState(null);

  useEffect(() => {
    setPageTitle("Lending, Reinvented");
  }, []);

  return (
    <section className="docs_head">
      <div className="document_page_parent">
        {openMenu && (
          <div
            className="bring_cover"
            onClick={() => setOpenMenu(false)}
          ></div>
        )}
        <aside
          className={`document_aside_menu ${
            openMenu ? "increase" : ""
          }`}
        >
          {GuidesData.map((pagee, i) => (
            <Dropdown
              pageData={pagee}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              key={i}
              index={i}
              parentIndex={parentIndex}
              setParentIndex={setParentIndex}
            />
          ))}
        </aside>
        {children}
      </div>
    </section>
  );
};

export default SideBar;

