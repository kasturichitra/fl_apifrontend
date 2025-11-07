import React, { useState } from "react";
import axios from "axios";
import data from "../../../json/Data";
import "../Service.css";
import gettingTokenFromLocalStorage from "../../../common/getTokenFromLocalStorage/GetToken";
import Call_Api from "../../../Handileapicall/call_api";
import JsonResponseCard from "../../../common/DisplayJson/displayjson";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ErrorCode from "../../../common/ErrorCode/Errorcode";
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl';
import { path } from "../../../common/path/path";
import { useDispatch } from "react-redux";
import useGetWallet from "../../../common/GetWalletdetails/wallet";

const GstInVerify = () => {
  const [gstInNumber, setGstInNumber] = useState("")
  const [storingresponse, setStoringResponse] = useState(null)
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const fetchWallet = useGetWallet();

  const handleGstInNumber = (e) => {
    const token = gettingTokenFromLocalStorage()
    setToken(token)
    setGstInNumber(e.target.value.toUpperCase())
  }
  const handleGstInVerification = async () => {
    try {
      const res = await Call_Api(
        path.GSTINVERIFY,
        'POST',
        {
          gstinNumber: gstInNumber
        },
        token
      )
      console.log(res ,'<--- this gst response')
      setStoringResponse(res?.response)
      fetchWallet()
      setGstInNumber("")
    } catch (error) {
      console.log(error)
      alert(error?.response?.data?.message)
    }

  }

  return (
    <>
      <div className="bg-light text-dark p-2 rounded-3" >
        <h2 className="text-center ">{data.gst_in_verification}</h2>
        <div className="row p-2">
          {/* Left Section */}
          <div className="card p-4 col-6">
            <div className="d-flex justify-content-between align-items-center pe-4">
              <div className="fs-3">
                <span className="text-info">POST</span> Enter GSTIN Number
              </div>
              <button className="btn rounded-4 bg-success-subtle text-success" onClick={() => setError(!error)}>
                View Error Codes
              </button>
            </div>
            <div className="py-3 mt-3" style={{ borderTop: "1px solid black" }}>
              <div className="my-2">
                <b>Description:</b> Enter the GSTIN number of the company you want to verify.
              </div>
              <div className="d-flex justify-content-between pe-3 my-3">
                <div className="text-secondary">Step 1: Enter GSTIN Number</div>
                <div className="text-primary">View More Details</div>
              </div>
              <div className="my-3">
                <b>Body:</b>
              </div>
            </div>
            {/* PAN Input Field */}
            <div>
              Enter GSTIN Number <span className="text-danger">*</span>
            </div>
            <div className="input-group w-50">
              <input type="text" name="getNumber" value={gstInNumber} className="form-control" placeholder="Enter Gst In Number" onChange={(e) => handleGstInNumber(e)} />
              <button onClick={() => handleGstInVerification()} className="btn btn-info" >{data.submit}</button>
            </div>

            {/* Response Card */}
            {storingresponse && (
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
                    <code className="language-bash">{EXResponse.GSTCurl}</code>
                  </pre>
                  <button
                    className="btn btn-outline-light position-absolute"
                    style={{ top: "10px", right: "10px", fontSize: "12px", padding: "2px 6px" }}
                    onClick={() => navigator.clipboard.writeText(EXResponse.GSTCurl)}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>

              <div className="ExResponse">
                <b>Example Response</b>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn bg-secondary text-light px-2 py-1 rounded mb-3">Response</button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.GSTResponse, null, 2))}>
                    📋 Copy
                  </button>
                </div>
                <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                  {JSON.stringify(EXResponse.GSTResponse, null, 2)}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ErrorCode open={error} onClose={() => setError(false)} />
    </>
  )
}

export default GstInVerify;