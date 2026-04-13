import { generateCode } from "./codeGenerator";
const HttpUrl = import.meta.env.VITE_HTTP_URL;
const RechargeHttpUrl = import.meta.env.VITE_HTTP_RECHARGE_URL;
const BillPaymentsHttpUrl = import.meta.env.VITE_HTTP_BILL_PAYMENTS_URL;
const superAdminUrl = import.meta.env.VITE_HTTP_CLIENT_ADMIN_URL;

const BASE_URL_BY_CATEGORY = {
  kyc: HttpUrl,
  recharge: RechargeHttpUrl,
  billPayments: BillPaymentsHttpUrl,
  all: superAdminUrl,
};

export const apiList = [
  // Access Token
  {
    key: "access",
    name: "ACCESS",
    category: "all",
    url: "api/v1/client/generate/clientToken",
    params: {},
  },

  // 🔐 KYC APIs
  // pan services
  {
    key: "pan",
    name: "PAN",
    category: "kyc",
    url: "pan/panverifying",
    params: { panNumber: "IROPXXXXXX" },
  },
  {
    key: "panToAadhaar",
    name: "PANTOAADHAAR",
    category: "kyc",
    url: "pan/verify_to_aadhaar",
    params: { panNumber: "IROPXXXXXX" },
  },
  {
    key: "panNameMatch",
    name: "PAN NAME MATCH",
    category: "kyc",
    url: "pan/pan",
    params: {
      panNumber: "",
    },
  },
  {
    key: "panNameDobValidation",
    name: "PAN NAME DOB VALIDATION",
    category: "kyc",
    url: "pan/pan",
    params: {
      panNumber: "",
      dob: "",
    },
  },
  {
    key: "panAadhaarSeeding",
    name: "PAN AADHAAR SEEDING",
    category: "kyc",
    url: "pan/pan",
    params: {
      panNumber: "",
    },
  },
  {
    key: "panActiveInactiveStatus",
    name: "PAN ACTIVE / INACTIVE STATUS",
    category: "kyc",
    url: "pan/pan",
    params: {
      panNumber: "",
    },
  },
  {
    key: "panDirector",
    name: "PAN DIRECTOR",
    category: "kyc",
    url: "pan/pan",
    params: {
      panNumber: "",
    },
  },
  {
    key: "panItdOtpSend",
    name: "PAN ITD OTP SEND",
    category: "kyc",
    url: "pan/pan",
    params: {
      panNumber: "",
    },
  },
  {
    key: "panItdOtpVerify",
    name: "PAN ITD OTP VERIFY",
    category: "kyc",
    url: "pan/pan",
    params: {
      panNumber: "",
      otp: "",
    },
  },

  // aadhaar services
  {
    key: "aadhaarInitiate",
    name: "AADHAARINITIATE",
    category: "kyc",
    url: "aadhaar/initiate",
    params: { redirect_url: "", callback_url: "" },
  },
  {
    key: "aadhaarStatus",
    name: "AADHAARSTATUS",
    category: "kyc",
    url: "aadhaar/status",
    params: { tsTransId: "" },
  },
  {
    key: "aadhaarToMaskedPan",
    name: "AADHAARTOMASKEDPAN",
    category: "kyc",
    url: "aadhaar/pan/maskedverify",
    params: { aadharNumber: "" },
  },
  {
    key: "digilockerVerifyAccount",
    name: "DIGILOCKERVERIFYACCOUNT",
    category: "kyc",
    url: "aadhaar/digilocker/verify",
    params: { mobileNumber: "" },
  },

  // employment services
  {
    key: "dualEmploymentCheck",
    name: "DUALEMPLOYMENTCHECK",
    category: "kyc",
    url: "employee/dual_employment/check",
    params: { uanNumber: "", employer: "" },
  },
  {
    key: "basicUanVerification",
    name: "BASICUANVERIFICATION",
    category: "kyc",
    url: "employee/uan/basic",
    params: { uanNumber: "" },
  },

  // vehicle service
  {
    key: "vehicleRegisteration",
    name: "VEHICLEREGISTERATION",
    category: "kyc",
    url: "vehicle/register",
    params: {
      RegistrationNumber: "",
    },
  },
  {
    key: "detailedRcVerification",
    name: "DETAILEDRCVERIFICATION",
    category: "kyc",
    url: "vehicle/rcverify",
    params: {
      rcNumber: "",
    },
  },
  {
    key: "stolenVehicleVerification",
    name: "STOLENVEHICLEVERIFICATION",
    category: "kyc",
    url: "vehicle/stolen_vehicle/verification",
    params: {
      vehicleRegisterationNumber: "",
    },
  },
  {
    key: "drivingLicense",
    name: "DRIVINGLICENSE",
    category: "kyc",
    url: "vehicle/driving_license/verify",
    params: {
      licenseNo: "",
      DateOfBirth: "",
    },
  },
  {
    key: "challanViaRc",
    name: "CHALLANVIARC",
    category: "kyc",
    url: "vehicle/challan_via_rc",
    params: { rcNumber: "" },
  },

  // contact services
  {
    key: "mobileOtpGenration",
    name: "MOBILEOTPGENRATION",
    category: "kyc",
    url: "mobileNumber/otp_generation",
    params: { mobileNumber: "7345XXXXXX" },
  },
  {
    key: "mobileOtpVerify",
    name: "MOBILEOTPVERIFY",
    category: "kyc",
    url: "mobileNumber/otp_verification",
    params: { submittedOtp: "12XX" },
  },
  {
    key: "mobileToUan",
    name: "MOBILETOUAN",
    category: "kyc",
    url: "contact/uan/verify",
    params: { mobileNumber: "" },
  },
  {
    key: "mobileToPan",
    name: "MOBILETOPAN",
    category: "kyc",
    url: "contact/pan/verify",
    params: { mobileNumber: "" },
  },

  // business services
  {
    key: "gst",
    name: "GST",
    category: "kyc",
    url: "gst/Gstinverify",
    params: { gstinNumber: "22ABCDEXXXXXXXX" },
  },
  {
    key: "gstToPan",
    name: "GSTTOPAN",
    category: "kyc",
    url: "gst/Gstintopan/verify",
    params: { gstinNumber: "22ABCDEXXXXXXXX" },
  },
  {
    key: "cin",
    name: "CIN",
    category: "kyc",
    url: "business/CinNumberverify",
    params: { CIN: "U12345XYZ" },
  },
  {
    key: "shop",
    name: "SHOP",
    category: "kyc",
    url: "shop/shopest",
    params: {
      registrationNumber: "AB78XXXXXXX",
      state: "TELANXXXX",
    },
  },
  {
    key: "udyam",
    name: "UDYAM",
    category: "kyc",
    url: "udyam/verify",
    params: { udyamNumber: "123456789" },
  },

  // banking and financial
  {
    key: "ifsc",
    name: "IFSC",
    category: "kyc",
    url: "bin/getBankDetails",
    params: { ifsc: "SBINXXXXXXX" },
  },
  {
    key: "bpl",
    name: "BPL",
    category: "kyc",
    url: "accounts/verify/penny-less",
    params: {
      accountNumber: "123456789",
      ifsc: "ICIC0001234",
    },
  },
  {
    key: "bpd",
    name: "BPD",
    category: "kyc",
    url: "accounts/verify/penny-drop",
    params: {
      accountNumber: "123456789",
      ifsc: "ICIC0001234",
    },
  },
  {
    key: "fullCreditCard",
    name: "FULLCREDITCARD",
    category: "kyc",
    url: "card/cardVerify",
    params: { creditCardNumber: "45XXXXXXXXXXXX23" },
  },
  {
    key: "bin",
    name: "BIN",
    category: "kyc",
    url: "bin/getCardDetails",
    params: { bin: "45XXXX" },
  },

  // other services
  {
    key: "name",
    name: "NAME",
    category: "kyc",
    url: "name/compareNames",
    params: { firstName: "", secondName: "" },
  },

  // geo location
  {
    key: "geoTaggingSearch",
    name: "GEO TAGGING SEARCH",
    category: "geo",
    url: "location/geo/tagging",
    params: {
      longitude: "",
      latitude: "",
    },
  },
  {
    key: "geoTaggingDistanceCalculation",
    name: "GEO TAGGING DISTANCE CALCULATION",
    category: "geo",
    url: "location/geo/tagging/distance_calculation",
    params: {
      longitude: "",
      latitude: "",
      address: "",
    },
  },
  {
    key: "longitudeLatitudeGeofencing",
    name: "LONGITUDE LATITUDE GEOFENCING",
    category: "geo",
    url: "location/longLat/geofencing",
    params: {
      longitude: "",
      latitude: "",
    },
  },
  {
    key: "pincodeGeofencing",
    name: "PINCODE GEOFENCING",
    category: "geo",
    url: "location/pincode/geofencing",
    params: {
      pinCode: "",
    },
  },
  {
    key: "latLongToDigipin",
    name: "LAT LONG TO DIGIPIN",
    category: "geo",
    url: "location/longLat/digipin",
    params: {
      longitude: "",
      latitude: "",
    },
  },
  {
    key: "digipinToLatLong",
    name: "DIGIPIN TO LAT LONG",
    category: "geo",
    url: "location/digipin/longLat",
    params: {
      digipin: "",
    },
  },
  {
    key: "addressToDigipin",
    name: "ADDRESS TO DIGIPIN",
    category: "geo",
    url: "location/address/digipin",
    params: {
      address: "",
    },
  },

  // face and ai services
  {
    key: "faceMatch",
    name: "FACEMATCH",
    category: "kyc",
    url: "face/facematch",
    params: {
      userImage: "BASE 64",
      aadhaarImage: "BASE 64",
    },
  },
  {
    key: "aiAndDeepfakeImageCheck",
    name: "AIANDDEEPFAKEUIMAGECHECK",
    category: "kyc",
    url: "image/ai_deepfake_check",
    params: {
      file: "image",
    },
  },
  {
    key: "deepfakeImageCheck",
    name: "DEEPFAKEIMAGECHECK",
    category: "kyc",
    url: "image/deepfake_check",
    params: {
      file: "image",
    },
  },
  {
    key: "aiImageCheck",
    name: "AIIMAGECHECK",
    category: "kyc",
    url: "image/ai_image_check",
    params: {
      file: "image",
    },
  },
  {
    key: "imageBlurCheck",
    name: "IMAGEBLURCHECK",
    category: "kyc",
    url: "image/blur_Check",
    params: {
      file: "image",
    },
  },

  // risk and due diligence
  {
    key: "courtRecordsCheck",
    name: "COURTRECORDSCHECK",
    category: "kyc",
    url: "diligence/court/record",
    params: { address: "", name: "" },
  },
  {
    key: "domainVerification",
    name: "DOMAINVERIFICATION",
    category: "kyc",
    url: "diligence/domain/verify",
    params: { domain: "", emailAddress: "" },
  },
  {
    key: "profileAdvance",
    name: "PROFILEADVANCE",
    category: "kyc",
    url: "diligence/advance/profile",
    params: { mobileNumber: "" },
  },

  // 🔁 Recharge APIs
  {
    key: "plans",
    name: "PLANS",
    category: "recharge",
    url: "Recharge/Plans",
    params: { operatorcode: "", cricle: "" },
  },
  {
    key: "oldPlans",
    name: "OLDPLANS",
    category: "recharge",
    url: "Recharge/Plans",
    params: { operatorcode: "", cricle: "" },
  },
  {
    key: "recharge",
    name: "RECHARGE",
    category: "recharge",
    url: "Recharge/RechargeURL",
    params: {
      mobileNumber: "",
      geoCode: "",
      actualAmount: "",
      spKey: "",
      Pincode: "",
    },
  },
  {
    key: "offers",
    name: "OFFERS",
    category: "recharge",
    url: "Recharge/OffersPlans",
    params: {
      operator_code: "",
      mobile_no: "",
    },
  },
  {
    key: "operators",
    name: "OPERATORS",
    category: "recharge",
    url: "Recharge/OffersPlans",
    params: {
      operator_code: "",
      mobile_no: "",
    },
  },
];

