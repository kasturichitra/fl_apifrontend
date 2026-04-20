export const BaseFields = [
  {
    title: "httpCode",
    type: "number",
    subTitle: "HTTP status code of the response",
  },
  {
    title: "message",
    type: "string",
    subTitle: "A descriptive message about the result of the API call.",
  },
  {
    title: "success",
    type: "boolean",
    subTitle: "Whether the request was successful (true) or not (false).",
  },
];

// access token
export const accessTokenDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "secret_token",
              type: "string",
              subTitle: "JWT authentication token",
            },
            {
              title: "environment",
              type: "string",
              subTitle: "Execution environment (LIVE/TEST)",
            },
          ],
        },
      ],
    },
  },
];

// pan services
export const PanDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "PAN",
              type: "string",
              subTitle: "The Requested Pan Number",
            },
            {
              title: "Name",
              type: "string",
              subTitle: "The Beneficiary Name of given Pan Number",
            },
            {
              title: "PAN_Holder_Type",
              type: "string",
              subTitle: "The Pan type of the given Pan Number",
            },
            {
              title: "PAN_Status",
              type: "string",
              subTitle: "The current Pan status",
            },
          ],
        },
      ],
    },
  },
];
export const PanToMaskedAadhaarDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "code",
              type: "number",
              subTitle: "The success code",
            },
            {
              title: "message",
              type: "string",
              subTitle: "The success message",
            },
            {
              title: "result",
              type: "object",
              objectDetails: [
                {
                  title: "aadhaar",
                  type: "string",
                  subTitle: "The Requested Masked Aadhaar Number",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const PanToGstDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "gstin",
              type: "string",
              subTitle: "GST Identification Number",
            },
            {
              title: "authStatus",
              type: "string",
              subTitle: "GST authentication status",
            },
            {
              title: "stateCd",
              type: "string",
              subTitle: "State code of GST registration",
            },
          ],
        },
      ],
    },
  },
];
export const PanToGst_inDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "gstin",
              type: "string",
              subTitle: "GST Identification Number",
            },
            {
              title: "authStatus",
              type: "string",
              subTitle: "GST authentication status",
            },
            {
              title: "stateCd",
              type: "string",
              subTitle: "State code",
            },
            {
              title: "gstinDetails",
              type: "object",
              objectDetails: [
                {
                  title: "GSTIN/ UIN",
                  type: "string",
                  subTitle: "GSTIN/UIN number",
                },
                {
                  title: "Legal Name of Business",
                  type: "string",
                  subTitle: "Registered legal business name",
                },
                {
                  title: "Centre Jurisdiction",
                  type: "string",
                  subTitle: "Central tax jurisdiction",
                },
                {
                  title: "State Jurisdiction",
                  type: "string",
                  subTitle: "State tax jurisdiction",
                },
                {
                  title: "Date of registration",
                  type: "string",
                  subTitle: "GST registration date",
                },
                {
                  title: "Constitution of Business",
                  type: "string",
                  subTitle: "Type of business entity",
                },
                {
                  title: "Taxpayer Type",
                  type: "string",
                  subTitle: "Type of taxpayer",
                },
                {
                  title: "GSTIN / UIN Status",
                  type: "string",
                  subTitle: "Current GST status",
                },
                {
                  title: "Date of Cancellation",
                  type: "string",
                  subTitle: "Cancellation date if any",
                },
                {
                  title: "NatureOfBusinessActivities",
                  type: "string",
                  subTitle: "Business activities description",
                },
                {
                  title: "proprietor_name",
                  type: "string",
                  subTitle: "Names of proprietors",
                },
                {
                  title: "Gross Income",
                  type: "string",
                  subTitle: "Gross income details",
                },
                {
                  title: "AggreTurnOver",
                  type: "string",
                  subTitle: "Aggregate turnover slab",
                },
                {
                  title: "field_visit_conducted",
                  type: "string",
                  subTitle: "Whether field visit conducted",
                },
                {
                  title: "company_name",
                  type: "string",
                  subTitle: "Company name",
                },
                {
                  title: "division",
                  type: "string",
                  subTitle: "Tax division",
                },
                {
                  title: "segment",
                  type: "string",
                  subTitle: "Business segment",
                },
                {
                  title: "sub_segment",
                  type: "string",
                  subTitle: "Business sub-segment",
                },
                {
                  title: "placeOfBusinessData",
                  type: "array",
                  objectDetails: [
                    {
                      title: "type",
                      type: "string",
                      subTitle: "Business place type (Principal/Additional)",
                    },
                    {
                      title: "nature_of_business_activities",
                      type: "string",
                      subTitle: "Activities at this location",
                    },
                    {
                      title: "address",
                      type: "string",
                      subTitle: "Full address",
                    },
                    {
                      title: "contact_details",
                      type: "string",
                      subTitle: "Contact information",
                    },
                    {
                      title: "address1",
                      type: "string",
                      subTitle: "Address line 1",
                    },
                    {
                      title: "address2",
                      type: "string",
                      subTitle: "Address line 2",
                    },
                    {
                      title: "city",
                      type: "string",
                      subTitle: "City",
                    },
                    {
                      title: "state",
                      type: "string",
                      subTitle: "State",
                    },
                    {
                      title: "pin",
                      type: "string",
                      subTitle: "PIN code",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const PanToFatherNameDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",

          objectDetails: [
            {
              title: "data",
              type: "object",
              objectDetails: [
                {
                  title: "additional_check",
                  type: "array",
                  subTitle: "Extra verification checks",
                },
                {
                  title: "category",
                  type: "string",
                  subTitle: "Entity category (individual/company)",
                },
                {
                  title: "client_id",
                  type: "string",
                  subTitle: "Client reference ID",
                },
                {
                  title: "dob",
                  type: "string",
                  subTitle: "Date of birth",
                },
                {
                  title: "dob_check",
                  type: "boolean",
                  subTitle: "DOB match flag",
                },
                {
                  title: "dob_verified",
                  type: "boolean",
                  subTitle: "DOB verification status",
                },
                {
                  title: "father_name",
                  type: "string",
                  subTitle: "Father's name",
                },
                {
                  title: "full_name",
                  type: "string",
                  subTitle: "Full PAN holder name",
                },
                {
                  title: "less_info",
                  type: "boolean",
                  subTitle: "Indicates reduced response info",
                },
                {
                  title: "pan_number",
                  type: "string",
                  subTitle: "PAN number from data object",
                },
              ],
            },
            {
              title: "message",
              type: "string",
              subTitle: "Response message (e.g. ACTIVE)",
            },
            {
              title: "message_code",
              type: "string",
              subTitle: "API message code",
            },
            {
              title: "status_code",
              type: "number",
              subTitle: "HTTP status code",
            },
            {
              title: "success",
              type: "boolean",
              subTitle: "Request success flag",
            },
            {
              title: "PAN",
              type: "string",
              subTitle: "PAN number (top-level duplicate field)",
            },
          ],
        },
      ],
    },
  },
];
export const PanTanVerifyDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "code",
              type: "number",
              subTitle: "The success code",
            },
            {
              title: "message",
              type: "string",
              subTitle: "The success message",
            },
            {
              title: "result",
              type: "object",
              objectDetails: [
                {
                  title: "aadhaar",
                  type: "string",
                  subTitle: "The Requested Masked Aadhaar Number",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const PanNameMatchDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "LastUpdate",
              type: "string",
              subTitle: "Last update date of PAN record",
            },
            {
              title: "Name",
              type: "string",
              subTitle: "Name as per PAN records",
            },
            {
              title: "STATUS",
              type: "string",
              subTitle: "PAN status (Active / Inactive etc.)",
            },
            {
              title: "StatusDescription",
              type: "string",
              subTitle: "Detailed PAN status description",
            },
            {
              title: "panNumber",
              type: "string",
              subTitle: "PAN number",
            },
            {
              title: "name_match_score",
              type: "object",
              objectDetails: [
                {
                  title: "score",
                  type: "string",
                  subTitle: "Name match percentage score",
                },
                {
                  title: "status",
                  type: "number",
                  subTitle: "Match status flag (0/1)",
                },
                {
                  title: "str1",
                  type: "string",
                  subTitle: "Name from PAN record",
                },
                {
                  title: "str2",
                  type: "string",
                  subTitle: "Input name used for matching",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const PanNameDObDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "Status of PAN",
              type: "string",
              subTitle: "PAN current status (e.g., Active / Inactive)",
            },
            {
              title: "Given Name matches with the ITD Records",
              type: "string",
              subTitle:
                "Whether the provided name matches ITD records (Yes/No)",
            },
            {
              title: "Given DOB matches with the ITD Records",
              type: "string",
              subTitle: "Whether the provided DOB matches ITD records (Yes/No)",
            },
          ],
        },
      ],
    },
  },
];
export const PanDirectorDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "din",
              type: "string",
              subTitle: "Director Identification Number",
            },
            {
              title: "name",
              type: "string",
              subTitle: "Name of the director",
            },
          ],
        },
      ],
    },
  },
];

