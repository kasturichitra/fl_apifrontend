import React from "react";
import "../../styles/serviceInfo.css";

const AadhaarServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Aadhaar Services</h2>

      <p className="service-description">
        Aadhaar Services provide secure identity verification, document
        authentication, and digital onboarding capabilities using Aadhaar-based
        systems and DigiLocker integration. These services are widely used in
        KYC, compliance, and identity verification workflows.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>DigiLocker Verify Account:</strong> Verifies user identity
          through DigiLocker account authentication.
        </li>

        <li>
          <strong>E Aadhaar Verification (DigiLocker):</strong> Verifies e-Aadhaar
          through DigiLocker integration in two steps:
          <ul>
            <li>
              <strong>1. Aadhaar Initiate:</strong> The verification request is
              initiated and securely sent to DigiLocker for authentication.
            </li>
            <li>
              <strong>2. Aadhaar Status:</strong> The system checks and returns
              the verification status after successful authentication.
            </li>
          </ul>
        </li>

        <li>
          <strong>Aadhaar to PAN:</strong> Links and verifies PAN details using
          Aadhaar number mapping.
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