export const MASTER_FIELDS = [
  {
    key: "mobileNumber",
    title: "Mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "Enter Your Mobile Number",
    inputTag: false,
    example: "98XXXXXX54",
    required: false,
    optional: true,
  },
  {
    key: "aadhaarNumber",
    title: "Aadhaar Number",
    type: "string",
    fieldName: "aadhaarNumber",
    subTitle: "Enter your Aadhaar Number",
    inputTag: false,
    example: "123412341234",
    required: true,
  },
  {
    key: "RegistrationNumber",
    title: "Registration Number",
    type: "string",
    fieldName: "RegistrationNumber",
    subTitle: "Enter your Registration Number",
    inputTag: false,
    example: "REG123456",
    required: true,
  },
  {
    key: "licenseNo",
    title: "License Number",
    type: "string",
    fieldName: "licenseNo",
    subTitle: "Enter your Driving License Number",
    inputTag: false,
    example: "DL1234567890123",
    required: true,
  },
  {
    key: "DateOfBirth",
    title: "Date of Birth",
    type: "string",
    fieldName: "DateOfBirth",
    subTitle: "Enter your Date of Birth",
    inputTag: false,
    example: "1990-01-01",
    required: true,
  },
  {
    key: "vehicleRegistrationNumber",
    title: "Vehicle Registration Number",
    type: "string",
    fieldName: "vehicleRegistrationNumber",
    subTitle: "Enter your Vehicle Registration Number",
    inputTag: false,
    example: "TN01AB1234",
    required: true,
  },
  {
    key: "rcNumber",
    title: "RC Number",
    type: "string",
    fieldName: "rcNumber",
    subTitle: "Enter your Vehicle RC number",
    inputTag: false,
    example: "TN01AB1234",
    required: true,
  },
  {
    key: "pincode",
    title: "Pincode",
    type: "string",
    fieldName: "pincode",
    subTitle: "Enter Your pincode",
    inputTag: false,
    example: "784569",
    required: true,
    optional: false,
  },
  {
    key: "panNumber",
    title: "PanCard Number",
    type: "string",
    fieldName: "panNumber",
    subTitle: "User PAN card number to be verified",
    inputTag: false,
    example: "AXER07FRGV",
    required: true,
  },
  {
    key: "ifsc",
    title: "IFSC",
    type: "string",
    fieldName: "ifsc",
    subTitle: "IFSC code to be verified",
    inputTag: false,
    example: "SBINXXXXXXX",
    required: true,
  },
  {
    key: "accountNumber",
    title: "Account Number",
    type: "string",
    fieldName: "accountNumber",
    subTitle: "accountNumber of the bank account that need to be verify",
    inputTag: false,
    example: "3864XXXXXXX",
    required: true,
  },
  {
    key: "billerId",
    title: "Biller ID",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique biller code provided by BBPS",
    inputTag: false,
    example: "XXXXXXXXXXXX",
    readOnly: true,
    required: true,
  },
  {
    key: "amount",
    title: "Amount",
    type: "number",
    fieldName: "amount",
    subTitle: "Amount to be paid",
    inputTag: false,
    example: 100,
    readOnly: true,
    required: true,
  },
  {
    key: "latitude",
    title: "Latitude",
    type: "number",
    fieldName: "latitude",
    subTitle: "Enter your current latitude",
    inputTag: false,
    example: 17.385044,
    required: true,
  },
  {
    key: "longitude",
    title: "Longitude",
    type: "number",
    fieldName: "longitude",
    subTitle: "Enter your current longitude",
    inputTag: false,
    example: 78.486671,
    required: true,
  },
  {
    key: "digipin",
    title: "DigiPin",
    type: "string",
    fieldName: "digipin",
    subTitle: "Enter your DigiPin",
    inputTag: false,
    example: "DPIN123456",
    required: false,
  },
  {
    key: "address",
    title: "Address",
    type: "string",
    fieldName: "address",
    subTitle: "Enter your full address",
    inputTag: true,
    example: "123, MG Road, Hyderabad, Telangana",
    required: true,
  },
];

/* =========================================================
   COMMON FIELD KEYS (not full objects)
   ========================================================= */

/* =========================================================
   SCHEMA BUILDER
   ========================================================= */

export const buildSchema = (schemaKeys = []) => {
  const usedKeys = new Set();

  return schemaKeys.reduce((schema, config) => {
    const { key, overrides = {} } = config;

    // avoid duplicates
    if (usedKeys.has(key)) return schema;
    usedKeys.add(key);

    const field = MASTER_FIELDS.find((f) => f.key === key);

    if (!field) {
      throw new Error(`Schema field with key "${key}" not found`);
    }

    schema.push({
      ...field,
      ...overrides,
    });

    return schema;
  }, []);
};

/* =========================================================
   SCHEMAS
   ========================================================= */

// panToAadhaar
export const PNV = buildSchema([
  { key: "panNumber" },
  { key: "mobileNumber" }, // optional by default
]);

// geo location services

