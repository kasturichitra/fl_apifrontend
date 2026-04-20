// Import your existing documentation components

// access token
import AccessTokenGenration from "../apiDocs/AccessTokenGenration";

// encryption and decryption
import EncryptionAndDecryption from "../apiDocs/EncryptionAndDecryption";

// pan services
import PanVerification from "../apiDocs/Pan Services/PanBasicVerification";
import PanNameMatch from "../apiDocs/Pan Services/PanNameMatch";
import PanDirector from "../apiDocs/Pan Services/PanDirector";
import PanToMaskedAadhaarVerification from "../apiDocs/Pan Services/PanToMaskedAadhaarVerification";
import PanNameDobVerification from "../apiDocs/Pan Services/PanNameDobVerification";
import PanToFatherName from "../apiDocs/Pan Services/PanToFatherName";
import PanToGst from "../apiDocs/Pan Services/PanToGst";
import PanTanVerification from "../apiDocs/Pan Services/PanTanVerification";
import PanToGst_in from "../apiDocs/Pan Services/PanToGst_in";
import PanServicesInfo from "../apiDocs/Pan Services/PanServicesInfo";

// contact and communication services
import MobileNumberOtpGenration from "../apiDocs/Contact And Communication/Mobile Number Otp Verification/MobileNumberOtpGenration";
import MobileNumberOtpVerification from "../apiDocs/Contact And Communication/Mobile Number Otp Verification/MobileNumberOtpVerification";
import MobileToPan from "../apiDocs/Contact And Communication/MobileToPan";
import MobileToUan from "../apiDocs/Contact And Communication/MobileToUan";

// aadhaar services
import AadhaarIntiation from "../apiDocs/Aadhaar And DigiLocker/E-Aadhaar DigiLocker.jsx/AadhaarIntiation";
import AadhaarStatus from "../apiDocs/Aadhaar And DigiLocker/E-Aadhaar DigiLocker.jsx/AadhaarStatus";
import Digilockerverify from "../apiDocs/Aadhaar And DigiLocker/Digilockerverify";
import AadhaarToMaskedPanVerification from "../apiDocs/Aadhaar And DigiLocker/AadhaarToMaskedPanVerification";
import AadhaarServicesInfo from "../apiDocs/Aadhaar And DigiLocker/AadhaarInfo";

// banking services
import BankAccountPennyDropVerification from "../apiDocs/Banking And Financial/BankAccountPennyDropVerification";
import BankAccountPennyLessVerification from "../apiDocs/Banking And Financial/BankAccountPennyLessVerification";
import IfscBankDetailsVerification from "../apiDocs/Banking And Financial/IfscBankDetailsVerification";
import BinVerification from "../apiDocs/Banking And Financial/BinVerification";
import FullCreditCardVerification from "../apiDocs/Banking And Financial/FullCreditCardVerification";
import ChequeClassification from "../apiDocs/Banking And Financial/ChequeClassification";
import AdvanceBankAccountVerification from "../apiDocs/Banking And Financial/AdvanceBankAccountVerification";
import Cibil from "../apiDocs/Banking And Financial/Cibil";
import BankingServicesInfo from "../apiDocs/Banking And Financial/BankingInfo";

// business services
import GSTINVerification from "../apiDocs/Business And Company/GstInVerification";
import CinVerification from "../apiDocs/Business And Company/CinVerification";
import ShopVerification from "../apiDocs/Business And Company/ShopEstablishmentVerification";
import UdyamVerification from "../apiDocs/Business And Company/UdhyamVerification";
import DinVerification from "../apiDocs/Business And Company/DinVerification";
import LeiVerification from "../apiDocs/Business And Company/LeiVerification";
import CompanyNameSearch from "../apiDocs/Business And Company/CompanyNameSearch";
import UdhyogAadhaar from "../apiDocs/Business And Company/UdhyogAadhaar";
import IecVerification from "../apiDocs/Business And Company/IecVerification";
import UdyogAadhaarUsingPhone from "../apiDocs/Business And Company/UdyogAadhaarUsingPhone";
import KnowPanUsingGstin from "../apiDocs/Business And Company/KnowPanUsingGstin";
import GstInTaxpayer from "../apiDocs/Business And Company/GstInTaxpayer";
import GstInViewAndReturn from "../apiDocs/Business And Company/GstInViewAndReturn";
import CinBasedCompanySearch from "../apiDocs/Business And Company/CinBasedCompanySearch";

// gst services
import GstAdvancedSearch from "../apiDocs/Gst Services/GstAdvancedSearch";
import ComprehensiveGstSolution from "../apiDocs/Gst Services/ComprehensiveGstSolution";
import GstBasisPan from "../apiDocs/Gst Services/GstBasisPan";

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