// aadhaar services
export const AadhaarIntiateDynamic = [
  {
    status: 200,
    summary: "DigiLocker link generated successfully",
    body: {
      type: "object",
      fields: [
        {
          title: "success",
          subTitle:
            "Indicates whether the DigiLocker link generation was successful",
          type: "boolean",
        },
        {
          title: "message",
          subTitle:
            "Response message describing the result of the DigiLocker link request",
          type: "string",
        },
        {
          title: "transId",
          subTitle:
            "Unique transaction ID generated for this DigiLocker request",
          type: "string",
        },
        {
          title: "ts_trans_id",
          subTitle: "TruthScreen system transaction reference ID",
          type: "string",
        },
        {
          title: "link",
          subTitle:
            "Generated DigiLocker authentication URL for Aadhaar verification",
          type: "string",
        },
      ],
    },
  },
];
export const AadhaarStatusDynamic = [
  {
    status: 200,
    summary: "DigiLocker link generated successfully",
    body: {
      type: "object",
      fields: [
        {
          title: "success",
          subTitle:
            "Indicates whether the DigiLocker link generation was successful",
          type: "boolean",
        },
        {
          title: "message",
          subTitle:
            "Response message describing the result of the DigiLocker link request",
          type: "string",
        },
        {
          title: "transId",
          subTitle:
            "Unique transaction ID generated for this DigiLocker request",
          type: "string",
        },
        {
          title: "ts_trans_id",
          subTitle: "TruthScreen system transaction reference ID",
          type: "string",
        },
        {
          title: "link",
          subTitle:
            "Generated DigiLocker authentication URL for Aadhaar verification",
          type: "string",
        },
      ],
    },
  },
];
export const DigilockerVerifyDynamic = [
  {
    status: 200,
    summary: "DigiLocker link generated successfully",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "registered",
              type: "boolean",
              subTitle: "registeration completed or not",
            },
            {
              title: "digilockerid",
              type: "string",
              subTitle: "digilocker id that was assigned to the account",
            },
          ],
        },
      ],
    },
  },
];
export const AadhaarToMaskedPanDynamic = [
  {
    status: 200,
    summary: "DigiLocker link generated successfully",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "result",
              type: "object",
              objectDetails: [
                {
                  title: "pan",
                  type: "string",
                  subTitle: "Masked pan of the given aadhaar number",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

// face and ai services
export const ImageBlurrinessDynamic = [
  {
    status: 200,
    summary: "Returns image blurriness result",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "result",
              type: "string",
              subTitle: "Blurriness status of the image (e.g., Clear, Blurry)",
            },
          ],
        },
      ],
    },
  },
];
export const AiImageCheckDynamic = [
  {
    status: 200,
    summary: "Returns image blurriness result",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "ai_generated",
              type: "string",
              subTitle: "The score of ai check",
            },
          ],
        },
      ],
    },
  },
];
export const DeepfakeImageCheckDynamic = [
  {
    status: 200,
    summary: "Returns image blurriness result",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "deepfake",
              type: "string",
              subTitle: "The score of deepfake check",
            },
          ],
        },
      ],
    },
  },
];
export const AiAndDeepfakeCheckDynamic = [
  {
    status: 200,
    summary: "Returns image blurriness result",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "ai_generated",
              type: "string",
              subTitle: "The score of ai check",
            },
            {
              title: "deepfake",
              type: "string",
              subTitle: "The score of deepfake check",
            },
          ],
        },
      ],
    },
  },
];

// contact and communication services
export const MobileOtpGenrateDynamic = [
  {
    status: 200,
    summary: "OTP validation response",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          subTitle: "Detailed OTP response data",
          type: "object",
          objectDetails: [
            {
              title: "message",
              subTitle: "OTP delivery message",
              type: "string",
            },
            {
              title: "success",
              subTitle: "OTP delivery status message",
              type: "string",
            },
          ],
        },
      ],
    },
  },
];
export const MobileOtpValidateDynamic = [
  {
    status: 200,
    summary: "OTP validation response",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          subTitle: "Detailed OTP verification response",
          type: "object",
          objectDetails: [
            {
              title: "message",
              subTitle: "OTP verification confirmation message",
              type: "string",
            },
          ],
        },
      ],
    },
  },
];
export const MobileToPanValidateDynamic = [
  {
    status: 200,
    summary: "OTP validation and user details response",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          subTitle: "Wrapper for detailed response data",
          type: "object",
          objectDetails: [
            {
              title: "address",
              subTitle: "List of user addresses",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "city",
                    subTitle: "City name",
                    type: "string",
                  },
                  {
                    title: "country_code",
                    subTitle: "Country code",
                    type: "string",
                  },
                  {
                    title: "first_line_of_address",
                    subTitle: "Primary address line",
                    type: "string",
                  },
                  {
                    title: "postal_code",
                    subTitle: "Postal/ZIP code",
                    type: "string",
                  },
                  {
                    title: "reported_date",
                    subTitle: "Date when address was reported",
                    type: "string",
                  },
                  {
                    title: "second_line_of_address",
                    subTitle: "Secondary address details",
                    type: "string",
                  },
                  {
                    title: "state",
                    subTitle: "State name",
                    type: "string",
                  },
                  {
                    title: "third_line_of_address",
                    subTitle: "Additional address details",
                    type: "string",
                  },
                ],
              },
            },
            {
              title: "age",
              subTitle: "User age",
              type: "string",
            },
            {
              title: "alternate_emails",
              subTitle: "List of alternate email addresses",
              type: "array",
              items: {
                type: "string",
              },
            },
            {
              title: "alternate_mobile_numbers",
              subTitle: "List of alternate mobile numbers",
              type: "array",
              items: {
                type: "string",
              },
            },
            {
              title: "dob",
              subTitle: "Date of birth",
              type: "string",
            },
            {
              title: "email",
              subTitle: "Primary email address",
              type: "string",
            },
            {
              title: "gender",
              subTitle: "Gender of the user",
              type: "string",
            },
            {
              title: "name",
              subTitle: "Full name of the user",
              type: "string",
            },
            {
              title: "official_documents",
              subTitle: "Official identification details",
              type: "object",
              fields: [
                {
                  title: "pan",
                  subTitle: "PAN number",
                  type: "string",
                },
                {
                  title: "aadhaar_last4",
                  subTitle: "Last 4 digits of Aadhaar",
                  type: "string",
                },
              ],
            },
            {
              title: "pan",
              subtitle: "PAN number",
              type: "string",
            },
            {
              title: "score",
              subtitle: "User credit/verification score",
              type: "string",
            },
          ],
        },
      ],
    },
  },
];

// face and ai sevices
export const FaceDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        {
          title: "access_token",
          type: "string",
          required: true,
        },
        {
          title: "expires_in",
          type: "integer",
          required: true,
        },
        {
          title: "token_type",
          type: "string",
          required: true,
        },
      ],
    },
  },
];

