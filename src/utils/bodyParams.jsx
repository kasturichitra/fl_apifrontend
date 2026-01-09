// pan // panToAadhaar
export const PNV = [
  {
    title: "PanCard Number",
    type: "string",
    fieldName: "panNumber",
    subTitle: "user pancard number to be verified",
    inputTag: false,
    example: "AXER07FRGV",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// aadhaar

// aadhaar initiate
export const AI = [
  {
    title: "callback_url",
    type: "string",
    fieldName: "callback_url",
    subTitle: "Enter Your callback_url here",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "redirect_url",
    type: "string",
    fieldName: "redirect_url",
    subTitle: "Enter Your redirect_url here",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

// aadhaar status
export const AS = [
  {
    title: "tsTransId ",
    type: "string",
    fieldName: "tsTransId",
    subTitle: "Enter Your ts transaction id",
    inputTag: false,
    example: "ts-XXXXXX",
    required: true,
  },
];

// mobile number

// mobile otp generation
export const MOG = [
  {
    title: "Mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "Enter Your Mobile Number",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];
// mobile otp verification
export const MOV = [
  {
    title: "OTP",
    type: "string",
    fieldName: "submittedOtp",
    subTitle: "Enter the OTP that was sent to given Mobile Number",
    inputTag: false,
    example: "XXXX",
    required: true,
  },
];

// face match
export const FM = [
  {
    title: "user image",
    type: "image",
    fieldName: "userimage",
    subTitle: "user image to be verified",
    inputTag: false,
    example: "Dr.",
    required: true,
  },
  {
    title: "adhaar image",
    type: "image",
    subTitle: "adhaar image to be verified",
    inputTag: false,
    fieldName: "aadharImage",
    example: "",
    required: true,
  },
];

// bank account verification
export const BAV = [
  {
    title: "Account Number",
    type: "string",
    fieldName: "name",
    subTitle: "Account Number to be verified",
    inputTag: false,
    example: "987456XXXXX",
    required: true,
  },
  ,
  {
    title: "Ifsc",
    type: "string",
    fieldName: "panNumber",
    subTitle: "Ifsc to be verified",
    inputTag: false,
    example: "SBINXXXXXXX",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// bank with ifsc
export const BWI = [
  {
    title: "ifsc",
    type: "string",
    fieldName: "ifsc",
    subTitle: "user ifsc to be verified",
    inputTag: false,
    example: "SBINXXXXXXX",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// udyam verification
export const UDYAM = [
  {
    title: "udyam Number",
    type: "string",
    fieldName: "panNumber",
    subTitle: "user Udyam number to be verified",
    inputTag: false,
    example: "AXER07FRGV",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// gst verification
export const GSTIN = [
  {
    title: "GST_IN Number",
    type: "string",
    fieldName: "gstinNumber",
    subTitle: "GSTIN Number to be verified",
    inputTag: false,
    example: "ABCXXXXXXXXX",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// cin verification
export const CIN = [
  {
    title: "Cin Number",
    type: "string",
    fieldName: "CIN",
    subTitle: "Cin Number that should be verified",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// shop establishment
export const SEV = [
  {
    title: "Registration Number",
    type: "string",
    fieldName: "registrationNumber",
    subTitle: "Enter your shop Registration Number",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "State",
    type: "string",
    fieldName: "state",
    subTitle: "Enter your State Name",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// name verification
export const NM = [
  {
    title: "Name One",
    type: "string",
    fieldName: "firstName",
    subTitle: "Enter a Name to verify",
    inputTag: false,
    example: "RAXX",
    required: true,
  },
  {
    title: "Name Two",
    type: "string",
    fieldName: "secondName",
    subTitle: "Enter another Name to verify",
    inputTag: false,
    example: "RAXX",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// bin
export const BIN = [
  {
    title: "Bin Verification",
    type: "string",
    fieldName: "bin",
    subTitle: "Enter Starting 6 Digit of Card Number",
    inputTag: false,
    example: "45XXXX",
    required: true,
  },
  {
    title: "mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "mobile number of the given pan",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
];

// fetching operators
export const FO = [
  {
    title: "mobileNumber",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "user mobileNumber to get operators",
    inputTag: false,
    example: "65XXXXXX78",
    required: true,
  },
];

// fetching plans
export const FP = [
  {
    title: "operatorcode",
    type: "string",
    fieldName: "operatorcode",
    subTitle: "code for specific recharge partner",
    inputTag: false,
    example: "",
    required: true,
  },
  {
    title: "cricle",
    type: "string",
    fieldName: "cricle",
    subTitle: "cricle for specific recharge partner",
    inputTag: false,
    example: "2",
    required: true,
  },
];

// recharge payment
export const RP = [
  {
    title: "mobileNumber",
    type: "string",
    fieldName: "mobile_no",
    subTitle: "the mobileNumber which you want to recharge",
    inputTag: false,
    example: "65XXXXXX78",
    required: true,
  },
  {
    title: "Amount",
    type: "string",
    fieldName: "amount",
    subTitle: "the amount you want to recharge",
    inputTag: false,
    example: "19",
    required: true,
  },
  {
    title: "Pincode",
    type: "string",
    fieldName: "pincode",
    subTitle: "the pincode where you are making the recharge",
    inputTag: false,
    example: "58XXXX",
    required: true,
  },
  {
    title: "spKey",
    type: "string",
    fieldName: "spKey",
    subTitle: "the spKey that you are get in the plans api call",
    inputTag: false,
    example: "58XXXX",
    required: true,
  },
  {
    title: "geoCode",
    type: "string",
    fieldName: "geoCode",
    subTitle: "the geoCode where you are making the recharge",
    inputTag: false,
    example: "58XXXX",
    required: true,
  },
];

// recharge offers
export const RO = [
  {
    title: "operatorCode",
    type: "string",
    fieldName: "operator_code",
    subTitle: "use operator_code to get offers",
    inputTag: false,
    example: "",
    required: true,
  },
  {
    title: "mobileNumber",
    type: "string",
    fieldName: "mobile_no",
    subTitle: "use mobileNumber to get offers",
    inputTag: false,
    example: "65XXXXXX78",
    required: true,
  },
];

// fetching old plans
export const FOP = [
  {
    title: "operatorCode",
    type: "string",
    fieldName: "operator_code",
    subTitle: "use operator_code to get offers",
    inputTag: false,
    example: "",
    required: true,
  },
  {
    title: "cricle",
    type: "string",
    fieldName: "cricle",
    subTitle: "cricle for specific recharge partner",
    inputTag: false,
    example: "2",
    required: true,
  },
];

// bbps

// biller info
export const BilllerInfo = [
  {
    title: "BillerId",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique biller code provided by BBPS to billerid information.",
    inputTag: false,
    example: "AIRTM001",
    required: true,
    readOnly: true,
  },
];

// bill fetch
export const BillFetch = [
  {
    title: "Biller ID",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique code of the biller from BBPS",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Customer Mobile",
    type: "string",
    fieldName: "customerMobile",
    subTitle: "Mobile number of the customer",
    inputTag: false,
    example: "XXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Input Params",
    type: "string",
    fieldName: "inputParams",
    subTitle:
      "Enter biller-required dynamic fields (CA Number, Account Number, BU, etc.)",
    inputTag: false,
    example: "*********",
    required: true,
    readOnly: true,
  },
];

// bill validation
export const BillValidation = [
  {
    title: "Biller ID",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique biller code provided by BBPS",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Customer Mobile",
    type: "string",
    fieldName: "customerMobile",
    subTitle: "Mobile number of the customer",
    inputTag: false,
    example: "XXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Input Params",
    type: "object",
    fieldName: "inputParams",
    subTitle:
      "Enter biller-required dynamic fields (CA Number, Account Number, BU, etc.)",
    inputTag: false,
    // example: [
    //   { paramName: "CA Number", paramValue: "XXXX" },
    //   { paramName: "BU Number", paramValue: "XXXX" }
    // ],
    required: true,
    readOnly: true,
  },
  {
    title: "Amount",
    type: "number",
    fieldName: "amount",
    subTitle: "Amount to pay for the bill",
    inputTag: false,
    example: 100,
    required: false,
    readOnly: true,
  },
  {
    title: "Currency",
    type: "string",
    fieldName: "currency",
    subTitle: "Currency code (usually INR)",
    inputTag: false,
    example: "INR",
    required: false,
    readOnly: true,
  },
  {
    title: "Payment Mode",
    type: "string",
    fieldName: "paymentMode",
    subTitle: "Payment mode like UPI, AEPS, Cash, etc.",
    inputTag: false,
    example: "UPI",
    required: false,
    readOnly: true,
  },
  {
    title: "Quick Pay",
    type: "boolean",
    fieldName: "quickPay",
    subTitle: "Whether it is a quick pay transaction",
    inputTag: false,
    example: false,
    required: false,
    readOnly: true,
  },
  {
    title: "Split Pay",
    type: "boolean",
    fieldName: "splitPay",
    subTitle: "Whether the bill is being split",
    inputTag: false,
    example: false,
    required: false,
    readOnly: true,
  },
];

// bill pay
export const Billpay = [
  {
    title: "Biller ID",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique biller code provided by BBPS",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Customer Mobile",
    type: "string",
    fieldName: "customerMobile",
    subTitle: "Mobile number of the customer",
    inputTag: false,
    example: "XXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Input Params",
    type: "string",
    fieldName: "inputParams",
    subTitle:
      "Enter biller-required dynamic fields (CA Number, Account Number, BU, etc.)",
    inputTag: false,
    example: "*********",
    required: true,
    readOnly: true,
  },
  {
    title: "Amount",
    type: "number",
    fieldName: "amount",
    subTitle: "Amount to pay for the bill",
    inputTag: false,
    example: "100",
    required: true,
    readOnly: true,
  },
  {
    title: "Currency",
    type: "string",
    fieldName: "currency",
    subTitle: "Currency code (usually INR)",
    inputTag: false,
    example: "INR",
    required: true,
    readOnly: true,
  },
  {
    title: "Payment Mode",
    type: "string",
    fieldName: "paymentMode",
    subTitle: "Payment mode like UPI, AEPS, Cash, etc.",
    inputTag: false,
    example: "UPI",
    required: true,
    readOnly: true,
  },
  {
    title: "Quick Pay",
    type: "boolean",
    fieldName: "quickPay",
    subTitle: "Whether it is a quick pay transaction",
    inputTag: false,
    example: false,
    required: false,
    readOnly: true,
  },
  {
    title: "Split Pay",
    type: "boolean",
    fieldName: "splitPay",
    subTitle: "Whether the bill is being split",
    inputTag: false,
    example: false,
    required: false,
    readOnly: true,
  },
];

// quick pay
export const Quickpay = [
  {
    title: "Biller ID",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique biller code provided by BBPS",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Customer Mobile",
    type: "string",
    fieldName: "customerMobile",
    subTitle: "Mobile number of the customer",
    inputTag: false,
    example: "XXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Input Params",
    type: "string",
    fieldName: "inputParams",
    subTitle:
      "Enter biller-required dynamic fields (CA Number, Account Number, BU, etc.)",
    inputTag: false,
    example: "*********",
    required: true,
    readOnly: true,
  },
  {
    title: "Amount",
    type: "number",
    fieldName: "amount",
    subTitle: "Amount to pay for the bill (in rupees)",
    inputTag: false,
    example: 100,
    required: true,
    readOnly: true,
  },
  {
    title: "Currency",
    type: "string",
    fieldName: "currency",
    subTitle: "Currency code (usually INR)",
    inputTag: false,
    example: "INR",
    required: true,
    readOnly: true,
  },
  {
    title: "Payment Mode",
    type: "string",
    fieldName: "paymentMode",
    subTitle: "Payment mode like UPI or Debit Card",
    inputTag: false,
    example: "UPI / Debit Card",
    required: true,
    readOnly: true,
  },
  {
    title: "Quick Pay",
    type: "boolean",
    fieldName: "quickPay",
    subTitle: "Whether it is a quick pay transaction",
    inputTag: false,
    example: true,
    required: false,
    readOnly: true,
  },
  {
    title: "Split Pay",
    type: "boolean",
    fieldName: "splitPay",
    subTitle: "Whether the bill is being split",
    inputTag: false,
    example: false,
    required: false,
    readOnly: true,
  },
  {
    title: "Payment Info",
    type: "array",
    fieldName: "paymentInfo",
    subTitle:
      "Payment-specific details like VPA for UPI or Card/OTP for debit card",
    inputTag: false,
    // example: [
    //   { infoName: "VPA", infoValue: "customer@upi" },
    //   { infoName: "AuthCode", infoValue: "123456" }
    // ],
    required: true,
    readOnly: true,
  },
];

// instant pay
export const InstantPay = [
  {
    title: "Bank ID",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique biller code provided by BBPS",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Customer Mobile",
    type: "string",
    fieldName: "customerMobile",
    subTitle: "Mobile number of the customer",
    inputTag: false,
    example: "XXXXXXXXXX",
    required: true,
    readOnly: true,
  },
  {
    title: "Input Params",
    type: "object",
    fieldName: "inputParams",
    subTitle:
      "Enter biller-required dynamic fields (CA Number, Account Number, BU, etc.)",
    inputTag: false,
    // example: [
    //   { paramName: "CA Number", paramValue: "XXXX" },
    //   { paramName: "BU Number", paramValue: "XXXX" }
    // ],
    required: true,
    readOnly: true,
  },
];
