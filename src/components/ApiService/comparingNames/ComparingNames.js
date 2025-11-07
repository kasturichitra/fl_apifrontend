import React, { useState } from "react";
import Call_Api from "../../../Handileapicall/call_api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import data from "../../../json/Data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import JsonResponseCard from '../../../common/DisplayJson/displayjson';
import ErrorCode from '../../../common/ErrorCode/Errorcode';
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl';
import useGetWallet from "../../../common/GetWalletdetails/wallet";

const ComparingNames = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate('')
  const fetchWallet = useGetWallet()

  return (
    <>
      <div className='bg-light text-dark p-2 rounded-3'>
        <div >
          <h2 className="text-center text-dark mb-4">{data.NameVerify}</h2>
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
                  <div className='text-secondary'> Setp 1: Enter PanhHolderName</div> <div className='text-primary'> View More Details</div>
                </div>
                <div className='d-flex justify-content-between pe-3 my-3'>
                  <div className='text-secondary'> Setp 2: Enter AccountNumber</div>
                </div>
                <div className='d-flex justify-content-between pe-3 my-3'>
                  <div className='text-secondary'> Setp 3: Enter IFSC Number</div>
                </div>
                <div className='my-3'>
                  <b>Body :</b>
                </div>
              </div>
              <div>
                <Formik
                  initialValues={{ firstName: "", secondName: "" }}
                  onSubmit={async (values) => {
                    setResponse("");
                    try {
                      const token = JSON.parse(localStorage.getItem("token"));
                      const apiResponse = await Call_Api(
                        "/name/compareName", //routes
                        "POST", // HTTP method
                        { firstName: values.firstName, secondName: values.secondName },
                        token
                      );

                      console.log(apiResponse);
                      if (apiResponse.success) {
                        setResponse(apiResponse);
                        fetchWallet()
                      }
                      values.firstName = "";
                      values.secondName = "";
                    } catch (err) {
                      console.log(err);
                      toast.error(err?.response?.message);
                    }
                  }}
                >
                  {(form) => (
                    <Form>
                      <div className="p-3 border rounded text-start">
                        <div>
                          <b>{data.firstName}</b>
                          <Field
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="Enter firstName"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div>
                          <b>{data.secondName}</b>
                          <Field
                            type="text"
                            name="secondName"
                            className="form-control"
                            placeholder="Enter secondName"
                          />
                          <ErrorMessage
                            name="secondName"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div>
                          <button className="btn btn-info mt-2 w-100" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="overflow-auto">
                {response && <div className='card p-4 mt-3'>
                  <JsonResponseCard Details={response} />
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
                        {EXResponse.CompareNameCurl}
                      </code>
                    </pre>

                    {/* Copy button on the right */}
                    <button
                      className="btn btn-outline-light position-absolute"
                      style={{ top: '10px', right: '10px', fontSize: '12px', padding: '2px 6px' }}
                      onClick={() => navigator.clipboard.writeText(EXResponse.CompareNameCurl)}
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
                      <button className='btn btn-outline-secondary btn-sm' onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.CompareNameResponse, null, 2))}> 📋 Copy</button>
                    </div>
                  </div>
                  <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                    {JSON.stringify(EXResponse.CompareNameResponse, null, 2)}
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

export default ComparingNames;
