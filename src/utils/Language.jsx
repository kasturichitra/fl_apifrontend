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
    key: "aadhaarInitiate",
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
    key: "mobileOtpGenration",
    name: "MOBILEOTPGENRATION",
    url: "mobileNumber/mobileOtp",
    params: {
      mobileNumber: "7345XXXXXX",
    },
  },
  {
    key: "mobileOtpVerify",
    name: "MOBILEOTPVERIFY",
    url: "mobileNumber/mobileotpVerify",
    params: {
      submittedOtp: "12XX",
    },
  },
  {
    key: "gst",
    name: "GST",
    url: "gst/Gstinverify",
    params: {
      gstinNumber: "22ABCDEXXXXXXXX",
    },
  },
  {
    key: "faceMatch",
    name: "FACEMATCH",
    url: "face/facematch",
    params: {
      userImage: "BASE 64",
      aadhaarImage: "BASE 64",
    },
  },
  {
    key: "ifsc",
    name: "IFSC",
    url: "bin/getBankDetails",
    params: {
      ifsc: "SBINXXXXXXX",
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
    url: "shop/shopest",
    params: {
      registrationNumber: "AB78XXXXXXX",
      state: "TELANXXXX",
    },
  },
  {
    key: "bpl",
    name: "BPL",
    url: "accounts/verify/penny-less",
    params: {
      accountNumber: "123456789",
      ifsc: "ICIC0001234",
    },
  },
  {
    key: "bpd",
    name: "BPD",
    url: "accounts/verify/penny-drop",
    params: {
      accountNumber: "123456789",
      ifsc: "ICIC0001234",
    },
  },
  {
    key: "udyam",
    name: "UDYAM",
    url: "udyam/verify",
    params: {
      udyamNumber: "123456789",
    },
  },
  {
    key: "fullCreditCard",
    name: "FULLCREDITCARD",
    url: "card/cardVerify",
    params: {
      creditCardNumber: "45XXXXXXXXXXXX23",
    },
  },
  {
    key: "bin",
    name: "BIN",
    url: "bin/getCardDetails",
    params: {
      bin: "45XXXX",
    },
  },
  {
    key: "plans",
    name: "PLANS",
    url: "Recharge/Plans",
    params: {
      bin: "45XXXX",
    },
  },
     {
    key: "recharge",
    name: "RECHARGE",
    url: "Recharge/RechargeURL",
    params: {
      customerNumber: "",
      actualAmount: "",
    },
  },
  {
    key: "offers",
    name: "OFFERS",
    url: "Recharge/OffersPlans",
    params: {
      operator_code: "",
      mobile_no: "",
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
  // pan verification
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
  // pan to aadhaar
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
  // name match
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
  // full card verification
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
  // bin verification
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
  // aadhaar initiate
  {
    name: "AVI",
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
  // aadhaar status
  {
    name: "AVS",
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
  // gst verify
  {
    name: "GST",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          data: {
            gstinNumber: "11AAAAA1111A1Z1",
            companyName: "ABC PRIVATE LIMITED",
            other_business_address: "Some Additional Address",
            register_cancellation_date: "2024-01-01",
            state_jurisdiction:
              "State - DemoState, Division - DemoDivision, Circle - DemoCircle",
            tax_payer_type: "Regular",
            trade_name: "ABC TRADERS",
            primary_business_address: {
              building_name: "Demo Building",
              building_number: "12345",
              city: "Demo City",
              district: "Demo District",
              flat_number: "101",
              latitude: "12.9721",
              longitude: "77.5933",
              location: "Demo Location",
              business_nature: "Supplier of Goods",
              pincode: "123456",
              street: "Demo Street",
              state_code: "DemoState",
              full_address:
                "Demo Building, 12345, Demo Street, Demo Location, Demo District, DemoState - 123456",
            },
          },
        },
      },
    ],
  },
  // face verification
  {
    name: "FACE",
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
  // shop verification
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
  // cin verification
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
  // udyam verification
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
  // Bank Acccount Verification
  // bank penny drop
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
  // bank penny less
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
  // bank details with ifsc
  {
    name: "IFSC",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            BRANCH: "Demo Branch",
            ADDRESS: "123 Demo Street, Demo Area, Demo City - 000000",
            STATE: "Demo State",
            MICR: "123456789",
            CONTACT: "0123456789",
            UPI: true,
            RTGS: true,
            CITY: "Demo City",
            CENTRE: "Demo Centre",
            DISTRICT: "Demo District",
            NEFT: true,
            IMPS: true,
            SWIFT: "DEMOXX12345",
            ISO3166: "IN-DM",
            BANK: "Demo Bank Ltd",
            BANKCODE: "DMBC",
            IFSC: "DMBC0001234",
          },
        },
      },
    ],
  },
  // fetching operators
  {
    name: "FO",
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
  // fetching plans
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
  // recharge payment
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
    // recharge offers
   {
    name: "RO",
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
    name: "BillerInfo",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            jsonData: {
              billerInfoResponse: {
                biller: {
                  billerId: "XXXXXXXXXXXXXXX",
                  billerName: "XXXX XXXX",
                  billerAdhoc: "true",
                  billerStatus: "ACTIVE",
                  billerTimeout: "XXX",
                  supportDeemed: "Yes",
                  billerCategory: "Credit Card",
                  billerCoverage: "IND",
                  billerAliasName: "XXXX XXXX",
                  billerDescription: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                  billerInputParams: {
                    paramInfo: [
                      {
                        regEx: "^[0-9]{4,4}$",
                        dataType: "NUMERIC",
                        maxLength: "4",
                        minLength: "4",
                        paramName: "Last 4 digit of primary credit card number",
                        isOptional: "false",
                        visibility: "true"
                      },
                      {
                        regEx: "^[6-9][0-9]{9}$",
                        dataType: "NUMERIC",
                        maxLength: "10",
                        minLength: "10",
                        paramName: "Mobile Number",
                        isOptional: "false",
                        visibility: "true"
                      }
                    ]
                  },
                  billerPaymentModes: {
                    paymentModeInfo: [
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentMode: "AEPS" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentMode: "Account Transfer" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentMode: "Cash" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentMode: "Debit Card" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentMode: "Internet Banking" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentMode: "UPI" }
                    ]
                  },
                  billerResponseType: "SINGLE",
                  interchangeFeeCCF1: {
                    feeCode: "XXXX",
                    flatFee: "X",
                    feeMaxAmt: "XXXXXXXX",
                    feeMinAmt: "X",
                    percentFee: "X.XX",
                    feeDirection: "C2B"
                  },
                  planAdditionalInfo: "",
                  planMdmRequirement: "NOT_SUPPORTED",
                  billerAmountOptions: "XXXXXXXXXXXXXXXX",
                  billerAdditionalInfo: {
                    paramInfo: [
                      { paramName: "Minimum Amount Due" },
                      { paramName: "Maximum Permissible Amount" }
                    ]
                  },
                  supportPendingStatus: "Yes",
                  billerFetchRequiremet: "MANDATORY",
                  billerPaymentChannels: {
                    paymentChannelInfo: [
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "ATM" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "AGT" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "BNKBRNCH" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "BSC" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "INT" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "INTB" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "KIOSK" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "MPOS" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "MOB" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "MOBB" },
                      { maxAmount: "XXXXXXXXXXX", minAmount: "XXX", paymentChannelName: "POS" }
                    ]
                  },
                  billerPaymentExactness: "",
                  billerPlanResponseParams: "",
                  billerAdditionalInfoPayment: "",
                  billerSupportBillValidation: "NOT_SUPPORTED",
                  rechargeAmountInValidationRequest: ""
                },
                responseCode: "000"
              }
            }
          }
        }
      }
],
  },
   {
  name: "BillFetch",
  examples: [
    {
      statusCode: 200,
      message: {
        success: true,
        message: "Valid",
        response: {
          jsonData: {
            billFetchResponse: {
              responseCode: "000",
              inputParams: {
                input: [
                  {
                    paramName: "Last 4 digit of primary credit card number",
                    paramValue: "XXXX"
                  },
                  {
                    paramName: "Mobile Number",
                    paramValue: "XXXXXXXXXX"
                  }
                ]
              },
              billerResponse: {
                billAmount: "XXXXXX",
                billDate: "XXXX-XX-XX",
                customerName: "XXXXXXXX XXXXXXX",
                dueDate: "XXXX-XX-XX"
              },
              additionalInfo: {
                info: [
                  {
                    infoName: "Minimum Amount Due",
                    infoValue: "XXXXX.XX"
                  },
                  {
                    infoName: "Maximum Permissible Amount",
                    infoValue: "XXXXX.XX"
                  }
                ]
              }
            }
          }
        }
      }
    }
  ]
},
{
  name: "BillValidation",
  examples: [
    {
      statusCode: 200,
      message: {
        success: true,
        message: "Valid",
        response: {
          jsonData: {
            billValidationResponse: {
              responseCode: "000",
              responseReason: "Successful",
              complianceCode: "XXXX",
              complianceReason: "XXXXXXXXXXXX",
              approvalRefNo: "XXXXXXXXXXXXXXXX"
            }
          },
          requestId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        }
      }
    }
  ]
},
  {
  name: "BillPay",
  examples: [
    {
      statusCode: 200,
      message: {
        success: true,
        message: "Valid",
        response: {
          jsonData: {
            billPayResponse: {
              responseCode: "000",
              responseReason: "Successful",
              txnRefId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
              approvalRefNumber: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
              txnRespType: "FORWARD TYPE RESPONSE",

              inputParams: {
                input: [
                  {
                    paramName: "Last 4 digit of primary credit card number",
                    paramValue: "XXXX"
                  },
                  {
                    paramName: "Mobile Number",
                    paramValue: "XXXXXXXXXX"
                  }
                ]
              },

              CustConvFee: "X",
              RespAmount: "XXX",
              RespBillDate: "XXXX-XX-XX",
              RespCustomerName: "XXXXXXXX XXXXXXX",
              RespDueDate: "XXXX-XX-XX"
            }
          }
        }
      }
    }
  ]
},
{
  name: "QuickPay",
  examples: [
    {
      statusCode: 200,
      message: {
        success: true,
        message: "Valid",
        response: {
          jsonData: {
            billPayResponse: {
              responseCode: "000",
              responseReason: "Successful",
              txnRefId: "XXXXXXXXXXXX",
              approvalRefNumber: "XXXXXXXXXXXX",
              txnRespType: "FORWARD TYPE RESPONSE",

              inputParams: {
                input: [
                  {
                    paramName: "Subscriber Number",
                    paramValue: "XXXXXXXX"
                  },
                  {
                    paramName: "Mobile Number",
                    paramValue: "XXXXXXXXXX"
                  }
                ]
              },

              CustConvFee: "X",
              RespAmount: "XXXXX",
              RespBillDate: "XXXX-XX-XX",
              RespBillNumber: "NA",
              RespBillPeriod: "XXXX",
              RespCustomerName: "XXXX XXXXX",
              RespDueDate: "XXXX-XX-XX"
            }
          }
        }
      }
    }
  ]
}





  //    {
  //     name: "BillFetch",
  //     examples: [
  // {responseCode:"000",responseReason:"Successful",txnRefId:"CC015330CBAA98155678",approvalRefNumber:"RneKliUJVyXjAOEJvC6GwhtL15d53300529",txnRespType:"FORWARD TYPE RESPONSE",inputParams:{"input":[{"paramName":"Last 4 digit of primary credit card number","paramValue":"8584"},{"paramName":"Mobile Number","paramValue":"8099781613"}]},CustConvFee:"0",RespAmount:"100",RespBillDate:"2025-11-23",RespCustomerName:"CHITRA KASTURI",RespDueDate:"2025-12-13"}


  //     ],
  //   },
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
