import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { GoQuestion } from "react-icons/go";

export const images = {
  logo: "/images/logo.svg",
  arrowIcon: "/images/arrow_icon_100.png",
  bullHorn: "/images/bullhorn.png",
  hamburgerIcon: "/images/hamburger.png",
  triangleArrow: "/images/icons8-arrow-50.png",
  oppositeTriangles: "/images/left-and-right.png",
  searchIcon: "/images/search.png",
  bookIcon: "/images/book.png",
  rightArrow: "/images/right-arror.png",
  dustbin: "/images/delete.png",
  check: "/images/check.png",
  copy: "/images/copy.png",
  anchor: "/images/anchor.png",
};

export const GuidesData = [
  {
    title: "Introduction",
    link: "apimodule_guide",
    pages: [
      { title: "Getting Started", slug: "apimodule_guide" },
      { title: "Overview", slug: "overview" },
    ],
  },
  {
    title: "Authentication",
    pages: [
      { title: "API Keys", slug: "api_keys" },
      { title: "OAuth 2.0", slug: "oauth" },
    ],
  },
  {
    title: "Params",
    pages: [
      { title: "Body Params", slug: "body_params" },
      { title: "Category And Service", slug: "category_and_service" },
    ],
  },
  {
    title: "Error Handling",
    pages: [
      { title: "Error Codes", slug: "error_codes" },
      { title: "Rate Limiting", slug: "rate_limiting" },
    ],
  },
  {
    title: "Advanced Topics",
    pages: [
      { title: "Webhooks", slug: "webhooks" },
      { title: "Filtering & Sorting", slug: "filtering-sorting" },
      { title: "Best Practices", slug: "best-practices" },
    ],
  },
  {
    title: "Reference",
    pages: [
      { title: "SDKs & Libraries", slug: "sdks-libraries" },
      { title: "FAQs", slug: "faqs" },
    ],
  },
];

