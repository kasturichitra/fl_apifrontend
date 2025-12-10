import React from "react";
import TableContents from "../components/TableContents";
import { CodeBlock, Heading, List, ListItem, Paragraph } from "../components/Ui";
import "../styles/ui.css"

const ApiKeys = () => {
  return (
    <div className="api_layout">

      {/* LEFT CONTENT */}
      <section className="api_main">

        <Heading level={2} id="api-keys-title">API Keys</Heading>

        <Paragraph>
          API keys are unique credentials used to authenticate requests made to the API.
          They identify your application, enforce access control, and track usage.
        </Paragraph>

        <Heading level={3} id="types-of-api-keys">Types of API Keys</Heading>
        <List>
          <ListItem><strong>Test Keys:</strong> Used for development and sandbox environments.</ListItem>
          <ListItem><strong>Live Keys:</strong> Used in production and must be stored securely.</ListItem>
          <ListItem><strong>Publishable Keys:</strong> Safe for limited client-side usage.</ListItem>
          <ListItem><strong>Rotatable Keys:</strong> Allows safe key rotation without downtime.</ListItem>
        </List>

        <Heading level={3} id="generate-api-keys">How to Generate API Keys</Heading>
        <List ordered>
          <ListItem>Open your dashboard and go to <strong>Developers → API Keys</strong>.</ListItem>
          <ListItem>Click <strong>"Generate New Key"</strong>.</ListItem>
          <ListItem>Select Test, Live, Publishable, or Rotatable.</ListItem>
          <ListItem>Copy the key and store it securely.</ListItem>
        </List>

        <Heading level={3} id="using-api-keys">Using API Keys</Heading>
        <Paragraph>API keys must be sent in the <strong>Authorization</strong> header using Bearer format.</Paragraph>

        <CodeBlock>
{`curl -X GET "https://api.yourdomain.com/v1/users" \\
-H "Authorization: Bearer YOUR_API_KEY"`}
        </CodeBlock>

        <CodeBlock>
{`// Node.js example
import axios from "axios";

axios.get("https://api.yourdomain.com/v1/users", {
  headers: {
    Authorization: \`Bearer \${process.env.API_KEY}\`,
  },
});`}
        </CodeBlock>

        <Heading level={3} id="sending-api-keys-securely">Sending API Keys Securely</Heading>
        <List>
          <ListItem>Always use HTTPS to encrypt API communication.</ListItem>
          <ListItem>Never send API keys in URL query strings.</ListItem>
          <ListItem>Use environment variables or secret managers.</ListItem>
          <ListItem>Restrict permissions to what is needed.</ListItem>
        </List>

        <Heading level={3} id="api-key-rotation">API Key Rotation</Heading>
        <List ordered>
          <ListItem>Generate a new API key.</ListItem>
          <ListItem>Update your server.</ListItem>
          <ListItem>Test your integration.</ListItem>
          <ListItem>Revoke the old key.</ListItem>
        </List>

        <Heading level={3} id="security-best-practices">Security Best Practices</Heading>
        <List>
          <ListItem>Keep production keys secure.</ListItem>
          <ListItem>Use separate keys for all environments.</ListItem>
          <ListItem>Enable IP allowlisting.</ListItem>
          <ListItem>Monitor API usage activity.</ListItem>
        </List>

        <Heading level={3} id="common-api-key-mistakes">Common Mistakes</Heading>
        <List>
          <ListItem>Exposing keys in GitHub.</ListItem>
          <ListItem>Sending keys using HTTP.</ListItem>
          <ListItem>Putting secret keys in frontend code.</ListItem>
          <ListItem>Not rotating keys regularly.</ListItem>
        </List>

      </section>

      {/* RIGHT SIDEBAR */}
      <aside className="api_toc">
        <TableContents />
      </aside>

    </div>
  );
};

export default ApiKeys;
