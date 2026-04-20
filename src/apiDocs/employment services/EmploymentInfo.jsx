import React from "react";
import "../../styles/serviceInfo.css";

const EmploymentServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Employment Services</h2>

      <p className="service-description">
        Employment Services help organizations verify employment-related
        records and detect potential inconsistencies in work history.
        These services are commonly used in background verification,
        onboarding, and compliance processes to ensure workforce integrity.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Basic UAN Verification:</strong> Validates the Universal
          Account Number (UAN) associated with an employee to confirm
          employment linkage and EPFO-related record authenticity.
        </li>

        <li>
          <strong>Dual Employment Check:</strong> Identifies cases where an
          individual may be simultaneously associated with multiple employers,
          helping organizations detect potential policy violations or conflicts.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in HR onboarding, background screening,
        payroll validation, and corporate compliance workflows.
      </p>
    </div>
  );
};

export default EmploymentServicesInfo;