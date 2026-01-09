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
  {
    section: "ENCRYPT AND DECRYPT",
    items: [
      {
        title: "Encryption",
        link: "encrypt",
        methods: [],
      },
      {
        title: "Decryption",
        link: "decrypt",
        methods: [],
      },
    ],
  },
  {
    section: "KYC",
    items: [
      {
        title: "Pan",
        link: "pan_num_verfication",
        methods: [
          {
            title: "Pan Number Verification",
            type: "POST",
            link: "pan_num_verfication",
          },
          {
            title: "Pan Number To Masked Aadhaar",
            type: "POST",
            link: "pan_num_to_aadhaar",
          },
        ],
      },
      {
        title: "Aadhaar Verification",
        link: "adhaar_otp_generation",
        methods: [
          {
            title: "STEP: 1 Adhaar Intiate",
            type: "POST",
            link: "adhaar_otp_generation",
          },
          {
            title: "STEP: 2 Adhaar Status",
            type: "POST",
            link: "adhaar_otp_verification",
          },
        ],
      },
      {
        title: "Mobile Number Verification",
        link: "mobile_otp_generation",
        methods: [
          {
            title: "STEP: 1 Mobile Otp Generation",
            type: "POST",
            link: "mobile_otp_generation",
          },
          {
            title: "STEP: 2 Mobile Otp Verification",
            type: "POST",
            link: "mobile_otp_verification",
          },
        ],
      },
      {
        title: "Face Match Verification",
        type: "POST",
        link: "face_match",
        methods: [],
      },
    ],
  },
  {
    section: `🏦 ACCOUNT`,
    items: [
      {
        title: "Bank Account Related Verification",
        link: "bank_acc_penny_drop_verfication",
        methods: [
          {
            title: "Bank Account Verification(Penny Drop)",
            type: "POST",
            link: "bank_acc_penny_drop_verfication",
          },
          {
            title: "Bank Account Verification(Penny Less)",
            type: "POST",
            link: "bank_acc_penny_less_verfication",
          },
        ],
      },
      {
        title: "Bank Details with Ifsc",
        type: "POST",
        link: "bank_details",
        methods: [],
      },
    ],
  },
  {
    section: "COMPANY",
    items: [
      {
        title: "Gst_In Verification",
        link: "gst_in_verify",
        type: "POST",
        methods: [],
      },
      {
        title: "Cin Number Verfication",
        link: "Cin_number_verification",
        type: "POST",
        methods: [],
      },
      {
        title: "Shop Establishment",
        link: "shop_establishment_verification",
        type: "POST",
        methods: [],
      },
      {
        title: "Udyam Verification",
        link: "udyam_verification",
        type: "POST",
        methods: [],
      },
    ],
  },
  {
    section: "CreditCard",
    items: [
      {
        title: "Bin Verification",
        link: "bin_verification",
        type: "POST",
        methods: [],
      },
      {
        title: "Credit Card Verification",
        link: "credit_card_verfication",
        type: "POST",
        methods: [],
      },
    ],
  },
  {
    section: "Common",
    items: [
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
        type: "POST",
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
        type: "POST",
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
        link: "fetching_operators",
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
