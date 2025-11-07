import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const FaceDocumentation = () => {
  const face = {
    userimage: "userimage",
    aadharImage: "aadharImage",
  };

  const faceHeaders = {
    client_id: "client_id",
    secret_key: "secret_key",
    content_type: "Application/json",
  };

  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Face Match Verify Documentation</h2>
      <p>Here is the documentation for the Face Match Verify Implementation</p>
      <p>{data?.Fstep}</p>
      <div>
        <h3>{data?.Overview}</h3>
        <p>You can verify that whether two images are matching</p>
        <p>
          You should have two images of a same person that one image can be
          their aadhaarImage also
        </p>
        <p>
          For this you need to provide both images of a same person to the api
        </p>
      </div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>userimage</p>
        <p className="validation_details">
          You have to send a userimage of a person whom do you want to verify
        </p>
        <hr />
        <p>aadharImage</p>
        <p className="validation_details">
          If you have an aadharImage , then you can use it to verify
        </p>
        <p className="validation_details">
          otherwise, you can use send another image of the same person to verify
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>userimage*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">You should upload a userimage</p>
        <p className="validation_details">
          {data?.imageValid}
        </p>
        <hr />
        <p>aadharImage*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">
          You should upload a aadharImage or another image of a same person
        </p>
        <p className="validation_details">
        {data?.imageValid}        </p>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>
          You should send userimage and aadharImage in the body of the request
        </p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(face, null, 2)} </pre>
        </p>
        <p>
          You should send the userimage and aadharImage in the Place of Value
          userimage and aadharImage as shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(faceHeaders, null, 2)} </pre>
        </p>
        <p>
        {data?.client}
        </p>
        <p>{data?.keys}</p>
      </div>
    </div>
  );
};

export default FaceDocumentation;
