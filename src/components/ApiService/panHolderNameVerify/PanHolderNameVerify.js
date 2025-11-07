import React, { useState } from 'react'
import data from '../../../json/Data';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import Call_Api from '../../../Handileapicall/call_api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup'
import ErrorCode from '../../../common/ErrorCode/Errorcode';
import JsonResponseCard from '../../../common/DisplayJson/displayjson';
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl'
import { path } from '../../../common/path/path';
import useGetWallet from "../../../common/GetWalletdetails/wallet";

const PanHolderNameVerify = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate('');
    const fetchWallet = useGetWallet()

    return (
        <>
            <div>
                <div className='bg-light text-dark p-2 rounded-3' >
                    <h2 className="text-center text-dark mb-4">{data.HolderNameVerify}</h2>
                    <div className="row p-2">
                        <div className="card p-4 col-6">
                            <div className='d-flex justify-content-between align-items-center pe-4'>
                                <div className='fs-3'><span className='text-info'>POST</span> Enter Your Name</div> <button className='btn rounded-4 bg-success-subtle text-success' onClick={() => setError(!error)}>View error : Codes</button>
                            </div>
                            <div className='py-3 mt-3' style={{ borderTop: '1px solid black' }} >
                                <div className='my-2'>
                                    <b>PID :-</b>
                                </div>
                                <div className='my-2'>
                                    <b>Description: </b>
                                </div>
                                <div className='d-flex justify-content-between pe-3 my-3'>
                                    <div className='text-secondary'> Setp 1: Enter Name</div> <div className='text-primary'> View More Details</div>
                                </div>
                                <div className='d-flex justify-content-between pe-3 my-3'>
                                    <div className='text-secondary'> Setp 2: Enter Pan Number</div>
                                </div>

                                <div className='my-3'>
                                    <b>Body :</b>
                                </div>
                            </div>
                            <Formik
                                initialValues={{ name: '', panNumber: '' }}
                                validationSchema={yup.object({
                                    name: yup.string().required('Name is required'),
                                    panNumber: yup.string().required('Pan Number is required')
                                })}
                                onSubmit={async (values) => {
                                    try {
                                        const token = JSON.parse(localStorage.getItem('token'));
                                        const apiResponse = await Call_Api(
                                            path.PANNAMEVERIFY, //routes
                                            'POST', // HTTP method
                                            values,
                                            token
                                        );
                                        console.log(apiResponse)
                                        setResponse(apiResponse)
                                        fetchWallet()
                                    } catch (err) {
                                        console.log(err)
                                        toast.error(err?.response?.message)
                                    } finally {
                                        setLoading(false);  // Hide loader after request is finished
                                    }
                                }}
                            >
                                {
                                    form =>
                                        <Form>
                                            <div className='w-75 p-3 border rounded text-start'>
                                                <div>
                                                    <b >{data.VerificationName} <span className='text-danger'>*</span></b>
                                                    <Field type="text" name="name" className='form-control' placeholder='Enter Name to Verify' />
                                                    <ErrorMessage name="name" component="div" className='text-danger' />
                                                </div>
                                                <div>
                                                    <b>{data.pan} <span className='text-danger'>*</span></b>
                                                    <Field type="text" name="panNumber" className='form-control' placeholder='Enter Pan Number' />
                                                    <ErrorMessage name="panNumber" component="div" className='text-danger' />
                                                </div>
                                                <div>
                                                    <button className='btn btn-info mt-2 w-100' type='submit' >Submit</button>
                                                </div>
                                            </div>
                                        </Form>

                                }
                            </Formik>

                            <div>
                                {response && <div className='card p-4 mt-3'>
                                    <JsonResponseCard Details={response} />

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
                                                {EXResponse.panHolderNameverifyCurl}
                                            </code>
                                        </pre>

                                        {/* Copy button on the right */}
                                        <button
                                            className="btn btn-outline-light position-absolute"
                                            style={{ top: '10px', right: '10px', fontSize: '12px', padding: '2px 6px' }}
                                            onClick={() => navigator.clipboard.writeText(EXResponse.panHolderNameverifyCurl)}
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
                                            <button className='btn btn-outline-secondary btn-sm' onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.panHolderNameverifyResponse, null, 2))}> 📋 Copy</button>
                                        </div>
                                    </div>
                                    <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                                        {JSON.stringify(EXResponse.panHolderNameverifyResponse, null, 2)}
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
    )
}

export default PanHolderNameVerify

