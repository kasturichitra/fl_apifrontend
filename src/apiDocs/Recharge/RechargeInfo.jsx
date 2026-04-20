import React from "react";
import "../../styles/serviceInfo.css";

const RechargeServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Recharge Services</h2>

      <p className="service-description">
        Recharge Services provide quick and reliable access to mobile and
        telecom plan information. These services help users explore available
        recharge options and review past plans to make informed decisions
        based on usage and preferences.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Fetching Plans:</strong> Retrieves the latest available
          recharge plans for a given mobile number or operator, including
          pricing, validity, and benefits.
        </li>

        <li>
          <strong>Fetching Old Plans:</strong> Provides details of previously
          used or past recharge plans to help users track usage patterns and
          choose suitable future plans.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in telecom applications, recharge
        platforms, and customer self-service portals for plan comparison
        and history tracking.
      </p>
    </div>
  );
};

export default RechargeServicesInfo;