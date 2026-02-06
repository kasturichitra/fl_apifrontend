import React from "react";
import { Link } from "react-router-dom";

const AccessToken = () => {
  return (
    <div style={{ paddingBlock: "20px" }}>
      <h2>Access Token</h2>

      <p>
        An <strong>Access Token</strong> is required for all API requests. This
        token must be sent in the <strong>Authorization header</strong>
        for every API call. Requests without a valid access token will be
        rejected.
      </p>

      <p>
        The access token is used to authenticate and authorize the client,
        ensuring secure communication between your application and the API. It
        is a mandatory requirement and cannot be skipped.
      </p>

      <p>
        To Know more about AccessToken click here{" "}
        <Link to="/reference/accessToken" className="link_style">
          AccessToken
        </Link>
      </p>
    </div>
  );
};

export default AccessToken;