export const ApiReferences = [
  {
    section: "ACCESS TOKEN",
    items: [
      {
        title: "Access Token Genration",
        link: "accessToken",
        methods: [],
      },
    ],
  },
  // {
  //   section: "ENCRYPT AND DECRYPT",
  //   items: [
  //     {
  //       title: "Encryption",
  //       link: "encrypt",
  //       methods: [],
  //     },
  //     {
  //       title: "Decryption",
  //       link: "decrypt",
  //       methods: [],
  //     },
  //   ],
  // },
  {
    section: "API",
    items: [
      {
        title: "Pan Services",
        link: "pan_basic_verification",
        methods: [
          {
            title: "PAN Basic Verification",
            type: "POST",
            link: "pan_basic_verification",
          },
          {
            title: "PAN Name Match",
            type: "POST",
            link: "pan_name_match",
          },
          {
            title: "PAN DOB Validation",
            type: "POST",
            link: "pan_dob_validation",
          },
          {
            title: "PAN Detailed Profile",
            type: "POST",
            link: "pan_detailed_profile",
          },
          {
            title: "PAN Address Fetch",
            type: "POST",
            link: "pan_address_fetch",
          },
          {
            title: "PAN Linked Mobile",
            type: "POST",
            link: "pan_linked_mobile",
          },
          {
            title: "PAN–Aadhaar Link Status",
            type: "POST",
            link: "pan_aadhaar_link_status",
          },
          {
            title: "PAN Aadhaar Seeding",
            type: "POST",
            link: "pan_aadhaar_seeding",
          },
          {
            title: "PAN Active / Inactive Status",
            type: "POST",
            link: "pan_active_inactive_status",
          },
          {
            title: "PAN Correction Status",
            type: "POST",
            link: "pan_correction_status",
          },
          {
            title: "PAN Reprint Tracking",
            type: "POST",
            link: "pan_reprint_tracking",
          },
        ],
      },
      {
        title: "Aadhaar & DigiLocker",
        link: "aadhaar_xml_verification",
        methods: [
          {
            title: "Aadhaar XML Verification",
            type: "POST",
            link: "aadhaar_xml_verification",
          },
          {
            title: "Aadhaar QR Validation",
            type: "POST",
            link: "aadhaar_qr_validation",
          },
          {
            title: "Aadhaar Name Fetch",
            type: "POST",
            link: "aadhaar_name_fetch",
          },
          {
            title: "Aadhaar DOB Fetch",
            type: "POST",
            link: "aadhaar_dob_fetch",
          },
          {
            title: "DigiLocker Document List",
            type: "POST",
            link: "digilocker_document_list",
          },
          {
            title: "DigiLocker Document Download",
            type: "POST",
            link: "digilocker_document_download",
          },
          {
            title: "Aadhaar Number Verification",
            link: "adhaar_otp_generation",
            methods: [
              {
                title: "Aadhaar OTP Send",
                type: "POST",
                link: "aadhaar_otp_send",
              },
              {
                title: "Aadhaar OTP Verify",
                type: "POST",
                link: "aadhaar_otp_verify",
              },
            ],
          },
        ],
      },
      {
        title: "Banking & Financial",
        link: "banking_and_financial",
        methods: [
          {
            title: "Bank Account Verification",
            type: "POST",
            link: "bank_account_verification",
          },
          {
            title: "Account Holder Name Match",
            type: "POST",
            link: "account_holder_name_match",
          },
          {
            title: "Penny Drop Credit",
            type: "POST",
            link: "penny_drop_credit",
          },
          {
            title: "Penny Drop Status",
            type: "POST",
            link: "penny_drop_status",
          },
          {
            title: "IFSC Lookup",
            type: "POST",
            link: "ifsc_lookup",
          },
          {
            title: "Bank Branch Lookup",
            type: "POST",
            link: "bank_branch_lookup",
          },
          {
            title: "UPI / VPA Verification",
            type: "POST",
            link: "upi_vpa_verification",
          },
          {
            title: "Cheque OCR",
            type: "POST",
            link: "cheque_ocr",
          },
          {
            title: "Bank Statement Analysis",
            type: "POST",
            link: "bank_statement_analysis",
          },
        ],
      },
      {
        title: "GST Services",
        link: "gst_services",
        methods: [
          {
            title: "GSTIN Verification",
            type: "POST",
            link: "gstin_verification",
          },
          {
            title: "GSTIN Name Match",
            type: "POST",
            link: "gstin_name_match",
          },
          {
            title: "GST Business Profile",
            type: "POST",
            link: "gst_business_profile",
          },
          {
            title: "Principal Place of Business",
            type: "POST",
            link: "principal_place_of_business",
          },
          {
            title: "GST Filing Status",
            type: "POST",
            link: "gst_filing_status",
          },
          {
            title: "GST Return History",
            type: "POST",
            link: "gst_return_history",
          },
          {
            title: "GST Compliance Score",
            type: "POST",
            link: "gst_compliance_score",
          },
          {
            title: "GST Registration Date",
            type: "POST",
            link: "gst_registration_date",
          },
          {
            title: "GST Amendment History",
            type: "POST",
            link: "gst_amendment_history",
          },
        ],
      },
      {
        title: "Business & Company",
        link: "business_and_company",
        methods: [
          {
            title: "CIN Verification",
            type: "POST",
            link: "cin_verification",
          },
          {
            title: "Full card Verification",
            link: "full_card_verification",
            type: "POST",
          },
          {
            title: "Bin Verification",
            link: "bin_verification",
            type: "POST",
          },
          {
            title: "DIN Verification",
            type: "POST",
            link: "din_verification",
          },
          {
            title: "UDYAM Verification",
            type: "POST",
            link: "udyam_verification",
          },
          {
            title: "MSME Certificate Fetch",
            type: "POST",
            link: "msme_certificate_fetch",
          },
          {
            title: "Shop Act Verification",
            type: "POST",
            link: "shop_act_verification",
          },
          {
            title: "Trade License Lookup",
            type: "POST",
            link: "trade_license_lookup",
          },
          {
            title: "Director Details",
            type: "POST",
            link: "director_details",
          },
          {
            title: "Shareholding Pattern",
            type: "POST",
            link: "shareholding_pattern",
          },
        ],
      },
      {
        title: "Employment & Income",
        link: "employment_and_income",
        methods: [
          {
            title: "Employment History",
            type: "POST",
            link: "employment_history",
          },
          {
            title: "Employer Verification",
            type: "POST",
            link: "employer_verification",
          },
          {
            title: "UAN Verification",
            type: "POST",
            link: "uan_verification",
          },
          {
            title: "EPFO Employment Records",
            type: "POST",
            link: "epfo_employment_records",
          },
          {
            title: "Salary Credit Verification",
            type: "POST",
            link: "salary_credit_verification",
          },
          {
            title: "Income Range Estimation",
            type: "POST",
            link: "income_range_estimation",
          },
          {
            title: "Form-16 Verification",
            type: "POST",
            link: "form_16_verification",
          },
          {
            title: "26AS Tax Summary",
            type: "POST",
            link: "26as_tax_summary",
          },
        ],
      },
      {
        title: "Vehicle & Transport",
        link: "vehicle_and_transport",
        methods: [
          {
            title: "Vehicle RC Verification",
            type: "POST",
            link: "vehicle_rc_verification",
          },
          {
            title: "Vehicle Owner Name",
            type: "POST",
            link: "vehicle_owner_name",
          },
          {
            title: "Driving License Verification",
            type: "POST",
            link: "driving_license_verification",
          },
          {
            title: "Driving License Status",
            type: "POST",
            link: "driving_license_status",
          },
          {
            title: "Ownership Transfer History",
            type: "POST",
            link: "ownership_transfer_history",
          },
          {
            title: "Hypothecation Status",
            type: "POST",
            link: "hypothecation_status",
          },
          {
            title: "RTO Details",
            type: "POST",
            link: "rto_details",
          },
          {
            title: "Vehicle Registration Zone",
            type: "POST",
            link: "vehicle_registration_zone",
          },
        ],
      },
      {
        title: "Face & AI Verification",
        link: "face_and_ai_verification",
        methods: [
          {
            title: "Face Match Score",
            type: "POST",
            link: "face_match_score",
          },
          {
            title: "Face Similarity",
            type: "POST",
            link: "face_similarity",
          },
          {
            title: "Passive Liveness",
            type: "POST",
            link: "passive_liveness",
          },
          {
            title: "Active Liveness",
            type: "POST",
            link: "active_liveness",
          },
          {
            title: "Image Deepfake Detection",
            type: "POST",
            link: "image_deepfake_detection",
          },
          {
            title: "Video Deepfake Detection",
            type: "POST",
            link: "video_deepfake_detection",
          },
          {
            title: "AI Fraud Score",
            type: "POST",
            link: "ai_fraud_score",
          },
          {
            title: "Identity Risk Score",
            type: "POST",
            link: "identity_risk_score",
          },
        ],
      },
      {
        title: "OCR & Document AI",
        link: "ocr_and_document_ai",
        methods: [
          {
            title: "PAN OCR",
            type: "POST",
            link: "pan_ocr",
          },
          {
            title: "Aadhaar OCR",
            type: "POST",
            link: "aadhaar_ocr",
          },
          {
            title: "Bank Statement OCR",
            type: "POST",
            link: "bank_statement_ocr",
          },
          {
            title: "Salary Slip OCR",
            type: "POST",
            link: "salary_slip_ocr",
          },
          {
            title: "Utility Bill OCR",
            type: "POST",
            link: "utility_bill_ocr",
          },
          {
            title: "Rental Agreement OCR",
            type: "POST",
            link: "rental_agreement_ocr",
          },
          {
            title: "Structured Data Extraction",
            type: "POST",
            link: "structured_data_extraction",
          },
          {
            title: "Table Extraction",
            type: "POST",
            link: "table_extraction",
          },
        ],
      },
      {
        title: "Government ID Services",
        link: "government_id_services",
        methods: [
          {
            title: "Passport Verification",
            type: "POST",
            link: "passport_verification",
          },
          {
            title: "Passport Status",
            type: "POST",
            link: "passport_status",
          },
          {
            title: "Voter ID Verification",
            type: "POST",
            link: "voter_id_verification",
          },
          {
            title: "Electoral Roll Lookup",
            type: "POST",
            link: "electoral_roll_lookup",
          },
          {
            title: "Multi-ID Search",
            type: "POST",
            link: "multi_id_search",
          },
          {
            title: "ID Cross-Match",
            type: "POST",
            link: "id_cross_match",
          },
        ],
      },
      {
        title: "Contact & Communication",
        link: "contact_and_communication",
        methods: [
          {
            title: "Mobile Number Validation",
            type: "POST",
            link: "mobile_number_validation",
          },
          {
            title: "Mobile Line Type",
            type: "POST",
            link: "mobile_line_type",
          },
          {
            title: "Email Validation",
            type: "POST",
            link: "email_validation",
          },
          {
            title: "Email Domain Risk",
            type: "POST",
            link: "email_domain_risk",
          },
          {
            title: "OTP Send",
            type: "POST",
            link: "otp_send",
          },
          {
            title: "OTP Verify",
            type: "POST",
            link: "otp_verify",
          },
          {
            title: "Domain Age Check",
            type: "POST",
            link: "domain_age_check",
          },
          {
            title: "Website Risk Score",
            type: "POST",
            link: "website_risk_score",
          },
        ],
      },
      {
        title: "Geo & Location",
        link: "geo_and_location",
        methods: [
          {
            title: "Pincode Details",
            type: "POST",
            link: "pincode_details",
          },
          {
            title: "Post Office Lookup",
            type: "POST",
            link: "post_office_lookup",
          },
          {
            title: "DigiPIN Decode",
            type: "POST",
            link: "digipin_decode",
          },
          {
            title: "Geo Address Resolution",
            type: "POST",
            link: "geo_address_resolution",
          },
          {
            title: "Latitude-Longitude Validation",
            type: "POST",
            link: "latitude_longitude_validation",
          },
          {
            title: "Coordinate Accuracy",
            type: "POST",
            link: "coordinate_accuracy",
          },
        ],
      },
      {
        title: "Risk & Due Diligence",
        link: "risk_and_due_diligence",
        methods: [
          {
            title: "Court Case Search",
            type: "POST",
            link: "court_case_search",
          },
          {
            title: "Litigation History",
            type: "POST",
            link: "litigation_history",
          },
          {
            title: "Document Forgery Detection",
            type: "POST",
            link: "document_forgery_detection",
          },
          {
            title: "Image Tampering Detection",
            type: "POST",
            link: "image_tampering_detection",
          },
          {
            title: "Global Watchlist Screening",
            type: "POST",
            link: "global_watchlist_screening",
          },
          {
            title: "Negative News Scan",
            type: "POST",
            link: "negative_news_scan",
          },
          {
            title: "Risk Profile Score",
            type: "POST",
            link: "risk_profile_score",
          },
        ],
      },
      {
        title: "Other Services",
        link: "mobile_otp_generation",
        methods: [
          {
            title: "Professional License Verification",
            type: "POST",
            link: "professional_license_verification",
          },
          {
            title: "Custom Verification",
            type: "POST",
            link: "custom_verification",
          },
          {
            title: "Miscellaneous Utility",
            type: "POST",
            link: "miscellaneous_utility",
          },
        ],
      },
      {
        title: "Credit Card Verification",
        link: "credit_card_verfication",
        type: "POST",
        methods: [],
      },
      {
        title: "Name Match Verification",
        link: "name_match_verification",
        type: "POST",
        methods: [],
      },
    ],
  },
  {
    section: "BBPS",
    items: [
      {
        title: "BBps Info",
        link: "bbps_Doc",
        methods: [
          {
            title: "BillerInfo Details",
            type: "POST",
            link: "fetching_verification",
          },
          {
            title: "BillFetchProcess",
            type: "POST",
            link: "bill_fetch",
          },
          {
            title: "Bill Validation",
            type: "POST",
            link: "bill_validation",
          },
          {
            title: "BillPaymentFlow",
            type: "POST",
            link: "bill_pay",
          },
          {
            title: "QuickPaymentFlow",
            type: "POST",
            link: "quick_pay",
          },
          {
            title: "BillStatusCheck",
            type: "POST",
            link: "bbps_get_biller_list",
          },
        ],
      },
      // {
      //   title: "Instant Pay",
      //   link: "instant_pay",
      //   type: "POST",
      //   methods: [],
      // },
      // {
      //   title: "BillerInfo Details",
      //   link: "fetching_verification",
      //   type: "POST",
      //   methods: [
      //   { title: "Get Biller List", type: "POST", link: "bbps_get_biller_list" },
      // ],
      // },
      // {
      //   title: "BillFetchProcess",
      //   link: "bill_fetch",
      //   type: "POST",
      //   methods: [],
      // },
      //  {
      //   title: "Bill Validation",
      //   link: "bill_validation",
      //   type: "POST",
      //   methods: [],
      // },
      //  {
      //   title: "BillPaymentFlow",
      //   link: "bill_pay",
      //   type: "POST",
      //   methods: [],
      // },
      // {
      //   title: "QuickPaymentFlow",
      //   link: "bill_pay",
      //   type: "POST",
      //   methods: [],
      // },
      // {
      //   title: "BillStatusCheck",
      //   link: "bill_pay",
      //   type: "POST",
      //   methods: [],
      // },
    ],
  },
  {
    section: "Instantpay",
    items: [
      {
        title: "Instant Pay",
        link: "instantpay_Doc",
        methods: [
          {
            title: "InstantBill Pay",
            type: "POST",
            link: "instant_Pay",
          },
        ],
      },
    ],
  },
  {
    section: "Mobile Recahrge",
    items: [
      {
        title: "Fetching Operators",
        link: "fetching_operators",
        type: "POST",
        methods: [],
      },
      {
        title: "Recharge Plans",
        link: "fetching_plans",
        type: "POST",
        methods: [
          {
            title: "Fetching Plans",
            link: "fetching_plans",
            type: "POST",
            methods: [],
          },
          {
            title: "Fetching Old Plans",
            link: "fetching_old_plans",
            type: "POST",
            methods: [],
          },
        ],
      },
      {
        title: "Mobile Recharge Payment",
        link: "recharge_payment",
        type: "POST",
        methods: [],
      },
      {
        title: "Mobile Recharge Offers",
        link: "recharge_payment_offers",
        type: "POST",
        methods: [],
      },
    ],
  },
];