// employment services
export const BasicUanVerifyDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          subTitle: "basic uan verify Details",
          type: "object",
          objectDetails: [
            {
              title: "uan",
              subTitle: "uan number that was tested",
              type: "string",
            },
            {
              title: "result",
              subTitle: "basic uan verify Details",
              type: "object",
              objectDetails: [
                {
                  title: "DateOfExitEpf",
                  type: "string",
                  subtitle: "Date when the member exited the EPF scheme",
                },
                {
                  title: "Doj",
                  type: "string",
                  subtitle: "Date of joining the organization",
                },
                {
                  title: "Establishment Name",
                  type: "string",
                  subtitle: "Name of the employer or company",
                },
                {
                  title: "MemberId",
                  type: "string",
                  subtitle: "Unique EPF member identification number",
                },
                {
                  title: "father or Husband Name",
                  type: "string",
                  subtitle: "Name of the member's father or husband",
                },
                {
                  title: "name",
                  type: "string",
                  subtitle: "Full name of the EPF member",
                },
                {
                  title: "uan",
                  type: "string",
                  subtitle: "Universal Account Number assigned to the member",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

// business services
export const CinDynamic = [
  {
    status: 200,
    summary: "Returns CIN Registration Details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          subTitle: "CIN Registration Details",
          type: "object",
          objectDetails: [
            {
              title: "CIN",
              subTitle: "Corporate Identification Number",
              type: "string",
              value: "U12345DL2025PTC999999",
            },
            {
              title: "Company Name",
              subTitle: "Registered Name of the Company",
              type: "string",
              value: "ABC TECHNOLOGIES PRIVATE LIMITED",
            },
            {
              title: "Date of Registration",
              subTitle: "Date when company was registered",
              type: "string",
              value: "01/15/2025",
            },
            {
              title: "Status",
              subTitle: "Current status of the company",
              type: "string",
              value: "Active",
            },
            {
              title: "PAN",
              subTitle: "Permanent Account Number of the company",
              type: "string",
              value: "AABCD1234F",
            },
            {
              title: "Authorized Capital",
              subTitle: "Authorized share capital of the company",
              type: "string",
              value: "500000",
            },
            {
              title: "Paidup Capital",
              subTitle: "Paid-up capital of the company",
              type: "string",
              value: "500000",
            },
            {
              title: "Email",
              subTitle: "Registered company email",
              type: "string",
              value: "info@abctech.com",
            },
            {
              title: "Mobile",
              subTitle: "Registered company mobile number",
              type: "string",
              value: "9876543210",
            },
            {
              title: "Multiple Addresses",
              subTitle: "Registered, Police Station, and Present Addresses",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "City",
                    subTitle: "City of the address",
                    type: "string",
                  },
                  {
                    title: "State",
                    subTitle: "State of the address",
                    type: "string",
                  },
                  {
                    title: "Country",
                    subTitle: "Country of the address",
                    type: "string",
                  },
                  {
                    title: "District",
                    subTitle: "District of the address",
                    type: "string",
                  },
                  {
                    title: "Locality",
                    subTitle: "Local area or locality",
                    type: "string",
                  },
                  {
                    title: "Postal Code",
                    subTitle: "PIN or ZIP code",
                    type: "string",
                  },
                  {
                    title: "Address Type",
                    subTitle: "Type of address",
                    type: "string",
                  },
                  {
                    title: "Street Address",
                    subTitle: "Street or building address",
                    type: "string",
                  },
                ],
              },
              value: [
                {
                  City: "New Delhi",
                  State: "Delhi",
                  Country: "India",
                  District: "New Delhi",
                  Locality: "Connaught Place",
                  "Postal Code": "110001",
                  "Address Type": "Registered Address",
                  "Street Address": "Tech Park Tower, 3rd Floor",
                },
                {
                  City: "Noida",
                  State: "Uttar Pradesh",
                  Country: "India",
                  District: "Gautam Buddha Nagar",
                  Locality: "Sector 62",
                  "Postal Code": "201301",
                  "Address Type": "Police Station Address",
                  "Street Address": "IT Hub Complex",
                },
                {
                  City: "Gurugram",
                  State: "Haryana",
                  Country: "India",
                  District: "Gurugram",
                  Locality: "Cyber City",
                  "Postal Code": "122002",
                  "Address Type": "Present Address",
                  "Street Address": "DLF Phase 3, Building 14",
                },
              ],
            },
            {
              title: "NIC Codes",
              subTitle: "National Industrial Classification Codes",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "NIC Code",
                    subTitle: "2/4/5 digit NIC code",
                    type: "string",
                  },
                  {
                    title: "Description",
                    subTitle: "Description of activity",
                    type: "string",
                  },
                ],
              },
              value: [
                {
                  "NIC Code": "62020",
                  Description: "Computer consultancy and IT-related services",
                },
              ],
            },
            {
              title: "Annual Returns (3 Yrs)",
              subTitle: "Company annual returns for the last 3 years",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "Financial Year",
                    subTitle: "Financial year ending",
                    type: "string",
                  },
                  {
                    title: "Date of Filing",
                    subTitle: "Filing date of the return",
                    type: "string",
                  },
                ],
              },
              value: [
                {
                  "Financial Year": "31-03-2023",
                  "Date of Filing": "10/10/2023",
                },
                {
                  "Financial Year": "31-03-2022",
                  "Date of Filing": "10/11/2022",
                },
                {
                  "Financial Year": "31-03-2021",
                  "Date of Filing": "10/10/2021",
                },
              ],
            },
            {
              title: "Balance Sheets (3 Yrs)",
              subTitle: "Company balance sheets for the last 3 years",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "Financial Year",
                    subTitle: "Financial year ending",
                    type: "string",
                  },
                  {
                    title: "Date of Filing",
                    subTitle: "Filing date of balance sheet",
                    type: "string",
                  },
                ],
              },
              value: [
                {
                  "Financial Year": "31-03-2023",
                  "Date of Filing": "09/27/2023",
                },
                {
                  "Financial Year": "31-03-2022",
                  "Date of Filing": "09/28/2022",
                },
                {
                  "Financial Year": "31-03-2021",
                  "Date of Filing": "09/25/2021",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const UdyamDynamic = [
  {
    status: 200,
    summary: "Returns Udyam Registration Details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          subTitle: "Udyam Registration Details",
          type: "object",
          objectDetails: [
            {
              title: "udyam",
              subTitle: "Udyam Registration Number",
              type: "string",
            },
            {
              title: "Date of Commencement of Production/Business",
              subTitle: "Date when the enterprise started production/business",
              type: "string",
            },
            {
              title: "Date of Incorporation",
              subTitle: "Date when the company was incorporated",
              type: "string",
            },
            {
              title: "Date of Udyam Registration",
              subTitle: "Date when the enterprise received Udyam registration",
              type: "string",
            },
            {
              title: "MSME-DFO",
              subTitle: "MSME-DFO office code",
              type: "string",
            },
            {
              title: "Major Activity",
              subTitle: "Primary business activity of the enterprise",
              type: "string",
            },
            {
              title: "Name of Enterprise",
              subTitle: "Registered name of the enterprise",
              type: "string",
            },
            {
              title: "Organisation Type",
              subTitle:
                "Type of organization (Private, Public, Partnership, etc.)",
              type: "string",
            },
            {
              title: "Social Category",
              subTitle: "Social category of the entrepreneur",
              type: "string",
            },
            {
              title: "Enterprise Type",
              subTitle: "Type/classification of enterprise",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "Classification Date",
                    subTitle: "Date of enterprise type classification",
                    type: "string",
                  },
                  {
                    title: "Classification Year",
                    subTitle: "Financial year of classification",
                    type: "string",
                  },
                  {
                    title: "Enterprise Type",
                    subTitle: "Type of enterprise (Micro, Small, Medium)",
                    type: "string",
                  },
                ],
              },
            },
            {
              title: "National Industry Classification Code(S)",
              subTitle: "NIC codes representing enterprise activities",
              type: "array of objects",
              items: {
                type: "object",
                objectDetails: [
                  {
                    title: "Activity",
                    subTitle: "Description of the activity",
                    type: "string",
                  },
                  {
                    title: "Date",
                    subTitle: "Date associated with the activity",
                    type: "string",
                  },
                  {
                    title: "Nic 2 Digit",
                    subTitle: "2-digit NIC code",
                    type: "string",
                  },
                  {
                    title: "Nic 4 Digit",
                    subTitle: "4-digit NIC code",
                    type: "string",
                  },
                  {
                    title: "Nic 5 Digit",
                    subTitle: "5-digit NIC code",
                    type: "string",
                  },
                ],
              },
            },
            {
              title: "Official address of Enterprise",
              subTitle: "Registered office address details",
              type: "object",
              fields: [
                {
                  title: "Flat/Door/Block No",
                  subTitle: "Flat or door number",
                  type: "string",
                },
                {
                  title: "Name of Premises/ Building",
                  subTitle: "Name of the building or premises",
                  type: "string",
                },
                {
                  title: "Village/Town",
                  subTitle: "Village or town",
                  type: "string",
                },
                {
                  title: "Block",
                  subTitle: "Block name or number",
                  type: "string",
                },
                {
                  title: "Road/Street/Lane",
                  subTitle: "Road, street or lane name",
                  type: "string",
                },
                { title: "City", subTitle: "City name", type: "string" },
                { title: "State", subTitle: "State name", type: "string" },
                {
                  title: "District",
                  subTitle: "District name",
                  type: "string",
                },
                {
                  title: "Mobile",
                  subTitle: "Registered mobile number",
                  type: "string",
                },
                {
                  title: "Email",
                  subTitle: "Registered email address",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const ShopDynamic = [
  {
    status: 200,
    summary: "Returns shop details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          subTitle: "Details of the shop",
          type: "object",
          objectDetails: [
            {
              title: "registrationNumber",
              type: "string",
              subTitle: "Shop registration number",
            },
            {
              title: "previousRegistrationCertificate",
              type: "string",
              subTitle: "Previous registration certificate number",
            },
            {
              title: "nameOfTheShop",
              type: "string",
              subTitle: "Name of the shop",
            },
            {
              title: "address",
              type: "string",
              subTitle: "Registered address of the shop",
            },
            {
              title: "act",
              type: "string",
              subTitle: "Applicable act under which shop is registered",
            },
            {
              title: "dateOfCommencment",
              type: "string",
              subTitle: "Date of commencement of the shop",
            },
            {
              title: "summary",
              type: "object",
              subTitle: "Summary information of the shop",
              objectDetails: [
                {
                  title: "registrationNumber",
                  type: "string",
                  subTitle: "Shop registration number",
                },
                {
                  title: "name",
                  type: "string",
                  subTitle: "Name of the shop",
                },
                {
                  title: "status",
                  type: "string",
                  subTitle: "Current status of the shop",
                },
                {
                  title: "dateOfCommencement",
                  type: "string",
                  subTitle: "Date when the shop started operations",
                },
                {
                  title: "address",
                  type: "string",
                  subTitle: "Shop address",
                },
                {
                  title: "splitAddress",
                  type: "object",
                  subTitle: "Detailed breakdown of the shop address",
                  objectDetails: [
                    {
                      title: "district",
                      type: "array",
                      itemsType: "string",
                      subTitle: "District(s) of the shop",
                    },
                    {
                      title: "state",
                      type: "array",
                      itemsType: "array",
                      subTitle: "State(s) of the shop",
                    },
                    {
                      title: "city",
                      type: "array",
                      itemsType: "string",
                      subTitle: "City or cities of the shop",
                    },
                    {
                      title: "pincode",
                      type: "string",
                      subTitle: "Postal code of the shop",
                    },
                    {
                      title: "country",
                      type: "array",
                      itemsType: "string",
                      subTitle: "Country or countries of the shop",
                    },
                    {
                      title: "addressLine",
                      type: "string",
                      subTitle: "Street or detailed address line",
                    },
                  ],
                },
              ],
            },
            {
              title: "detailed",
              type: "object",
              subTitle: "Detailed registration information of the shop",
              objectDetails: [
                {
                  title: "registrationNumber",
                  type: "string",
                  subTitle: "Shop registration number",
                },
                {
                  title: "previousRegistrationCertificate",
                  type: "string",
                  subTitle: "Previous registration certificate number",
                },
                {
                  title: "nameOfTheShop",
                  type: "string",
                  subTitle: "Name of the shop",
                },
                {
                  title: "act",
                  type: "string",
                  subTitle: "Applicable act under which shop is registered",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const GstDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "gstinNumber",
              type: "string",
              subTitle: "The GSTIN number of the entity",
            },
            {
              title: "companyName",
              type: "string",
              subTitle: "Registered legal name of the company",
            },
            {
              title: "other_business_address",
              type: "string",
              subTitle: "Additional business address if available",
            },
            {
              title: "register_cancellation_date",
              type: "string",
              subTitle: "GST registration cancellation date, if applicable",
            },
            {
              title: "state_jurisdiction",
              type: "string",
              subTitle: "State jurisdiction details",
            },
            {
              title: "tax_payer_type",
              type: "string",
              subTitle: "Type of taxpayer registered under GST",
            },
            {
              title: "trade_name",
              type: "string",
              subTitle: "Trade name of the business",
            },

            // Primary Business Address
            {
              title: "primary_business_address",
              type: "object",
              objectDetails: [
                {
                  title: "building_name",
                  type: "string",
                  subTitle: "Name of the building",
                },
                {
                  title: "building_number",
                  type: "string",
                  subTitle: "Building or house number",
                },
                {
                  title: "city",
                  type: "string",
                  subTitle: "City of the address",
                },
                {
                  title: "district",
                  type: "string",
                  subTitle: "District of the address",
                },
                {
                  title: "flat_number",
                  type: "string",
                  subTitle: "Flat or unit number",
                },
                {
                  title: "latitude",
                  type: "string",
                  subTitle: "Latitude coordinate",
                },
                {
                  title: "location",
                  type: "string",
                  subTitle: "Location or area name",
                },
                {
                  title: "longitude",
                  type: "string",
                  subTitle: "Longitude coordinate",
                },
                {
                  title: "business_nature",
                  type: "string",
                  subTitle: "Nature of business",
                },
                {
                  title: "pincode",
                  type: "string",
                  subTitle: "Postal PIN code",
                },
                {
                  title: "street",
                  type: "string",
                  subTitle: "Street name",
                },
                {
                  title: "state_code",
                  type: "string",
                  subTitle: "State code of the GST address",
                },
                {
                  title: "full_address",
                  type: "string",
                  subTitle: "Complete formatted address",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const DinDynamic = [
  {
    status: 200,
    summary: "Returns DIN Registration Details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          subTitle: "DIN Registration Details",
          type: "object",
          objectDetails: [
            {
              title: "DIN",
              subTitle: "Director Identification Number",
              description:
                "A unique 8-digit identifier assigned to a director by the Ministry of Corporate Affairs (MCA).",
              type: "string",
              value: "12345678",
            },
            {
              title: "Name",
              subTitle: "Director Name",
              description:
                "Full legal name of the director associated with the DIN.",
              type: "string",
              value: "JOHN DOE",
            },
            {
              title: "DIN Hash",
              subTitle: "Encrypted DIN Reference",
              description:
                "A hashed or encrypted version of the DIN used for secure referencing and masking sensitive identity data.",
              type: "string",
              value: "dummyhash1234567890abcdef",
            },
            {
              title: "Address",
              subTitle: "Primary Address of Director",
              description:
                "Registered residential or correspondence address of the director.",
              type: "string",
              value:
                "123 Dummy Street, Sample Nagar, Test City, TS 500001, India",
            },

            {
              title: "Company Details",
              subTitle: "List of companies associated with DIN",
              description:
                "List of companies where the director is currently or previously associated as a director.",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "CIN",
                    subTitle: "Corporate Identification Number",
                    description:
                      "A unique identification number assigned to a company registered in India.",
                    type: "string",
                  },
                  {
                    title: "Company Name",
                    subTitle: "Registered Company Name",
                    description:
                      "Official registered name of the company as per MCA records.",
                    type: "string",
                  },
                  {
                    title: "Company Address",
                    subTitle: "Registered Address of Company",
                    description:
                      "Official registered office address of the company.",
                    type: "string",
                  },
                  {
                    title: "Company Category",
                    subTitle: "Type of Company",
                    description:
                      "Legal structure/category of the company (e.g., private limited, public limited).",
                    type: "string",
                  },
                  {
                    title: "Date of Incorporation",
                    subTitle: "Incorporation Date",
                    description:
                      "The date on which the company was legally registered under the Companies Act.",
                    type: "string",
                  },
                  {
                    title: "Email",
                    subTitle: "Registered Email ID",
                    description:
                      "Official email ID of the company used for communication and filings.",
                    type: "string",
                  },
                  {
                    title: "ROC Code",
                    subTitle: "Registrar of Companies Office",
                    description:
                      "The regional ROC office under which the company is registered.",
                    type: "string",
                  },
                  {
                    title: "Status",
                    subTitle: "Current Company Status",
                    description:
                      "Indicates whether the company is active, inactive, or under compliance action.",
                    type: "string",
                  },
                  {
                    title: "Last Updated",
                    subTitle: "Last Updated Date",
                    description:
                      "The most recent date when the company record was updated in the registry.",
                    type: "string",
                  },
                ],
              },
              value: [
                {
                  CIN: {
                    title: "CIN",
                    description:
                      "Corporate Identification Number — a unique identifier assigned to a company registered with the Ministry of Corporate Affairs in India.",
                  },

                  "Company Name": {
                    title: "Company Name",
                    description:
                      "Official registered name of the company as per government records.",
                  },

                  "Company Address": {
                    title: "Company Address",
                    description:
                      "Registered office address of the company used for legal and official communication.",
                  },

                  "Company Category": {
                    title: "Company Category",
                    description:
                      "Legal classification of the company (e.g., Company limited by shares, LLP, etc.).",
                  },

                  "Date of Incorporation": {
                    title: "Date of Incorporation",
                    description:
                      "The date on which the company was legally registered under the Companies Act.",
                  },

                  Email: {
                    title: "Email",
                    description:
                      "Registered official email ID of the company used for communication and filings.",
                  },

                  "ROC Code": {
                    title: "ROC Code",
                    description:
                      "Registrar of Companies office under which the company is registered and regulated.",
                  },

                  Status: {
                    title: "Status",
                    description:
                      "Current operational status of the company such as Active, Inactive, or Strike Off.",
                  },

                  "Last Updated": {
                    title: "Last Updated",
                    description:
                      "The most recent date when the company information was updated in official records.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

// risk and due diligence
export const courtRecordDynamic = [
  {
    status: 200,
    summary: "Returns court case matching results with ranking and metadata",
    body: {
      type: "object",
      fields: [
        ...BaseFields,

        {
          title: "algoVersion",
          type: "string",
          subTitle: "Algorithm version used for scoring/matching",
        },

        {
          title: "data",
          type: "array of objects",
          objectDetails: [
            {
              title: "address",
              type: "string",
              subTitle: "Full party or case address",
            },
            {
              title: "addressMatchPercentage",
              type: "number",
              subTitle: "Match percentage for address",
            },
            {
              title: "advocateName",
              type: "string",
              subTitle: "Name of the advocate (nullable)",
            },
            {
              title: "bothMatchPercentage",
              type: "number",
              subTitle: "Combined match percentage (nullable)",
            },
            {
              title: "caseActType",
              type: "string",
              subTitle: "Type of act applicable to case",
            },
            {
              title: "caseCourtDetails",
              type: "string",
              subTitle: "Court details where case is registered",
            },
            {
              title: "caseId",
              type: "string",
              subTitle: "Unique case identifier",
            },
            {
              title: "caseSection",
              type: "string",
              subTitle: "Section of law applied in the case",
            },
            {
              title: "case_code",
              type: "string",
              subTitle: "Internal case code",
            },
            {
              title: "case_disposed_date",
              type: "string",
              subTitle: "Case disposal date if available",
            },
            {
              title: "category",
              type: "string",
              subTitle: "Case category (e.g., Criminal, Civil)",
            },
            {
              title: "courtDistid",
              type: "string",
              subTitle: "Court district ID",
            },
            {
              title: "courtId",
              type: "string",
              subTitle: "Court ID (nullable)",
            },
            {
              title: "courtStateid",
              type: "string",
              subTitle: "Court state ID",
            },
            {
              title: "data_source",
              type: "string",
              subTitle: "Source of data",
            },
            {
              title: "fatherPercentage",
              type: "number",
              subTitle: "Father name match percentage (nullable)",
            },
            {
              title: "flagged_address",
              type: "number",
              subTitle: "Flag indicating address issue",
            },
            {
              title: "id",
              type: "string",
              subTitle: "Record ID",
            },
            {
              title: "link",
              type: "string",
              subTitle: "External case details link",
            },
            {
              title: "name",
              type: "string",
              subTitle: "Party name",
            },
            {
              title: "nameMatchPercentage",
              type: "number",
              subTitle: "Name match score",
            },
            {
              title: "partyAddress_highlighted",
              type: "string",
              subTitle: "Highlighted party address text",
            },
            {
              title: "partyDistid",
              type: "string",
              subTitle: "Party district ID",
            },
            {
              title: "partyDistname",
              type: "string",
              subTitle: "Party district name",
            },
            {
              title: "partyFather",
              type: "string",
              subTitle: "Father name of party (nullable)",
            },
            {
              title: "partyId",
              type: "string",
              subTitle: "Party unique ID",
            },
            {
              title: "partyName_highlighted",
              type: "string",
              subTitle: "Highlighted party name",
            },
            {
              title: "partyStateid",
              type: "string",
              subTitle: "Party state ID",
            },
            {
              title: "partyStatename",
              type: "string",
              subTitle: "Party state name",
            },
            {
              title: "partyType",
              type: "string",
              subTitle: "Role of party in case (e.g., Respondent)",
            },
            {
              title: "query_type",
              type: "string",
              subTitle: "Query type used for search",
            },
            {
              title: "rank",
              type: "number",
              subTitle: "Ranking of result",
            },
            {
              title: "registration_year",
              type: "string",
              subTitle: "Year of case registration",
            },
            {
              title: "score",
              type: "number",
              subTitle: "Relevance score",
            },
            {
              title: "solr_source",
              type: "string",
              subTitle: "Search index source",
            },
            {
              title: "stageOfCase",
              type: "string",
              subTitle: "Current stage of case",
            },
            {
              title: "weightedPercentage",
              type: "number",
              subTitle: "Final weighted match score",
            },
          ],
        },

        {
          title: "eliminated_data",
          type: "array of objects",
          subTitle: "Filtered out or eliminated results",
        },
        {
          title: "maxScore",
          type: "number",
          subTitle: "Maximum score in result set (nullable)",
        },
        {
          title: "numFound",
          type: "number",
          subTitle: "Total number of results found",
        },
        {
          title: "perPage",
          type: "number",
          subTitle: "Results per page (nullable)",
        },
        {
          title: "perPaginQuery",
          type: "string",
          subTitle: "Pagination query info (nullable)",
        },
        {
          title: "sendToVault",
          type: "boolean",
          subTitle: "Flag to send data to vault",
        },
        {
          title: "sendToVp",
          type: "boolean",
          subTitle: "Flag to send data to VP system",
        },
        {
          title: "start",
          type: "number",
          subTitle: "Pagination start index (nullable)",
        },
        {
          title: "totalResult",
          type: "number",
          subTitle: "Total results count",
        },
      ],
    },
  },
];

// other services
export const NameDynamic = [
  {
    status: 200,
    summary: "Returns name details",
    body: {
      type: "object",
      fields: [
        {
          title: "success",
          type: "boolean",
          subTitle: "Indicates whether the API request was successful",
        },
        {
          title: "message",
          type: "string",
          subTitle: "Overall response message from the server",
        },
        {
          title: "response",
          type: "object",
          subTitle: "Contains detailed name information",
          objectDetails: [
            {
              title: "firstName",
              type: "string",
              subTitle: "First name extracted from the input",
            },
            {
              title: "secondName",
              type: "string",
              subTitle: "Second name extracted from the input",
            },
            {
              title: "result",
              type: "integer",
              subTitle: "Result code indicating the name validation outcome",
            },
          ],
        },
      ],
    },
  },
];

// geo location services
export const pincodeGeofencingDynamic = [
  {
    status: 200,
    summary: "Returns Pincode details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "District",
              type: "string",
              subTitle: "District name",
            },
            {
              title: "Pincode",
              type: "number",
              subTitle: "Postal PIN code",
            },
            {
              title: "Post Office",
              type: "string",
              subTitle: "Name of the post office",
            },
            {
              title: "State",
              type: "string",
              subTitle: "State name",
            },
            {
              title: "Subdistrict",
              type: "string",
              subTitle: "Subdistrict or tehsil name",
            },
          ],
        },
      ],
    },
  },
];
export const longLatGeofencingDynamic = [
  {
    status: 200,
    summary: "Returns Pincode details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "centerCode",
              type: "string",
              subTitle: "Center Code",
            },
            {
              title: "district",
              type: "string",
              subTitle: "District name",
            },
            {
              title: "pincode",
              type: "string",
              subTitle: "Postal PIN code",
            },
            {
              title: "populationGroup",
              type: "string",
              subTitle: "Population Group",
            },
            {
              title: "postOffice",
              type: "string",
              subTitle: "Name of the post office",
            },
            {
              title: "revenueCenter",
              type: "string",
              subTitle: "Revenue Center",
            },
            {
              title: "state",
              type: "string",
              subTitle: "State name",
            },
            {
              title: "subdistrict",
              type: "string",
              subTitle: "Subdistrict or tehsil name",
            },
            {
              title: "tier",
              type: "string",
              subTitle: "Tier",
            },
          ],
        },
      ],
    },
  },
];
export const GeoTaggingDynamic = [
  {
    status: 200,
    summary: "Returns Pincode details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "centerCode",
              type: "string",
              subTitle: "Center Code",
            },
            {
              title: "district",
              type: "string",
              subTitle: "District name",
            },
            {
              title: "pincode",
              type: "string",
              subTitle: "Postal PIN code",
            },
            {
              title: "populationGroup",
              type: "string",
              subTitle: "Population Group",
            },
            {
              title: "postOffice",
              type: "string",
              subTitle: "Name of the post office",
            },
            {
              title: "revenueCenter",
              type: "string",
              subTitle: "Revenue Center",
            },
            {
              title: "state",
              type: "string",
              subTitle: "State name",
            },
            {
              title: "subdistrict",
              type: "string",
              subTitle: "Subdistrict or tehsil name",
            },
            {
              title: "tier",
              type: "string",
              subTitle: "Tier",
            },
          ],
        },
      ],
    },
  },
];
export const GeoTaggingDistanceCalculationDynamic = [
  {
    status: 200,
    summary: "Returns Pincode details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          fields: [
            {
              title: "centerCode",
              type: "string",
              subTitle: "Center Code",
            },
            {
              title: "district",
              type: "string",
              subTitle: "District name",
            },
            {
              title: "pincode",
              type: "string",
              subTitle: "Postal PIN code",
            },
            {
              title: "populationGroup",
              type: "string",
              subTitle: "Population Group",
            },
            {
              title: "postOffice",
              type: "string",
              subTitle: "Name of the post office",
            },
            {
              title: "revenueCenter",
              type: "string",
              subTitle: "Revenue Center",
            },
            {
              title: "state",
              type: "string",
              subTitle: "State name",
            },
            {
              title: "subdistrict",
              type: "string",
              subTitle: "Subdistrict or tehsil name",
            },
            {
              title: "tier",
              type: "string",
              subTitle: "Tier",
            },
          ],
        },
      ],
    },
  },
];
export const DigipinToLongLatDynamic = [
  {
    status: 200,
    summary: "Returns Pincode details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "centerCode",
              type: "string",
              subTitle: "Center Code",
            },
            {
              title: "district",
              type: "string",
              subTitle: "District name",
            },
            {
              title: "pincode",
              type: "string",
              subTitle: "Postal PIN code",
            },
            {
              title: "populationGroup",
              type: "string",
              subTitle: "Population Group",
            },
            {
              title: "postOffice",
              type: "string",
              subTitle: "Name of the post office",
            },
            {
              title: "revenueCenter",
              type: "string",
              subTitle: "Revenue Center",
            },
            {
              title: "state",
              type: "string",
              subTitle: "State name",
            },
            {
              title: "subdistrict",
              type: "string",
              subTitle: "Subdistrict or tehsil name",
            },
            {
              title: "tier",
              type: "string",
              subTitle: "Tier",
            },
          ],
        },
      ],
    },
  },
];

