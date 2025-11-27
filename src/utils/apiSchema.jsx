export const BaseFields = [
  {
    title: "message",
    type: "string",
    subTitle: "The http code",
  },
  {
    title: "success",
    type: "integer",
    subTitle: "The http code",
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
          subTitle: "Bad Request",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The http code",
        },
        {
          title: "response",
          type: "string",
          subType: "",
          subTitle: "The http code",
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
          subTitle: "Bad Request",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The http code",
        },
        {
          title: "response",
          type: "string",
          subType: "",
          subTitle: "The http code",
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
          subTitle: "Bad Request",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The http code",
        },
        {
          title: "response",
          type: "string",
          subType: "",
          subTitle: "The http code",
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
          subTitle: "",
          type: "array of objects",
          objectDetails: [
            {
              title: "Ioc",
              type: "array",
              subTitle: "",
              arrayTypes: ["string", "integer"],
            },
            {
              title: "msg",
              type: "string",
              subTitle: "",
              arrayTypes: [],
            },
            {
              title: "type",
              type: "string",
              subTitle: "",
              arrayTypes: [],
            },
          ],
        },
      ],
    },
  },
  {
    status: 500,
    summary: "A server error has occured.",
    body: {
      type: "object",
      fields: [
        {
          title: "message",
          type: "string",
          subType: "",
          subTitle: "Bad Request",
        },
        {
          title: "httpCode",
          type: "number",
          subType: "",
          subTitle: "The http code",
        },
      ],
    },
  },
];
