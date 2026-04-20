import React from "react";
import "../../styles/serviceInfo.css";

const VehicleServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Vehicle Services</h2>

      <p className="service-description">
        Vehicle Services offer reliable tools to verify vehicle and driver
        information, ensuring compliance with transport regulations and
        enhancing road safety. These services help organizations and individuals
        access accurate registration data, detect risks, and validate driving
        credentials.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Vehicle Registration:</strong> Retrieves basic vehicle
          registration details using the registration number for quick
          identification.
        </li>

        <li>
          <strong>Detailed RC Verification:</strong> Provides comprehensive
          Registration Certificate (RC) details including ownership, vehicle
          specifications, and registration status.
        </li>

        <li>
          <strong>Stolen Vehicle Verification:</strong> Checks whether a vehicle
          has been reported stolen to help prevent fraud and illegal transactions.
        </li>

        <li>
          <strong>Driving License:</strong> Validates driving license details to
          confirm authenticity and driver eligibility.
        </li>

        <li>
          <strong>Challan via RC:</strong> Retrieves traffic challan details
          associated with a vehicle’s registration number for compliance tracking.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in vehicle verification, fleet management,
        insurance processing, law enforcement checks, and transport compliance
        workflows.
      </p>
    </div>
  );
};

export default VehicleServicesInfo;