// banking services
export const BinDynamic = [
  {
    status: 200,
    summary: "Returns BIN details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "Brand",
              type: "string",
              subTitle: "Card network brand (e.g., Visa, Mastercard)",
            },
            {
              title: "Category",
              type: "string",
              subTitle: "Card category such as Platinum, Business, etc.",
            },
            {
              title: "CountryName",
              type: "string",
              subTitle: "Country where the issuing bank is located",
            },
            {
              title: "Issuer",
              type: "string",
              subTitle: "Name of the issuing bank",
            },
            {
              title: "IssuerPhone",
              type: "string",
              subTitle: "Customer support phone number of the issuer",
            },
            {
              title: "IssuerUrl",
              type: "string",
              subTitle: "Official website of the issuer",
            },
            {
              title: "Type",
              type: "string",
              subTitle: "Type of card (Credit, Debit, etc.)",
            },
            {
              title: "isoCode2",
              type: "string",
              subTitle: "2-letter ISO country code",
            },
            {
              title: "isoCode3",
              type: "string",
              subTitle: "3-letter ISO country code",
            },
          ],
        },
      ],
    },
  },
];
export const FullCardDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "success",
              type: "boolean",
              subTitle: "Indicates whether the request was successful",
            },
            {
              title: "message",
              type: "string",
              subTitle: "Status message of the response",
            },
            {
              title: "response",
              type: "object",
              objectDetails: [
                {
                  title: "card_number",
                  type: "string",
                  subTitle: "Masked card number",
                },
                {
                  title: "is_valid",
                  type: "boolean",
                  subTitle: "Indicates whether the card number is valid",
                },
                {
                  title: "issuer_info",
                  type: "object",
                  objectDetails: [
                    {
                      title: "Brand",
                      type: "string",
                      subTitle: "Card brand (e.g., Visa, Mastercard)",
                    },
                    {
                      title: "Category",
                      type: "string",
                      subTitle: "Card category (e.g., Platinum, Business)",
                    },
                    {
                      title: "CountryName",
                      type: "string",
                      subTitle: "Country of the card issuer",
                    },
                    {
                      title: "Issuer",
                      type: "string",
                      subTitle: "Financial institution issuing the card",
                    },
                    {
                      title: "IssuerPhone",
                      type: "string",
                      subTitle: "Issuer contact phone number",
                    },
                    {
                      title: "IssuerUrl",
                      type: "string",
                      subTitle: "Issuer website URL",
                    },
                    {
                      title: "Type",
                      type: "string",
                      subTitle: "Type of card (Credit/Debit)",
                    },
                    {
                      title: "isoCode2",
                      type: "string",
                      subTitle: "Two-letter ISO country code",
                    },
                    {
                      title: "isoCode3",
                      type: "string",
                      subTitle: "Three-letter ISO country code",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
export const IfscDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "BRANCH",
              type: "string",
              subTitle: "The branch name of the IFSC code",
            },
            {
              title: "ADDRESS",
              type: "string",
              subTitle: "The address of the branch",
            },
            {
              title: "STATE",
              type: "string",
              subTitle: "The state in which the branch is located",
            },
            {
              title: "MICR",
              type: "string",
              subTitle: "MICR code of the branch",
            },
            {
              title: "CONTACT",
              type: "string",
              subTitle: "Contact number of the branch",
            },
            {
              title: "UPI",
              type: "boolean",
              subTitle: "Whether UPI is supported",
            },
            {
              title: "RTGS",
              type: "boolean",
              subTitle: "Whether RTGS is supported",
            },
            {
              title: "CITY",
              type: "string",
              subTitle: "The city of the branch",
            },
            {
              title: "CENTRE",
              type: "string",
              subTitle: "The centre linked to the branch",
            },
            {
              title: "DISTRICT",
              type: "string",
              subTitle: "The district of the branch",
            },
            {
              title: "NEFT",
              type: "boolean",
              subTitle: "Whether NEFT is supported",
            },
            {
              title: "IMPS",
              type: "boolean",
              subTitle: "Whether IMPS is supported",
            },
            {
              title: "SWIFT",
              type: "string",
              subTitle: "SWIFT code of the branch",
            },
            {
              title: "ISO3166",
              type: "string",
              subTitle: "ISO code for the region",
            },
            {
              title: "BANK",
              type: "string",
              subTitle: "The bank name",
            },
            {
              title: "BANKCODE",
              type: "string",
              subTitle: "The bank code",
            },
            {
              title: "IFSC",
              type: "string",
              subTitle: "The IFSC code",
            },
          ],
        },
      ],
    },
  },
];
export const AccountDynamic = [
  {
    status: 200,
    summary: "Returns account validation details",
    body: {
      type: "object",
      fields: [
        {
          title: "message",
          type: "string",
          subTitle: "Overall response message from the server",
        },
        {
          title: "success",
          type: "boolean",
          subTitle: "Indicates whether the API request was successful",
        },
        {
          title: "response",
          type: "object",
          subTitle: "Contains detailed account validation information",
          objectDetails: [
            {
              title: "name",
              type: "string",
              subTitle: "Name associated with the bank account",
            },
            {
              title: "status",
              type: "string",
              subTitle: "Current validation status of the account",
            },
            {
              title: "success",
              type: "boolean",
              subTitle: "Indicates whether account validation succeeded",
            },
            {
              title: "message",
              type: "string",
              subTitle: "Detailed message about the account validation result",
            },
            {
              title: "account_no",
              type: "string",
              subTitle: "Bank account number provided for validation",
            },
            {
              title: "ifsc",
              type: "string",
              subTitle: "IFSC code of the bank branch",
            },
          ],
        },
      ],
    },
  },
];

