export function generateCode(url, params) {
  // Convert params object to formatted key-value lines
  const formattedParams = Object.entries(params)
    .map(([key, value]) => `    "${key}": "${value}"`)
    .join(",\n");

  return {
    fetch: `const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    client_id: 'Your_CLIENT_ID',
    secret_key: 'Your_SECRET_KEY'
  },
  body: JSON.stringify({
${formattedParams}
  })
};

fetch('${url}', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));`,

    axios: `import axios from 'axios';

const options = {
  method: 'POST',
  url: '${url}',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    client_id: 'Your_CLIENT_ID',
    secret_key: 'Your_SECRET_KEY'
  },
  data: {
${formattedParams}
  }
};

axios.request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`,
  };
}
