import React from "react";
import "../../styles/serviceInfo.css";

const OCRServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">OCR Services</h2>

      <p className="service-description">
        OCR (Optical Character Recognition) Services enable automated extraction,
        classification, and processing of data from documents and images. These
        services help organizations digitize records, reduce manual effort, and
        improve accuracy in data capture for faster and more efficient workflows.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>New Doc Classification:</strong> Automatically identifies and
          classifies different types of documents for streamlined processing and
          routing.
        </li>

        <li>
          <strong>Comprehensive NID (OCR):</strong> Extracts and processes data
          from national identity documents with high accuracy for verification
          and record management.
        </li>

        <li>
          <strong>PAN OCR (with Managed Service):</strong> Captures and validates
          PAN card details using OCR, combined with managed services for enhanced
          accuracy and reliability.
        </li>

        <li>
          <strong>DL OCR (with Managed Service):</strong> Extracts driving license
          information from images and documents, supported by managed services
          to ensure precise data extraction and validation.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in digital onboarding, KYC processes,
        document management, data entry automation, and compliance workflows.
      </p>
    </div>
  );
};

export default OCRServicesInfo;