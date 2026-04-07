import AccessTokenGenration from "../apiDocs/AccessTokenGenration";

// Import your existing documentation components
import PanVerification from "../apiDocs/Pan Services/PanBasicVerification";
import PanToAadhaarVerification from "../apiDocs/Pan Services/PanToAadhaarVerification";
import PanNameMatch from "../apiDocs/Pan Services/PanNameMatch";
import PanDirector from "../apiDocs/Pan Services/PanDirector";
import PanToDobVerification from "../apiDocs/Pan Services/PanToDobVerification";

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
import DinVerification from "../apiDocs/Business And Company/DinVerification";

import NameMatchVerification from "../apiDocs/Other Services/NameMatchVerification";

import BinVerification from "../apiDocs/Banking And Financial/BinVerification";
import FullCreditCardVerification from "../apiDocs/Banking And Financial/FullCreditCardVerification";


// Mobile Recharge
import FetchingOperators from "../apiDocs/Recharge/FetchingOperators";
import FetchingPlans from "../apiDocs/Recharge/FetchingPlans";
import RechargePayment from "../apiDocs/Recharge/RechargePayment";
import RechargeOffers from "../apiDocs/Recharge/RechargeOffers";

//bbps
import BbpsTheory from "../apiDocs/BillPayments/BbpsTheory";
import BillerinfoDetails from "../apiDocs/BillPayments/BillerinfoDetails";
import BillFetchDetails from "../apiDocs/BillPayments/BillfetchDetails";
import BillpayDetails from "../apiDocs/BillPayments/BillpayDetails";
import BillValidationDetails from "../apiDocs/BillPayments/BillValidation";
import QuickPayDetails from "../apiDocs/BillPayments/BillQuickpay";

import FetchingOldRechargePlans from "../apiDocs/Recharge/FetchingOldRechargePlans";
import Decryption from "../apiDocs/Decryption";
import Encryption from "../apiDocs/Encryption";
import ComingSoon from "../components/ComingSoon";
import VehicleRcVerification from "../apiDocs/Vehicle And Transport/VehicleRcVerification";
import ImageBlurriness from "../apiDocs/Face And Ai Verification/ImageBlurriness";
import AiImageCheck from "../apiDocs/Face And Ai Verification/AiImageCheck";
import DeepfakeImageCheck from "../apiDocs/Face And Ai Verification/DeepfakeImageCheck";
import AiAndDeepfakeImageCheck from "../apiDocs/Face And Ai Verification/AiAndDeepfakeImageCheck";
import GeoTaggingSearch from "../apiDocs/Geo Location/GeoTaggingSearch";
import GeoTaggingDistanceCalculation from "../apiDocs/Geo Location/GeoTaggingDistanceCalculation";
import PincodeGeofencing from "../apiDocs/Geo Location/PincodeGeofencing";
import LongLatToDigipin from "../apiDocs/Geo Location/LongLatToDigipin";
import DigipinToLongLat from "../apiDocs/Geo Location/DigipinToLongLat";
import LongLatGeofencing from "../apiDocs/Geo Location/LongLatGeofencing";
import AddressToDigipin from "../apiDocs/Geo Location/AddressToDigipin";
import PanToFatherName from "../apiDocs/Pan Services/PanToFatherName";
import PanToGst from "../apiDocs/Pan Services/PanToGst";

const apiComponentMap = {
  // ---------------- ACCESS TOKEN ----------------
  accessToken: AccessTokenGenration,

  // ---------------- ENCRYPTION ----------------
  encrypt: Encryption,
  decrypt: Decryption,

  // ---------------- PAN SERVICES ----------------
  pan_basic_verification: PanVerification,
  pan_name_match: PanNameMatch,
  pan_name_dob_validation: PanToDobVerification,
  pan_to_masked_aadhaar: PanToAadhaarVerification,
  pan_to_gst: PanToGst,
  pan_director: PanDirector,
  pan_to_father_name: PanToFatherName,

  // ---------------- AADHAAR & DIGILOCKER ----------------]
  aadhaar_to_masked_pan: AadhaarStatus,
  aadhaar_name_fetch: ComingSoon,
  aadhaar_dob_fetch: ComingSoon,
  digilocker_document_list: ComingSoon,
  digilocker_document_download: ComingSoon,
  aadhaar_otp_send: AadhaarIntiation,
  aadhaar_otp_verify: AadhaarStatus,

  // ---------------- FACE MATCH ----------------
  face_match: FaceMatchVerification,
  bluriness: ImageBlurriness,
  ai_detection: AiImageCheck,
  deepfake_detection: DeepfakeImageCheck,
  ai_and_deepfake_detection: AiAndDeepfakeImageCheck,

  // ---------------- BANKING & FINANCIAL ----------------
  bank_account_verification: BankAccountPennyDropVerification,
  account_holder_name_match: NameMatchVerification,
  account_pennyless_verfication: BankAccountPennyDropVerification,
  account_pennydrop_verification: BankAccountPennyLessVerification,
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
  din_verification: DinVerification,
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
  // mobile_number_validation
  mobile_otp_generation: MobileNumberOtpGenration,
  mobile_otp_verification: MobileNumberOtpVerification,
  email_validation: ComingSoon,
  email_domain_risk: ComingSoon,

  /* ================= GEO & LOCATION ================= */
  geo_tagging_search: GeoTaggingSearch,
  geo_tagging_distance_calculation: GeoTaggingDistanceCalculation,
  pincode_geofencing: PincodeGeofencing,
  lat_long_to_digipin: LongLatToDigipin,
  digipin_to_lat_long: DigipinToLongLat,
  longitude_latitude_geofencing: LongLatGeofencing,
  address_to_digipin: AddressToDigipin,

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
