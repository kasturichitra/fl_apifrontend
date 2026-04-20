import React from "react";
import "../../styles/serviceInfo.css";

const RiskAndDueDiligenceInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Risk and Due Diligence</h2>

      <p className="service-description">
        Risk and Due Diligence services help organizations assess credibility,
        verify authenticity, and identify potential risks associated with
        individuals, businesses, and digital entities. These services are
        essential for compliance, fraud prevention, onboarding, and informed
        decision-making.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Court Records Check (DIY):</strong> Enables users to
          independently search and review available court records to identify
          any legal disputes, cases, or litigations associated with an
          individual or entity.
        </li>

        <li>
          <strong>Domain Verification:</strong> Validates the authenticity and
          ownership details of a domain name to assess credibility and detect
          potential fraudulent or suspicious websites.
        </li>

        <li>
          <strong>Profile Advance:</strong> Provides an enhanced risk profile
          assessment by aggregating multiple data points to deliver deeper
          insights into identity, background, and associated risks.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in onboarding, vendor verification,
        background screening, compliance checks, and enterprise risk
        management workflows.
      </p>
    </div>
  );
};

export default RiskAndDueDiligenceInfo;