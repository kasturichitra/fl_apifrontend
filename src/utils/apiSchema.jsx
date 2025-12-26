export const BaseFields = [
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
export const PanToAadhaarDynamic = [
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
export const AadhaarDynamic = [
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
export const MobileDynamic = [
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
export const CinDynamic = [
  {
    status: 200,
    summary: "Returns CIN Registration Details",
    body: {
      type: "object",
      fields: [
        ...BaseFields,
        {
          title: "response",
          subtitle: "CIN Registration Details",
          type: "object",
          objectDetails: [
            { title: "CIN", subtitle: "Corporate Identification Number", type: "string", value: "U12345DL2025PTC999999" },
            { title: "Company Name", subtitle: "Registered Name of the Company", type: "string", value: "ABC TECHNOLOGIES PRIVATE LIMITED" },
            { title: "Date of Registration", subtitle: "Date when company was registered", type: "string", value: "01/15/2025" },
            { title: "Status", subtitle: "Current status of the company", type: "string", value: "Active" },
            { title: "PAN", subtitle: "Permanent Account Number of the company", type: "string", value: "AABCD1234F" },
            { title: "Authorized Capital", subtitle: "Authorized share capital of the company", type: "string", value: "500000" },
            { title: "Paidup Capital", subtitle: "Paid-up capital of the company", type: "string", value: "500000" },
            { title: "Email", subtitle: "Registered company email", type: "string", value: "info@abctech.com" },
            { title: "Mobile", subtitle: "Registered company mobile number", type: "string", value: "9876543210" },
            {
              title: "Multiple Addresses",
              subtitle: "Registered, Police Station, and Present Addresses",
              type: "array",
              items: {
                type: "object",
                fields: [
                  { title: "City", subtitle: "City of the address", type: "string" },
                  { title: "State", subtitle: "State of the address", type: "string" },
                  { title: "Country", subtitle: "Country of the address", type: "string" },
                  { title: "District", subtitle: "District of the address", type: "string" },
                  { title: "Locality", subtitle: "Local area or locality", type: "string" },
                  { title: "Postal Code", subtitle: "PIN or ZIP code", type: "string" },
                  { title: "Address Type", subtitle: "Type of address", type: "string" },
                  { title: "Street Address", subtitle: "Street or building address", type: "string" },
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
                  "Street Address": "Tech Park Tower, 3rd Floor"
                },
                {
                  City: "Noida",
                  State: "Uttar Pradesh",
                  Country: "India",
                  District: "Gautam Buddha Nagar",
                  Locality: "Sector 62",
                  "Postal Code": "201301",
                  "Address Type": "Police Station Address",
                  "Street Address": "IT Hub Complex"
                },
                {
                  City: "Gurugram",
                  State: "Haryana",
                  Country: "India",
                  District: "Gurugram",
                  Locality: "Cyber City",
                  "Postal Code": "122002",
                  "Address Type": "Present Address",
                  "Street Address": "DLF Phase 3, Building 14"
                }
              ]
            },
            {
              title: "NIC Codes",
              subtitle: "National Industrial Classification Codes",
              type: "array",
              items: {
                type: "object",
                fields: [
                  { title: "NIC Code", subtitle: "2/4/5 digit NIC code", type: "string" },
                  { title: "Description", subtitle: "Description of activity", type: "string" },
                ],
              },
              value: [
                { "NIC Code": "62020", Description: "Computer consultancy and IT-related services" }
              ]
            },
            {
              title: "Annual Returns (3 Yrs)",
              subtitle: "Company annual returns for the last 3 years",
              type: "array",
              items: {
                type: "object",
                fields: [
                  { title: "Financial Year", subtitle: "Financial year ending", type: "string" },
                  { title: "Date of Filing", subtitle: "Filing date of the return", type: "string" },
                ],
              },
              value: [
                { "Financial Year": "31-03-2023", "Date of Filing": "10/10/2023" },
                { "Financial Year": "31-03-2022", "Date of Filing": "10/11/2022" },
                { "Financial Year": "31-03-2021", "Date of Filing": "10/10/2021" },
              ]
            },
            {
              title: "Balance Sheets (3 Yrs)",
              subtitle: "Company balance sheets for the last 3 years",
              type: "array",
              items: {
                type: "object",
                fields: [
                  { title: "Financial Year", subtitle: "Financial year ending", type: "string" },
                  { title: "Date of Filing", subtitle: "Filing date of balance sheet", type: "string" },
                ],
              },
              value: [
                { "Financial Year": "31-03-2023", "Date of Filing": "09/27/2023" },
                { "Financial Year": "31-03-2022", "Date of Filing": "09/28/2022" },
                { "Financial Year": "31-03-2021", "Date of Filing": "09/25/2021" },
              ]
            }
          ]
        }
      ]
    }
  }
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
          title: "response",
          subtitle: "Udyam Registration Details",
          type: "object",
          objectDetails: [
            {
              title: "udyam",
              subtitle: "Udyam Registration Number",
              type: "string",
            },
            {
              title: "Date of Commencement of Production/Business",
              subtitle: "Date when the enterprise started production/business",
              type: "string",
            },
            {
              title: "Date of Incorporation",
              subtitle: "Date when the company was incorporated",
              type: "string",
            },
            {
              title: "Date of Udyam Registration",
              subtitle: "Date when the enterprise received Udyam registration",
              type: "string",
            },
            {
              title: "MSME-DFO",
              subtitle: "MSME-DFO office code",
              type: "string",
            },
            {
              title: "Major Activity",
              subtitle: "Primary business activity of the enterprise",
              type: "string",
            },
            {
              title: "Name of Enterprise",
              subtitle: "Registered name of the enterprise",
              type: "string",
            },
            {
              title: "Organisation Type",
              subtitle: "Type of organization (Private, Public, Partnership, etc.)",
              type: "string",
            },
            {
              title: "Social Category",
              subtitle: "Social category of the entrepreneur",
              type: "string",
            },
            {
              title: "Enterprise Type",
              subtitle: "Type/classification of enterprise",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "Classification Date",
                    subtitle: "Date of enterprise type classification",
                    type: "string",
                  },
                  {
                    title: "Classification Year",
                    subtitle: "Financial year of classification",
                    type: "string",
                  },
                  {
                    title: "Enterprise Type",
                    subtitle: "Type of enterprise (Micro, Small, Medium)",
                    type: "string",
                  },
                ],
              },
            },
            {
              title: "National Industry Classification Code(S)",
              subtitle: "NIC codes representing enterprise activities",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "Activity",
                    subtitle: "Description of the activity",
                    type: "string",
                  },
                  {
                    title: "Date",
                    subtitle: "Date associated with the activity",
                    type: "string",
                  },
                  {
                    title: "Nic 2 Digit",
                    subtitle: "2-digit NIC code",
                    type: "string",
                  },
                  {
                    title: "Nic 4 Digit",
                    subtitle: "4-digit NIC code",
                    type: "string",
                  },
                  {
                    title: "Nic 5 Digit",
                    subtitle: "5-digit NIC code",
                    type: "string",
                  },
                ],
              },
            },
            {
              title: "Official address of Enterprise",
              subtitle: "Registered office address details",
              type: "object",
              fields: [
                { title: "Flat/Door/Block No", subtitle: "Flat or door number", type: "string" },
                { title: "Name of Premises/ Building", subtitle: "Name of the building or premises", type: "string" },
                { title: "Village/Town", subtitle: "Village or town", type: "string" },
                { title: "Block", subtitle: "Block name or number", type: "string" },
                { title: "Road/Street/Lane", subtitle: "Road, street or lane name", type: "string" },
                { title: "City", subtitle: "City name", type: "string" },
                { title: "State", subtitle: "State name", type: "string" },
                { title: "District", subtitle: "District name", type: "string" },
                { title: "Mobile", subtitle: "Registered mobile number", type: "string" },
                { title: "Email", subtitle: "Registered email address", type: "string" },
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
          type: "object",
          objectDetails: [
            {
              title: "registrationNumber",
              type: "string",
            },
            {
              title: "previousRegistrationCertificate",
              type: "string",
            },
            {
              title: "nameOfTheShop",
              type: "string",
            },
            {
              title: "address",
              type: "string",
            },
            {
              title: "act",
              type: "string",
            },
            {
              title: "dateOfCommencment",
              type: "string",
            },
            {
              title: "summary",
              type: "object",
              objectDetails: [
                {
                  title: "registrationNumber",
                  type: "string",
                },
                {
                  title: "name",
                  type: "string",
                },
                {
                  title: "status",
                  type: "string",
                },
                {
                  title: "dateOfCommencement",
                  type: "string",
                },
                {
                  title: "address",
                  type: "string",
                },
                {
                  title: "splitAddress",
                  type: "object",
                  objectDetails: [
                    {
                      title: "district",
                      type: "array",
                      itemsType: "string",
                    },
                    {
                      title: "state",
                      type: "array",
                      itemsType: "array",
                    },
                    {
                      title: "city",
                      type: "array",
                      itemsType: "string",
                    },
                    {
                      title: "pincode",
                      type: "string",
                    },
                    {
                      title: "country",
                      type: "array",
                      itemsType: "string",
                    },
                    {
                      title: "addressLine",
                      type: "string",
                    },
                  ],
                },
              ],
            },
            {
              title: "detailed",
              type: "object",
              objectDetails: [
                {
                  title: "registrationNumber",
                  type: "string",
                },
                {
                  title: "previousRegistrationCertificate",
                  type: "string",
                },
                {
                  title: "nameOfTheShop",
                  type: "string",
                },
                {
                  title: "act",
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
        },
        {
          title: "message",
          type: "string",
        },
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "firstName",
              type: "string",
            },
            {
              title: "secondName",
              type: "string",
            },
            {
              title: "result",
              type: "integer",
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
        },
        {
          title: "success",
          type: "boolean",
        },
        {
          title: "response",
          type: "object",
          objectDetails: [
            {
              title: "name",
              type: "string",
            },
            {
              title: "status",
              type: "string",
            },
            {
              title: "success",
              type: "boolean",
            },
            {
              title: "message",
              type: "string",
            },
            {
              title: "account_no",
              type: "string",
            },
            {
              title: "ifsc",
              type: "string",
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
          title: "response",
          type: "string",
          subType: "",
          subTitle:
            "A human-readable response indicating the resource does not exist.",
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
