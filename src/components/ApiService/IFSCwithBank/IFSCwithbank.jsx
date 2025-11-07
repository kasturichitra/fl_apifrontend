import React, { useState } from 'react'
import Call_Api from '../../../Handileapicall/call_api';
import DisplayObject from '../../../common/DisplayObject/DisplayObject';
import data from '../../../json/Data';
import gettingTokenFromLocalStorage from '../../../common/getTokenFromLocalStorage/GetToken';
import { useNavigate } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import JsonResponseCard from '../../../common/DisplayJson/displayjson';
import ErrorCode from '../../../common/ErrorCode/Errorcode';
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl';
import useGetWallet from '../../../common/GetWalletdetails/wallet';


const IFSCwithbankAccount = () => {
  const [ifsc, setIfsc] = useState("");
  const [response, setResponse] = useState("");
  const [storingresponse, setStoringResponse] = useState();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  const fetchWallet = useGetWallet()


  const handleIfsc = (e) => {
    setResponse(false);
    const token = gettingTokenFromLocalStorage();
    setToken(token);
    setIfsc((e.target.value).toUpperCase());
  };

  const handleIfscVerification = async () => {
    try {
      const res = await Call_Api(
        '/bin/getBankDetails',
        'POST',
        {
          ifsc: ifsc
        },
        token
      )
      console.log(res, ' the api')
      setStoringResponse(res);
      fetchWallet()
      setIfsc("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);  // Hide loader after request is finished
    }
  };

  return (
    <>
      {/* <div className="container mt-5 ">
        <h2 className="text-center mb-4">{data.ifscVerify}</h2>
        <div><span className="btn btn-outline-light fs-5" onClick={() => navigate('/dashboard/Accountverify')}>←</span></div>
        <div className="w-75 mx-auto d-flex justify-content-between">
          <div className="card p-4 h-25">
            <div className="form-group">
              <label htmlFor="aadhaarNumber">{data.ifscCode}</label>
              <input
                type="text"
                id="ifsc"
                className="form-control"
                placeholder="Enter IFSC code"
                value={ifsc}
                onChange={handleIfsc}
                maxLength="12"
              />
            </div>

            <div className="text-center mt-3">
              <button
                onClick={handleIfscVerification}
                className="btn btn-primary"
                disabled={loading}
              >
                {data.submit}
              </button>
            </div>
          </div>
          <div>

            {response && <div className='card p-4'>
              {response && storingresponse && (
                <div>
                  <h2>{data.res}</h2>
                  <div className="resDiv">
                    <DisplayObject obj={storingresponse} />
                  </div>
                </div>
              )}
              {loading && (
                <div className="text-center mt-3">
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
              )}
            </div>}
          </div>
        </div>
      </div> */}

      <div className='bg-light text-dark p-2 rounded-3'>
        <div >
          <h2 className="text-center text-dark mb-4">{data.ifscVerify}</h2>
          <div className="row p-2">
            <div className="card p-4 col-6">
              <div className='d-flex justify-content-between align-items-center pe-4'>
                <div className='fs-3'><span className='text-info'>POST</span> Verify BankAccount & IFSC</div> <button className='btn rounded-4 bg-success-subtle text-success' onClick={() => setError(!error)}>View error : Codes</button>
              </div>
              <div className='py-3 mt-3' style={{ borderTop: '1px solid black' }} >
                <div className='my-2'>
                  <b>Description: </b> Verify Bank Account & IFSC
                </div>
                <div className='d-flex justify-content-between pe-3 my-3'>
                  <div className='text-secondary'> Setp 1: Enter IFSC Code</div> <div className='text-primary'> View More Details</div>
                </div>
                <div className='my-3'>
                  <b>Body :</b>
                </div>
              </div>
              <div>
                <div className='input-group mb-3 w-50'>
                  <input
                    type="text"
                    id="ifsc"
                    className="form-control"
                    placeholder="Enter IFSC code"
                    value={ifsc}
                    onChange={(e)=>handleIfsc(e)}
                    maxLength="12"
                  />
                  <button
                onClick={()=>handleIfscVerification()}
                className="btn btn-primary"
                disabled={loading}
              >
                {data.submit}
              </button>
                </div>
              </div>
              <div className="overflow-auto">
                {storingresponse && <div className='card p-4 mt-3'>
                  <JsonResponseCard Details={storingresponse} />
                </div>
                }
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
                        {EXResponse.IFSCVerifyCurl}
                      </code>
                    </pre>

                    {/* Copy button on the right */}
                    <button
                      className="btn btn-outline-light position-absolute"
                      style={{ top: '10px', right: '10px', fontSize: '12px', padding: '2px 6px' }}
                      onClick={() => navigator.clipboard.writeText(EXResponse.IFSCVerifyCurl)}
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
                      <button className='btn btn-outline-secondary btn-sm' onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.IFSCVerifyResponse, null, 2))}> 📋 Copy</button>
                    </div>
                  </div>
                  <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                    {JSON.stringify(EXResponse.IFSCVerifyResponse, null, 2)}
                  </SyntaxHighlighter>
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

export default IFSCwithbankAccount
