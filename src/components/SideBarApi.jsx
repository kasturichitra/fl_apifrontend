import React, { useEffect, useRef, useState } from "react";
import ApiDropdown from "./ApiDropdown";
import { ApiReferences, images } from "../utils/constant";
import "../styles/api_reference.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMenu, setPageTitle } from "../redux/slice/headerSlice";
import { useNavigate } from "react-router-dom";

const SideBarApi = ({ setSelectedSlug, setShowSuggestions, setSearchTermQuery }) => {
  const [headTitle, setHeadTitle] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();
  const pageTitle = useSelector((state) => state.header.pageTitle);
  const openMenu = useSelector((state) => state.header.openMenu);
  const navigate = useNavigate();

  const handleCloseFilterMenu = () => {
    setOpenFilter(false);

    setTimeout(() => {
      document.body.classList.remove("remove-overflow");
    }, 0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        setOpenFilter(true);
        document.body.classList.add("remove-overflow");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    dispatch(setPageTitle("Auth"));
  }, []);

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
              setPageTitle={(title) => dispatch(setPageTitle(title))}
              setSelectedSlug={setSelectedSlug}
              setShowSuggestions={setShowSuggestions}
              setSearchTermQuery={setSearchTermQuery}
            />
          ))}
        </div>
      </aside>

      {openFilter && (
        <PopFilter
          closeFilter={handleCloseFilterMenu}
          setPageTitle={(title) => dispatch(setPageTitle(title))}
          setHeadTitle={setHeadTitle}
          setOpenIndex={setOpenIndex}
          setSelectedSlug={setSelectedSlug}
          navigate={navigate}
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

function PopFilter({
  closeFilter,
  setPageTitle,
  setHeadTitle,
  setOpenIndex,
  setSelectedSlug,
  navigate,
}) {
  const [value, setValue] = useState("");
  const popupRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      closeFilter();
    }
  };

  const filteredApis = ApiReferences.map((section) => {
    // Collect all visible entries (methods or items if methods are empty)
    const entries = section.items.flatMap((item, idx) => {
      if (item.methods && item.methods.length > 0) {
        // If item has methods, include those
        return item.methods.map((method) => ({
          title: method.title,
          type: method.type,
          parentTitle: item.title,
          sidebarIndex: idx,
          link: method.link,
        }));
      } else {
        // If no methods, include item title
        return {
          title: item.title,
          type: null,
          parentTitle: null,
          sidebarIndex: idx,
          link: item.link,
        };
      }
    });

    // Filter by search text
    const filteredEntries = entries.filter((entry) =>
      entry.title.toLowerCase().includes(value.toLowerCase()),
    );

    return (
      filteredEntries.length > 0 && { ...section, entries: filteredEntries }
    );
  }).filter(Boolean);

  console.log("filtered apis ====>>", filteredApis);
  return (
    <div
      className="bluring"
      onMouseDown={handleOutsideClick}
      // onClick={closeFilter} 
    >
      <div
        className="api_fltr_head"
              ref={popupRef}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
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
                        // onClick={() => {

                        //   setPageTitle(entry.title);
                        //   setHeadTitle(entry.parentTitle || entry.title);
                        //   setOpenIndex(entry.sidebarIndex);
                        //   setSelectedSlug(entry.link);

                        //   closeFilter();

                        //   // scroll AFTER popup closed
                        //   setTimeout(() => {

                        //     const el = document.getElementById(
                        //       `sidebar-item-${entry.title.replace(/\s+/g, "-")}`
                        //     );

                        //     el?.scrollIntoView({
                        //       behavior: "smooth",
                        //       block: "center",
                        //     });

                        //   }, 200);

                        // }}
                        onClick={() => {
                          // update redux
                          setPageTitle(entry.title);

                          // update sidebar open
                          setHeadTitle(entry.parentTitle || entry.title);

                          setOpenIndex(entry.sidebarIndex);

                          // update content route
                          navigate(`/reference/${entry.link}`);

                          // close popup
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