export const color = (Method) => {
  const c = {
    POST: "bg-blue-500",
    GET: "bg-green-500",
    DEL: "bg-red-500",
    PATCH: "bg-orange-500",
    PUT: "bg-violet-500",
  };
  return c[Method];
};

export const releaseNotes = [
  {
    date: "2025-12-27",
    editType: "Started",
    title: "Entering the Market with Limited APIs — Growing Step by Step",
    description: [
      "We are now entering the market and currently providing a limited set of APIs as we establish our foundation.",
      "Our API offerings will expand gradually as we continue to grow and enhance our platform step by step.",
    ],
    whatWasHappening: [
      "As a new entrant, our API coverage is intentionally limited to ensure stability and focused development.",
      "This initial phase allows us to refine core functionality before broadening our API ecosystem.",
    ],
    whatWeFixed: [
      "We have successfully launched our initial set of APIs with stable, foundational capabilities.",
      "More APIs and features will be introduced progressively as we continue to grow and scale our platform.",
    ],
  },
  {
    date: "2025-12-27",
    editType: "KYC APIS",
    title: "Launching KYC APIs — Building Trust Step by Step",
    description: [
      "We are entering the market with a focused set of KYC APIs designed to support secure and compliant identity verification.",
      "Our KYC API offerings will expand gradually as we strengthen our infrastructure and introduce additional verification services.",
    ],
    whatWasHappening: [
      "In this initial phase, we are providing essential KYC APIs to ensure accuracy, reliability, and regulatory compliance.",
      "This approach allows us to validate performance and security before scaling to a broader KYC API ecosystem.",
    ],
  },
  {
    date: "2025-12-27",
    editType: "ACCOUNT APIS",
    title: "Launching Account APIs — Building a Strong Financial Foundation",
    description: [
      "We are entering the market with a focused set of Account APIs to support secure and reliable account-related operations.",
      "Our Account API offerings will expand gradually as we enhance features, performance, and scalability step by step.",
    ],
    whatWasHappening: [
      "During this initial phase, we are providing essential Account APIs to ensure stability, accuracy, and secure data handling.",
      "This approach allows us to refine core account functionality before expanding into a broader Account API ecosystem.",
    ],
  },
  {
    date: "2025-12-27",
    editType: "COMPANY APIS",
    title: "Entering the Market with Limited APIs — Growing Step by Step",
    description: [
      "We are now entering the market and currently providing a limited set of APIs as we establish our foundation.",
      "Our API offerings will expand gradually as we continue to grow and enhance our platform step by step.",
    ],
    whatWasHappening: [
      "As a new entrant, our API coverage is intentionally limited to ensure stability and focused development.",
      "This initial phase allows us to refine core functionality before broadening our API ecosystem.",
    ],
  },
  {
    date: "2025-12-27",
    editType: "CARDS APIS",
    title: "Launching Cards APIs — Powering Secure Card Services",
    description: [
      "We are entering the market with a focused set of Cards APIs to support card issuance, validation, and related operations.",
      "Our Cards API offerings will expand gradually as we enhance security, features, and card service capabilities step by step.",
    ],
    whatWasHappening: [
      "In this initial phase, we are providing essential Cards APIs to ensure secure processing and reliable card-related transactions.",
      "This approach allows us to validate performance and compliance before scaling to a broader Cards API ecosystem.",
    ],
  },
];

export const ICONS = {
  TickMark: FaRegCheckCircle,
  CrossMark: RxCrossCircled,
  QuestionMark: GoQuestion,
};
