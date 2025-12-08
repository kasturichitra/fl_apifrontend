import React from "react";

const ApiKeys = () => {
  return (
    <section id="api-keys" className="guide_section">

      <h2>API Keys</h2>
      <p>
        API keys are unique credentials used to authenticate requests made to the API.
        They identify your application, enforce access control, and track usage.
      </p>


      {/* TYPES OF API KEYS */}
      <h3>Types of API Keys</h3>
      <ul>
        <li>
          <strong>Test Keys:</strong> Used for development and sandbox environments. They cannot
          perform real operations.
        </li>
        <li>
          <strong>Live Keys:</strong> Used in production. Must be stored securely and never exposed
          publicly.
        </li>
        <li>
          <strong>Publishable Keys:</strong> Safe for client-side usage with limited permissions.
        </li>
        <li>
          <strong>Rotatable Keys:</strong> Allows you to cycle keys without downtime. Old keys remain
          functional until revoked.
        </li>
      </ul>


      {/* GENERATION */}
      <h3>How to Generate API Keys</h3>
      <ol>
        <li>Open your dashboard and go to <strong>Developers → API Keys</strong>.</li>
        <li>Click <strong>"Generate New Key"</strong>.</li>
        <li>Select Test, Live, Publishable, or Rotatable.</li>
        <li>
          Copy the key and store it securely. Keys are only shown once for security reasons.
        </li>
      </ol>


      {/* USING API KEYS */}
      <h3>Using API Keys</h3>
      <p>API keys must be sent in the <strong>Authorization</strong> header using Bearer format.</p>

      <pre className="code_block">
{`curl -X GET "https://api.yourdomain.com/v1/users" \\
-H "Authorization: Bearer YOUR_API_KEY"`}
      </pre>

      <pre className="code_block">
{`// Node.js example
import axios from "axios";

axios.get("https://api.yourdomain.com/v1/users", {
  headers: {
    Authorization: \`Bearer \${process.env.API_KEY}\`,
  },
});`}
      </pre>


      {/* SENDING API KEYS SECURELY */}
      <h3>Sending API Keys Securely</h3>
      <ul>
        <li>Always use HTTPS to encrypt API communication.</li>
        <li>Never send API keys in the URL query string.</li>
        <li>Use environment variables or secret managers.</li>
        <li>Restrict key permissions to only what is required.</li>
      </ul>


      {/* KEY ROTATION */}
      <h3>API Key Rotation</h3>
      <p>
        Key rotation helps prevent unauthorized access. When rotating keys:
      </p>
      <ol>
        <li>Generate a new API key.</li>
        <li>Update your server to use the new key.</li>
        <li>Test your application.</li>
        <li>Revoke the old key from the dashboard.</li>
      </ol>


      {/* SECURITY BEST PRACTICES */}
      <h3>Security Best Practices</h3>
      <ul>
        <li>Keep all production keys private and secure.</li>
        <li>Use separate keys for development, staging, and production.</li>
        <li>Enable IP allowlisting when possible.</li>
        <li>Monitor API usage to detect suspicious activity.</li>
        <li>Avoid hardcoding keys directly in source code.</li>
      </ul>


      {/* COMMON MISTAKES */}
      <h3>Common Mistakes</h3>
      <ul>
        <li>Exposing keys in GitHub repositories.</li>
        <li>Using HTTP instead of HTTPS.</li>
        <li>Putting secret keys in client-side code.</li>
        <li>Forgetting to rotate keys regularly.</li>
      </ul>

    </section>
  );
};

export default ApiKeys;
