export function generateCode(url, params = {}) {
  const formattedParams = Object.entries(params)
    .map(([key, value]) => `      "${key}": "${value}"`)
    .join(",\n");

  if (Object.keys(params).length == 1 && Object.hasOwn(params, "file")) {
    return {
      fetch: `const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',    
    client_id: 'Your_CLIENT_ID',   
    secret_key: 'Your_SECRET_KEY' 
  },
  body: formData.append('file', 'image')
};

fetch(${url}, options)
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
    body: formData.append('file', 'image')
};

axios.request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`,
    };
  }

  if (Object.keys(params).length === 0) {
    return {
      fetch: `const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    client_id: 'Your_CLIENT_ID',
    secret_key: 'Your_SECRET_KEY'
  }
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
  }
};

axios.request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`,
    };
  } else {
    return {
      fetch: `const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    access_token: 'YOUR_ACCESS_TOKEN'
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
    access_token: 'YOUR_ACCESS_TOKEN'
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
}
