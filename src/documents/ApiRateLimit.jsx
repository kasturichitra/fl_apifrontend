import React from "react";
import TableContents from "../components/TableContents";
import {
  CodeBlock,
  Heading,
  List,
  ListItem,
  Paragraph,
} from "../components/Ui";
import "../styles/ui.css";

const ApiRateLimit = () => {
  return (
    <div className="api_layout">
      {/* LEFT CONTENT */}
      <section className="api_main">
        <Heading level={2} id="api-rate-limiting-title">
          API Rate Limiting
        </Heading>

        <Paragraph>
          Rate limiting is a mechanism to control the number of requests a
          client can make to an API in a given period. It protects your service
          from abuse, ensures fair usage, and prevents server overload.
        </Paragraph>

        <Heading level={3} id="why-rate-limiting">
          Why Rate Limiting is Important
        </Heading>
        <List>
          <ListItem>Prevents denial-of-service attacks and abuse.</ListItem>
          <ListItem>
            Protects server resources and maintains performance.
          </ListItem>
          <ListItem>Ensures fair usage among multiple clients.</ListItem>
          <ListItem>Helps track and monitor API usage patterns.</ListItem>
        </List>

        <Heading level={3} id="rate-limiting-strategies">
          Common Rate Limiting Strategies
        </Heading>
        <List>
          <ListItem>
            <strong>Fixed Window:</strong> Counts requests in fixed time
            intervals.
          </ListItem>
          <ListItem>
            <strong>Sliding Window:</strong> Smooths bursts by counting requests
            in rolling windows.
          </ListItem>
          <ListItem>
            <strong>Token Bucket:</strong> Allows bursts while controlling
            average request rate.
          </ListItem>
          <ListItem>
            <strong>Leaky Bucket:</strong> Processes requests at a constant
            rate, smoothing traffic.
          </ListItem>
        </List>

        <Heading level={3} id="rate-limit-headers">
          Rate Limit Headers
        </Heading>
        <Paragraph>
          APIs often communicate usage limits via HTTP headers. Common headers
          include:
        </Paragraph>
        <List>
          <ListItem>
            <strong>X-RateLimit-Limit:</strong> Maximum allowed requests in the
            current window.
          </ListItem>
          <ListItem>
            <strong>X-RateLimit-Remaining:</strong> Requests left in the current
            window.
          </ListItem>
          <ListItem>
            <strong>X-RateLimit-Reset:</strong> Time (epoch seconds) until the
            limit resets.
          </ListItem>
        </List>

        <Heading level={3} id="rate-limit-example">
          Example Usage
        </Heading>

        <CodeBlock>
          {`// Node.js example using axios
import axios from "axios";

axios.get("https://api.yourdomain.com/v1/data", {
  headers: {
    Authorization: \`Bearer \${process.env.API_KEY}\`,
  },
})
.then(response => console.log(response.data))
.catch(error => {
  if (error.response.status === 429) {
    console.log("Rate limit exceeded. Retry after:", error.response.headers["retry-after"]);
  }
});`}
        </CodeBlock>

        <Heading level={3} id="best-practices">
          Rate Limiting Best Practices
        </Heading>
        <List>
          <ListItem>
            Apply different limits for different endpoints based on sensitivity.
          </ListItem>
          <ListItem>
            Use per-user or per-API key limits to ensure fairness.
          </ListItem>
          <ListItem>Monitor usage and log rejected requests.</ListItem>
          <ListItem>
            Use headers to communicate limits and retry times to clients.
          </ListItem>
        </List>

        <Heading level={3} id="common-mistakes">
          Common Mistakes
        </Heading>
        <List>
          <ListItem>
            Not setting limits on all endpoints, leaving some vulnerable.
          </ListItem>
          <ListItem>
            Using too strict limits, blocking legitimate traffic.
          </ListItem>
          <ListItem>
            Failing to inform clients about limit headers or retry time.
          </ListItem>
        </List>
      </section>

      {/* RIGHT SIDEBAR */}
      <aside className="api_toc">
        <TableContents />
      </aside>
    </div>
  );
};

export default ApiRateLimit;
