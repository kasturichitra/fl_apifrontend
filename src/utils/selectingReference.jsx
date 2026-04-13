// Import your existing documentation components

// access token
import AccessTokenGenration from "../apiDocs/AccessTokenGenration";

// pan services
import PanVerification from "../apiDocs/Pan Services/PanBasicVerification";
import PanNameMatch from "../apiDocs/Pan Services/PanNameMatch";
import PanDirector from "../apiDocs/Pan Services/PanDirector";
import PanToMaskedAadhaarVerification from "../apiDocs/Pan Services/PanToMaskedAadhaarVerification";
import PanNameDobVerification from "../apiDocs/Pan Services/PanNameDobVerification";
import PanToFatherName from "../apiDocs/Pan Services/PanToFatherName";
import PanToGst from "../apiDocs/Pan Services/PanToGst";

// contact and communication services
import MobileNumberOtpGenration from "../apiDocs/Contact And Communication/MobileNumberOtpGenration";
import MobileNumberOtpVerification from "../apiDocs/Contact And Communication/MobileNumberOtpVerification";

// aadhaar services
import AadhaarIntiation from "../apiDocs/Aadhaar And DigiLocker/E-Aadhaar DigiLocker.jsx/AadhaarIntiation";
import AadhaarStatus from "../apiDocs/Aadhaar And DigiLocker/E-Aadhaar DigiLocker.jsx/AadhaarStatus";
import Digilockerverify from "../apiDocs/Aadhaar And DigiLocker/Digilockerverify";
import AadhaarToMaskedPanVerification from "../apiDocs/Aadhaar And DigiLocker/AadhaarToMaskedPanVerification";

// banking services
import BankAccountPennyDropVerification from "../apiDocs/Banking And Financial/BankAccountPennyDropVerification";
import BankAccountPennyLessVerification from "../apiDocs/Banking And Financial/BankAccountPennyLessVerification";
import IfscBankDetailsVerification from "../apiDocs/Banking And Financial/IfscBankDetailsVerification";
import BinVerification from "../apiDocs/Banking And Financial/BinVerification";
import FullCreditCardVerification from "../apiDocs/Banking And Financial/FullCreditCardVerification";

// business services
import GSTINVerification from "../apiDocs/Business And Company/GstInVerification";
import CinVerification from "../apiDocs/Business And Company/CinVerification";
import ShopVerification from "../apiDocs/Business And Company/ShopEstablishmentVerification";
import UdyamVerification from "../apiDocs/Business And Company/UdhyamVerification";
import DinVerification from "../apiDocs/Business And Company/DinVerification";

// other services
import NameMatchVerification from "../apiDocs/Other Services/NameMatchVerification";
import IndustryType from "../apiDocs/Other Services/IndustryType";
import FssaiVerification from "../apiDocs/Other Services/FssaiVerification";

// face and ai services
import FaceMatchVerification from "../apiDocs/Face And Ai Verification/FaceMatchVerification";
import ImageBlurriness from "../apiDocs/Face And Ai Verification/ImageBlurriness";
import AiImageCheck from "../apiDocs/Face And Ai Verification/AiImageCheck";
import DeepfakeImageCheck from "../apiDocs/Face And Ai Verification/DeepfakeImageCheck";
import AiAndDeepfakeImageCheck from "../apiDocs/Face And Ai Verification/AiAndDeepfakeImageCheck";

// vehicle services
import VehicleRcVerification from "../apiDocs/Vehicle And Transport/VehicleRegisteration";
import DrivingLicenseVerify from "../apiDocs/Vehicle And Transport/DrivingLicenseVerify";
import ChallanViaRc from "../apiDocs/Vehicle And Transport/ChallanViaRc";
import DetailedRcVerification from "../apiDocs/Vehicle And Transport/DetailedRcVerification";
import StolenVehicleVerification from "../apiDocs/Vehicle And Transport/StolenVehicleVerification";

// geo and location
import GeoTaggingSearch from "../apiDocs/Geo Location/GeoTaggingSearch";
import GeoTaggingDistanceCalculation from "../apiDocs/Geo Location/GeoTaggingDistanceCalculation";
import PincodeGeofencing from "../apiDocs/Geo Location/PincodeGeofencing";
import LongLatToDigipin from "../apiDocs/Geo Location/LongLatToDigipin";
import DigipinToLongLat from "../apiDocs/Geo Location/DigipinToLongLat";
import LongLatGeofencing from "../apiDocs/Geo Location/LongLatGeofencing";
import AddressToDigipin from "../apiDocs/Geo Location/AddressToDigipin";

// risk and due diligence
import CourtRecordsCheck from "../apiDocs/Risk And Due Diligence/CourtRecordsCheck";
import DomainVerification from "../apiDocs/Risk And Due Diligence/DomainVerification";
import ProfileAdvance from "../apiDocs/Risk And Due Diligence/ProfileAdvance";

// Mobile Recharge
import FetchingOperators from "../apiDocs/Recharge/FetchingOperators";
import FetchingPlans from "../apiDocs/Recharge/FetchingPlans";
import RechargePayment from "../apiDocs/Recharge/RechargePayment";
import RechargeOffers from "../apiDocs/Recharge/RechargeOffers";
import FetchingOldRechargePlans from "../apiDocs/Recharge/FetchingOldRechargePlans";

