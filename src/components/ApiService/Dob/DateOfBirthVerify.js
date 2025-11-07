
import React, { useState } from "react";
import Call_Api from "../../../Handileapicall/call_api";
import DisplayObject from "../../../common/DisplayObject/DisplayObject";
import data from "../../../json/Data";
import gettingTokenFromLocalStorage from "../../../common/getTokenFromLocalStorage/GetToken";
import { useNavigate } from "react-router-dom";
import JsonResponseCard from "../../../common/DisplayJson/displayjson";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ErrorCode from "../../../common/ErrorCode/Errorcode";
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl'
import { path } from "../../../common/path/path";
import useGetWallet from "../../../common/GetWalletdetails/wallet";

const DateOfBirthVerification = () => {
  const [panNumber, setPanNumber] = useState("");
  const [response, setResponse] = useState(false);
  const [storingresponse, setStoringResponse] = useState({});
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const fetchWallet = useGetWallet()


  const handlePanNumber = (e) => {
    setResponse(false);
    const token = gettingTokenFromLocalStorage();
    setToken(token);
    setPanNumber(e.target.value);
  };

    const handlePanVerification = async () => {
      try {
        const res = await Call_Api(
          path.PANDOBVERIFY,
          'POST',
          {
            panNumber: panNumber
          },
          token
        )
        console.log(res?.response?.message?.result,' the api')
        setStoringResponse(res.response);
        setResponse(true);
        fetchWallet()
        setPanNumber("");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);  // Hide loader after request is finished
      }
    };

  return (
    <>
      <div className="bg-light text-dark p-2 rounded-3" >
        <h2 className="text-center mb-4">{data.DobVerify}</h2>
        <div className="row p-2">
          {/* Left Section */}
          <div className="card p-4 col-6">
            <div className="d-flex justify-content-between align-items-center pe-4">
              <div className="fs-3">
                <span className="text-info">POST</span> Step 1: Enter PAN Number
              </div>
              <button className="btn rounded-4 bg-success-subtle text-success" onClick={() => setError(!error)}>
                View Error Codes
              </button>
            </div>
            <div className="py-3 mt-3" style={{ borderTop: "1px solid black" }}>
              <div className="my-2">
                <b>PID:</b> DOB Verification
              </div>
              <div className="my-2">
                <b>Description:</b> Verify Date of Birth using PAN Number
              </div>
              <div className="d-flex justify-content-between pe-3 my-3">
                <div className="text-secondary">Step 1: Enter PAN Number</div>
                <div className="text-primary">View More Details</div>
              </div>
              <div className="my-3">
                <b>Body:</b>
              </div>
            </div>
            {/* PAN Input Field */}
            <div>
              Enter PAN Number <span className="text-danger">*</span>
            </div>
            <div className="input-group w-50">
              <input
                type="text"
                id="panNumber"
                className="form-control"
                placeholder="Enter PAN Number"
                value={panNumber}
                onChange={(e)=>handlePanNumber(e)}
                maxLength="10"
              />
              <button onClick={()=>handlePanVerification()} className="btn btn-primary" disabled={loading}>
                {data.submit}
              </button>
            </div>

            {/* Response Card */}
            {response && (
              <div className="card mt-3">
                <JsonResponseCard Details={storingresponse} />
              </div>
            )}

            {/* Loader */}
            {loading && (
              <div className="text-center mt-3">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Example Request & Response */}
          <div className="col-6 p-3 border border-1 p-2 card">
            <div className="bg-dark text-light p-3 rounded position-relative">
              <div className="Curl">
                <b>Example Request</b>
                <div className="bg-dark text-light p-3 rounded position-relative" style={{ fontFamily: "monospace", overflowX: "auto", maxHeight: "400px" }}>
                  <div className="bg-secondary text-light px-2 py-1 rounded" style={{ display: "inline-block", fontSize: "14px", fontWeight: "bold" }}>
                    Curl
                  </div>
                  <pre style={{ marginTop: "10px", whiteSpace: "pre-wrap" }}>
                    <code className="language-bash">{EXResponse.DOBwithPanVerifyCurl}</code>
                  </pre>
                  <button
                    className="btn btn-outline-light position-absolute"
                    style={{ top: "10px", right: "10px", fontSize: "12px", padding: "2px 6px" }}
                    onClick={() => navigator.clipboard.writeText(EXResponse.DOBwithPanVerifyCurl)}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>

              <div className="ExResponse">
                <b>Example Response</b>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn bg-secondary text-light px-2 py-1 rounded mb-3">Response</button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.DOBwithPanVerifyResponse, null, 2))}>
                    📋 Copy
                  </button>
                </div>
                <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                  {JSON.stringify(EXResponse.DOBwithPanVerifyResponse, null, 2)}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ErrorCode open={error} onClose={() => setError(false)} />
    </>
  );
};

export default DateOfBirthVerification;

