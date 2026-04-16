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
    pages: [{ title: "Body Params", slug: "body_params" }],
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
  // Access Token Genration
  {
    section: "ACCESS TOKEN",
    items: [
      {
        title: "Access Token Genration",
        link: "accessToken",
        type: "POST",
        methods: [],
      },
    ],
  },
  // Encryption And Decryption
  {
    section: "ENCRYPT AND DECRYPT",
    items: [
      {
        title: "Encryption And Decryption",
        link: "encrypt_and_decryption",
        methods: [],
      },
    ],
  },
  {
    section: "API",
    items: [
      // Pan Services
      {
        title: "Pan Services",
        link: "pan_info",
        methods: [
          {
            title: "PAN Baic verification",
            type: "POST",
            link: "pan_basic_verification",
          },
          {
            title: "PAN To Masked Aadhaar",
            type: "POST",
            link: "pan_to_masked_aadhaar",
          },
          {
            title: "Know your GSTIN using PAN",
            type: "POST",
            link: "know_your_gstin_using_pan",
          },
          {
            title: "PAN/TAN Verification",
            type: "POST",
            link: "pan_tan_verification",
          },
          {
            title: "PAN Name Match",
            type: "POST",
            link: "pan_name_match",
          },
          {
            title: "PAN to GST",
            type: "POST",
            link: "pan_to_gst",
          },
          {
            title: "PAN Name DOB",
            type: "POST",
            link: "pan_name_dob",
          },
          {
            title: "PAN to Father Name",
            type: "POST",
            link: "pan_to_father_name",
          },
          {
            title: "PAN Director",
            type: "POST",
            link: "pan_director",
          },
          // {
          //   title: "PAN ITD Status",
          //   link: "pan_itd_status",
          //   methods: [
          //     {
          //       title: "STEP: 1 PAN ITD OTP Send",
          //       type: "POST",
          //       link: "pan_itd_otp_send",
          //     },
          //     {
          //       title: "STEP: 2 PAN ITD OTP Verify",
          //       type: "POST",
          //       link: "pan_itd_otp_verify",
          //     },
          //   ],
          // },
        ],
      },
      // Aadhaar And Digilocker
      {
        title: "Aadhaar & DigiLocker",
        link: "aadhaar_info",
        methods: [
          {
            title: "E-Aadhaar DigiLocker",
            link: "e_aadhaar_digiLocker",
            methods: [
              {
                title: "STEP: 1 Aadhaar Initiate",
                type: "POST",
                link: "aadhaar_initiate",
              },
              {
                title: "STEP: 2 Aadhaar Status",
                type: "POST",
                link: "aadhaar_status",
              },
            ],
          },
          {
            title: "Aadhaar To Masked Pan",
            type: "POST",
            link: "aadhaar_to_masked_pan",
          },
          // {
          //   title: "Digilocker Issued Documents",
          //   type: "POST",
          //   link: "digilocker_issued_documents",
          // },
          // {
          //   title: "Digilocker Pull Document",
          //   type: "POST",
          //   link: "digilocker_pull_document",
          // },
          {
            title: "Aadhaar Based eSign",
            type: "POST",
            link: "aadhaar_based_esign",
          },
          {
            title: "E-Aadhaar Upload (pdf)",
            type: "POST",
            link: "e_aadhaar_upload_pdf",
          },
          {
            title: "Digilocker Verify Account",
            type: "POST",
            link: "digilocker_verify_account",
          },
        ],
      },
      // Banking and Financial
      {
        title: "Banking & Financial",
        link: "banking_and_financial",
        methods: [
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
            title: "IFSC Verification",
            type: "POST",
            link: "ifsc_verification",
          },
          {
            title: "Account Pennyless Verification",
            type: "POST",
            link: "account_pennyless_verfication",
          },
          {
            title: "Account Penny Drop Verification",
            type: "POST",
            link: "account_pennydrop_verification",
          },
          {
            title: "Cheque Classification",
            type: "POST",
            link: "cheque_classification",
          },
          {
            title: "CIBIL",
            type: "POST",
            link: "cibil",
          },
          {
            title: "Advance Bank Account Verification",
            type: "POST",
            link: "advance_bank_account_verification",
          },
        ],
      },
      // Gst Services
      {
        title: "GST Services",
        link: "gst_services",
        methods: [
          {
            title: "Comprehensive GST Solution",
            type: "POST",
            link: "comprehensive_gst_solution",
          },
          // {
          //   title: "Comprehensive GST Solution Advanced",
          //   type: "POST",
          //   link: "comprehensive_gst_solution_advanced",
          // },
          {
            title: "GST Advanced Search",
            type: "POST",
            link: "gst_advanced_search",
          },
          {
            title: "GST Basis PAN",
            type: "POST",
            link: "gst_basis_pan",
          },
          // {
          //   title: "GST Analytics",
          //   type: "POST",
          //   link: "gst_analytics",
          // },
        ],
      },
      // Business And Company
      {
        title: "Business & Company",
        link: "business_and_company",
        methods: [
          {
            title: "GSTIN Verification",
            type: "POST",
            link: "gstin_verification",
          },
          {
            title: "CIN Verification",
            type: "POST",
            link: "cin_verification",
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
            title: "Shop Esatblishment Verification",
            type: "POST",
            link: "shop_establishment_verification",
          },
          {
            title: "LEI Verification",
            type: "POST",
            link: "lei_verification",
          },
          {
            title: "Udyog Aadhaar Using Phone",
            type: "POST",
            link: "udyog_aadhaar_using_phone",
          },
          {
            title: "Know your PAN using GSTIN",
            type: "POST",
            link: "pan_using_gstin",
          },
          {
            title: "GSTIN Taxpayer",
            type: "POST",
            link: "gstin_taxpayer",
          },
          {
            title: "GSTIN View and Track Return",
            type: "POST",
            link: "gstin_view_track_return",
          },
          {
            title: "CIN Based Company Search",
            type: "POST",
            link: "cin_based_company_search",
          },
          {
            title: "Company Name Search",
            type: "POST",
            link: "company_name_search",
          },
          {
            title: "Udyog Aadhaar",
            type: "POST",
            link: "udyog_aadhaar",
          },
          {
            title: "Import Export Certificate / IEC",
            type: "POST",
            link: "iec_certificate",
          },
          {
            title: "DGFT Verification",
            type: "POST",
            link: "dgft_verification",
          },
        ],
      },
      // Emplyment And Income
      {
        title: "Employment & Income",
        link: "employment_and_income",
        methods: [
          {
            title: "Basic UAN Verification",
            type: "POST",
            link: "basic_uan_verification",
          },
          {
            title: "Dual Employment Check",
            type: "POST",
            link: "dual_employment_check",
          },
        ],
      },
      // Vehical And Transport
      {
        title: "Vehicle & Transport",
        link: "vehicle_and_transport",
        methods: [
          {
            title: "Vehicle Registeration",
            type: "POST",
            link: "vehicle_registeration",
          },
          {
            title: "Detailed RC Verification",
            type: "POST",
            link: "detailed_rc_verification",
          },
          {
            title: "Stolen Vehicle Verification",
            type: "POST",
            link: "stolen_vehicle_verification",
          },
          {
            title: "Driving License",
            type: "POST",
            link: "driving_license_verification",
          },
          {
            title: "Challan via RC",
            type: "POST",
            link: "challan_via_rc",
          },
        ],
      },
      // Face Match And Ai Verification
      {
        title: "Face & AI Verification",
        link: "face_and_ai_verification",
        methods: [
          {
            title: "Face Match",
            type: "POST",
            link: "face_match",
          },
          {
            title: "Liveness",
            type: "POST",
            link: "liveness",
          },
          {
            title: "Deepfake Detection",
            type: "POST",
            link: "deepfake_detection",
          },
          {
            title: "AI Detection",
            type: "POST",
            link: "ai_detection",
          },
          {
            title: "AI and Deepfake Detection",
            type: "POST",
            link: "ai_and_deepfake_detection",
          },
          {
            title: "Bluriness",
            type: "POST",
            link: "bluriness",
          },
        ],
      },
      // Ocr And Document Ai
      {
        title: "OCR & Document AI",
        link: "ocr_and_document_ai",
        methods: [
          {
            title: "New Doc Classification",
            type: "POST",
            link: "new_doc_classification",
          },
          {
            title: "Comprehensive NID (OCR)",
            type: "POST",
            link: "comprehensive_nid_ocr",
          },
          {
            title: "PAN OCR (with Managed Service)",
            type: "POST",
            link: "pan_ocr_managed",
          },
          {
            title: "DL OCR (with Managed Service)",
            type: "POST",
            link: "dl_ocr_managed",
          },
        ],
      },
      // Government Id Services
      {
        title: "Government ID Services",
        link: "government_id_services",
        methods: [
          {
            title: "Passport MRZ",
            type: "POST",
            link: "passport_mrz",
          },
          {
            title: "Passport Verification Using File No.",
            type: "POST",
            link: "passport_verification_file_no",
          },
          {
            title: "Passport (with OCR)",
            type: "POST",
            link: "passport_ocr",
          },
          {
            title: "Voter Id",
            type: "POST",
            link: "voter_id",
          },
          // {
          //   title: "Electricity Bill",
          //   type: "POST",
          //   link: "electricity_bill",
          // },
          // {
          //   title: "TIN Verification",
          //   type: "POST",
          //   link: "tin_verification",
          // },
        ],
      },
      // Contact And Communication
      {
        title: "Contact & Communication",
        link: "contact_and_communication",
        methods: [
          {
            title: "Mobile Number Validation",
            type: "POST",
            link: "mobile_number_validation",
            methods: [
              {
                title: "STEP:1 Mobile Otp Genration",
                type: "POST",
                link: "mobile_otp_generation",
              },
              {
                title: "STEP:2 Mobile Otp Validation",
                type: "POST",
                link: "mobile_otp_validation",
              },
            ],
          },
          {
            title: "Mobile To Uan",
            type: "POST",
            link: "mobile_to_uan",
          },
          {
            title: "Mobile To Pan",
            type: "POST",
            link: "mobile_to_pan",
          },
        ],
      },
      // Geo And Location
      {
        title: "Geo & Location",
        link: "geo_and_location",
        methods: [
          {
            title: "Geo-Tagging Search",
            type: "POST",
            link: "geo_tagging_search",
          },
          {
            title: "Geo-Tagging Distance Calculation",
            type: "POST",
            link: "geo_tagging_distance_calculation",
          },
          {
            title: "Longitude/Latitude Geofencing",
            type: "POST",
            link: "longitude_latitude_geofencing",
          },
          {
            title: "Pincode Geofencing",
            type: "POST",
            link: "pincode_geofencing",
          },
          {
            title: "Lat Long to DIGIPIN",
            type: "POST",
            link: "lat_long_to_digipin",
          },
          {
            title: "DIGIPIN to Lat Long",
            type: "POST",
            link: "digipin_to_lat_long",
          },
          {
            title: "Address to DIGIPIN",
            type: "POST",
            link: "address_to_digipin",
          },
        ],
      },
      // Risk And Due Diligence
      {
        title: "Risk & Due Diligence",
        link: "risk_and_due_diligence",
        methods: [
          {
            title: "Court Records Check (DIY)",
            type: "POST",
            link: "court_records_check_diy",
          },
          {
            title: "Domain Verification",
            type: "POST",
            link: "domain_verification",
          },
          {
            title: "Profile Advance",
            type: "POST",
            link: "profile_advance",
          },
        ],
      },
      // professional verification
      {
        title: "Professional Verification",
        link: "professional_verification",
        methods: [
          {
            title: "Insurance Agent Verification",
            type: "POST",
            link: "insurance_agent_verification",
          },
          {
            title: "CA Verification",
            type: "POST",
            link: "ca_verification",
          },
          {
            title: "Doctor Verification",
            type: "POST",
            link: "doctor_verification",
          },
          {
            title: "Dentist Verification",
            type: "POST",
            link: "dentist_verification",
          },
          {
            title: "eSign Aadhaar Based",
            type: "POST",
            link: "esign_aadhaar_based",
          },
        ],
      },
      // Other Services
      {
        title: "Other Services",
        link: "professional_license_verification",
        methods: [
          {
            title: "Know your TAN",
            type: "POST",
            link: "know_your_tan",
          },
          {
            title: "FSSAI Verification",
            type: "POST",
            link: "fssai_verification",
          },
          {
            title: "Industry Type",
            type: "POST",
            link: "industry_type",
          },
          {
            title: "Name Match Verification",
            link: "name_match_verification",
            type: "POST",
          },
        ],
      },
    ],
  },
  // Bbps
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
          // {
          //   title: "BillStatusCheck",
          //   type: "POST",
          //   link: "bbps_get_biller_list",
          // },
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
  // Mobile Recharge
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
