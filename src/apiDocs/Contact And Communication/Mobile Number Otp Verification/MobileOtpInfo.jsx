import React from "react";
import "../../../styles/serviceInfo.css";

const MobileOTPInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Mobile OTP Service</h2>

      <p className="service-description">
        Mobile OTP Service provides a secure way to verify user identity using
        One-Time Passwords (OTP) sent to a registered mobile number. This
        service is commonly used for authentication, transaction verification,
        and secure access control.
      </p>

      <h3 className="service-subtitle">Verification Flow</h3>

      <ul className="service-list">
        <li>
          <strong>1. OTP Generation:</strong> The system generates a unique
          one-time password and sends it to the user’s registered mobile number
          through SMS or supported messaging channels.
        </li>

        <li>
          <strong>2. OTP Verification:</strong> The user enters the received OTP,
          which is then validated by the system to confirm identity and complete
          the authentication process.
        </li>
      </ul>

      <h3 className="service-subtitle">Key Benefits</h3>

      <ul className="service-list">
        <li>Enhanced security through time-sensitive passwords.</li>
        <li>Prevents unauthorized access to user accounts.</li>
        <li>Fast and simple authentication process.</li>
        <li>Widely supported across applications and platforms.</li>
      </ul>

      <p className="service-footer">
        This service is widely used in login systems, transaction approvals,
        account verification, and secure digital onboarding workflows.
      </p>
    </div>
  );
};

export default MobileOTPInfo;