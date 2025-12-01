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
      { title: "API Keys", slug: "api-keys" },
      { title: "OAuth 2.0", slug: "oauth" },
      { title: "JWT Tokens", slug: "jwt-tokens" },
    ],
  },
  {
    title: "Core Endpoints",
    pages: [
      { title: "Users API", slug: "users-api" },
      { title: "Orders API", slug: "orders-api" },
      { title: "Payments API", slug: "payments-api" },
    ],
  },
  {
    title: "Error Handling",
    pages: [
      { title: "Error Codes", slug: "error-codes" },
      { title: "Rate Limiting", slug: "rate-limiting" },
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
    title: "Changelog",
    pages: [{ title: "Release Notes", slug: "release-notes" }],
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
            title: "Adhaar Otp Generation",
            type: "POST",
            link: "adhaar_otp_generation",
          },
          {
            title: "Adhaar Otp Verification",
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
            title: "Mobile Otp Generation",
            type: "POST",
            link: "mobile_otp_generation",
          },
          {
            title: "Mobile Otp Verification",
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
    section: "ACCOUNT",
    items: [
      {
        title: "Bank Account Related Verification",
        link: "bank_acc_verfication",
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
        title: "Full Credit Card Verification",
        link: "bin_verification",
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
        { title: "BillerInfo Details", type: "POST", link: "fetching_verification" },
        { title: "BillFetchProcess", type: "POST", link: "bbps_get_biller_list" },
        { title: "Bill Validation", type: "POST", link: "bbps_get_biller_list" },
        { title: "BillPaymentFlow", type: "POST", link: "bbps_get_biller_list" },
        { title: "QuickPaymentFlow", type: "POST", link: "bbps_get_biller_list" },
        { title: "BillStatusCheck", type: "POST", link: "bbps_get_biller_list" },
      ],
      },
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
    section: "Mobile Recahrge",
    items: [
      {
        title: "Fetching Plans",
        link: "fetching_plans",
        type: "POST",
        methods: [],
      },
      {
        title: "Mobile Recharge Payment",
        link: "recharge_payment",
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
    date: "2025-10-27",
    editType: "Fixed",
    title:
      "Uploaded Documents Now Persist Across Master Account, Originator, and Owner Orgs",
    description: [
      "We’ve fixed an issue that prevented uploaded documents from persisting across related organizations — specifically between Master Account, Originator, and Owner entities in CanopyOS.",
    ],
    whatWasHappening: [
      "Previously, when an account was associated with multiple organizations, documents uploaded under one org were not visible to others in the same account hierarchy.",
      "This meant that new organizations could not access original uploaded documents, impacting visibility and workflow continuity in CanopyOS.",
    ],
    whatWeFixed: [
      "Document visibility is now properly synchronized across connected orgs.",
      "When a document is uploaded under one organization, it will now persist and remain accessible across Master Account, Originator, and Owner contexts.",
    ],
  },
  {
    date: "2025-10-27",
    editType: "Fixed",
    title:
      "Uploaded Documents Now Persist Across Master Account, Originator, and Owner Orgs",
    description: [
      "We’ve fixed an issue that prevented uploaded documents from persisting across related organizations — specifically between Master Account, Originator, and Owner entities in CanopyOS.",
    ],
    whatWasHappening: [
      "Previously, when an account was associated with multiple organizations, documents uploaded under one org were not visible to others in the same account hierarchy.",
      "This meant that new organizations could not access original uploaded documents, impacting visibility and workflow continuity in CanopyOS.",
    ],
    whatWeFixed: [
      "Document visibility is now properly synchronized across connected orgs.",
      "When a document is uploaded under one organization, it will now persist and remain accessible across Master Account, Originator, and Owner contexts.",
    ],
  },
  {
    date: "2025-10-27",
    editType: "Fixed",
    title:
      "Uploaded Documents Now Persist Across Master Account, Originator, and Owner Orgs",
    description: [
      "We’ve fixed an issue that prevented uploaded documents from persisting across related organizations — specifically between Master Account, Originator, and Owner entities in CanopyOS.",
    ],
    whatWasHappening: [
      "Previously, when an account was associated with multiple organizations, documents uploaded under one org were not visible to others in the same account hierarchy.",
      "This meant that new organizations could not access original uploaded documents, impacting visibility and workflow continuity in CanopyOS.",
    ],
    whatWeFixed: [
      "Document visibility is now properly synchronized across connected orgs.",
      "When a document is uploaded under one organization, it will now persist and remain accessible across Master Account, Originator, and Owner contexts.",
    ],
  },
];

export const ICONS = {
  TickMark: FaRegCheckCircle,
  CrossMark: RxCrossCircled,
  QuestionMark: GoQuestion,
};
