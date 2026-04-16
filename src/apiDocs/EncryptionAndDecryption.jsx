import React from "react";
import "../styles/encryptionDecryption.css";

export default function EncryptionAndDecryption() {
  const handleDownload = () => {
    const content = `
ENCRYPTION & DECRYPTION IN API INTEGRATION

IMPORTANT FLOW:

1. REQUEST ENCRYPTION:
- All API request payloads must be encrypted before sending.
- Use the provided encryption utility function.
- Never send plain sensitive data.

Example:
const encryptedData = encryptPayload(payload);

2. API CALL:
- Send only encrypted data to backend.

Example:
FetchApi("/endpoint", encryptedData);

3. RESPONSE DECRYPTION:
- All API responses will be encrypted.
- Decrypt response before using it.

Example:
const decryptedData = decryptPayload(response);

IMPORTANT NOTES:
- Do not expose encryption keys in frontend.
- Always validate decrypted response.
- Ensure encryption/decryption functions are consistent across apps.
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "encryption-decryption-guide.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="page-wrapper">
      <div className="doc-container">
        <h1 className="doc-title">Encryption & Decryption Guide</h1>

        <p className="doc-text">
          This document explains how encryption and decryption should be handled
          in API integration.
        </p>

        <h2 className="doc-section-title">Key Points</h2>

        <ul className="doc-list">
          <li>Encrypt request payload before sending API call</li>
          <li>Decrypt response before using data</li>
          <li>Never expose encryption keys in frontend</li>
        </ul>

        <a href="/docs/encryption-guide.pdf" download={true} className="doc-button">
          Download Encryption And Decryption Guide
        </a>
      </div>
    </div>
  );
}
