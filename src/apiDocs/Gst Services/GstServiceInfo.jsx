import React from "react";
import "../../styles/serviceInfo.css";

const GSTServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">GST Services</h2>

      <p className="service-description">
        GST Services provide efficient tools to access, verify, and analyze
        Goods and Services Tax (GST) data. These services help businesses
        ensure compliance, streamline tax-related processes, and gain accurate
        insights into taxpayer and registration details.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Comprehensive GST Solution:</strong> Offers a complete suite
          of GST-related verifications, data retrieval, and analysis to support
          compliance and business decision-making.
        </li>

        <li>
          <strong>GST Advanced Search:</strong> Enables detailed search and
          lookup of GST records using multiple parameters for precise results.
        </li>

        <li>
          <strong>GST Basis PAN:</strong> Retrieves GST registrations linked to
          a specific PAN, allowing users to identify associated business entities.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in taxation compliance, financial audits,
        vendor verification, and business intelligence workflows.
      </p>
    </div>
  );
};

export default GSTServicesInfo;