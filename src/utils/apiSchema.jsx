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
export const UdyamDynamic = [
  {
    status: 200,
    summary: "Returns Udyam Registration Details",
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
          fields: [
            {
              title: "udyam",
              type: "string",
            },
            {
              title: "Date of Commencement of Production/Business",
              type: "string",
            },
            {
              title: "Date of Incorporation",
              type: "string",
            },
            {
              title: "Date of Udyam Registration",
              type: "string",
            },
            {
              title: "MSME-DFO",
              type: "string",
            },
            {
              title: "Major Activity",
              type: "string",
            },
            {
              title: "Name of Enterprise",
              type: "string",
            },
            {
              title: "Organisation Type",
              type: "string",
            },
            {
              title: "Social Category",
              type: "string",
            },
            {
              title: "Enterprise Type",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "Classification Date",
                    type: "string",
                  },
                  {
                    title: "Classification Year",
                    type: "string",
                  },
                  {
                    title: "Enterprise Type",
                    type: "string",
                  },
                ],
              },
            },
            {
              title: "National Industry Classification Code(S)",
              type: "array",
              items: {
                type: "object",
                fields: [
                  {
                    title: "Activity",
                    type: "string",
                  },
                  {
                    title: "Date",
                    type: "string",
                  },
                  {
                    title: "Nic 2 Digit",
                    type: "string",
                  },
                  {
                    title: "Nic 4 Digit",
                    type: "string",
                  },
                  {
                    title: "Nic 5 Digit",
                    type: "string",
                  },
                ],
              },
            },
            {
              title: "Official address of Enterprise",
              type: "object",
              fields: [
                { title: "Flat/Door/Block No", type: "string" },
                { title: "Name of Premises/ Building", type: "string" },
                { title: "Village/Town", type: "string" },
                { title: "Block", type: "string" },
                { title: "Road/Street/Lane", type: "string" },
                { title: "City", type: "string" },
                { title: "State", type: "string" },
                { title: "District", type: "string" },
                { title: "Mobile", type: "string" },
                { title: "Email", type: "string" },
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
          fields: [
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
          subTitle: "The request was malformed or could not be processed as is.",
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
          subTitle: "A human-readable response explaining why the request was invalid.",
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
          subTitle: "A human-readable response indicating the resource does not exist.",
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
          subTitle: "The request could not be completed because it conflicts with existing data.",
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
          subTitle: "A list of validation errors describing what went wrong with the input.",
          type: "array of objects",
          objectDetails: [
            {
              title: "Ioc",
              type: "array",
              subTitle: "The location(s) in the request where the validation failed (e.g. field names).",
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
              subTitle: "The kind of validation error (e.g. 'required', 'format', 'type mismatch').",
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

