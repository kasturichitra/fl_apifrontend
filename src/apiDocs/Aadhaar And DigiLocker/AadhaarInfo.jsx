import React from "react";
import "../../styles/serviceInfo.css";

const AadhaarServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Aadhaar Services</h2>

      <p className="service-description">
        Aadhaar Services provide secure identity verification, document
        authentication, and digital signing capabilities using Aadhaar-based
        systems and DigiLocker integration. These services are widely used in
        KYC, onboarding, and digital compliance workflows.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>DigiLocker Verify Account:</strong> Verifies user identity
          through DigiLocker account authentication.
        </li>

        <li>
          <strong>E Aadhaar Verification (DigiLocker):</strong> Validates e-Aadhaar
          document using DigiLocker API integration.
        </li>

        <li>
          <strong>Aadhaar to PAN:</strong> Links and verifies PAN details using
          Aadhaar number mapping.
        </li>

        <li>
          <strong>Aadhaar Based eSign:</strong> Provides digital signature
          authentication using Aadhaar-based OTP verification.
        </li>

        <li>
          <strong>E-Aadhaar Upload (PDF):</strong> Allows secure upload and
          validation of e-Aadhaar PDF documents.
        </li>
      </ul>

      <p className="service-footer">
        These services are commonly used in government-approved KYC flows,
        financial onboarding, and digital identity verification systems.
      </p>
    </div>
  );
};

export default AadhaarServicesInfo;