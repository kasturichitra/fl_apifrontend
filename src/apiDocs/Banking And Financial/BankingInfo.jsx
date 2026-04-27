import React from "react";
import "../../styles/serviceInfo.css";

const BankingServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Banking Services</h2>

      <p className="service-description">
        Banking Services provide secure financial verification, account validation,
        and credit analysis APIs. These services help in verifying bank accounts,
        analyzing financial data, and assessing creditworthiness for onboarding,
        lending, and compliance workflows.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Penny Drop (Bank Account Validation):</strong> Verifies bank
          account ownership by sending a small test transaction (penny drop)
          and confirming account holder details.
        </li>

        <li>
          <strong>Advance Bank Account Verification:</strong> Performs enhanced
          validation of bank account details for fraud prevention and accuracy.
        </li>

        {/* <li>
          <strong>Bank Statement Analysis Advance:</strong> Analyzes uploaded bank
          statements to extract financial insights and transaction patterns.
        </li>

        <li>
          <strong>Bank Statement Analysis - Via Netbanking:</strong> Securely
          fetches and analyzes bank statements through netbanking authentication.
        </li> */}

        <li>
          <strong>IFSC Code Check:</strong> Validates IFSC codes and retrieves
          associated bank branch details.
        </li>

        <li>
          <strong>Cheque Classification:</strong> Identifies and classifies cheque
          details for verification and processing.
        </li>

        <li>
          <strong>CIBIL:</strong> Retrieves credit score and credit report data
          for financial assessment and lending decisions.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in fintech platforms, lending systems,
        fraud detection, and digital onboarding processes.
      </p>
    </div>
  );
};

export default BankingServicesInfo;