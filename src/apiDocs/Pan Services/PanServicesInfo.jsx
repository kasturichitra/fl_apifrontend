import React from "react";
import "../../styles/serviceInfo.css";

const PanServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">PAN Services</h2>

      <p className="service-description">
        PAN Services are verification and data-matching APIs used to validate
        identity, check tax records, and retrieve linked financial information
        such as GSTIN. These services are widely used in KYC, onboarding, and
        compliance systems.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li><strong>PAN:</strong> Basic PAN verification for validity and status checks.</li>

        <li><strong>PAN - Director:</strong> Verify PAN details of company directors.</li>

        <li><strong>GSTIN using PAN:</strong> Fetch GSTIN linked with a PAN.</li>

        <li><strong>PAN/TAN Verification:</strong> Validate PAN and TAN authenticity.</li>

        <li><strong>PAN Name Match:</strong> Match entered name with PAN records.</li>

        <li><strong>PAN to GST:</strong> Retrieve GST details from PAN.</li>

        <li><strong>PAN Name DOB:</strong> Verify name and date of birth with PAN data.</li>

        <li><strong>PAN Father Name:</strong> Get father name linked with PAN record.</li>
      </ul>

      <p className="service-footer">
        These services support identity verification, financial onboarding,
        and regulatory compliance workflows.
      </p>
    </div>
  );
};

export default PanServicesInfo;