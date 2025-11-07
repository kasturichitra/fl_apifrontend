import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AccountDocumentationMain = () => {
   const [activeService, setActiveService] = useState(
      "Account Verify Documentation"
    );
    const navigate = useNavigate();
  const panServices = [
    {
      nameOfService: "Account Verify Documentation",
      route: "",
    },
    {
      nameOfService: "Account Name Validation Documentation",
      route: "/AName",
    },
    {
      nameOfService: "Two Names Validation Documentation",
      route: "/TwoNames",
    },
    {
        nameOfService: "Ifsc Code Documentation",
        route: "/IfscV",
    },
  ];
  const handleBtnClick = (service,route) => {
    setActiveService(service);
    navigate(`/dashboard/AccountDocumentation${route}`)
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

export default AccountDocumentationMain;

