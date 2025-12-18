import React from "react";
import "../styles/guides.css";

const Skelton = () => {
  return (
    <div className="main_parent">
      {/* FIRST CHILD */}
      <div className="first_child hide-scrollbar">
        {/* HERO SKELETON */}
        <div className="api_hero">
          <div className="skeleton_title skeleton_short"></div>
          <div className="skelton_url_method">
            <div className="skeleton_text skeleton_link"></div>
            <div className="skeleton_text skeleton_link"></div>
          </div>
          <div className="skeleton_text skeleton_paragraph"></div>
        </div>

        {/* REQUEST HISTORY TABLE SKELETON */}
        <div className="skeleton_table">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div className="skeleton_row" key={idx}>
              <div className="skeleton_cell"></div>
            </div>
          ))}
        </div>

        {/* HEADERS SECTION */}
        <div className="py-6">
          <div className="skeleton_section_title"></div>
          {Array.from({ length: 2 }).map((_, idx) => (
            <div className="skeleton_text" key={idx}></div>
          ))}
        </div>

        {/* BODY PARAMS */}
        <div className="py-6">
          <div className="skeleton_section_title"></div>
          {Array.from({ length: 4 }).map((_, idx) => (
            <div className="skeleton_text" key={idx}></div>
          ))}
        </div>

        {/* RESPONSES */}
        <div className="py-6">
          <div className="skeleton_section_title"></div>
          {Array.from({ length: 12 }).map((_, idx) => (
            <div className="skeleton_text skeleton_response" key={idx}></div>
          ))}
        </div>
      </div>

      {/* SECOND CHILD - CODE SECTION */}
      <div className="second_child hide-scrollbar">
        <div className="py-6">
          <div className="skeleton_section_title"></div>
          {Array.from({ length: 1 }).map((_, idx) => (
            <div className="skeleton_text skeleton_response" key={idx}></div>
          ))}
        </div>
        {Array.from({ length: 2 }).map((_, idx) => (
          <div className="skeleton_code_line" key={idx}></div>
        ))}
      </div>
    </div>
  );
};

export default Skelton;
