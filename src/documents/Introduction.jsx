import React from "react";
import "../styles/introduction.css"
const Introduction = () => {
  return (
    <div className="guide_page">

      <section id="introduction" className="guide_section">
        <h1>1. Introduction</h1>
        <p>
          FlowPipe is a unified service platform designed to simplify and
          centralize multiple verification, payment, and automation workflows.
          Instead of integrating with several individual providers, FlowPipe
          gives you a single API that connects everything—from PAN and Aadhaar
          verification to payments, BBPS, payouts, collections, and more.
        </p>
        <p>
          This guide helps you understand how FlowPipe works, what it offers,
          and how you can seamlessly add it to your applications with minimal
          effort. The goal is to make your onboarding smooth, predictable, and
          enjoyable.
        </p>
      </section>

     
      <section id="getting-started" className="guide_section">
        <h2>2. Getting Started</h2>
        <p>
          This section introduces the first steps required to begin your
          integration journey. You’ll learn how to register your account, verify
          your business, access the developer dashboard, and understand the
          difference between test mode and production mode.
        </p>
        <p>
          We also explain how the FlowPipe environment works and what tools you
          need before you start building.
        </p>
      </section>

      <section id="overview" className="guide_section">
        <h2>3. Overview</h2>
        <p>The overview helps you see the big picture of how FlowPipe is structured.</p>

        <ul>
          <li><strong>Identity & KYC Services:</strong> PAN, Aadhaar, Face Match, DigiLocker.</li>
          <li><strong>Payment Services:</strong> Accept payments via Razorpay, Cashfree.</li>
          <li><strong>Financial Services:</strong> Payouts, pay-ins, UPI transfers, banking tools.</li>
          <li><strong>Utility Services:</strong> BBPS – electricity, recharge, broadband.</li>
          <li><strong>Messaging Services:</strong> SMS OTP, alerts, notifications.</li>
        </ul>

        <p>
          You will understand how requests flow through the system and how
          FlowPipe ensures reliability and security.
        </p>
      </section>

      
      <section id="authentication" className="guide_section">
        <h2>4. Authentication</h2>
        <p>
          FlowPipe uses secure, industry-standard methods to authenticate and authorize every request.
        </p>
      </section>

      <section id="oauth" className="guide_section">
        <h3>4.2 OAuth 2.0</h3>
        <p>
          Required when your application needs permission-based access. Covers
          authorization flows, permission scopes, and secure redirects.
        </p>
      </section>

      <section id="jwt-tokens" className="guide_section">
        <h3>4.3 JWT Tokens</h3>
        <p>
          JWT tokens help validate secure sessions. We explain claims,
          expiration, validation, and best practices.
        </p>
      </section>
      <section id="core-endpoints" className="guide_section">
        <h2>5. Core Endpoints</h2>
      </section>

      <section id="users-api" className="guide_section">
        <h3>5.1 Users API</h3>
        <p>
          Manage user accounts, profiles, verification status, and updates.
        </p>
      </section>

      <section id="orders-api" className="guide_section">
        <h3>5.2 Orders API</h3>
        <p>
          Create and manage order lifecycles — from creation to completion.
        </p>
      </section>

      <section id="payments-api" className="guide_section">
        <h3>5.3 Payments API</h3>
        <p>
          Initiate payments, track status, process refunds, and monitor settlements.
        </p>
      </section>
      <section id="error-handling" className="guide_section">
        <h2>6. Error Handling</h2>
      </section>

      <section id="error-codes" className="guide_section">
        <h3>6.1 Error Codes</h3>
        <p>
          All errors include a code, message, and reason to help diagnose issues fast.
        </p>
      </section>

      <section id="rate-limiting" className="guide_section">
        <h3>6.2 Rate Limiting</h3>
        <p>
          FlowPipe uses request limits to ensure stability. This section explains how to avoid blocks.
        </p>
      </section>
      <section id="advanced-topics" className="guide_section">
        <h2>7. Advanced Topics</h2>
      </section>

      <section id="webhooks" className="guide_section">
        <h3>7.1 Webhooks</h3>
        <p>
          Webhooks send real-time notifications to your server for important events.
        </p>
      </section>

      <section id="filtering-sorting" className="guide_section">
        <h3>7.2 Filtering & Sorting</h3>
        <p>
          Refine API data using filters and sorting to improve performance.
        </p>
      </section>

      <section id="best-practices" className="guide_section">
        <h3>7.3 Best Practices</h3>
        <p>
          Recommendations for building secure, scalable, and reliable integrations.
        </p>
      </section>
      <section id="changelog" className="guide_section">
        <h2>8. Changelog</h2>
      </section>

      <section id="release-notes" className="guide_section">
        <h3>8.1 Release Notes</h3>
        <p>
          A transparent list of updates, new features, improvements, and patches.
        </p>
      </section>
      <section id="reference" className="guide_section">
        <h2>9. Reference</h2>
      </section>

      <section id="sdks-libraries" className="guide_section">
        <h3>9.1 SDKs & Libraries</h3>
        <p>
          FlowPipe offers SDKs for faster integration across different languages.
        </p>
      </section>

      <section id="faqs" className="guide_section">
        <h3>9.2 FAQs</h3>
        <p>
          Answers to common developer and business questions.
        </p>
      </section>

    </div>
  );
};

export default Introduction;
