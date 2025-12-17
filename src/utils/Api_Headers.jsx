export const api_Headers = [
  {
    title: "client_id",
    type: "string",
    fieldName: "client_id",
    subTitle: "",
    inputTag: true,
    example: "",
    required: true,
  },
  {
    title: "secret_key",
    type: "string",
    subTitle: "",
    inputTag: true,
    fieldName: "secret_key",
    example: "",
    required: true,
  },
];

export const BbpsApi_Headers = [
  { title: "accessCode", type: "string", fieldName: "accessCode", required: true },
  { title: "ver", type: "string", fieldName: "ver", required: true },
  { title: "Institution ID", type: "string", fieldName: "timestamp", required: true },
  { title: "requestId", type: "string", fieldName: "requestId", required: true },
 
];

export const InstantpayApi_Headers = [
  {
    title: "X_Ipay_Auth_Code",
    type: "string",
    fieldName: "X-Ipay-Auth-Code",
    required: true,
    description: "Authentication code provided by Instantpay (fixed value: 1)"
  },
  {
    title: "X_Ipay_Client_Id",
    type: "string",
    fieldName: "X-Ipay-Client-Id",
    required: true,
    description: "Unique client ID provided by Instantpay"
  },
  {
    title: "X_Ipay_Client_Secret",
    type: "string",
    fieldName: "X-Ipay-Client-Secret",
    required: true,
    description: "Unique client secret key provided by Instantpay"
  },
  {
    title: "X_Ipay_Endpoint_Ip",
    type: "string",
    fieldName: "X-Ipay-Endpoint-Ip",
    required: true,
    description: "End customer IP address"
  }
];

