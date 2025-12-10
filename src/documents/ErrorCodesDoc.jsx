import React from "react";
import { Heading, Paragraph, List, ListItem, CodeBlock } from "../components/Ui";
import TableContents from "../components/TableContents";
import { ERROR_CODES } from "../utils/ErrorCodes"; // path to the above file

const ErrorCodesDoc = () => {
  return (
    <div className="api_layout">
      <section className="api_main">
        <Heading level={2} id="error-codes-title">Error Codes</Heading>
        <Paragraph>
          This section lists all standard API error codes and messages returned by the server.
        </Paragraph>

        <Heading level={3} id="common-error-codes">Common Error Codes</Heading>
        <List>
          {Object.entries(ERROR_CODES).map(([key, { httpCode, message }]) => (
            <ListItem key={key}>
              <strong>{key}</strong> ({httpCode}): {message}
            </ListItem>
          ))}
        </List>

        <Heading level={3} id="example-usage">Example Usage</Heading>
        <CodeBlock>
{`try {
  const data = await apiCall();
} catch(err) {
  const error = mapError(err);
  console.log(error.httpCode, error.message);
}`}
        </CodeBlock>
      </section>

      <aside className="api_toc">
        <TableContents />
      </aside>
    </div>
  );
};

export default ErrorCodesDoc;