// vehicle services
export const drivingLicenseverifyDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "Address",
              type: "string",
              subTitle: "The Address of the person",
            },
            {
              title: "Blood group",
              type: "string",
              subTitle: "The Blood group of the person",
            },
            {
              title: "CovDetails",
              type: "array of objects",
              subTitle: "List of vehicle registration details",
              objectDetails: [
                {
                  title: "COV Issue Date",
                  type: "string",
                  subTitle: "Date of COV issue",
                },
                {
                  title: "Vehicle Class",
                  type: "string",
                  subTitle: "Class of the vehicle",
                },
                {
                  title: "Vehicle Type",
                  type: "string",
                  subTitle: "Type of the vehicle",
                },
              ],
            },
            {
              title: "Date of Birth",
              type: "string",
              subTitle: "Date of birth of the person",
            },
            {
              title: "Driving License Number",
              type: "string",
              subTitle: "Hashed driving license number",
            },
            {
              title: "Father's Name",
              type: "string",
              subTitle: "Father's full name",
            },
            {
              title: "Gender",
              type: "string",
              subTitle: "Gender of the person",
            },
            {
              title: "LicenseDetails",
              type: "array of objects",
              subTitle: "List of license types and issue dates",
              objectDetails: [
                {
                  title: "Issue Date From",
                  type: "string",
                  subTitle: "License issue start date",
                },
                {
                  title: "Issue Date To",
                  type: "string",
                  subTitle: "License expiry date",
                },
                {
                  title: "License Type",
                  type: "string",
                  subTitle: "Type of the license",
                },
              ],
            },
            {
              title: "Owner's Name",
              type: "string",
              subTitle: "Owner's full name",
            },
            {
              title: "RTO (Issued At)",
              type: "string",
              subTitle: "RTO location",
            },
            { title: "State", type: "string", subTitle: "State of the person" },
            { title: "Status", type: "string", subTitle: "Current status" },
            {
              title: "imgurl",
              type: "string",
              subTitle: "Base64 encoded image",
            },
          ],
        },
      ],
    },
  },
];
export const challanViaRcDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "Accused Father Name",
              type: "string",
              subTitle: "Name of the accused person's father",
            },
            {
              title: "Accused Name",
              type: "string",
              subTitle: "Name of the accused individual",
            },
            {
              title: "Amount",
              type: "number",
              subTitle: "Fine amount imposed for the challan",
            },
            {
              title: "Challan Date",
              type: "string",
              subTitle: "Date and time when the challan was issued",
            },
            {
              title: "Challan Number",
              type: "string",
              subTitle: "Unique identification number of the challan",
            },
            {
              title: "Challan Place",
              type: "string",
              subTitle: "Location where the challan was issued",
            },
            {
              title: "Challan Status",
              type: "string",
              subTitle:
                "Current status of the challan (e.g., pending, disposed)",
            },
            {
              title: "DL No/Vehicle Number",
              type: "string",
              subTitle: "Driving license number or vehicle registration number",
            },
            {
              title: "Offense Details",
              type: "array of objects",
              subTitle: "List of offenses committed",
            },
            {
              title: "RTO",
              type: "string",
              subTitle: "Regional Transport Office associated with the challan",
            },
            {
              title: "Sl. No.",
              type: "number",
              subTitle: "Serial number of the record",
            },
            {
              title: "State",
              type: "string",
              subTitle: "State where the challan was issued",
            },
          ],
        },
      ],
    },
  },
];

