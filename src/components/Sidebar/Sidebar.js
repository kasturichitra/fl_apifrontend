import React from "react";
import "./Sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../../json/Data";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleApiService = (service) => {
    if (service == "panVerification") {
      navigate("/dashboard/panVerify");
    } else if (service == "mobileNumberVerification") {
      navigate("/dashboard/mobileNumberVerify");
    } else if (service == "aadhaarVerification") {
      navigate("/dashboard/aadhaarVerify");
    } else if (service == "shopEstablishment") {
      navigate("/dashboard/shopEstablishment");
    } else if (service == "gstInVerification") {
      navigate("/dashboard/gstInVerify");
    } else if (service == "cinNumberVerification") {
      navigate("/dashboard/cinNumberVerify");
    }else if(service == "faceMatch"){
        navigate("/dashboard/facematch")
    }else if(service == "accountverify"){
        navigate("/dashboard/accountverify")
    }
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li
            className={
              location.pathname === "/dashboard/mobileNumberVerify"
                ? "active"
                : ""
            }
            onClick={() => handleApiService("mobileNumberVerification")}
          >
            {data.mobile}
          </li>
          <li
            className={
              location.pathname === "/dashboard/panVerify" ? "active" : ""
            }
            onClick={() => handleApiService("panVerification")}
          >
            {data.pan}
          </li>
          <li
            className={
              location.pathname === "/dashboard/aadhaarVerify" ? "active" : ""
            }
            onClick={() => handleApiService("aadhaarVerification")}
          >
            {data.aadhaar}
          </li>
          <li
            className={
              location.pathname === "/dashboard/facematch" ? "active" : ""
            }
            onClick={() => handleApiService("faceMatch")}
          >
            {data.faceMatch}
          </li>
          <li
            className={
              location.pathname === "/dashboard/accountverify" ? "active" : ""
            }
            onClick={() => handleApiService("accountverify")}
          >
            {data.AccountVerify}
          </li>

          <li
            className={
              location.pathname === "/dashboard/shopEstablishment"
                ? "active"
                : ""
            }
            onClick={() => handleApiService("shopEstablishment")}
          >
            {data.shopEstablishment}
          </li>
          <li
            className={
              location.pathname === "/dashboard/gstInVerify" ? "active" : ""
            }
            onClick={() => handleApiService("gstInVerification")}
          >
            {data.gst_in_verification}
          </li>
          <li
            className={
              location.pathname === "/dashboard/cinNumberVerify" ? "active" : ""
            }
            onClick={() => handleApiService("cinNumberVerification")}
          >
            {data.cinVerification}
          </li>
          <li
            className={
              location.pathname === "/dashboard/aadhaarVerify" ? "active" : ""
            }
            onClick={() => handleApiService("aadhaarVerification")}
          >
            {data.aadhaar}
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