// pincode geofencing
export const PG = buildSchema([
  { key: "pincode" },
  { key: "mobileNumber" }, // optional by default
]);
// longitude latitude geofencing
export const LLG = buildSchema([
  { key: "latitude" },
  { key: "longitude" },
  { key: "mobileNumber" }, // optional by default
]);
// digipin to longitude latitude
export const DTLL = buildSchema([
  { key: "digipin" },
  { key: "mobileNumber" }, // optional by default
]);
// address to digipin
export const ATD = buildSchema([
  { key: "address" },
  { key: "mobileNumber" }, // optional by default
]);
// geo tagging search
export const GTS = buildSchema([
  { key: "latitude" },
  { key: "longitude" },
  { key: "mobileNumber" }, // optional by default
]);
// geo tagging search and distance calculation
export const GTSADC = buildSchema([
  { key: "latitude" },
  { key: "longitude" },
  { key: "address" },
  { key: "mobileNumber" }, // optional by default
]);
// latitude longitude to digipin
export const LLTD = buildSchema([
  { key: "latitude" },
  { key: "longitude" },
  { key: "mobileNumber" }, // optional by default
]);

// vehicle services

// driving license verify
export const DLV = buildSchema([
  { key: "licenseNo" },
  { key: "DateOfBirth" },
  { key: "mobileNumber" },
]);
// challan via rc
export const CVR = buildSchema([
  { key: "rcNumber" },
  { key: "mobileNumber" }, // optional by default
]);
// detailed rc verification
export const DRV = buildSchema([
  { key: "rcNumber" },
  { key: "mobileNumber" }, // optional by default
]);
// vehicle registeration verification
export const VRV = buildSchema([
  { key: "RegistrationNumber" },
  { key: "mobileNumber" }, // optional by default
]);
// stolen vehicle verification
export const SVV = buildSchema([
  { key: "vehicleRegistrationNumber" },
  { key: "mobileNumber" }, // optional by default
]);

// risk and due diligence

// domian verification
export const DV = [
  {
    title: "domain",
    type: "string",
    fieldName: "domain",
    subTitle: "Enter Your domain here",
    inputTag: false,
    example: "example.com",
    required: true,
    optional: false,
    group: "domainOrEmail",
  },
  {
    title: "emailAddress",
    type: "string",
    fieldName: "emailAddress",
    subTitle: "Enter Your email address here",
    inputTag: false,
    example: "user@example.com",
    required: true,
    optional: false,
    group: "domainOrEmail",
  },
];

// aadhaar and digilocker services

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
// digilocker account verify
export const DAV = [
  {
    key: "mobileNumber",
    title: "Mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "Enter Your Mobile Number",
    inputTag: false,
    example: "98XXXXXX54",
    required: true,
    optional: false,
  },
];
// aadhaar to masked pan
export const ATMP = buildSchema([
  { key: "aadhaarNumber" },
  { key: "mobileNumber" }, // optional by default
]);

// contact and communication

// mobile number verification - step1, step2
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
// mobile to uan
export const MTU = [
    {
    key: "mobileNumber",
    title: "Mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "Enter Your Mobile Number",
    inputTag: false,
    example: "98XXXXXX54",
    required: true,
    optional: false,
  },
];
// mobile to pan
export const MTP = [
   {
    key: "mobileNumber",
    title: "Mobile Number",
    type: "string",
    fieldName: "mobileNumber",
    subTitle: "Enter Your Mobile Number",
    inputTag: false,
    example: "98XXXXXX54",
    required: true,
    optional: false,
  },
];

// employment services

// dual employment check
export const DEC = [
  {
    key: "employer",
    title: "Employer",
    type: "string",
    fieldName: "employer",
    subTitle: "Enter your employer or company name",
    inputTag: false,
    example: "TCS / Infosys / ABC Pvt Ltd",
    required: false,
  },
  {
    key: "uanNumber",
    title: "UAN Number",
    type: "string",
    fieldName: "uanNumber",
    subTitle: "Enter your UAN (Universal Account Number)",
    inputTag: false,
    example: "123456789012",
    required: true,
  },
];
// basic uan verification
export const BUV = [
  {
    key: "uanNumber",
    title: "UAN Number",
    type: "string",
    fieldName: "uanNumber",
    subTitle: "Enter your UAN (Universal Account Number)",
    inputTag: false,
    example: "123456789012",
    required: true,
  },
];

// face and ai services

// face match
export const FM = [
  {
    title: "user image",
    type: "image",
    fieldName: "userimage",
    subTitle: "send user image in base64 that should be verified",
    inputTag: false,
    example: "",
    required: true,
  },
  {
    title: "adhaar image",
    type: "image",
    subTitle: "send aadhaar image in base64 that should be verified",
    inputTag: false,
    fieldName: "aadharImage",
    example: "",
    required: true,
  },
];
// image blurriness, ai image check, deepfake image check, ai and deepfake image check
export const IC = [
  {
    title: "user image",
    type: "image",
    fieldName: "file",
    subTitle: "image to be verified in png, webp, jpeg upto 5mb",
    inputTag: false,
    example: "",
    required: true,
  },
];

// banking services

// bank account verification
export const BAV = buildSchema([
  {
    key: "accountNumber",
  },
  { key: "ifsc" },
  { key: "mobileNumber" }, // optional
]);
// bank with ifsc
export const BWI = buildSchema([
  { key: "ifsc" },
  { key: "mobileNumber" }, // optional
]);

// geo location services

// pincode geofencing
export const PCG = buildSchema([
  { key: "pincode" },
  { key: "mobileNumber" }, // optional by default
]);

// business services

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

// other services
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

// recharge

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
