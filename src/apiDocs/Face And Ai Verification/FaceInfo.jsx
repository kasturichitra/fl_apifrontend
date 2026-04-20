import React from "react";
import "../../styles/serviceInfo.css";

const FaceAIServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Face & AI Services</h2>

      <p className="service-description">
        Face & AI Services provide advanced AI-powered solutions to verify identity,
        detect manipulated media, and assess image quality. These services help
        organizations ensure authenticity, prevent fraud, and maintain high standards
        of digital content across various applications.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Face Match:</strong> Compares two facial images to determine
          whether they belong to the same individual, supporting identity
          verification and authentication processes.
        </li>

        <li>
          <strong>Deepfake Detection:</strong> Identifies AI-generated or
          manipulated videos and images to prevent misuse and ensure media
          authenticity.
        </li>

        <li>
          <strong>AI Detection:</strong> Detects whether content has been
          generated or altered using artificial intelligence techniques.
        </li>

        <li>
          <strong>AI & Deepfake Detection:</strong> Combines multiple detection
          methods to provide enhanced analysis of both AI-generated and
          deepfake content for higher accuracy.
        </li>

        <li>
          <strong>Blurriness Analysis:</strong> Evaluates image clarity and
          sharpness to determine usability and quality for further processing
          or verification.
        </li>
      </ul>

      <p className="service-footer">
        These services are widely used in identity verification, fraud prevention,
        content moderation, digital onboarding, and security compliance workflows.
      </p>
    </div>
  );
};

export default FaceAIServicesInfo;