// pan // panToAadhaar
export const PNV = [
  {
    title: "PanCard Number",
    type: "string",
    fieldName: "panNumber",
    subTitle: "user pancard number to be verified",
    inputTag: true,
    example: "AXER07FRGV",
    required: true,
  },
];

// aadhaar
export const AS = [
  {
    title: "Adhaar Number",
    type: "string",
    fieldName: "aadharNumber",
    subTitle: "Enter Your Card Number",
    inputTag: true,
    example: "XXXXXXXXXXXX",
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
    inputTag: true,
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
    inputTag: true,
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
    inputTag: true,
    example: "Dr.",
    required: true,
  },
  {
    title: "adhaar image",
    type: "image",
    subTitle: "adhaar image to be verified",
    inputTag: true,
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
    inputTag: true,
    example: "987456XXXXX",
    required: true,
  },
  ,
  {
    title: "Ifsc",
    type: "string",
    fieldName: "panNumber",
    subTitle: "Ifsc to be verified",
    inputTag: true,
    example: "SBINXXXXXXX",
    required: true,
  },
];

// bank with ifsc
export const BWI = [
  {
    title: "ifsc",
    type: "string",
    fieldName: "ifsc",
    subTitle: "user ifsc to be verified",
    inputTag: true,
    example: "SBINXXXXXXX",
    required: true,
  },
];

// udyam verification
export const UDYAM = [
  {
    title: "udyam Number",
    type: "string",
    fieldName: "panNumber",
    subTitle: "user Udyam number to be verified",
    inputTag: true,
    example: "AXER07FRGV",
    required: true,
  },
];

// gst verification
export const GSTIN = [
  {
    title: "GST_IN Number",
    type: "string",
    fieldName: "gstinNumber",
    subTitle: "GSTIN Number to be verified",
    inputTag: true,
    example: "ABCXXXXXXXXX",
    required: true,
  },
];

// cin verification
export const CIN = [
  {
    title: "Cin Number",
    type: "string",
    fieldName: "CIN",
    subTitle: "Cin Number that should be verified",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

// name verification
export const NM = [
  {
    title: "Name One",
    type: "string",
    fieldName: "firstName",
    subTitle: "Enter your Name on Bank Account",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "Name Two",
    type: "string",
    fieldName: "secondName",
    subTitle: "Enter your Name on Pan card",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

// shop establishment
export const SEV = [
  {
    title: "Registration Number",
    type: "string",
    fieldName: "registrationNumber",
    subTitle: "Enter your shop Registration Number",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "State",
    type: "string",
    fieldName: "state",
    subTitle: "Enter your State Name",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

// bin
export const BIN = [
  {
    title: "Bin Verification",
    type: "string",
    fieldName: "bin",
    subTitle: "Enter Starting 6 Digit of Card Number",
    inputTag: true,
    example: "45XXXX",
    required: true,
  },
];

// fetching operators
export const FO = [
  {
    title: "PanCard Number",
    type: "string",
    fieldName: "panNumber",
    subTitle: "user pancard number to be verified",
    inputTag: true,
    example: "AXER07FRGV",
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
    inputTag: true,
    example: "",
    required: true,
  },
  {
    title: "cricle",
    type: "string",
    fieldName: "cricle",
    subTitle: "cricle for specific recharge partner",
    inputTag: true,
    example: "2",
    required: true,
  }
];

// recharge payment
export const RP = [
  {
    title: "PanCard Number",
    type: "string",
    fieldName: "panNumber",
    subTitle: "user pancard number to be verified",
    inputTag: true,
    example: "AXER07FRGV",
    required: true,
  },
];

export const BilllerInfo = [
  {
    title: "BillerId",
    type: "string",
    fieldName: "billerId",
    subTitle: "Unique biller code provided by BBPS to billerid information.",
    inputTag: true,
    example: "AIRTM001",
    required: true,
    disabled: true,
  },
];