const baseUrl = [
  apiList.reduce((acc, api) => {
    const base = BASE_URL_BY_CATEGORY[api.category];

    acc[api.key] = [
      {
        link: `${base}${api.url}`,
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
    const base = BASE_URL_BY_CATEGORY[api.category];
    const fullUrl = `${base}${api.url}`;

    let mixedParams;
    if (api?.category?.toLowerCase() == "all") {
      mixedParams = {};
    } else {
      mixedParams = {
        ...api.params,
      };
    }

    const codeObj = generateCode(fullUrl, mixedParams);

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
    message: { message: "Not Found / Invalid", httpCode: 404 },
  },
  {
    statusCode: 500,
    message: { message: "Internal Server Error", httpCode: 500 },
  },
];

const commonApiExample = {
  success: true,
  message: "Valid",
  httpCode: 200,
};

const apiExamples = [
  // pan services
  // pan verification
  {
    name: "PAN",
    examples: [
      {
        statusCode: 200,
        message: {
          ...commonApiExample,
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
  // pan director
  {
    name: "PAN_DIRECTOR",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            din: "ABCDEXXXXXXXX",
            name: "RAM",
          },
        },
      },
    ],
  },
  // pan to gst
  {
    name: "PTG",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            gstin: "ABCDXXXXXXXX",
            authStatus: "",
            stateCd: "",
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

  // other services
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

  // banking services
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

  // aadhaar services
  // aadhaar initiate
  {
    name: "AVI",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "DigiLocker link generate successfully.",
          transId: "TS-1766728568969",
          ts_trans_id: "PX-PBJ-340999",
          link: "https://www.truthscreen.com/eaadhaarDigilocker/dgl_auth_validate/MzY5MzAwMw==",
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
            success: true,
            message: "Aadhaar retrieved and verified successfully",
            data: {
              status: 1,
              msg: "Digilocker status API",
              data: {
                "DV-ABC-123456": {
                  final_status: "Completed",
                  msg: [
                    {
                      doc_type: "ADHAR",
                      file_type: "application/xml",
                      doc_name: "Aadhaar Card",
                      doc_issuer: "UIDAI",
                      s3_file_url:
                        "https://dummy-bucket.s3.ap-south-1.amazonaws.com/digilocker/sample/AadhaarCard.xml",
                      data: {
                        name: "Ravi Kumar",
                        "Father Name": "C/O Suresh Kumar",
                        dob: "01-01-1995",
                        aadhar_number: "xxxxxxxx1234",
                        gender: "M",
                        address: {
                          house: "12-34-567",
                          loc: "Green Park",
                          vtc: "Andheri East",
                          lm: "Near City Mall",
                          dist: "Mumbai Suburban",
                          state: "Maharashtra",
                          country: "India",
                          pc: "400069",
                        },
                        co: "C/O Suresh Kumar",
                        photo: "BASE64_ENCODED_IMAGE_DATA_PLACEHOLDER",
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    ],
  },
  {
    name: "DAV",
    examples: [
      {
        statusCode: 200,
        message: {
          ...commonApiExample,
          data: {
            registered: true,
            digilockerid: "123e4567-e89b-12d3-a456-426655XXXXXX",
          },
        },
      },
    ],
  },

  // employment services
  // basic uan verification
  {
    name: "BUV",
    examples: [
      {
        statusCode: 200,
        message: {
          ...commonApiExample,
          data: {
            uan: "105678912345",
            result: [
              {
                DateOfExitEpf: "2026-03-15",
                Doj: "2024-07-10",
                "Establishment Name": "BLUEWAVE TECHNOLOGIES PRIVATE LIMITED",
                MemberId: "APSID35984520000020456",
                "father or Husband Name": "RAMESH KUMAR",
                name: "ANANYA SINGH",
                uan: "105678912345",
              },
            ],
          },
        },
      },
    ],
  },
  // dual employment check
  {
    name: "DEC",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            message: `OTP sent to 91XXXXXX78`,
            success: `Otp sent to Your Mobile Number 91XXXXXX78`,
          },
        },
      },
    ],
  },

  // contact and communication services
  // mobile otp genration
  {
    name: "MOG",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            message: `OTP sent to 91XXXXXX78`,
            success: `Otp sent to Your Mobile Number 91XXXXXX78`,
          },
        },
      },
    ],
  },
  // mobile otp verification
  {
    name: "MOV",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            message: "Mobile Number 91XXXXXX78 is Verified with OTP 23XX",
          },
        },
      },
    ],
  },
  // mobile to pan
  {
    name: "MTP",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            address: [
              {
                city: "Chirala",
                country_code: "IN",
                first_line_of_address: "H.NO 2-45, Main Road, Ram Nagar",
                postal_code: "523157",
                reported_date: "2024-06-12",
                second_line_of_address: "Near ZP High School",
                state: "Andhra Pradesh",
                third_line_of_address: "Prakasam District",
              },
              {
                city: "Ongole",
                country_code: "IN",
                first_line_of_address: "Plot No 18, Sai Colony",
                postal_code: "523001",
                reported_date: "2023-11-08",
                second_line_of_address: "Beside RTC Bus Stand",
                state: "Andhra Pradesh",
                third_line_of_address: "Ongole Urban",
              },
              {
                city: "Guntur",
                country_code: "IN",
                first_line_of_address: "3-21/5, Lakshmipuram",
                postal_code: "522007",
                reported_date: "2022-09-15",
                second_line_of_address: "Near Kothapet Market",
                state: "Andhra Pradesh",
                third_line_of_address: "Guntur East",
              },
            ],
            age: "28",
            alternate_emails: [
              "test.user.alt1@example.com",
              "test.user.alt2@example.com",
            ],
            alternate_mobile_numbers: ["+91-9876543210", "+91-9123456780"],
            dob: "10-03-1998",
            email: "test.user@example.com",
            gender: "Male",
            name: "Ravi Teja Kumar",
            official_documents: {
              pan: "ABCDE1234F",
              aadhaar_last4: "6789",
            },
            pan: "ABCDE1234F",
            score: "742",
          },
        },
      },
    ],
  },
  // mobile to uan
  {
    name: "MTU",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            message: `OTP sent to 91XXXXXX78`,
            success: `Otp sent to Your Mobile Number 91XXXXXX78`,
          },
        },
      },
    ],
  },

  // business service
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
  // shop verification
  {
    name: "SHOP",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            registrationNumber: "registrationNumber",
            previousRegistrationCertificate: "NA",
            nameOfTheShop: "",
            address: "",
            act: "Shops and Establishments",
            dateOfCommencment: "",
            summary: {
              registrationNumber: "registrationNumber",
              name: "",
              status: "",
              dateOfCommencement: "",
              address: "",
              splitAddress: {
                district: [""],
                state: [["state", ""]],
                city: [""],
                pincode: "",
                country: [],
                addressLine: "",
              },
            },
            detailed: {
              registrationNumber: "registrationNumber",
              previousRegistrationCertificate: "NA",
              nameOfTheShop: "name of Shop",
              act: "",
            },
          },
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
          data: {
            CIN: "U12345DL2025PTC999999",
            COMPANY_NAME: "ABC TECHNOLOGIES PRIVATE LIMITED",
            DATE_OF_REGISTRATION: "01/15/2025",
            CITY: "New Delhi",
            DISTRICT: "New Delhi",
            STATE: "Delhi",
            COUNTRY: "India",
            PINCODE: "110001",
            ROC: "ROC Delhi",
            CATEGORY: "Company limited by shares",
            SUBCATEGORY: "Non-government company",
            CLASS: "Private",
            AUTHORIZED_CAPITAL: "500000",
            PAIDUP_CAPITAL: "500000",
            NUMBER_OF_MEMBERS: "",
            ACTIVITY_DESCRIPTION: "IT Services",
            REGISTERED_OFFICE_ADDRESS:
              "12/5, Tech Park Tower, 3rd Floor, Connaught Place, New Delhi, Delhi, India, 110001",
            GETDATA: 1,
            TIMESTAMP: "2025-01-02T02:08:40.000Z",
            COUNTRY_INC: "Indian",
            F_COMPANY_SHARE_CAP: "null",
            STATUS: "Active",
            TYPE_OF_OFFICE: "AABCD1234F",
            FOREIGN_DETAILS: null,
            FOREIGN_ADDRESS: null,
            ACTIVITY_CODE: "null",
            ADDRESS_OTHER_THAN_RO: "-",
            EMAIL: "info@abctech.com",
            LISTING_STATUS: "Unlisted",
            ACTIVE_COMPLIANCE: "",
            COMPANY_FILING_STATUS_16_17_18: "",
            SUSPENDED_AT_STOCK: "-",
            LAST_AGM: "09/30/2024",
            LAST_BALANCESHEET: "03/31/2024",
            CIRP: "",
            PARTNERS: "",
            PREVIOUS_FIRM: null,
            SOLVENCY_FILED: "null",
            COMPANY_STATUS: "Active",
            old_cin: null,
            PAN: "AABCD1234F",
            has_financials: 1,
            has_charges: 1,
            IS_DOCS_PROCESSED: 0,
            IS_AUDITOR_MOVED: 100,
            PRIORITY_1: 100,
            DOCS_PROCESS_ON: "2024-11-24T18:19:06.000Z",
            MULTIPLE_ADDRESS: [
              {
                city: "New Delhi",
                state: "Delhi",
                country: "India",
                district: "New Delhi",
                locality: "Connaught Place",
                officeType: "",
                postalCode: "110001",
                addressType: "Registered Address",
                activeStatus: "Y",
                migrationFlag: "",
                streetAddress: "Tech Park Tower, 3rd Floor",
                streetAddress2: "",
                streetAddress3: "",
                streetAddress4: "",
                establishmentDate: "",
              },
              {
                city: "Noida",
                state: "Uttar Pradesh",
                country: "India",
                district: "Gautam Buddha Nagar",
                locality: "Sector 62",
                officeType: "",
                postalCode: "201301",
                addressType: "Police Station Address",
                activeStatus: "Y",
                migrationFlag: "N",
                streetAddress: "IT Hub Complex",
                streetAddress2: "",
                streetAddress3: "",
                streetAddress4: "",
                establishmentDate: "",
              },
              {
                city: "Gurugram",
                state: "Haryana",
                country: "India",
                district: "Gurugram",
                locality: "Cyber City",
                officeType: "",
                postalCode: "122002",
                addressType: "Present Address",
                activeStatus: "Y",
                migrationFlag: "N",
                streetAddress: "DLF Phase 3, Building 14",
                streetAddress2: "",
                streetAddress3: "",
                streetAddress4: "",
                establishmentDate: "",
              },
            ],
            IS_ADDRESS_UPDATED: 1,
            STOCKS: null,
            WEBSITE: "https://www.abctech.com",
            LOGO: null,
            INDUSTRY: "Information Technology",
            COMPANY_AGE: "1 Year",
            MOBILE: "9876543210",
            SHOWN_TO_WEBSITE: 1,
            IS_PAN_SAVED: 0,
            IS_MASKED_EMAIL_DONE: 1,
            IS_CIN_DIN_MAP: 0,
            ANNUAL_RETURNS_3YRS: [
              { dataOfFilling: "10/10/2023", financialYear: "31-03-2023" },
              { dataOfFilling: "10/11/2022", financialYear: "31-03-2022" },
              { dataOfFilling: "10/10/2021", financialYear: "31-03-2021" },
            ],
            BALANCESHEET_3YRS: [
              { dataOfFilling: "09/27/2023", financialYear: "31-03-2023" },
              { dataOfFilling: "09/28/2022", financialYear: "31-03-2022" },
              { dataOfFilling: "09/25/2021", financialYear: "31-03-2021" },
            ],
            MOVED_TO_NEW_DB: 0,
            DIN_CONTACT_UPDATE: 0,
            IS_BASIC: 1,
            NEW_UPDATED_TIME: "2025-01-02T05:38:40.000Z",
            NICCode1: "62020",
            NICCode1Desc: "Computer consultancy and IT-related services",
            NICCode2: null,
            NICCode2Desc: null,
            NICCode3: null,
            NICCode3Desc: null,
          },
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

  // banking services
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

  // geo location
  // pincode geofencing
  {
    name: "PCG",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            District: "Agra",
            Pincode: "282003",
            "Post Office": "Agra Fort",
            State: "UTTAR PRADESH",
            Subdistrict: "Agra",
          },
        },
      },
    ],
  },
  // longitude latitude geofencing
  {
    name: "LLG",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            "Center Code": "156XXX",
            District: "Fatehpur",
            Pincode: "212XXX",
            "Population Group": "Rural Centre",
            "Post Office": "Kora Jahanabad",
            "Revenue Center": "Vijuri",
            State: "UTTAR PRADESH",
            Subdistrict: "Bindki",
            Tier: "Tier 6",
          },
        },
      },
    ],
  },
  // digipin to longitude latitude
  {
    name: "DTLL",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            address_components: [
              {
                long_name: "442301",
                short_name: "442301",
                types: ["postal_code"],
              },
              {
                long_name: "Hinganghat",
                short_name: "Hinganghat",
                types: ["locality", "political"],
              },
              {
                long_name: "Nagpur Division",
                short_name: "Nagpur Division",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "Maharashtra",
                short_name: "MH",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "India",
                short_name: "IN",
                types: ["country", "political"],
              },
            ],
            formatted_address: "Hinganghat, Maharashtra 442301, India",
            geometry: {
              location: {
                lat: 20.4968021,
                lng: 78.8835548,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 20.7838901,
                  lng: 79.1688539,
                },
                southwest: {
                  lat: 20.4292651,
                  lng: 78.717747,
                },
              },
            },
            place_id: "ChIJ3RL07yFv0zsRAAVdQejQCcA",
            types: ["postal_code"],
          },
        },
      },
    ],
  },
  // address to digipin
  {
    name: "ATD",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            address_components: [
              {
                long_name: "AltF GBP",
                short_name: "",
                types: [],
              },
              {
                long_name: "Tower D",
                short_name: "Tower D",
                types: ["subpremise"],
              },
              {
                long_name: "02",
                short_name: "02",
                types: ["street_number"],
              },
              {
                long_name: "Mehrauli-Gurgaon Road",
                short_name: "MG Road",
                types: ["route"],
              },
              {
                long_name: "Sikanderpur",
                short_name: "Sikanderpur",
                types: ["political", "sublocality", "sublocality_level_3"],
              },
              {
                long_name: "Sector 26",
                short_name: "Sector 26",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Gurugram",
                short_name: "Gurugram",
                types: ["locality", "political"],
              },
              {
                long_name: "Gurugram",
                short_name: "Gurugram",
                types: ["administrative_area_level_3", "political"],
              },
              {
                long_name: "Gurgaon Division",
                short_name: "Gurgaon Division",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "Haryana",
                short_name: "HR",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "India",
                short_name: "IN",
                types: ["country", "political"],
              },
              {
                long_name: "122002",
                short_name: "122002",
                types: ["postal_code"],
              },
            ],
            formatted_address:
              "AltF GBP, Tower D, 02, Mehrauli-Gurgaon Rd, Sikanderpur, Sector 26, Gurugram, Haryana 122002, India",
            geometry: {
              location: {
                lat: 28.4799517,
                lng: 77.1022117,
              },
              location_type: "ROOFTOP",
              viewport: {
                northeast: {
                  lat: 28.4813898302915,
                  lng: 77.1037876302915,
                },
                southwest: {
                  lat: 28.47869186970849,
                  lng: 77.10108966970849,
                },
              },
            },
            place_id: "ChIJD0SlHwAZDTkRKhrcgTMjBFI",
            types: ["establishment", "point_of_interest"],
            digipin: "39J-L28-99LM",
            score: "59.0%",
          },
        },
      },
    ],
  },
  // longitude latitude to digipin
  {
    name: "LLTD",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            address_components: [
              {
                long_name: "W6JG+87V",
                short_name: "W6JG+87V",
                types: ["plus_code"],
              },
              {
                long_name: "Jamui",
                short_name: "Jamui",
                types: ["locality", "political"],
              },
              {
                long_name: "Jamui",
                short_name: "Jamui",
                types: ["administrative_area_level_3", "political"],
              },
              {
                long_name: "Munger Division",
                short_name: "Munger Division",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "Bihar",
                short_name: "BR",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "India",
                short_name: "IN",
                types: ["country", "political"],
              },
              {
                long_name: "811307",
                short_name: "811307",
                types: ["postal_code"],
              },
            ],
            formatted_address: "W6JG+87V, Jamui, Bihar 811307, India",
            place_id: "ChIJz6e_eDcq8jkRS-n7CnxoRig",
            types: ["premise", "street_address"],
            digipin: "25F-C2M-P2P7",
          },
        },
      },
    ],
  },

  // vehicle services
  // driving license verify
  {
    name: "DLV",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            "Driving License Number": "APXXXX",
            "Owner's Name": "LOXXX",
            "Father's Name": "NA",
            "Date of Birth": "21-Nov-1990",
            Address: "NA",
            "Blood group": "NA",
            Gender: "NA",
            "RTO (Issued At)": "RTA RAJXXX",
            LicenseDetails: [
              {
                "License Type": "Non Transport",
                "Issue Date From": "NA",
                "Issue Date To": "25\/06\/2034",
              },
              {
                "License Type": "Transport",
                "Issue Date From": "NA",
                "Issue Date To": "00\/00\/0000",
              },
              {
                "License Type": "Hazardous",
                "Issue Date From": "NA",
                "Issue Date To": "NA",
              },
              {
                "License Type": "Hill",
                "Issue Date From": "NA",
                "Issue Date To": "NA",
              },
            ],
            CovDetails: [
              {
                "Vehicle Type": "LMVNT",
                "Vehicle Class": "NT",
                "COV Issue Date": "NA",
              },
              {
                "Vehicle Type": "MCWG",
                "Vehicle Class": "NT",
                "COV Issue Date": "NA",
              },
            ],
            State: "National Capital Territory Of Delhi",
            imgurl: "data:image/jpeg;base64",
          },
        },
      },
    ],
  },
  // stolen vehicle verification
  {
    name: "SVV",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            "Phone Number": "9876543210",
            Status: "STOLEN/THEFT",
            "Chasis Number": "MH123456789012345",
            Complaint: "John Doe s/o Richard Doe",
            "Report Date & Time": "01/01/2023 10:15:00 AM",
            "Police Station": "POLICE STATION 12",
            District: "DELHI",
            "Fir Date": "01/01/2023",
            "Vehicle Color": "BLACK",
            "Control Room": "O 01",
            "Vehicle Make": "2W - HONDA CB500",
            State: "DELHI",
            "Registration Number": "DL01AB1234",
            "Engine Number": "EN123456789012345",
            Address: "C/o John Transport, Plot No. 10, Industrial Area, Delhi",
            "Vehicle Model": "CB500X 2020",
            "Stolen From":
              "In front of John Transport, Plot No. 10, Industrial Area, Delhi",
            "Vehicle Type": "TWO WHEELER",
            "Fir number": "00123",
          },
        },
      },
    ],
  },
  // challan via rc
  {
    name: "CVR",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          response: {
            "Accused Father Name": "LALIT KUMAR",
            "Accused Name": "SUNIL KUMAR",
            Amount: 1000,
            "Challan Date": "2021-01-09 13:29:01",
            "Challan Number": "BR8631210109132901",
            "Challan Place": "JAUMUI",
            "Challan Status": "Disposed",
            "DL No/Vehicle Number": "BR46J2671",
            "Offense Details": ["Without helmet"],
            RTO: "",
            "Sl. No.": 1,
            State: "BR",
          },
        },
      },
    ],
  },

  // face and ai services
  // blurriness
  {
    name: "IB",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          httpCode: 200,
          data: {
            result: "Clear",
          },
        },
      },
    ],
  },
  // ai image check
  {
    name: "AIC",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          httpCode: 200,
          data: {
            ai_generated: 0.01,
          },
        },
      },
    ],
  },
  // deepfake image check
  {
    name: "DIC",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          httpCode: 200,
          data: {
            deepfake: 0.01,
          },
        },
      },
    ],
  },
  // ai and deepfake image check
  {
    name: "ADIC",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          httpCode: 200,
          data: {
            ai_generated: 0.01,
            deepfake: 0.01,
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

  // Recharge
  // fetching operators
  {
    name: "FO",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          data: {
            ERROR: "0",
            STATUS: "1",
            Mobile: "918688571181",
            Operator: "Reliance Jio Infocomm Limited",
            OpCode: "11",
            Circle: "Andhra Pradesh",
            CircleCode: "49",
            Message: "Successfully",
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
          data: {
            ERROR: "0",
            STATUS: "0",
            Operator: "RELIANCE JIO",
            Circle: "AP",
            RDATA: {
              "Popular Plans": [],
            },
            MESSAGE: "Operator Plan Successfully",
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
          data: {
            ERROR: "11",
            STATUS: "3",
            MOBILENO: "",
            RDATA: null,
            MESSAGE: "Roffer Check service only availble in Airtel and VI.",
          },
        },
      },
    ],
  },
  // fetching old plans
  {
    name: "FOP",
    examples: [
      {
        statusCode: 200,
        message: {
          success: true,
          message: "Valid",
          data: {
            ERROR: "0",
            STATUS: "0",
            Operator: "RELIANCE JIO",
            Circle: "AP",
            RDATA: {
              "Popular Plans": [],
            },
            MESSAGE: "Operator Plan Successfully",
          },
        },
      },
    ],
  },

  // bbps
  // biller info
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
                  billerDescription:
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                  billerInputParams: {
                    paramInfo: [
                      {
                        regEx: "^[0-9]{4,4}$",
                        dataType: "NUMERIC",
                        maxLength: "4",
                        minLength: "4",
                        paramName: "Last 4 digit of primary credit card number",
                        isOptional: "false",
                        visibility: "true",
                      },
                      {
                        regEx: "^[6-9][0-9]{9}$",
                        dataType: "NUMERIC",
                        maxLength: "10",
                        minLength: "10",
                        paramName: "Mobile Number",
                        isOptional: "false",
                        visibility: "true",
                      },
                    ],
                  },
                  billerPaymentModes: {
                    paymentModeInfo: [
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentMode: "AEPS",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentMode: "Account Transfer",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentMode: "Cash",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentMode: "Debit Card",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentMode: "Internet Banking",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentMode: "UPI",
                      },
                    ],
                  },
                  billerResponseType: "SINGLE",
                  interchangeFeeCCF1: {
                    feeCode: "XXXX",
                    flatFee: "X",
                    feeMaxAmt: "XXXXXXXX",
                    feeMinAmt: "X",
                    percentFee: "X.XX",
                    feeDirection: "C2B",
                  },
                  planAdditionalInfo: "",
                  planMdmRequirement: "NOT_SUPPORTED",
                  billerAmountOptions: "XXXXXXXXXXXXXXXX",
                  billerAdditionalInfo: {
                    paramInfo: [
                      { paramName: "Minimum Amount Due" },
                      { paramName: "Maximum Permissible Amount" },
                    ],
                  },
                  supportPendingStatus: "Yes",
                  billerFetchRequiremet: "MANDATORY",
                  billerPaymentChannels: {
                    paymentChannelInfo: [
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "ATM",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "AGT",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "BNKBRNCH",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "BSC",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "INT",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "INTB",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "KIOSK",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "MPOS",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "MOB",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "MOBB",
                      },
                      {
                        maxAmount: "XXXXXXXXXXX",
                        minAmount: "XXX",
                        paymentChannelName: "POS",
                      },
                    ],
                  },
                  billerPaymentExactness: "",
                  billerPlanResponseParams: "",
                  billerAdditionalInfoPayment: "",
                  billerSupportBillValidation: "NOT_SUPPORTED",
                  rechargeAmountInValidationRequest: "",
                },
                responseCode: "000",
              },
            },
          },
        },
      },
    ],
  },
  // bill fetch
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
                      paramValue: "XXXX",
                    },
                    {
                      paramName: "Mobile Number",
                      paramValue: "XXXXXXXXXX",
                    },
                  ],
                },
                billerResponse: {
                  billAmount: "XXXXXX",
                  billDate: "XXXX-XX-XX",
                  customerName: "XXXXXXXX XXXXXXX",
                  dueDate: "XXXX-XX-XX",
                },
                additionalInfo: {
                  info: [
                    {
                      infoName: "Minimum Amount Due",
                      infoValue: "XXXXX.XX",
                    },
                    {
                      infoName: "Maximum Permissible Amount",
                      infoValue: "XXXXX.XX",
                    },
                  ],
                },
              },
            },
          },
        },
      },
    ],
  },
  // bill validation
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
                approvalRefNo: "XXXXXXXXXXXXXXXX",
              },
            },
            requestId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          },
        },
      },
    ],
  },
  // bill pay request
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
                approvalRefNumber:
                  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                txnRespType: "FORWARD TYPE RESPONSE",

                inputParams: {
                  input: [
                    {
                      paramName: "Last 4 digit of primary credit card number",
                      paramValue: "XXXX",
                    },
                    {
                      paramName: "Mobile Number",
                      paramValue: "XXXXXXXXXX",
                    },
                  ],
                },

                CustConvFee: "X",
                RespAmount: "XXX",
                RespBillDate: "XXXX-XX-XX",
                RespCustomerName: "XXXXXXXX XXXXXXX",
                RespDueDate: "XXXX-XX-XX",
              },
            },
          },
        },
      },
    ],
  },
  // bill quick pay
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
                      paramValue: "XXXXXXXX",
                    },
                    {
                      paramName: "Mobile Number",
                      paramValue: "XXXXXXXXXX",
                    },
                  ],
                },

                CustConvFee: "X",
                RespAmount: "XXXXX",
                RespBillDate: "XXXX-XX-XX",
                RespBillNumber: "NA",
                RespBillPeriod: "XXXX",
                RespCustomerName: "XXXX XXXXX",
                RespDueDate: "XXXX-XX-XX",
              },
            },
          },
        },
      },
    ],
  },
  // Instant pay
  {
    name: "InstantPay",
    examples: [
      {
        // statusCode: "TXN",
        statusCode: 200,
        actcode: null,
        status: "Transaction Successful",
        data: {
          externalRef: "XXXXXXXXXXXX",
          poolReferenceId: "XXXXXXXXXXXX",
          txnValue: "4.00",
          txnReferenceId: "XXXXXXXX",
          pool: {
            account: "7428XXXXXX42",
            openingBal: "3697.27",
            mode: "DR",
            amount: "9.90",
            closingBal: "3687.37",
          },
          payer: {
            account: "7428XXXXXX42",
            name: "Sample Store",
          },
          payee: {
            account: "3798XXXXXXXX2004",
            name: "Instantpay India Ltd",
          },
        },
        timestamp: "2022-03-15 18:08:13",
        ipay_uuid: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        orderid: "XXXXXXXXXXXX",
        environment: "LIVE",
        internalCode: null,
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
