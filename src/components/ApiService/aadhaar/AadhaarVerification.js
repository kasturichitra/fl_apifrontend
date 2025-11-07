import React, { useState } from "react";
import data from "../../../json/Data";
import "../Service.css";
import gettingTokenFromLocalStorage from "../../../common/getTokenFromLocalStorage/GetToken";
import Call_Api from "../../../Handileapicall/call_api";
import { toast } from "react-toastify";
import { path } from "../../../common/path/path";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import JsonResponseCard from '../../../common/DisplayJson/displayjson';
import ErrorCode from '../../../common/ErrorCode/Errorcode';
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl';
import useGetWallet from "../../../common/GetWalletdetails/wallet";

const AadhaarVerification = () => {
  const [aadhaarNumber, setAAdhaarNumber] = useState("");
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState("");
  const [storingresponse, setStoringResponse] = useState(null);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientId, setClientId] = useState("");
  const [aadharResponse, setaadharResponse] = useState('');
  const fetchWallet = useGetWallet();

  React.useEffect(() => {
    const token = gettingTokenFromLocalStorage();
    setToken(token);
  }, []);

  const handleAadhaarNumber = (e) => {
    setAAdhaarNumber(e.target.value);
  };

  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  // OTP generation API call
  const handleAadhaarOtpGeneration = async () => {
    if (aadhaarNumber.length === 0) {
      toast.warn('Enter Aadhar Number')
    } else if (aadhaarNumber.length !== 12) {
      toast.warn('Your Entered Aadhaar Number is wrong')
    } else {
      try {
        const res = await Call_Api(
          '/aadhaar/sentAadhaarotp',
          "POST",
          { aadharNumber: aadhaarNumber },
          token
        );
        if (res?.response?.success) {
          toast.info(
            "OTP sent successfully. Please enter the OTP to proceed."
          )
          setClientId(res?.response?.clientId);
          fetchWallet()
          setaadharResponse(res)
          setOtp('')
        } else {
          toast.error(
            res?.response?.message || "Error sending OTP"
          )
        }
      } catch (error) {
        console.log(error);
        toast.error(
          "Error while sending OTP: " + error.message
        )
      }
    }
  };

  // OTP verification API call
  const handleAadhaarValidOtpVerification = async () => {
    try {
      setLoading(true); // Set loading true while waiting for API response

      const res = await Call_Api(
        "/aadhaar/Aadhaarotpverify",
        "POST",
        { otp: otp, client_id: clientId, aadharNumber: aadhaarNumber },
        token
      );
      console.log(res, '<== this is response from the otp')
      toast.info(res?.response?.message);
      setStoringResponse(res?.response?.aadhaarData);
      fetchWallet()
      setAAdhaarNumber("");
    } catch (error) {
      console.log(error);
      toast.error("Error while verifying OTP");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className='bg-light text-dark p-2 rounded-3'>
        {/* Step 1: Enter Aadhaar Number  */}
        <div >
          <h2 className="text-center text-dark mb-4">{data.aadhaarVerify}</h2>
          <div className="row p-2">
            <div className="card p-4 col-6">
              <div>
                <div className='d-flex justify-content-between align-items-center pe-4'>
                  <div className='fs-3'><span className='text-info'>POST</span> Step 1: Enter Aadhar Number</div> <button className='btn rounded-4 bg-success-subtle text-success' onClick={() => setError(!error)}>View error : Codes</button>
                </div>
                <div className='py-3 mt-3' style={{ borderTop: '1px solid black' }} >
                  <div className='my-2'>
                    <b>Description: </b>
                  </div>
                  <div className='d-flex justify-content-between pe-3 my-3'>
                    <div className='text-secondary'> Setp 1: Enter Aadhar Number</div> <div className='text-primary'> View More Details</div>
                  </div>
                  <div className='my-3'>
                    <b>Body :</b>
                  </div>
                </div>
                <div htmlFor="otp">AadhaarNumber <span className="text-danger">*</span> </div>
                <div className="input-group w-50">
                  <input
                    type="number"
                    id="aadhaarNumber"
                    className="form-control"
                    placeholder="Enter Aadhaar Number"
                    value={aadhaarNumber}
                    onChange={(e) => handleAadhaarNumber(e)}
                    maxLength="12"
                  />
                  <button
                    onClick={() => handleAadhaarOtpGeneration()}
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {data.submit}
                  </button>
                </div>
                <div className="overflow-auto">
                  {aadharResponse && <div className='card p-4 mt-3'>
                    <JsonResponseCard Details={aadharResponse} />
                  </div>
                  }
                </div>
              </div>
            </div>
            <div className='col-6 p-3 border border-1 p-2 card'>
              <div className='bg-dark text-light p-3 rounded position-relative'>
                <div className='Curl'>
                  <b>Example Request</b>
                  <div
                    className='bg-dark text-light p-3 rounded position-relative'
                    style={{ fontFamily: 'monospace', overflowX: 'auto', maxHeight: '400px' }}
                  >
                    {/* Styled "Curl" button at the top-left */}
                    <div
                      className="bg-secondary text-light px-2 py-1 rounded"
                      style={{ display: 'inline-block', fontSize: '14px', fontWeight: 'bold' }}
                    >
                      Curl
                    </div>

                    <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
                      <code className="language-bash">
                        {EXResponse.AadhaarNumberCurl}
                      </code>
                    </pre>

                    {/* Copy button on the right */}
                    <button
                      className="btn btn-outline-light position-absolute"
                      style={{ top: '10px', right: '10px', fontSize: '12px', padding: '2px 6px' }}
                      onClick={() => navigator.clipboard.writeText(EXResponse.AadhaarNumberCurl)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
                <div className='ExResponse'>
                  <b>Example Response</b>
                  <div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <button className='btn bg-secondary text-light px-2 py-1 rounded mb-3'>Response</button>
                      <button className='btn btn-outline-secondary btn-sm' onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.AadhaarNumberResponse, null, 2))}> 📋 Copy</button>
                    </div>
                  </div>
                  <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                    {JSON.stringify(EXResponse.AadhaarNumberResponse, null, 2)}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Step 2: Enter OTP */}
        <div >
          <div className="row p-2">
            <div className="card p-4 col-6" >
              <div>
                <div className='d-flex justify-content-between align-items-center pe-4'>
                  <div className='fs-3'><span className='text-info'>POST</span> Step 2: Enter OTP</div> <button className='btn rounded-4 bg-success-subtle text-success' onClick={() => setError(!error)}>View error : Codes</button>
                </div>
                <div className='py-3 mt-3' style={{ borderTop: '1px solid black' }} >
                  <div className='my-2'>
                    <b>Description: </b>
                  </div>
                  <div className='d-flex justify-content-between pe-3 my-3'>
                    <div className='text-secondary'>Setp 2: Enter OTP </div> <div className='text-primary'> View More Details</div>
                  </div>
                  <div className='my-3'>
                    <b>Body :</b>
                  </div>
                </div>
                <div>
                  <div htmlFor="otp">OTP <span className="text-danger">*</span> </div>
                  <div className="input-group w-50">
                    <input
                      type="number"
                      id="otp"
                      className="form-control"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => handleOtp(e)}
                    />
                    <button
                      onClick={() => handleAadhaarValidOtpVerification()}
                      className="btn btn-success"
                      disabled={loading}
                    >
                      {data.verify}
                    </button>
                  </div>
                </div>
                <div>
                  {storingresponse && <div className='card p-4 mt-3'>
                    <JsonResponseCard Details={storingresponse} />

                    {loading && (
                      <div className="text-center mt-3">
                        <div className="spinner-border" role="status">
                          <span className="sr-only"></span>
                        </div>
                      </div>
                    )}
                  </div>
                  }
                </div>
              </div>
            </div>
            <div className='col-6 p-3 border border-1 p-2 card'>
              <div className='bg-dark text-light p-3 rounded position-relative'>
                <div className='Curl'>
                  <b>Example Request</b>
                  <div
                    className='bg-dark text-light p-3 rounded position-relative'
                    style={{ fontFamily: 'monospace', overflowX: 'auto', maxHeight: '400px' }}
                  >
                    {/* Styled "Curl" button at the top-left */}
                    <div
                      className="bg-secondary text-light px-2 py-1 rounded"
                      style={{ display: 'inline-block', fontSize: '14px', fontWeight: 'bold' }}
                    >
                      Curl
                    </div>

                    <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
                      <code className="language-bash">
                        {EXResponse.AadhaarOtpCurl}
                      </code>
                    </pre>

                    {/* Copy button on the right */}
                    <button
                      className="btn btn-outline-light position-absolute"
                      style={{ top: '10px', right: '10px', fontSize: '12px', padding: '2px 6px' }}
                      onClick={() => navigator.clipboard.writeText(EXResponse.AadhaarOtpCurl)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
                <div className='ExResponse'>
                  <b>Example Response</b>
                  <div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <button className='btn bg-secondary text-light px-2 py-1 rounded mb-3'>Response</button>
                      <button className='btn btn-outline-secondary btn-sm' onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.AadhaarOtpResponse, null, 2))}> 📋 Copy</button>
                    </div>
                  </div>
                  <div >
                    <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                      {JSON.stringify(EXResponse.AadhaarOtpResponse, null, 2)}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <ErrorCode
          open={error}
          onClose={() => setError(false)}
        />
      </div>
    </>
  );
};

export default AadhaarVerification;


