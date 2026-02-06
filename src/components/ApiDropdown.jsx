import React, { useRef, useState, useEffect } from "react";
import { color } from "../utils/constant";
import { Link } from "react-router-dom";

function ApiDropdown({
  ApiData,
  pageTitle,
  setPageTitle,
  openIndex,
  setOpenIndex,
  headTitle,
  setHeadTitle,
}) {
  const { section, items } = ApiData;

  return (
    <div className="w-full mt-4">
      {section && (
        <h1 className="pb-4 pt-2 pl-2 font-bold">
          {section.toUpperCase()}
        </h1>
      )}
      <ul className="space-y-0.5">
        {items.map((item, i) => (
          <LinkComponent
            key={i}
            item={item}
            index={i}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}
            headTitle={headTitle}
            setHeadTitle={setHeadTitle}
          />
        ))}
      </ul>
    </div>
  );
}

const LinkComponent = ({
  item,
  index,
  openIndex,
  setOpenIndex,
  pageTitle,
  setPageTitle,
  headTitle,
  setHeadTitle,
}) => {
  const isOpen = openIndex === index && headTitle === item?.title;
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      el.style.height = isOpen ? el.scrollHeight + "px" : "0px";
    }
  }, [isOpen]);

  const toggleOpen = () => {
    if (isOpen) {
      setOpenIndex(null);
      setHeadTitle(null);
    } else {
      setOpenIndex(index);
      setHeadTitle(item?.title);
    }
    setPageTitle(item.title);
  };

  return (
    <>
      {/* Main Item */}
      <Link to={`/reference/${item.link}`}>
        <div
          id={`sidebar-item-${item.title.replace(/\s+/g, "-")}`}
          className={`api_nav_item cursor-pointer flex justify-between items-center w-full text-left ${
            pageTitle === item?.title ? "active" : ""
          }`}
          onClick={toggleOpen}
        >
          <div className="flex items-center gap-1">
            {item?.title}
            {item.methods?.length > 0 && (
              <img
                src="/images/arrow_icon_100.png"
                alt="arrow"
                className={`w-3 h-3 invert-100 transition-transform duration-200 ease-in-out ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
                style={{ transformOrigin: "center" }}
              />
            )}
          </div>
        </div>
      </Link>

      {/* Methods Sublist */}
      <ul
        ref={contentRef}
        className="api_nav_lst overflow-hidden transition-all duration-300 ease-in-out"
      >
        {item?.methods?.map((method, idx) => (
          <li
            key={idx}
            id={`sidebar-item-${item.title.replace(/\s+/g, "-")}-method-${idx}`}
            className={`api_nav_item ${
              pageTitle === method?.title ? "active" : ""
            }`}
            onClick={() => setPageTitle(method?.title)}
          >
            <Link to={`/reference/${method.link}`} className="api_nav_link_btn">
              {method?.title}
            </Link>
            <span className={`${color(method.type)} api_nav_link_spn`}>
              {method.type}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ApiDropdown;
