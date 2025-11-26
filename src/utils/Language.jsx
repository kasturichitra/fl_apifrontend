import { generateCode } from "./codeGenerator";
const HttpUrl = import.meta.env.VITE_HTTP_URL;

export const apiList = [
  {
    key: "pan",
    name: "PAN",
    url: "pan/panverifying",
    params: {
      panNumber: "IROPXXXXXX",
    },
  },
  {
    key: "panToAadhaar",
    name: "PANTOAADHAAR",
    url: "pan/panToAadhaar",
    params: {
      panNumber: "IROPXXXXXX",
    },
  },
   {
    key: "aadhaarIntiate",
    name: "AADHAARINITIATE",
    url: "aadhaar/initiate",
    params: {
      redirect_url: "",
      callback_url: "",
    },
  },
   {
    key: "aadhaarStatus",
    name: "AADHAARSTATUS",
    url: "aadhaar/status",
    params: {
      tsTransId: "",
    },
  },
  {
    key: "gst",
    name: "GST",
    url: "gst/verify",
    params: {
      gstNumber: "22ABCDEXXXXXXXX",
    },
  },
  {
    key: "faceMatch",
    name: "FaceMatch",
    url: "face/facematch",
    params: {
      faceId: "FACE1234",
    },
  },
  {
    key: "cin",
    name: "CIN",
    url: "business/CinNumberverify",
    params: {
      CIN: "U12345XYZ",
    },
  },
  {
    key: "shop",
    name: "SHOP",
    url: "shop/panverifying",
    params: {
      registrationNumber: "AB78XXXXXXX",
      state: "TELANXXXX",
    },
  },
  {
    key: "bpl",
    name: "BPL",
    url: "account/pennyLess/verifyBankAccount",
    params: {
      accountNumber: "123456789",
      ifsc: "ICIC0001234",
    },
  },
  {
    key: "bpd",
    name: "BPD",
    url: "account/pennyDrop/verifyBankAccount",
    params: {
      accountNumber: "123456789",
      ifsc: "ICIC0001234",
    },
  },
  {
    key: "udyam",
    name: "UDYAM",
    url: "udyam/udyamNumberverify",
    params: {
      udyamNumber: "123456789",
    },
  },
];

const baseUrl = [
  apiList.reduce((acc, api) => {
    acc[api.key] = [
      {
        serverTitle: "Test Environment",
        subTitle: "Your private sandbox environment",
        link: `${HttpUrl}${api.url}`,
      },
    ];
    return acc;
  }, {}),
];

const languagesSupported = ["Node"];

const languages = languagesSupported.map((lang) => {
  const langObj = {
    imageUrl: `/images/${lang.toLowerCase()}.png`,
    languageName: lang,
    optionType: "multiple",
    requestOptions: [],
  };

  apiList.forEach((api) => {
    const codeObj = generateCode(api.url, api.params);

    langObj.requestOptions.push({
      requestType: { type: "Fetch request", shortType: "fetch" },
      code: codeObj.fetch,
      installPackage: "",
      serviceName: api.name,
    });

    langObj.requestOptions.push({
      requestType: { type: "axios request", shortType: "Axios" },
      code: codeObj.axios,
      installPackage: "npm install axios --save",
      serviceName: api.name,
    });
  });

  return langObj;
});

const commonErrorExamples = [
  {
    statusCode: 400,
    message: { message: "Bad Request / Missing Parameters", httpCode: 400 },
  },
  {
    statusCode: 403,
    message: { message: "Access Denied", httpCode: 403 },
  },
  {
    statusCode: 404,
    message: { message: "Not Found", httpCode: 404 },
  },
  {
    statusCode: 500,
    message: { message: "Internal Server Error", httpCode: 500 },
  },
];

