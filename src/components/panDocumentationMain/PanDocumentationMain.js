import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PanDocumentationMain = () => {
   const [activeService, setActiveService] = useState(
      "PanNumber Documentation"
    );
    const navigate = useNavigate();
  const panServices = [
    {
      nameOfService: "PanNumber Documentation",
      route: "",
    },
    {
      nameOfService: "PanNumber Name Validation Documentation",
      route: "/pName",
    },
    {
      nameOfService: "PanNumber DOB Documentation",
      route: "/pDob",
    },
  ];
  const handleBtnClick = (service,route) => {
    setActiveService(service);
    navigate(`/dashboard/PanDocumentation${route}`)
  }
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex justify-content-around">
        {panServices && panServices.map((service, index) => {
          return (
            <div key={index}>
              <button
                className={
                  activeService == service.nameOfService ? "changedBtn" : "normalBtn"
                }
                onClick={() => handleBtnClick(service.nameOfService, service.route)}
              >
                {service.nameOfService}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PanDocumentationMain;
