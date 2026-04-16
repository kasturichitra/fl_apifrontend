import React from "react";
import "../../styles/serviceInfo.css";

const ContactServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Contact Services</h2>

      <p className="service-description">
        Contact Services provide secure identity verification and linking
        mechanisms between mobile numbers and government identifiers.
        These services are widely used for authentication, compliance,
        fraud prevention, and user identity validation.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Mobile OTP Verification:</strong> A two-step authentication
          process used to verify user identity through mobile number validation.
          <ul>
            <li>
              <strong>OTP Generation:</strong> A One-Time Password (OTP) is
              generated and sent to the user’s registered mobile number.
            </li>
            <li>
              <strong>OTP Verification:</strong> The user submits the received
              OTP, which is validated to confirm identity and complete the
              verification process.
            </li>
          </ul>
        </li>

        <li>
          <strong>Mobile to UAN:</strong> Maps and verifies the association
          between a mobile number and a Universal Account Number (UAN) for
          employment-related identity validation.
        </li>

        <li>
          <strong>Mobile to PAN:</strong> Links and verifies a mobile number
          with a Permanent Account Number (PAN) to ensure financial identity
          authenticity and compliance checks.
        </li>
      </ul>

      <p className="service-footer">
        These services are commonly used in onboarding systems, banking,
        fintech platforms, government verification workflows, and secure
        authentication processes.
      </p>
    </div>
  );
};

export default ContactServicesInfo;