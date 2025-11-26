"";



import React from "react";

export default function DocumentNavigationMobile({ pageTitle, setOpenMenu }) {
  const handlePrevntScroll = (e) => {
    document.body.classList.add("overflow-hidden");
  };

  return (
    <div className="mobile_nav">
      <button
        className="mobile_nav_btn"
        type="button"
        onClick={() => setOpenMenu(true)}
      >
        <span className="mobile_nav_btn_label">{pageTitle}</span>
        <span className="h-4 w-4">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className=""
            data-name="chevron-up-down"
            role="img"
            style={{
              "--icon-color": "inherit",
              "--icon-size": "inherit",
              "--icon-stroke-width": "2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 16l6 6 6-6M18 8l-6-6-6 6"
              className="icon-stroke-width"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
