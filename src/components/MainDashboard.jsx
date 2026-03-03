import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/mainDashboard.css";

const MainDashboard = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTermQuery, setSearchTermQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
  setShowSuggestions(false);
  setSearchTermQuery("")
}, [location]);

  return (
    <div className="main_dashboard">
      <div className="header_main_s">
        <Header
          suggestions={showSuggestions}
          setSuggestions={setShowSuggestions}
          setSearchQuery={setSearchTermQuery}
          searchQuery={searchTermQuery}
        />
      </div>
      <div className="main_outlet">
        <Outlet context={{ setShowSuggestions, setSearchTermQuery }} />
      </div>
    </div>
  );
};

export default MainDashboard;
