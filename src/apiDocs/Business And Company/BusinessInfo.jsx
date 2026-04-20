import React from "react";
import "../../styles/serviceInfo.css";

const BusinessServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Business Services</h2>

      <p className="service-description">
        Business Services provide comprehensive tools to verify company
        information, validate regulatory registrations, and ensure compliance
        with government records. These services help organizations perform due
        diligence, reduce risk, and maintain accurate business data across
        operations.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>CIN Verification:</strong> Validates the Corporate Identity
          Number (CIN) to confirm company registration details with official
          records.
        </li>

        <li>
          <strong>CIN Based Company Search:</strong> Retrieves detailed company
          information using the CIN for quick verification and lookup.
        </li>

        <li>
          <strong>Company Name Search:</strong> Allows users to search and verify
          company details based on the registered business name.
        </li>

        <li>
          <strong>Udyog Aadhaar:</strong> Verifies MSME registration under the
          Udyog Aadhaar system for small and medium enterprises.
        </li>

        <li>
          <strong>Udyam Verification:</strong> Confirms MSME registration under
          the updated Udyam Registration framework.
        </li>

        <li>
          <strong>Import Export Certificate (IEC):</strong> Validates IEC details
          issued for businesses engaged in import and export activities.
        </li>

        <li>
          <strong>DGFT Verification:</strong> Verifies records with the Directorate
          General of Foreign Trade for trade-related registrations.
        </li>

        <li>
          <strong>DIN Verification:</strong> Validates Director Identification
          Number (DIN) to confirm the identity of company directors.
        </li>

        <li>
          <strong>LEI Verification:</strong> Confirms Legal Entity Identifier
          (LEI) details for entities participating in financial transactions.
        </li>

        <li>
          <strong>Udyog Aadhaar Using Phone:</strong> Retrieves MSME registration
          details using the registered mobile number.
        </li>

        <li>
          <strong>GSTIN Verification:</strong> Validates Goods and Services Tax
          Identification Number (GSTIN) to confirm taxpayer registration.
        </li>

        <li>
          <strong>Know Your PAN using GSTIN:</strong> Retrieves PAN details linked
          with a GSTIN for cross-verification.
        </li>

        <li>
          <strong>GSTIN Taxpayer:</strong> Provides detailed taxpayer information
          associated with a GSTIN.
        </li>

        <li>
          <strong>GSTIN View & Track Return:</strong> Enables tracking and viewing
          of GST return filing status for compliance monitoring.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in vendor onboarding, compliance checks,
        financial verification, risk assessment, and corporate due diligence
        processes.
      </p>
    </div>
  );
};

export default BusinessServicesInfo;