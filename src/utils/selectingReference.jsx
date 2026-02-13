import AccessTokenGenration from "../apiDocs/AccessTokenGenration";

// Import your existing documentation components
import PanVerification from "../apiDocs/Pan Services/PanVerification";
import PanToAadhaarVerification from "../apiDocs/Pan Services/PanToAadhaarVerification";
import FaceMatchVerification from "../apiDocs/Face And Ai Verification/FaceMatchVerification";
import MobileNumberOtpGenration from "../apiDocs/Contact And Communication/MobileNumberOtpGenration";
import MobileNumberOtpVerification from "../apiDocs/Contact And Communication/MobileNumberOtpVerification";
import AadhaarIntiation from "../apiDocs/Aadhaar And DigiLocker/E-Aadhaar DigiLocker.jsx/AadhaarIntiation";
import AadhaarStatus from "../apiDocs/Aadhaar And DigiLocker/E-Aadhaar DigiLocker.jsx/AadhaarStatus";

import BankAccountPennyDropVerification from "../apiDocs/Banking And Financial/BankAccountPennyDropVerification";
import BankAccountPennyLessVerification from "../apiDocs/Banking And Financial/BankAccountPennyLessVerification";
import IfscBankDetailsVerification from "../apiDocs/Banking And Financial/IfscBankDetailsVerification";

import GSTINVerification from "../apiDocs/Business And Company/GstInVerification";
import CinVerification from "../apiDocs/Business And Company/CinVerification";
import ShopVerification from "../apiDocs/Business And Company/ShopEstablishmentVerification";
import UdyamVerification from "../apiDocs/Business And Company/UdhyamVerification";

import NameMatchVerification from "../apiDocs/Other Services/NameMatchVerification";

import BinVerification from "../apiDocs/Banking And Financial/BinVerification";
import FullCreditCardVerification from "../apiDocs/Banking And Financial/FullCreditCardVerification";


// Mobile Recharge
import FetchingOperators from "../apiDocs/Recharge/FetchingOperators";
import FetchingPlans from "../apiDocs/Recharge/FetchingPlans";
import RechargePayment from "../apiDocs/Recharge/RechargePayment";
import RechargeOffers from "../apiDocs/Recharge/RechargeOffers";

import BbpsTheory from "../apiDocs/BillPayments/BbpsTheory";
import BillerinfoDetails from "../apiDocs/BillPayments/BillerinfoDetails";
import BillFetchDetails from "../apiDocs/BillPayments/BillfetchDetails";
import BillpayDetails from "../apiDocs/BillPayments/BillpayDetails";
import BillValidationDetails from "../apiDocs/BillPayments/BillValidation";
import QuickPayDetails from "../apiDocs/BillPayments/BillQuickpay";
import InstantPayPayment from "../apiDocs/InstantPayPayment";
import InstantpayTheory from "../apiDocs/InstantpayTheory";

import FetchingOldRechargePlans from "../apiDocs/Recharge/FetchingOldRechargePlans";
import Decryption from "../apiDocs/Decryption";
import Encryption from "../apiDocs/Encryption";
import PanToDobVerification from "../apiDocs/Pan Services/PanToDobVerification";
import ComingSoon from "../components/ComingSoon";
import VehicleRcVerification from "../apiDocs/Vehicle And Transport/VehicleRcVerification";

