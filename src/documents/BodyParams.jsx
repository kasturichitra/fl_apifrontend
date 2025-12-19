import React from "react";
import TableContents from "../components/TableContents";
import { CodeBlock, Heading, List, ListItem, Paragraph } from "../components/Ui";
import "../styles/ui.css";

const BodyParams = () => {
  return (
    <div className="api_layout">

      {/* LEFT CONTENT */}
      <section className="api_main">

        <Heading level={2} id="body-parameters-title">Body Parameters</Heading>

        <Paragraph>
          Body parameters are used to send structured data to an API endpoint.
          They are commonly included in POST, PUT, and PATCH requests and define
          the data required to process the request.
        </Paragraph>

        <Heading level={3} id="when-to-use-body-params">When to Use Body Parameters</Heading>
        <List>
          <ListItem>When submitting forms or user data.</ListItem>
          <ListItem>When creating or updating resources.</ListItem>
          <ListItem>When sending sensitive data securely.</ListItem>
          <ListItem>When request payloads are complex or nested.</ListItem>
        </List>

        <Heading level={3} id="supported-body-formats">Supported Body Formats</Heading>
        <List>
          <ListItem><strong>JSON:</strong> Most commonly used format.</ListItem>
          <ListItem><strong>Form URL Encoded:</strong> Used for simple form submissions.</ListItem>
          <ListItem><strong>Multipart/Form-Data:</strong> Used for file uploads.</ListItem>
        </List>

        <Heading level={3} id="json-body-example">JSON Body Example</Heading>
        <Paragraph>
          The following example demonstrates sending body parameters in JSON format.
        </Paragraph>

        <CodeBlock>
{`POST /v1/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "isActive": true
}`}
        </CodeBlock>

        <Heading level={3} id="nodejs-body-example">Node.js Example</Heading>

        <CodeBlock>
{`import axios from "axios";

axios.post("https://api.yourdomain.com/v1/users", {
  name: "John Doe",
  email: "john@example.com",
  mobile: "9876543210",
}, {
  headers: {
    Authorization: \`Bearer \${process.env.API_KEY}\`,
    "Content-Type": "application/json",
  },
});`}
        </CodeBlock>

        <Heading level={3} id="required-vs-optional">Required vs Optional Parameters</Heading>
        <List>
          <ListItem><strong>Required:</strong> Must be present or the request will fail.</ListItem>
          <ListItem><strong>Optional:</strong> Can be omitted if not needed.</ListItem>
          <ListItem>Validation errors occur when required fields are missing.</ListItem>
        </List>

        <Heading level={3} id="validation-rules">Validation Rules</Heading>
        <List>
          <ListItem>Ensure correct data types (string, number, boolean).</ListItem>
          <ListItem>Respect minimum and maximum length constraints.</ListItem>
          <ListItem>Follow allowed value enums if defined.</ListItem>
          <ListItem>Nested objects must follow the expected structure.</ListItem>
        </List>

        <Heading level={3} id="security-body-params">Security Best Practices</Heading>
        <List>
          <ListItem>Always send body parameters over HTTPS.</ListItem>
          <ListItem>Never include sensitive data in plain text logs.</ListItem>
          <ListItem>Validate and sanitize input on the server.</ListItem>
          <ListItem>Use authentication and authorization checks.</ListItem>
        </List>

        <Heading level={3} id="common-body-param-errors">Common Mistakes</Heading>
        <List>
          <ListItem>Sending body data with GET requests.</ListItem>
          <ListItem>Incorrect Content-Type headers.</ListItem>
          <ListItem>Missing required fields.</ListItem>
          <ListItem>Incorrect JSON structure or invalid syntax.</ListItem>
        </List>

      </section>

      {/* RIGHT SIDEBAR */}
      <aside className="api_toc">
        <TableContents />
      </aside>

    </div>
  );
};

export default BodyParams;