// employment services
import DualEmploymentCheck from "../apiDocs/employment services/DualEmploymentCheck";
import BasicUanVerify from "../apiDocs/employment services/BasicUanVerify";

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

// professional verification
import ESignAadhaarBased from "../apiDocs/ProfessionalVerification/ESignAadhaarBased";
import DentistVerification from "../apiDocs/ProfessionalVerification/DentistVerification";
import DoctorVerification from "../apiDocs/ProfessionalVerification/DoctorVerification";
import CaVerification from "../apiDocs/ProfessionalVerification/CaVerification";
import InsuranceAgentVerification from "../apiDocs/ProfessionalVerification/InsuranceAgentVerification";

// government services
import TinVerification from "../apiDocs/Government Id Services/TinVerification";
import ElectricityBill from "../apiDocs/Government Id Services/ElectricityBill";
import VoterIdVerify from "../apiDocs/Government Id Services/VoterIdVerify";
import PassportOcr from "../apiDocs/Government Id Services/PassportOcr";
import PassportVerificationUsingFileNo from "../apiDocs/Government Id Services/PassportVerificationUsingFileNo";
import PassportMrz from "../apiDocs/Government Id Services/PassportMrz";

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

import ComingSoon from "../components/ComingSoon";
import DGFTVerification from "../apiDocs/Business And Company/DGFTVerification";
import GovernmentServicesInfo from "../apiDocs/Government Id Services/GovernmentInfo";
import LocationServicesInfo from "../apiDocs/Geo Location/GeoLocationInfo";
import ContactServicesInfo from "../apiDocs/Contact And Communication/ContactInfo";
import RiskAndDueDiligenceInfo from "../apiDocs/Risk And Due Diligence/RiskInfo";
import OtherServicesInfo from "../apiDocs/Other Services/otherInfo";
import ProfessionalVerificationInfo from "../apiDocs/ProfessionalVerification/ProfessionalInfo";
import EmploymentServicesInfo from "../apiDocs/employment services/EmploymentInfo";
import BusinessServicesInfo from "../apiDocs/Business And Company/BusinessInfo";
import FaceAIServicesInfo from "../apiDocs/Face And Ai Verification/FaceInfo";
import VehicleServicesInfo from "../apiDocs/Vehicle And Transport/VehicleInfo";
import OCRServicesInfo from "../apiDocs/Ocr Services/OcrInfo";
import GSTServicesInfo from "../apiDocs/Gst Services/GstServiceInfo";
import RechargeServicesInfo from "../apiDocs/Recharge/RechargeInfo";
import AadhaarDigiLockerVerificationInfo from "../apiDocs/Aadhaar And DigiLocker/E-Aadhaar DigiLocker.jsx/DigilockerInfo";
import MobileOTPInfo from "../apiDocs/Contact And Communication/Mobile Number Otp Verification/MobileOtpInfo";

