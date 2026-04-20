import React from "react";
import "../../../styles/serviceInfo.css";

const AadhaarDigiLockerVerificationInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Aadhaar Verification (DigiLocker)</h2>

      <p className="service-description">
        Aadhaar Verification through DigiLocker is a secure, government-backed
        process for validating identity using digitally stored Aadhaar records.
        It ensures reliable KYC verification by fetching authenticated data
        directly from DigiLocker, reducing manual intervention and fraud risk.
      </p>

      <h3 className="service-subtitle">Verification Flow</h3>

      <ul className="service-list">
        <li>
          <strong>1. Initiate Request:</strong> The user starts the Aadhaar
          verification process, which triggers a secure connection with
          DigiLocker and requests user authorization.
        </li>

        <li>
          <strong>2. Verification Status:</strong> After successful
          authentication, the system retrieves Aadhaar details and provides
          the verification result, including success or failure status.
        </li>
      </ul>

      <h3 className="service-subtitle">Key Benefits</h3>

      <ul className="service-list">
        <li>Government-verified and highly secure data source.</li>
        <li>Reduces manual KYC effort and processing time.</li>
        <li>Minimizes fraud and identity manipulation risks.</li>
        <li>Fast and seamless digital onboarding experience.</li>
      </ul>

      <p className="service-footer">
        This service is widely used in KYC verification, fintech onboarding,
        banking systems, and identity authentication workflows.
      </p>
    </div>
  );
};

export default AadhaarDigiLockerVerificationInfo;