// Recharge
export const RechargePaymentDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "PAN",
              type: "string",
              subTitle: "The Requested Pan Number",
            },
            {
              title: "Name",
              type: "string",
              subTitle: "The Beneficiary Name of given Pan Number",
            },
            {
              title: "PAN_Holder_Type",
              type: "string",
              subTitle: "The Pan type of the given Pan Number",
            },
            {
              title: "PAN_Status",
              type: "string",
              subTitle: "The current Pan status",
            },
          ],
        },
      ],
    },
  },
];
export const RechargeOffersDynamic = [
  {
    status: 200,
    summary: "Returns recharge offers for a mobile number",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "ERROR",
              type: "string",
              subTitle: "Error code returned by the offer service",
            },
            {
              title: "STATUS",
              type: "string",
              subTitle: "Status of the request",
            },
            {
              title: "MOBILENO",
              type: "string",
              subTitle: "Mobile number for which offers are checked",
            },
            {
              title: "RDATA",
              type: "object",
              subTitle: "Recharge offer data (null if not available)",
            },
            {
              title: "MESSAGE",
              type: "string",
              subTitle: "Response message",
            },
          ],
        },
      ],
    },
  },
];
export const RechargeOperatorsDynamic = [
  {
    status: 200,
    summary: "Returns operator details for a mobile number",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "ERROR",
              type: "string",
              subTitle: "Error code (0 means no error)",
            },
            {
              title: "STATUS",
              type: "string",
              subTitle: "Status of the request (1 means success)",
            },
            {
              title: "Mobile",
              type: "string",
              subTitle: "Requested mobile number",
            },
            {
              title: "Operator",
              type: "string",
              subTitle: "Mobile network operator name",
            },
            {
              title: "OpCode",
              type: "string",
              subTitle: "Operator code",
            },
            {
              title: "Circle",
              type: "string",
              subTitle: "Telecom circle name",
            },
            {
              title: "CircleCode",
              type: "string",
              subTitle: "Telecom circle code",
            },
            {
              title: "Message",
              type: "string",
              subTitle: "Response message",
            },
          ],
        },
      ],
    },
  },
];
export const RechargePlansDynamic = [
  {
    status: 200,
    summary: "Returns recharge plans for the selected operator and circle",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "ERROR",
              type: "string",
              subTitle: "Error code (0 means no error)",
            },
            {
              title: "STATUS",
              type: "string",
              subTitle: "Status of the request",
            },
            {
              title: "Operator",
              type: "string",
              subTitle: "Mobile operator name",
            },
            {
              title: "Circle",
              type: "string",
              subTitle: "Telecom circle code",
            },
            {
              title: "RDATA",
              type: "object",
              subTitle: "Recharge plans grouped by categories",
              objectDetails: [
                {
                  title: "Popular Plans",
                  type: "array",
                  subTitle: "List of popular recharge plans",
                  arrayDetails: {
                    type: "object",
                    objectDetails: [
                      {
                        title: "amount",
                        type: "string",
                        subTitle: "Recharge amount",
                      },
                      {
                        title: "validity",
                        type: "string",
                        subTitle: "Plan validity",
                      },
                      {
                        title: "description",
                        type: "string",
                        subTitle: "Plan benefits description",
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: "MESSAGE",
              type: "string",
              subTitle: "Response message",
            },
          ],
        },
      ],
    },
  },
];
export const RechargeOldPlansDynamic = [
  {
    status: 200,
    summary: "Returns old recharge plans for the selected operator and circle",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "ERROR",
              type: "string",
              subTitle: "Error code (0 means no error)",
            },
            {
              title: "STATUS",
              type: "string",
              subTitle: "Status of the request",
            },
            {
              title: "Operator",
              type: "string",
              subTitle: "Mobile operator name",
            },
            {
              title: "Circle",
              type: "string",
              subTitle: "Telecom circle code",
            },
            {
              title: "RDATA",
              type: "object",
              subTitle: "Old recharge plans grouped by categories",
              objectDetails: [
                {
                  title: "Popular Plans",
                  type: "array",
                  subTitle: "List of old popular recharge plans",
                  arrayDetails: {
                    type: "object",
                    objectDetails: [
                      {
                        title: "amount",
                        type: "string",
                        subTitle: "Recharge amount",
                      },
                      {
                        title: "validity",
                        type: "string",
                        subTitle: "Plan validity",
                      },
                      {
                        title: "description",
                        type: "string",
                        subTitle: "Plan benefits description",
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: "MESSAGE",
              type: "string",
              subTitle: "Response message",
            },
          ],
        },
      ],
    },
  },
];
export const RechargeDynamic = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "data",
          type: "object",
          objectDetails: [
            {
              title: "success",
              type: "boolean",
              subTitle: "Indicates whether the request was successful",
            },
            {
              title: "message",
              type: "string",
              subTitle: "Status message of the response",
            },
            {
              title: "response",
              type: "object",
              objectDetails: [
                {
                  title: "card_number",
                  type: "string",
                  subTitle: "Masked card number",
                },
                {
                  title: "is_valid",
                  type: "boolean",
                  subTitle: "Indicates whether the card number is valid",
                },
                {
                  title: "issuer_info",
                  type: "object",
                  objectDetails: [
                    {
                      title: "Brand",
                      type: "string",
                      subTitle: "Card brand (e.g., Visa, Mastercard)",
                    },
                    {
                      title: "Category",
                      type: "string",
                      subTitle: "Card category (e.g., Platinum, Business)",
                    },
                    {
                      title: "CountryName",
                      type: "string",
                      subTitle: "Country of the card issuer",
                    },
                    {
                      title: "Issuer",
                      type: "string",
                      subTitle: "Financial institution issuing the card",
                    },
                    {
                      title: "IssuerPhone",
                      type: "string",
                      subTitle: "Issuer contact phone number",
                    },
                    {
                      title: "IssuerUrl",
                      type: "string",
                      subTitle: "Issuer website URL",
                    },
                    {
                      title: "Type",
                      type: "string",
                      subTitle: "Type of card (Credit/Debit)",
                    },
                    {
                      title: "isoCode2",
                      type: "string",
                      subTitle: "Two-letter ISO country code",
                    },
                    {
                      title: "isoCode3",
                      type: "string",
                      subTitle: "Three-letter ISO country code",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

// bbps
export const BillerInfo = [
  {
    status: 200,
    summary: "Returns a paginated list of accounts",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          type: "object",

          objectDetails: [
            {
              title: "PAN",
              type: "string",
              subTitle: "The Requested Pan Number",
            },
            {
              title: "Name",
              type: "string",
              subTitle: "The Beneficiary Name of given Pan Number",
            },
            {
              title: "PAN_Holder_Type",
              type: "string",
              subTitle: "The Pan type of the given Pan Number",
            },
            {
              title: "PAN_Status",
              type: "string",
              subTitle: "The current Pan status",
            },
          ],
        },
      ],
    },
  },
];

// common Data
export const DATA = [
  {
    status: 400,
    summary: "Your request is invalid.",
    body: {
      type: "object",
      fields: [
        {
          title: "message",
          type: "string",
          subType: "",
          subTitle:
            "The request was malformed or could not be processed as is.",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The HTTP status code representing the error (400).",
        },
        {
          title: "response",
          type: "string",
          subType: "",
          subTitle:
            "A human-readable response explaining why the request was invalid.",
        },
      ],
    },
  },
  {
    status: 404,
    summary: "Entity not found",
    body: {
      type: "object",
      fields: [
        {
          title: "success",
          type: "boolean",
          subTitle: "Whether the request was successful (true) or not (false).",
        },
        {
          title: "message",
          type: "string",
          subType: "",
          subTitle: "The requested resource could not be found on the server.",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The HTTP status code representing the error (404).",
        },
        {
          title: "data",
          type: "object",
          subType: "",
          subTitle: "the data that was sent to that request",
        },
      ],
    },
  },
  {
    status: 409,
    summary: "Entity already exists",
    body: {
      type: "object",
      fields: [
        {
          title: "message",
          type: "string",
          subType: "",
          subTitle:
            "The request could not be completed because it conflicts with existing data.",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The HTTP status code representing the conflict (409).",
        },
        {
          title: "response",
          type: "string",
          subType: "",
          subTitle: "A human-readable response explaining the conflict reason.",
        },
      ],
    },
  },
  {
    status: 422,
    summary: "Validation Error",
    body: {
      type: "object",
      fields: [
        {
          title: "details",
          subTitle:
            "A list of validation errors describing what went wrong with the input.",
          type: "array of objects",
          objectDetails: [
            {
              title: "Ioc",
              type: "array",
              subTitle:
                "The location(s) in the request where the validation failed (e.g. field names).",
              arrayTypes: ["string", "integer"],
            },
            {
              title: "msg",
              type: "string",
              subTitle: "A descriptive message about the validation error.",
              arrayTypes: [],
            },
            {
              title: "type",
              type: "string",
              subTitle:
                "The kind of validation error (e.g. 'required', 'format', 'type mismatch').",
              arrayTypes: [],
            },
          ],
        },
      ],
    },
  },
  {
    status: 500,
    summary: "A server error has occurred.",
    body: {
      type: "object",
      fields: [
        {
          title: "message",
          type: "string",
          subType: "",
          subTitle: "An unexpected error occurred on the server.",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The HTTP status code representing the server error (500).",
        },
      ],
    },
  },
];