const apiComponentMap = {
  // ---------------- ACCESS TOKEN ----------------
  accessToken: AccessTokenGenration,

  // ---------------- ENCRYPTION ----------------
  encrypt_and_decryption: EncryptionAndDecryption,

  // ---------------- PAN SERVICES ----------------
  pan_basic_verification: PanVerification,
  pan_name_match: PanNameMatch,
  pan_name_dob: PanNameDobVerification,
  pan_to_masked_aadhaar: PanToMaskedAadhaarVerification,
  pan_to_gst: PanToGst,
  pan_director: PanDirector,
  pan_to_father_name: PanToFatherName,
  pan_tan_verification: PanTanVerification,
  know_your_gstin_using_pan: PanToGst_in,
  pan_info: PanServicesInfo,

  // ---------------- AADHAAR & DIGILOCKER ----------------]
  // aadhaar verify digilocker
  aadhaar_initiate: AadhaarIntiation,
  aadhaar_status: AadhaarStatus,
  aadhaar_to_masked_pan: AadhaarToMaskedPanVerification,
  digilocker_verify_account: Digilockerverify,
  aadhaar_info: AadhaarServicesInfo,
  e_aadhaar_digiLocker: AadhaarDigiLockerVerificationInfo,

  // ---------------- FACE AND AI SERVICES ----------------
  face_match: FaceMatchVerification,
  bluriness: ImageBlurriness,
  ai_detection: AiImageCheck,
  deepfake_detection: DeepfakeImageCheck,
  ai_and_deepfake_detection: AiAndDeepfakeImageCheck,
  face_and_ai_verification: FaceAIServicesInfo,

  // ---------------- BANKING & FINANCIAL ----------------
  advance_bank_account_verification: AdvanceBankAccountVerification,
  account_pennyless_verfication: BankAccountPennyDropVerification,
  account_pennydrop_verification: BankAccountPennyLessVerification,
  ifsc_verification: IfscBankDetailsVerification,
  cheque_classification: ChequeClassification,
  cibil: Cibil,
  banking_and_financial: BankingServicesInfo,
  //  CREDIT CARD
  bin_verification: BinVerification,
  full_card_verification: FullCreditCardVerification,

  /* ================= GST SERVICES ================= */
  gst_advanced_search: GstAdvancedSearch,
  comprehensive_gst_solution: ComprehensiveGstSolution,
  gst_basis_pan: GstBasisPan,
  gst_services: GSTServicesInfo,

  /* ================= BUSINESS & COMPANY ================= */
  cin_verification: CinVerification,
  cin_based_company_search: CinBasedCompanySearch,
  company_name_search: CompanyNameSearch,
  udyog_aadhaar: UdhyogAadhaar,
  udyam_verification: UdyamVerification,
  dgft_verification: DGFTVerification,
  iec_certificate: IecVerification,
  din_verification: DinVerification,
  lei_verification: LeiVerification,
  udyog_aadhaar_using_phone: UdyogAadhaarUsingPhone,
  gstin_verification: GSTINVerification,
  pan_using_gstin: KnowPanUsingGstin,
  gstin_taxpayer: GstInTaxpayer,
  gstin_view_track_return: GstInViewAndReturn,
  shop_act_verification: ShopVerification,
  business_and_company: BusinessServicesInfo,

  /* ================= EMPLOYMENT & INCOME ================= */
  dual_employment_check: DualEmploymentCheck,
  basic_uan_verification: BasicUanVerify,
  employment_and_income: EmploymentServicesInfo,

  /* ================= VEHICLE & TRANSPORT ================= */
  vehicle_registeration: VehicleRcVerification,
  detailed_rc_verification: DetailedRcVerification,
  stolen_vehicle_verification: StolenVehicleVerification,
  driving_license_verification: DrivingLicenseVerify,
  challan_via_rc: ChallanViaRc,
  vehicle_and_transport: VehicleServicesInfo,

  /* ================= GOVERNMENT ID SERVICES ================= */
  tin_verification: TinVerification,
  electricity_bill: ElectricityBill,
  voter_id: VoterIdVerify,
  passport_ocr: PassportOcr,
  passport_verification_file_no: PassportVerificationUsingFileNo,
  passport_mrz: PassportMrz,
  government_id_services: GovernmentServicesInfo,

  /* ================= CONTACT & COMMUNICATION ================= */
  // mobile_number_validation
  mobile_otp_generation: MobileNumberOtpGenration,
  mobile_otp_validation: MobileNumberOtpVerification,
  mobile_to_pan: MobileToPan,
  mobile_to_uan: MobileToUan,
  contact_and_communication: ContactServicesInfo,
  mobile_number_validation: MobileOTPInfo,

  /* ================= GEO & LOCATION ================= */
  geo_tagging_search: GeoTaggingSearch,
  geo_tagging_distance_calculation: GeoTaggingDistanceCalculation,
  pincode_geofencing: PincodeGeofencing,
  lat_long_to_digipin: LongLatToDigipin,
  digipin_to_lat_long: DigipinToLongLat,
  longitude_latitude_geofencing: LongLatGeofencing,
  address_to_digipin: AddressToDigipin,
  geo_and_location: LocationServicesInfo,

  /* ================= RISK & DUE DILIGENCE ================= */
  court_records_check_diy: CourtRecordsCheck,
  domain_verification: DomainVerification,
  profile_advance: ProfileAdvance,
  risk_and_due_diligence: RiskAndDueDiligenceInfo,

  /* ================= PROFESSIONAL VERIFICATION ================= */
  esign_aadhaar_based: ESignAadhaarBased,
  dentist_verification: DentistVerification,
  doctor_verification: DoctorVerification,
  ca_verification: CaVerification,
  insurance_agent_verification: InsuranceAgentVerification,
  professional_verification: ProfessionalVerificationInfo,

  /* ================= OTHER SERVICES ================= */
  ocr_and_document_ai: OCRServicesInfo,

  /* ================= OTHER SERVICES ================= */
  name_match_verification: NameMatchVerification,
  industry_type: IndustryType,
  fssai_verification: FssaiVerification,
  other_services: OtherServicesInfo,

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
  recharge_plans: RechargeServicesInfo
};

export const selectingActiveRefernce = (selectedApi) => {
  return apiComponentMap[selectedApi] || ComingSoon;
};
