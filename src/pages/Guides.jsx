import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import "../styles/guides.css";

const Guides = () => {
  const { slug } = useParams();
  console.log("slug from URL:", slug);
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    if (slug) setSelectedSlug(slug);
  }, [slug]);

  const componentMap = {
    // "card-management": CardManagement,
    // overview: Overview,
    // "credit-lines": LinesOfCredit,
    // keep adding as needed
  };

  const ApiComponent = selectedSlug ? componentMap[selectedSlug] : null;

  return (
    <div className="guides_main_s">
      <div className="sidebar_wrapper">
        <SideBar />
      </div>
      <div className="guides_content">
        {ApiComponent ? (
          <ApiComponent />
        ) : (
          <h2>Select an API from the sidebar to view its documentation.</h2>
        )}
      </div>
    </div>
  );
};

export default Guides;
