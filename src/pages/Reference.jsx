import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBarApi from "../components/SideBarApi";
import "../styles/guides.css";

// Import your existing documentation components
import PanVerification from "../apiDocs/PanVerification";
import PanToAadhaarVerification from "../apiDocs/PanToAadhaarVerification";
import FaceMatchVerification from "../apiDocs/FaceMatchVerification";
import MobileNumberOtpGenration from "../apiDocs/MobileNumberOtpGenration";
import MobileNumberOtpVerification from "../apiDocs/MobileNumberOtpVerification";
import AadhaarIntiation from "../apiDocs/AadhaarIntiation";
import AadhaarStatus from "../apiDocs/AadhaarStatus";

import BankAccountPennyDropVerification from "../apiDocs/BankAccountPennyDropVerification";
import BankAccountPennyLessVerification from "../apiDocs/BankAccountPennyLessVerification";
import IfscBankDetailsVerification from "../apiDocs/IfscBankDetailsVerification";

import GSTINVerification from "../apiDocs/GstInVerification";
import CinVerification from "../apiDocs/CinVerification";
import ShopVerification from "../apiDocs/ShopEstablishmentVerification";
import UdyamVerification from "../apiDocs/UdhyamVerification";

import NameMatchVerification from "../apiDocs/NameMatchVerification";

import BinVerification from "../apiDocs/BinVerification";
import FullCreditCardVerification from "../apiDocs/FullCreditCardVerification";

import BbpsTheory from "../apiDocs/BbpsTheory";
import BillerinfoDetails from "../apiDocs/BillerinfoDetails";
import BillFetchDetails from "../apiDocs/BillfetchDetails";
import BillpayDetails from "../apiDocs/BillpayDetails";
import BillValidationDetails from "../apiDocs/BillValidation";
import QuickPayDetails from "../apiDocs/BillQuickpay";
import InstantPayPayment from "../apiDocs/InstantPayPayment";
import InstantpayTheory from "../apiDocs/InstantpayTheory"
// Mobile Recharge
import FetchingOperators from "../apiDocs/FetchingOperators";
import FetchingPlans from "../apiDocs/FetchingPlans";
import RechargePayment from "../apiDocs/RechargePayment";
import RechargeOffers from "../apiDocs/RechargeOffers";
import Skelton from "../components/Skelton";

const apiComponentMap = {
  // ---------------- KYC ----------------
  pan_num_verfication: PanVerification,
  pan_num_to_aadhaar: PanToAadhaarVerification,

  adhaar_otp_generation: AadhaarIntiation,
  adhaar_otp_verification: AadhaarStatus,

  mobile_otp_generation: MobileNumberOtpGenration,
  mobile_otp_verification: MobileNumberOtpVerification,

  face_match: FaceMatchVerification,

  // ---------------- ACCOUNT ----------------
  bank_acc_penny_drop_verfication: BankAccountPennyDropVerification,
  bank_acc_penny_less_verfication: BankAccountPennyLessVerification,
  bank_details: IfscBankDetailsVerification,

  // ---------------- COMPANY ----------------
  gst_in_verify: GSTINVerification,
  Cin_number_verification: CinVerification,
  shop_establishment_verification: ShopVerification,
  udyam_verification: UdyamVerification,

  // ---------------- CREDIT CARD ----------------
  bin_verification: BinVerification,
  credit_card_verfication: FullCreditCardVerification,

  // ---------------- COMMON ----------------
  name_match_verification: NameMatchVerification,

  // ---------------- BBPS ----------------
  bbps_Doc: BbpsTheory,
  fetching_verification: BillerinfoDetails,
  bill_fetch: BillFetchDetails,
  bill_pay: BillpayDetails,
  quick_pay: QuickPayDetails,
  bill_validation: BillValidationDetails,
 //------------ instantpay----------
   instantpay_Doc: InstantpayTheory,
   instant_Pay: InstantPayPayment,

  // ---------------- MOBILE RECHARGE ----------------
  fetching_operators: FetchingOperators,
  fetching_plans: FetchingPlans,
  recharge_payment: RechargePayment,
  recharge_payment_offers: RechargeOffers,
};

const Reference = () => {
  const { slug } = useParams();
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [loading, setLoading] = useState(false); // loading state

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
  const ApiComponent = selectedSlug ? apiComponentMap[selectedSlug] : null;

  return (
    <div className="guides_main_s">
      {/* Sidebar */}
      <div className="sidebar_wrapper_refernce">
        <SideBarApi setSelectedSlug={setSelectedSlug} />
      </div>

      {/* Main Content */}
      <div className="guides_content">
        {loading && <Skelton/>}

        {!loading && ApiComponent && <ApiComponent />}

        {!loading && !ApiComponent && (
          <div className="api_description_box">
            <h2>Welcome to the API Reference Center</h2>

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
            <ul>
              <li>
                PAN Number Verification – Validate PAN details directly from
                government sources.
              </li>
              <li>
                PAN to Aadhaar Verification – Check if a PAN is linked with
                Aadhaar.
              </li>
              <li>
                Aadhaar OTP Services – Generate OTP & fetch Aadhaar verification
                status.
              </li>
              <li>Mobile OTP Verification – Verify phone number ownership.</li>
              <li>
                Face Match Verification – Compare two faces using AI-based
                facial similarity.
              </li>
            </ul>
            <p>
              <strong>Use Cases:</strong> Fintech onboarding, credit apps,
              insurance, digital KYC, fraud prevention.
            </p>

            <h3>🔹 Business Verification APIs</h3>
            <p>
              These APIs validate the legal existence of businesses and verify
              their registration details from official government databases.
            </p>
            <ul>
              <li>
                GSTIN Verification – Fetch business name, status, and
                registration details.
              </li>
              <li>
                CIN/Company Verification – Validate companies registered under
                MCA.
              </li>
              <li>
                Shop & Establishment Verification – Verify small businesses &
                shops.
              </li>
              <li>
                Udyam Verification – Validate MSME (Udyam) certificate details.
              </li>
            </ul>
            <p>
              <strong>Use Cases:</strong> Vendor onboarding, merchant
              onboarding, B2B platforms, underwriting.
            </p>

            <h3>🔹 Bank Account & Financial Verification APIs</h3>
            <p>
              Financial verification APIs ensure payments are sent to the
              correct person or business. They eliminate transaction failures
              and reduce risk.
            </p>
            <ul>
              <li>
                Penny Drop Verification – Deposit a small amount to confirm
                account ownership.
              </li>
              <li>
                Penny-less Verification – Verify account details without fund
                transfer.
              </li>
              <li>
                IFSC & Bank Details – Fetch branch details, address, and bank
                identifiers.
              </li>
            </ul>
            <p>
              <strong>Use Cases:</strong> Payout systems, payroll, refunds,
              lending, KYC for bank accounts.
            </p>

            <h3>🔹 Common Utility APIs</h3>
            <p>
              These helper APIs improve accuracy by cross-checking user
              information.
            </p>
            <ul>
              <li>
                Name Match Verification – Compare names across documents using
                fuzzy matching.
              </li>
            </ul>
            <p>
              <strong>Use Cases:</strong> Identity matching, document
              verification, automated KYC flows.
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

export default Reference;
