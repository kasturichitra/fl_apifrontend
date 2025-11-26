import React, { useEffect, useState } from "react";
import ApiDropdown from "./ApiDropdown";
import { ApiReferences, images } from "../utils/constant";
import "../styles/api_reference.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMenu, setPageTitle } from "../redux/slice/headerSlice";

const SideBarApi = ({ children, setSelectedSlug }) => {
  const [headTitle, setHeadTitle] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();
  const pageTitle = useSelector((state) => state.header.pageTitle);
  const openMenu = useSelector((state) => state.header.openMenu);

  const handleCloseFilterMenu = () => {
    setOpenFilter(false);
    document.body.classList.remove("remove-overflow");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "/") {
        e.preventDefault();
        setIncreaseSearchBar(true);
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setPageTitle("Auth");
  }, [setPageTitle]);

  return (
    <div className="main_reference_p">
      {/* SIDEBAR MENU */}
      {openMenu && (
        <div className="bring_cover" onClick={() => setOpenMenu(false)}></div>
      )}

      <aside className={`document_aside_menu ${openMenu ? "increase" : ""}`}>
        <JumpButton setOpenFilter={setOpenFilter} />

        {/* SIDEBAR OPTIONS */}
        <div className="pt-1">
          {ApiReferences.map((api, i) => (
            <ApiDropdown
              key={i}
              ApiData={api}
              pageTitle={pageTitle}
              openIndex={openIndex}
              headTitle={headTitle}
              setHeadTitle={setHeadTitle}
              setOpenIndex={setOpenIndex}
              setPageTitle={setPageTitle}
              setSelectedSlug={setSelectedSlug}
            />
          ))}
        </div>
      </aside>

      {children}

      {openFilter && (
        <PopFilter
          closeFilter={handleCloseFilterMenu}
          setPageTitle={setPageTitle}
          setHeadTitle={setHeadTitle}
          setOpenIndex={setOpenIndex}
        />
      )}
    </div>
  );
};

export default SideBarApi;

function JumpButton({ setOpenFilter }) {
  const handleOpenFilterMenu = () => {
    setOpenFilter(true);
    document.body.classList.add("remove-overflow");
  };

  return (
    <div className="ref_ctrl_head" onClick={handleOpenFilterMenu}>
      <button className="ref_ctrl_jp_btn">JUMP TO</button>
      <span className="ref_ctrl_btn">CTRL-/</span>
    </div>
  );
}

function PopFilter({ closeFilter, setPageTitle, setHeadTitle, setOpenIndex }) {
  const [value, setValue] = useState("");

  const filteredApis = ApiReferences.map((section) => {
    // Collect all visible entries (methods or items if methods are empty)
    const entries = section.items.flatMap((item) => {
      if (item.methods && item.methods.length > 0) {
        // If item has methods, include those
        return item.methods.map((method) => ({
          title: method.title,
          type: method.type,
          parentTitle: item.title,
        }));
      } else {
        // If no methods, include item title
        return {
          title: item.title,
          type: null,
          parentTitle: null,
        };
      }
    });

    // Filter by search text
    const filteredEntries = entries.filter((entry) =>
      entry.title.toLowerCase().includes(value.toLowerCase())
    );

    return (
      filteredEntries.length > 0 && { ...section, entries: filteredEntries }
    );
  }).filter(Boolean);

  return (
    <div className="bluring" onClick={closeFilter}>
      <div
        className="overlay"
        onClick={closeFilter}
        style={{
          position: "fixed",
          inset: 0,
          background: "transparent",
          zIndex: 999,
        }}
      />
      <div className="api_fltr_head" onClick={(e) => e.stopPropagation()}>
        <div className="filter_cpt">
          <div className="filter_api">
            {/* Search Header */}
            <div className="filter_head">
              <span className="search-icon-container">
                <img src={images?.searchIcon} alt="" className="search-icon" />
              </span>
              <input
                type="text"
                className="flex-1 outline-0"
                placeholder="Filter"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            {/* Filter Results */}
            <div className="filter_opts">
              {filteredApis.length > 0 ? (
                filteredApis.map((section, i) => (
                  <ol className="api_section" key={i}>
                    <p className="section-head">{section.section}</p>

                    {section.entries.map((entry, j) => (
                      <li
                        key={j}
                        className="pop_filter_item"
                        onClick={() => {
                          setPageTitle(entry.title);
                          setHeadTitle(section.section);
                          setOpenIndex(j);
                          closeFilter();
                        }}
                      >
                        <span className="font-semibold">{entry.title}</span>
                        {entry.type && (
                          <span
                            className={`pop_filter_item_mthd_type ${entry.type.toLowerCase()}`}
                          >
                            {entry.type}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                ))
              ) : (
                <p className="no-results">No matching APIs found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetLink({
  methods,
  setPageTitle,
  Headtitle,
  setHeadTitle,
  index,
  setOpenIndex,
  setSelectedApi,
}) {
  return (
    <>
      {methods.map(({ title, type, description }, i) => (
        <li
          className="pop_filter_item"
          key={i}
          onClick={() => {
            setPageTitle(title);
            setHeadTitle(Headtitle);
            setOpenIndex(index);
            // Set selected API content
            if (setSelectedApi) {
              setSelectedSlug(entry.link);
            }
          }}
        >
          <span className="font-semibold">{title}</span>
          <span className={`pop_filter_item_mthd_type ${type.toLowerCase()}`}>
            {type}
          </span>
        </li>
      ))}
    </>
  );
}
