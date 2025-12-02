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

// udyam
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

export const AAV = [
  {
    title: "Aadhaar Number",
    type: "string",
    fieldName: "aadharNumber",
    subTitle: "Aadhaar Number to be verified",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "Aadhaar Number",
    type: "string",
    fieldName: "aadharNumber",
    subTitle: "Aadhaar Number to be verified",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

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

export const BNV = [
  {
    title: "Bank Acc Num",
    type: "string",
    fieldName: "account_no",
    subTitle: "Bank Account Number to be verified",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "IFSC Code",
    type: "string",
    fieldName: "ifsc",
    subTitle: "IFSC code of the branch",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

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

export const GBD = [
  {
    title: "Bank IFSC code ",
    type: "string",
    fieldName: "ifsc",
    subTitle: "Enter your Bank IFSC c",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

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

export const BIN = [
  {
    title: "Bin Verification",
    type: "string",
    fieldName: "bin",
    subTitle: "Enter Starting 6 Digit of Card Number",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

export const AOG = [
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

export const AOV = [
  {
    title: "OTP",
    type: "string",
    fieldName: "otp",
    subTitle: "Enter Your Card Number",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
  {
    title: "client ID",
    type: "string",
    fieldName: "client_id",
    subTitle: "Enter client Id received on OTP generation",
    inputTag: true,
    example: "XXXXXXXXXXXX",
    required: true,
  },
];

export const FP = [
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

