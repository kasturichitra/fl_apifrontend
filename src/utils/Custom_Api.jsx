import axios from "axios";

export const FetchApi = async ({ path, method, body = {}, headers = {} }) => {
  const url = "http://localhost:7010";
  const fetchUrl = url + path;
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiI5MzQ2NzIxMjkyIiwiaWF0IjoxNzYwNDE1MDk1LCJleHAiOjE3NjA0NTEwOTV9.lTWV5Mjw6IrUDSb31m1RJhMVuY1BkWcw9lf57mhYngU";
  const config = {
    method,
    url: fetchUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  };

  if (method.toUpperCase() !== "GET") {
    config.data = body;
  }

  const res = await axios(config);

  return res;
};