const apiComponentMap = {
  // ---------------- ACCESS TOKEN ----------------
  accessToken: AccessTokenGenration,

  // ---------------- ENCRYPTION ----------------
  encrypt: Encryption,
  decrypt: Decryption,

  // ---------------- PAN SERVICES ----------------
  pan_basic_verification: PanVerification,
  pan_name_match: NameMatchVerification,
  pan_dob_validation: PanToDobVerification,
  pan_detailed_profile: ComingSoon,
  pan_address_fetch: ComingSoon,
  pan_linked_mobile: ComingSoon,
  pan_aadhaar_link_status: PanToAadhaarVerification,
  pan_aadhaar_seeding: ComingSoon,
  pan_active_inactive_status: ComingSoon,
  pan_correction_status: ComingSoon,
  pan_reprint_tracking: ComingSoon,

  // ---------------- AADHAAR & DIGILOCKER ----------------
  aadhaar_xml_verification: ComingSoon,
  aadhaar_qr_validation: AadhaarStatus,
  aadhaar_name_fetch: ComingSoon,
  aadhaar_dob_fetch: ComingSoon,
  digilocker_document_list: ComingSoon,
  digilocker_document_download: ComingSoon,

  aadhaar_otp_send: AadhaarIntiation,
  aadhaar_otp_verify: AadhaarStatus,

  // ---------------- MOBILE OTP ----------------
  mobile_otp_generation: MobileNumberOtpGenration,
  mobile_otp_verification: MobileNumberOtpVerification,

  // ---------------- FACE MATCH ----------------
  face_match: FaceMatchVerification,

  // ---------------- BANKING & FINANCIAL ----------------
  bank_account_verification: BankAccountPennyDropVerification,
  account_holder_name_match: NameMatchVerification,
  penny_drop_credit: BankAccountPennyDropVerification,
  penny_drop_status: ComingSoon,
  ifsc_lookup: IfscBankDetailsVerification,
  bank_branch_lookup: IfscBankDetailsVerification,
  upi_vpa_verification: ComingSoon,
  cheque_ocr: ComingSoon,
  bank_statement_analysis: ComingSoon,

  // ---------------- CREDIT CARD ----------------
  bin_verification: BinVerification,
  full_card_verification: FullCreditCardVerification,

  // ---------------- COMMON ----------------
  name_match_verification: NameMatchVerification,

  /* ================= GST SERVICES ================= */
  gstin_verification: GSTINVerification,
  gstin_name_match: ComingSoon,
  gst_business_profile: ComingSoon,
  principal_place_of_business: ComingSoon,
  gst_filing_status: ComingSoon,
  gst_return_history: ComingSoon,
  gst_compliance_score: ComingSoon,
  gst_registration_date: ComingSoon,
  gst_amendment_history: ComingSoon,

  /* ================= BUSINESS & COMPANY ================= */
  cin_verification: CinVerification,
  din_verification: ComingSoon,
  udyam_verification: UdyamVerification,
  msme_certificate_fetch: ComingSoon,
  shop_act_verification: ShopVerification,
  trade_license_lookup: ComingSoon,
  director_details: ComingSoon,
  shareholding_pattern: ComingSoon,

  /* ================= EMPLOYMENT & INCOME ================= */
  employment_history: ComingSoon,
  employer_verification: ComingSoon,
  uan_verification: ComingSoon,
  epfo_employment_records: ComingSoon,
  salary_credit_verification: ComingSoon,
  income_range_estimation: ComingSoon,
  form_16_verification: ComingSoon,
  "26as_tax_summary": ComingSoon,

  /* ================= VEHICLE & TRANSPORT ================= */
  vehicle_rc_verification: VehicleRcVerification,
  vehicle_owner_name: ComingSoon,
  driving_license_verification: ComingSoon,
  driving_license_status: ComingSoon,
  ownership_transfer_history: ComingSoon,
  hypothecation_status: ComingSoon,
  rto_details: ComingSoon,
  vehicle_registration_zone: ComingSoon,

    /* ================= GOVERNMENT ID SERVICES ================= */
  passport_verification: ComingSoon,
  passport_status: ComingSoon,
  voter_id_verification: ComingSoon,
  electoral_roll_lookup: ComingSoon,
  multi_id_search: ComingSoon,
  id_cross_match: ComingSoon,

  /* ================= CONTACT & COMMUNICATION ================= */
  mobile_number_validation: ComingSoon,
  mobile_line_type: ComingSoon,
  email_validation: ComingSoon,
  email_domain_risk: ComingSoon,
  otp_send: ComingSoon,
  otp_verify: ComingSoon,
  domain_age_check: ComingSoon,
  website_risk_score: ComingSoon,

  /* ================= GEO & LOCATION ================= */
  pincode_details: ComingSoon,
  post_office_lookup: ComingSoon,
  digipin_decode: ComingSoon,
  geo_address_resolution: ComingSoon,
  latitude_longitude_validation: ComingSoon,
  coordinate_accuracy: ComingSoon,

  /* ================= RISK & DUE DILIGENCE ================= */
  court_case_search: ComingSoon,
  litigation_history: ComingSoon,
  document_forgery_detection: ComingSoon,
  image_tampering_detection: ComingSoon,
  global_watchlist_screening: ComingSoon,
  negative_news_scan: ComingSoon,
  risk_profile_score: ComingSoon,

  /* ================= OTHER SERVICES ================= */
  professional_license_verification: ComingSoon,
  custom_verification: ComingSoon,
  miscellaneous_utility: ComingSoon,

    // ---------------- BBPS ----------------
  bbps_Doc: BbpsTheory,
  fetching_verification: BillerinfoDetails,
  bill_fetch: BillFetchDetails,
  bill_pay: BillpayDetails,
  bill_validation: BillValidationDetails,
  quick_pay: QuickPayDetails,

  // ---------------- INSTANT PAY ----------------
  instantpay_Doc: InstantpayTheory,
  instant_Pay: InstantPayPayment,

  // ---------------- MOBILE RECHARGE ----------------
  fetching_operators: FetchingOperators,
  fetching_plans: FetchingPlans,
  recharge_payment: RechargePayment,
  recharge_payment_offers: RechargeOffers,
  fetching_old_plans: FetchingOldRechargePlans,
};

export const selectingActiveRefernce = (selectedApi) => {
  return apiComponentMap[selectedApi] || ComingSoon;
};
