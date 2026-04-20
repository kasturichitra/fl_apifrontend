import React from "react";
import "../../styles/serviceInfo.css";

const OtherServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Other Services</h2>

      <p className="service-description">
        Other Services provide additional verification and enrichment tools that
        help organizations validate identity details, regulatory compliance, and
        business classification. These services support improved data accuracy,
        onboarding efficiency, and risk reduction across multiple industries.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Advanced Name/Address Match:</strong> Performs a detailed
          matching process to verify whether a provided name and address
          correspond accurately with official or reference records, reducing
          identity mismatches and fraud risk.
        </li>

        <li>
          <strong>FSSAI Verification:</strong> Validates the registration and
          license details of food businesses under the Food Safety and Standards
          Authority of India (FSSAI) to ensure regulatory compliance.
        </li>

        <li>
          <strong>Industry Type:</strong> Classifies businesses or entities into
          their respective industry categories based on available data for
          better segmentation, analysis, and decision-making.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in KYC workflows, compliance checks,
        business onboarding, and data enrichment systems.
      </p>
    </div>
  );
};

export default OtherServicesInfo;