//bbps
import BbpsTheory from "../apiDocs/BillPayments/BbpsTheory";
import BillerinfoDetails from "../apiDocs/BillPayments/BillerinfoDetails";
import BillFetchDetails from "../apiDocs/BillPayments/BillfetchDetails";
import BillpayDetails from "../apiDocs/BillPayments/BillpayDetails";
import BillValidationDetails from "../apiDocs/BillPayments/BillValidation";
import QuickPayDetails from "../apiDocs/BillPayments/BillQuickpay";

import Decryption from "../apiDocs/Decryption";
import Encryption from "../apiDocs/Encryption";
import ComingSoon from "../components/ComingSoon";
import PanTanVerification from "../apiDocs/Pan Services/PanTanVerification";
import TinVerification from "../apiDocs/Government Id Services/TinVerification";
import ElectricityBill from "../apiDocs/Government Id Services/ElectricityBill";
import VoterIdVerify from "../apiDocs/Government Id Services/VoterIdVerify";
import PassportOcr from "../apiDocs/Government Id Services/PassportOcr";
import PassportVerificationUsingFileNo from "../apiDocs/Government Id Services/PassportVerificationUsingFileNo";
import PassportMrz from "../apiDocs/Government Id Services/PassportMrz";
import MobileToPan from "../apiDocs/Contact And Communication/MobileToPan";
import MobileToUan from "../apiDocs/Contact And Communication/MobileToUan";
import DualEmploymentCheck from "../apiDocs/employment services/DualEmploymentCheck";
import BasicUanVerify from "../apiDocs/employment services/BasicUanVerify";
import GstAdvancedSearch from "../apiDocs/Gst Services/GstAdvancedSearch";

const apiComponentMap = {
  // ---------------- ACCESS TOKEN ----------------
  accessToken: AccessTokenGenration,

  // ---------------- ENCRYPTION ----------------
  encrypt: Encryption,
  decrypt: Decryption,

  // ---------------- PAN SERVICES ----------------
  pan_basic_verification: PanVerification,
  pan_name_match: PanNameMatch,
  pan_name_dob_validation: PanNameDobVerification,
  pan_to_masked_aadhaar: PanToMaskedAadhaarVerification,
  pan_to_gst: PanToGst,
  pan_director: PanDirector,
  pan_to_father_name: PanToFatherName,
  pan_tan_verification: PanTanVerification,

  // ---------------- AADHAAR & DIGILOCKER ----------------]
  aadhaar_to_masked_pan: AadhaarToMaskedPanVerification,
  aadhaar_initiate: AadhaarIntiation,
  aadhaar_status: AadhaarStatus,
  digilocker_verify_account: Digilockerverify,

  // ---------------- FACE AND AI SERVICES ----------------
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

  /* ================= GST SERVICES ================= */
  gst_advanced_search: GstAdvancedSearch,
  
  /* ================= BUSINESS & COMPANY ================= */
  cin_verification: CinVerification,
  gstin_verification: GSTINVerification,
  din_verification: DinVerification,
  udyam_verification: UdyamVerification,
  msme_certificate_fetch: ComingSoon,
  shop_act_verification: ShopVerification,
  trade_license_lookup: ComingSoon,
  director_details: ComingSoon,
  shareholding_pattern: ComingSoon,

  /* ================= EMPLOYMENT & INCOME ================= */
  dual_employment_check: DualEmploymentCheck,
  basic_uan_verification: BasicUanVerify,

  /* ================= VEHICLE & TRANSPORT ================= */
  vehicle_registeration: VehicleRcVerification,
  detailed_rc_verification: DetailedRcVerification,
  stolen_vehicle_verification: StolenVehicleVerification,
  driving_license_verification: DrivingLicenseVerify,
  challan_via_rc: ChallanViaRc,

    /* ================= GOVERNMENT ID SERVICES ================= */
  tin_verification: TinVerification,
  electricity_bill: ElectricityBill,
  voter_id: VoterIdVerify,
  passport_ocr: PassportOcr,
  passport_verification_file_no: PassportVerificationUsingFileNo,
  passport_mrz: PassportMrz,

  /* ================= CONTACT & COMMUNICATION ================= */
  // mobile_number_validation
  mobile_otp_generation: MobileNumberOtpGenration,
  mobile_otp_validation: MobileNumberOtpVerification,
  mobile_to_pan: MobileToPan,
  mobile_to_uan: MobileToUan,

  /* ================= GEO & LOCATION ================= */
  geo_tagging_search: GeoTaggingSearch,
  geo_tagging_distance_calculation: GeoTaggingDistanceCalculation,
  pincode_geofencing: PincodeGeofencing,
  lat_long_to_digipin: LongLatToDigipin,
  digipin_to_lat_long: DigipinToLongLat,
  longitude_latitude_geofencing: LongLatGeofencing,
  address_to_digipin: AddressToDigipin,

  /* ================= RISK & DUE DILIGENCE ================= */
  court_records_check_diy: CourtRecordsCheck,
  domain_verification: DomainVerification,
  profile_advance: ProfileAdvance,

  /* ================= OTHER SERVICES ================= */
  name_match_verification: NameMatchVerification,
  industry_type: IndustryType,
  fssai_verification: FssaiVerification,

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