const apiExamples = [
  {
    name: "PAN",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            PAN: "ABCDE1234F",
            Name: "RAM BABU",
            PAN_Status: "VALID",
            PAN_Holder_Type: "Person",
          },
        },
      },
    ],
  },
   {
    name: "NM",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            firstName: "SAI BABA",
            secondName: "RAM BABU",
            result: 100,
          },
        },
      },
    ],
  },
    {
    name: "FCV",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            card_number: "7854XXXXXXXX8569",
            is_valid: true,
            issuer_info: {
              Brand: "visa",
              Category: "platinum/Business",
              CountryName: "India",
              Issuer: "Sbi Cards And Payment Services, Ltd.",
              IssuerPhone: "",
              IssuerUrl: "",
              Type: "Credit/Debit",
              isoCode2: "In",
              isoCode3: "Ind",
            },
          },
        },
      },
    ],
  },
   {
    name: "BIN",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
              Brand: "visa",
              Category: "platinum/Business",
              CountryName: "India",
              Issuer: "Sbi Cards And Payment Services, Ltd.",
              IssuerPhone: "",
              IssuerUrl: "",
              Type: "Credit/Debit",
              isoCode2: "In",
              isoCode3: "Ind",
          },
        },
      },
    ],
  },
  {
    name: "PTA",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            code: 200,
            message: "Data Found Successfully.",
            result: {
              aadhaar: "53XXXXXXXX11",
            },
          },
        },
      },
    ],
  },
  {
    name: "GST",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: { gst_number: "22ABCDE1234F1Z5", is_valid: true },
        },
      },
    ],
  },
  {
    name: "FaceMatch",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: { score: 98.45, matched: true },
        },
      },
    ],
  },
  {
    name: "SHOP",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: { score: 98.45, matched: true },
        },
      },
    ],
  },
  {
    name: "CIN",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: { CinNumber: "U123456ABC", is_valid: true },
        },
      },
    ],
  },
  {
    name: "UDYAM",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            udyam: "UDYAM-XXXXXXXX",
            "Date of Commencement of Production/Business": "2020-01-01",
            "Date of Incorporation": "2019-01-01",
            "Date of Udyam Registration": "2021-01-01",
            "MSME-DFO": "Dummy DFO Office",
            "Major Activity": "Manufacturing",
            "Name of Enterprise": "Dummy Enterprise Pvt Ltd",
            "Organisation Type": "Private Limited Company",
            "Social Category": "General",
            "Enterprise Type": [
              {
                "Classification Date": "2022-01-01",
                "Classification Year": "2022",
                "Enterprise Type": "Micro",
              },
            ],
            "National Industry Classification Code(S)": [
              {
                Activity: "Dummy Activity",
                Date: "2022-01-01",
                "Nic 2 Digit": "10",
                "Nic 4 Digit": "1010",
                "Nic 5 Digit": "10101",
              },
            ],
            "Official address of Enterprise": {
              "Flat/Door/Block No": "123",
              "Name of Premises/ Building": "Dummy Building",
              "Village/Town": "Dummy Town",
              Block: "Dummy Block",
              "Road/Street/Lane": "Dummy Street",
              City: "Dummy City",
              State: "Dummy State",
              District: "Dummy District",
              Mobile: "9999999999",
              Email: "dummy@example.com",
            },
          },
        },
      },
    ],
  },
  {
    name: "BPD",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            name: "SAI BABA",
            status: "VALID",
            success: true,
            message: "Transaction Successful",
            account_no: "3864XXXXXXX",
            ifsc: "SBINXXXXXXX",
          },
        },
      },
    ],
  },
  {
    name: "BPL",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            name: "SAI BABA",
            status: "VALID",
            success: true,
            message: "Transaction Successful",
            account_no: "3864XXXXXXX",
            ifsc: "SBINXXXXXXX",
          },
        },
      },
    ],
  },
  {
    name: "FP",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            name: "SAI BABA",
            status: "VALID",
            success: true,
            message: "Transaction Successful",
            account_no: "3864XXXXXXX",
            ifsc: "SBINXXXXXXX",
          },
        },
      },
    ],
  },
  {
    name: "RP",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            name: "SAI BABA",
            status: "VALID",
            success: true,
            message: "Transaction Successful",
            account_no: "3864XXXXXXX",
            ifsc: "SBINXXXXXXX",
          },
        },
      },
    ],
  },
];

const exampleCodes = apiExamples.reduce((acc, api) => {
  acc[api.name] = [...api.examples, ...commonErrorExamples];
  return acc;
}, {});

export const GetAcc = {
  baseUrl,
  languages,
  exampleCodes,
};
