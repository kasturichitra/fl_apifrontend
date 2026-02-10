import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { color } from "../utils/constant";

function ApiDropdown({ ApiData, pageTitle, setPageTitle }) {
  const { section, items } = ApiData;
  const location = useLocation();

  // ✅ Start with ALL dropdowns closed
  const [openLevels, setOpenLevels] = useState({});

  const toggleItem = (key, level) => {
    setOpenLevels((prev) => {
      const updated = { ...prev };

      if (updated[level] === key) {
        delete updated[level];
      } else {
        updated[level] = key;
      }

      // Close deeper levels when parent changes
      Object.keys(updated).forEach((lvl) => {
        if (Number(lvl) > level) delete updated[lvl];
      });

      return updated;
    });
  };

  return (
    <div className="w-full mt-4">
      {section && (
        <h1 className="pb-4 pt-2 pl-2 font-bold">{section.toUpperCase()}</h1>
      )}

      <ul>
        {items.map((item) => (
          <LinkComponent
            key={item.link}
            item={item}
            level={0}
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}
            openLevels={openLevels}
            toggleItem={toggleItem}
            location={location}
          />
        ))}
      </ul>
    </div>
  );
}

const LinkComponent = ({
  item,
  level,
  pageTitle,
  setPageTitle,
  openLevels,
  toggleItem,
  location,
}) => {
  const isOpen = openLevels[level] === item.link;
  const hasChildren = item.methods?.length > 0;
  const isActive = location.pathname === `/reference/${item.link}`;

  // ✅ Auto-open parent if a child route is active
  useEffect(() => {
    if (hasChildren) {
      const childActive = item.methods.some((child) =>
        location.pathname.startsWith(`/reference/${child.link}`)
      );

      if (childActive && openLevels[level] !== item.link) {
        toggleItem(item.link, level);
      }
    }
  }, [location.pathname]);

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      toggleItem(item.link, level);
    } else {
      setPageTitle(item.title);
    }
  };

  return (
    <li>
      <Link
        to={`/reference/${item.link}`}
        onClick={handleClick}
        className={`api_nav_item flex justify-between items-center w-full px-2 py-1 cursor-pointer transition-all duration-200 ${
          isActive
            ? "bg-gray-800 text-white font-semibold border-l-4 border-blue-500"
            : "text-gray-300 hover:bg-gray-700"
        }`}
      >
        <div className="flex items-center gap-2">
          <span>{item.title}</span>
          {item.type && <span className={`${color(item.type)} api_nav_link_spn`}>{item.type}</span>}
        </div>

        {hasChildren && (
          <img
            src="/images/arrow_icon_100.png"
            alt="arrow"
            className={`w-3 h-3 invert-100 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        )}
      </Link>

      {/* Nested items render only when open */}
      {hasChildren && isOpen && (
        <ul className="ml-4 py-1 border-l border-gray-700">
          {item.methods.map((method) => (
            <LinkComponent
              key={method.link}
              item={method}
              level={level + 1}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              openLevels={openLevels}
              toggleItem={toggleItem}
              location={location}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default ApiDropdown;

// import React, { useRef, useState, useEffect } from "react";
// import { color } from "../utils/constant";
// import { Link } from "react-router-dom";

// function ApiDropdown({
//   ApiData,
//   pageTitle,
//   setPageTitle,
//   openIndex,
//   setOpenIndex,
//   headTitle,
//   setHeadTitle,
// }) {
//   const { section, items } = ApiData;

//   return (
//     <div className="w-full mt-4">
//       {section && (
//         <h1 className="pb-4 pt-2 pl-2 font-bold">{section.toUpperCase()}</h1>
//       )}
//       <ul className="space-y-0.5">
//         {items.map((item, i) => (
//           <LinkComponent
//             key={i}
//             item={item}
//             index={i}
//             openIndex={openIndex}
//             setOpenIndex={setOpenIndex}
//             pageTitle={pageTitle}
//             setPageTitle={setPageTitle}
//             headTitle={headTitle}
//             setHeadTitle={setHeadTitle}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// const LinkComponent = ({
//   item,
//   index,
//   openIndex,
//   setOpenIndex,
//   pageTitle,
//   setPageTitle,
//   headTitle,
//   setHeadTitle,
// }) => {
//   const isOpen = openIndex === index && headTitle === item?.title;
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const el = contentRef.current;
//     if (el) {
//       el.style.height = isOpen ? el.scrollHeight + "px" : "0px";
//     }
//   }, [isOpen]);

//   const toggleOpen = () => {
//     if (isOpen) {
//       setOpenIndex(null);
//       setHeadTitle(null);
//     } else {
//       setOpenIndex(index);
//       setHeadTitle(item?.title);
//     }
//     setPageTitle(item.title);
//   };

//   return (
//     <>
//       {/* Main Item */}
//       <Link to={`/reference/${item.link}`}>
//         <div
//           id={`sidebar-item-${item.title.replace(/\s+/g, "-")}`}
//           className={`api_nav_item cursor-pointer flex justify-between items-center w-full text-left ${
//             pageTitle === item?.title ? "active" : ""
//           }`}
//           onClick={toggleOpen}
//         >
//           <div className="flex items-center gap-1">
//             {item?.title}
//             {item.methods?.length > 0 && (
//               <img
//                 src="/images/arrow_icon_100.png"
//                 alt="arrow"
//                 className={`w-3 h-3 invert-100 transition-transform duration-200 ease-in-out ${
//                   isOpen ? "rotate-90" : "rotate-0"
//                 }`}
//                 style={{ transformOrigin: "center" }}
//               />
//             )}
//           </div>
//         </div>
//       </Link>

//       {/* Methods Sublist */}
//       <ul
//         ref={contentRef}
//         className="api_nav_lst overflow-hidden transition-all duration-300 ease-in-out"
//       >
//         {item?.methods?.map((method, idx) => (
//           <li
//             key={idx}
//             id={`sidebar-item-${item.title.replace(/\s+/g, "-")}-method-${idx}`}
//             className={`api_nav_item ${
//               pageTitle === method?.title ? "active" : ""
//             }`}
//             onClick={() => setPageTitle(method?.title)}
//           >
//             <Link to={`/reference/${method.link}`} className="api_nav_link_btn">
//               {method?.title}
//               {method.methods?.length > 0 && (
//                 <img
//                   src="/images/arrow_icon_100.png"
//                   alt="arrow"
//                   className={`w-3 h-3 invert-100 transition-transform duration-200 ease-in-out ${
//                     isOpen ? "rotate-90" : "rotate-0"
//                   }`}
//                   style={{ transformOrigin: "center" }}
//                 />
//               )}
//             </Link>
//             <span className={`${color(method.type)} api_nav_link_spn`}>
//               {method.type}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ApiDropdown;
