import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Introduction from "../documents/Introduction";
import ApiKeys from "../documents/ApiKeys";
import ErrorCodesDoc from "../documents/ErrorCodesDoc";
import ApiRateLimit from "../documents/ApiRateLimit";
import Skelton from "../components/Skelton";
import BodyParams from "../documents/BodyParams";

const apiComponentMap = {
  apimodule_guide: Introduction,
  api_keys: ApiKeys,
  body_params: BodyParams,
  error_codes: ErrorCodesDoc,
  rate_limiting: ApiRateLimit
};

const Guides = () => {
  const [activeSection, setActiveSection] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) setActiveSection(slug);
  }, [slug]);

  const ApiComponent = apiComponentMap[slug];

  return (
    <div className="guides_main_s">
      <SideBar
        activeSection={activeSection}
        onSlugClick={(newSlug) => {
          navigate(`/guides/${newSlug}`); 
          setActiveSection(newSlug);
        }}
      />

      <div className="guides_content">
        {/* {ApiComponent ? <ApiComponent /> : <div>Select an API</div>} */}

           {loading && <Skelton/>}

        {!loading && ApiComponent && <ApiComponent />}

        {!loading && !ApiComponent && (
          <div className="api_description_box">
            <h2>Welcome to the Guides</h2>

            <p>
              This platform provides a complete suite of powerful APIs that help
              businesses automate KYC, verify identities, validate businesses,
              process financial transactions, handle bill payments, perform
              mobile recharges, and more. All APIs are designed to be secure,
              fast, highly scalable, and easy to integrate.
            </p>

            <h3>🔹 KYC Verification APIs</h3>
            <p>
              Our KYC APIs help businesses validate the identity of their
              customers using government-backed and AI-driven verification
              systems. These APIs reduce fraud, streamline onboarding, and help
              you meet compliance (KYC/AML) requirements.
            </p>
            <p>
              <strong>Use Cases:</strong> Fintech onboarding, credit apps,
              insurance, digital KYC, fraud prevention.
            </p>
            
            <h3>🔹 BBPS (Bharat Bill Payment System) APIs</h3>
            <p>
              BBPS APIs enable your application to conduct nationwide utility
              bill payments with secure and real-time confirmation. These APIs
              follow NPCI standards.
            </p>
            <ul>
              <li>Biller Information – Fetch list of supported billers.</li>
              <li>
                Bill Fetch – Get bill amount, due date, and consumer details.
              </li>
              <li>
                Bill Validation – Validate consumer number before payment.
              </li>
              <li>Bill Payment – Pay bills instantly with receipt.</li>
              <li>Quick Pay – Fast bill payment without full fetch.</li>
            </ul>
            <p>
              <strong>Use Cases:</strong> Payment apps, agent apps,
              multi-service portals, fintech wallets.
            </p>

            <h3>🔹 Mobile Recharge APIs</h3>
            <p>
              Mobile recharge APIs allow you to offer seamless prepaid and
              postpaid recharge features within your application.
            </p>
            <ul>
              <li>
                Fetch Operators – Auto-detect operator from mobile number.
              </li>
              <li>Fetch Plans – Get data, SMS, and talk-time plans.</li>
              <li>
                Recharge Payment – Recharge instantly across all networks.
              </li>
            </ul>
            <p>
              <strong>Use Cases:</strong> Recharge apps, retail POS systems,
              agents, fintech super apps.
            </p>

            <h3>🔹 Credit Card & BIN Verification APIs</h3>
            <p>
              These APIs help you verify card data before processing payments,
              reducing fraud and failed transactions.
            </p>
            <ul>
              <li>
                BIN Verification – Identify issuing bank, card type, and
                network.
              </li>
              <li>
                Full Credit Card Verification – Detect invalid or risky card
                numbers.
              </li>
            </ul>
            <p>
              <strong>Use Cases:</strong> Payments, checkout systems, fraud
              detection platforms.
            </p>

            <h3>📌 What You’ll Find in Each Documentation Page</h3>
            <ul>
              <li>Clear API endpoints</li>
              <li>Request & response formats</li>
              <li>Authentication details</li>
              <li>Error codes & solutions</li>
              <li>Integration flow diagrams</li>
              <li>Real-world examples</li>
            </ul>

            <p>
              Use the sidebar on the left to explore each API in detail. Every
              section contains complete technical documentation to help you
              integrate smoothly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guides;
