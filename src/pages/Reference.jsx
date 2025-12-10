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

// import BinVerification from "../apiDocs/BinVerification";
// import FullCreditCardVerification from "../apiDocs/FullCreditCardVerification";

import NameMatchVerification from "../apiDocs/NameMatchVerification";

// BBPS Components (create these later)
// import FetchingBillerInfo from "../apiDocs/FetchingBillerInfo";
// import BillFetch from "../apiDocs/BillFetch";
// import BillPay from "../apiDocs/BillPay";

// Mobile Recharge
import FetchingPlans from "../apiDocs/FetchingPlans";
import RechargePayment from "../apiDocs/RechargePayment";
import BinVerification from "../apiDocs/BinVerification";
import FullCreditCardVerification from "../apiDocs/FullCreditCardVerification";
import BbpsTheory from "../apiDocs/BbpsTheory";
import BillerinfoDetails from "../apiDocs/BillerinfoDetails";
import FetchingOperators from "../apiDocs/FetchingOperators";
import BillFetchDetails from "../apiDocs/BillfetchDetails";
import BillpayDetails from "../apiDocs/BillpayDetails";
import BillValidationDetails from "../apiDocs/BillValidation";
import QuickPayDetails from "../apiDocs/BillQuickpay";


// Placeholder if component is missing
const ComingSoon = () => <h2>Documentation Coming Soon…</h2>;

// ********** API MAPPING (FULLY SYNCED TO ApiReferences) **********
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
  bin_verification: BinVerification || ComingSoon,
  full_credit_card_verfication: FullCreditCardVerification || ComingSoon,

  // ---------------- COMMON ----------------
  name_match_verification: NameMatchVerification,

  // ---------------- BBPS ----------------
    bbps_Doc: BbpsTheory,
    fetching_verification: BillerinfoDetails,
    bill_fetch: BillFetchDetails,
     bill_pay: BillpayDetails,
     quick_pay: QuickPayDetails,
     bill_validation: BillValidationDetails,
    
  // ---------------- MOBILE RECHARGE ----------------
  fetching_operators: FetchingOperators || ComingSoon,
  fetching_plans: FetchingPlans || ComingSoon,
  recharge_payment: RechargePayment || ComingSoon,
};

const Reference = () => {
  const { slug } = useParams();
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    if (slug) setSelectedSlug(slug);
  }, [slug]);

  const ApiComponent = selectedSlug ? apiComponentMap[selectedSlug] : null;

  return (
    <div className="guides_main_s">
      {/* Sidebar */}
      <div className="sidebar_wrapper_refernce">
        <SideBarApi setSelectedSlug={setSelectedSlug} />
      </div>

      {/* Main Content */}
      <div className="guides_content">
        {ApiComponent ? (
          <ApiComponent />
        ) : (
          <h2>Select an API from the sidebar to view its documentation.</h2>
        )}
      </div>
    </div>
  );
};

export default Reference;
