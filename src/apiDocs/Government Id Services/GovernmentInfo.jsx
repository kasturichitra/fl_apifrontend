import React from "react";
import "../../styles/serviceInfo.css";

const GovernmentServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Government Services</h2>

      <p className="service-description">
        Government Services provide identity verification and document validation
        using official government-issued records. These services help businesses
        authenticate individuals and verify documents for compliance, KYC, and
        security purposes.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Passport MRZ:</strong> Extracts and verifies data from the
          Machine Readable Zone (MRZ) of a passport for quick identity validation.
        </li>

        <li>
          <strong>Passport Verification Using File No.:</strong> Validates passport
          details using the passport file number issued during application.
        </li>

        <li>
          <strong>Passport (with OCR):</strong> Uses Optical Character Recognition
          (OCR) to extract and verify information from passport documents.
        </li>

        <li>
          <strong>Voter ID:</strong> Verifies voter ID details to confirm identity
          and eligibility using election records.
        </li>
      </ul>

      <p className="service-footer">
        These services are commonly used in identity verification systems,
        onboarding processes, and regulatory compliance workflows.
      </p>
    </div>
  );
};

export default GovernmentServicesInfo;