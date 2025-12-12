import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Introduction from "../documents/Introduction";
import ApiKeys from "../documents/ApiKeys";
import ErrorCodesDoc from "../documents/ErrorCodesDoc";
import ApiRateLimit from "../documents/ApiRateLimit";

const apiComponentMap = {
  apimodule_guide: Introduction,
  api_keys: ApiKeys,
  error_codes: ErrorCodesDoc,
  rate_limiting: ApiRateLimit
};

const Guides = () => {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) setActiveSection(slug);
  }, [slug]);

  const ApiComponent = apiComponentMap[slug];

  return (
    <div className="guides_main_s">
      <SideBar
        activeSection={activeSection}
        onSlugClick={(newSlug) => {
          navigate(`/guides/${newSlug}`); 
          setActiveSection(newSlug);
        }}
      />

      <div className="guides_content">
        {ApiComponent ? <ApiComponent /> : <h2>Select an API</h2>}
      </div>
    </div>
  );
};

export default Guides;
