import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import SideBarApi from "../components/SideBarApi";
import "../styles/guides.css";
import Skelton from "../components/Skelton";
import { selectingActiveRefernce } from "../utils/selectingReference";

const Reference = () => {
  const { slug } = useParams();
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [loading, setLoading] = useState(false); // loading state
  const { setShowSuggestions, setSearchTermQuery } = useOutletContext();

  useEffect(() => {
    if (slug) {
      setLoading(true);
      const timer = setTimeout(() => {
        setSelectedSlug(slug);
        setLoading(false);
      }, 300); // small delay for loading animation

      return () => clearTimeout(timer);
    }
  }, [slug]);

  // always get the component directly from selectedSlug
  const ApiComponent = selectedSlug
    ? selectingActiveRefernce(selectedSlug)
    : null;

  return (
    <div className="guides_main_s">
      {/* Sidebar */}
      <div className="sidebar_wrapper_refernce">
        <SideBarApi
          setSelectedSlug={setSelectedSlug}
          setShowSuggestions={setShowSuggestions}
          setSearchTermQuery={setSearchTermQuery}
        />
      </div>

      {/* Main Content */}
      <div className="guides_content">
        {loading && <Skelton />}

        {!loading && ApiComponent && <ApiComponent />}

        {!loading && !ApiComponent && (
          <div className="api_description_box">
            <h2>Welcome to the API Reference Center</h2>

            <p>
              This platform provides a comprehensive suite of APIs designed to
              help businesses automate identity verification, financial
              operations, utility payments, recharges, compliance, and digital
              onboarding. All APIs are secure, scalable, and built for
              production use.
            </p>

            <h3>🔹 PAN Services</h3>
            <p>
              APIs in this category help validate PAN identity and support tax
              compliance and customer onboarding processes.
            </p>

            <h3>🔹 GST Service</h3>
            <p>
              These APIs enable GST registration verification and help confirm
              business tax compliance details for merchants and vendors.
            </p>

            <h3>🔹 Aadhaar & DigiLocker</h3>
            <p>
              This category provides Aadhaar-based identity verification and
              secure access to government-issued digital documents through
              DigiLocker integration.
            </p>

            <h3>🔹 Banking & Financial</h3>
            <p>
              Financial verification APIs ensure secure transactions by
              validating bank accounts, IFSC details, and account ownership.
            </p>

            <h3>🔹 Business & Company</h3>
            <p>
              These APIs verify company registrations, business legitimacy, and
              government records to support onboarding and compliance workflows.
            </p>

            <h3>🔹 Employment & Income</h3>
            <p>
              APIs that help validate employment status and income-related
              information for lending, underwriting, and risk assessment
              systems.
            </p>

            <h3>🔹 Vehicle & Transport</h3>
            <p>
              This category provides vehicle and driving license verification
              for transport, insurance, and compliance applications.
            </p>

            <h3>🔹 Face & AI Verification</h3>
            <p>
              AI-powered identity verification APIs using facial recognition,
              liveness detection, and image matching technologies.
            </p>

            <h3>🔹 OCR & Document AI</h3>
            <p>
              Intelligent document processing APIs that extract and structure
              data from images, IDs, invoices, and official documents.
            </p>

            <h3>🔹 Government ID Services</h3>
            <p>
              APIs that validate various government-issued identity documents to
              ensure authenticity and compliance.
            </p>

            <h3>🔹 Contact & Communication</h3>
            <p>
              Communication verification APIs including mobile, email, and
              messaging channels for secure user validation.
            </p>

            <h3>🔹 Geo & Location</h3>
            <p>
              Location intelligence APIs for address validation, PIN code
              lookup, and geocoding services.
            </p>

            <h3>🔹 Risk & Due Diligence</h3>
            <p>
              APIs designed for fraud detection, blacklist screening, and AML
              compliance checks for secure business operations.
            </p>

            <h3>🔹 Professional Verification</h3>
            <p>
              Verification APIs for validating professional credentials such as
              education, certifications, and licensed professionals.
            </p>

            {/* NEW ADDITIONS */}

            <h3>🔹 BBPS (Bharat Bill Payment System)</h3>
            <p>
              BBPS APIs enable secure and real-time bill payment processing for
              utilities such as electricity, water, gas, and other recurring
              payments under NPCI standards.
            </p>

            <h3>🔹 Mobile Recharge Services</h3>
            <p>
              Recharge APIs allow seamless prepaid and postpaid mobile recharge
              services across all major telecom operators with real-time
              processing and confirmation.
            </p>

            <h3>🔹 Other Services</h3>
            <p>
              Additional utility APIs including payment support, validation
              tools, and supplementary fintech services that enhance platform
              capabilities.
            </p>

            <hr />

            <h3>📌 Documentation Overview</h3>
            <p>
              Each API section contains detailed technical documentation
              including endpoints, authentication methods, request-response
              formats, error handling, and integration guidelines. Use the
              navigation menu to explore specific API capabilities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reference;
