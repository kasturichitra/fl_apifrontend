import React from "react";
import "../../styles/serviceInfo.css";

const ProfessionalVerificationInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Professional Verification</h2>

      <p className="service-description">
        Professional Verification services help validate the credentials,
        registration status, and authenticity of licensed professionals.
        These checks ensure trust, compliance, and reduce risk in hiring,
        partnerships, and service engagements across regulated industries.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Insurance Agent Verification:</strong> Confirms whether an
          insurance agent is officially registered and authorized to provide
          insurance services under the relevant regulatory authority.
        </li>

        <li>
          <strong>CA Verification:</strong> Validates the credentials and
          registration details of a Chartered Accountant to ensure they are
          certified and authorized to practice.
        </li>

        <li>
          <strong>Doctor Verification:</strong> Verifies the medical license
          and registration status of doctors to confirm they are qualified and
          recognized by the appropriate medical council.
        </li>

        <li>
          <strong>Dentist Verification:</strong> Checks the licensing and
          registration of dentists to ensure they are authorized to practice
          dental care professionally.
        </li>
      </ul>

      <p className="service-footer">
        These services are commonly used in healthcare onboarding, financial
        services compliance, insurance validation, and professional hiring
        processes.
      </p>
    </div>
  );
};

export default ProfessionalVerificationInfo;