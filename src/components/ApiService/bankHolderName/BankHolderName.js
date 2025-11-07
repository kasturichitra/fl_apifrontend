import React, { useState } from 'react'
import data from '../../../json/Data';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import Call_Api from '../../../Handileapicall/call_api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import JsonResponseCard from '../../../common/DisplayJson/displayjson';
import ErrorCode from '../../../common/ErrorCode/Errorcode';
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl';
import useGetWallet from '../../../common/GetWalletdetails/wallet';

const BankHolderName = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(false);
    const navigate = useNavigate('')
    const fetchWallet = useGetWallet

    return (
        <>
            <div className='bg-light text-dark p-2 rounded-3'>
                <div >
                    <h2 className="text-center text-dark mb-4">{data.HolderNameVerify}</h2>
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
                                    initialValues={{ accountNumber: '', IFSC: '', panHolderName: '' }}
                                    validationSchema={Yup.object({
                                        accountNumber: Yup.string()
                                            .required("accountNumber is required"),
                                        IFSC: Yup.string().required("IFSC is required"),
                                        panHolderName: Yup.string().required("PanhHolderName is required")
                                    })}
                                    onSubmit={async (values) => {
                                        try {
                                            const token = JSON.parse(localStorage.getItem('token'));
                                            const apiResponse = await Call_Api(
                                                '/verify/verifyholdername', //routes
                                                'POST', // HTTP method
                                                { account_no: values.accountNumber, ifsc: values.IFSC, name: values.panHolderName },
                                                token
                                            );

                                            console.log(apiResponse)
                                            setResponse(apiResponse)
                                            fetchWallet()
                                        } catch (err) {
                                            console.log(err)
                                            toast.error(err?.response?.message)
                                        }
                                    }}
                                >
                                    {
                                        form => (
                                            <Form>
                                                <div className='p-3 border rounded text-start'>
                                                    <div>
                                                        <b >{data.panHolderName}</b>
                                                        <Field type="text" name="panHolderName" className='form-control' placeholder='Enter Pan Holder Name' />
                                                        <ErrorMessage name="panHolderName" component="div" className='text-danger' />
                                                    </div>
                                                    <div>
                                                        <b>{data.accountNumber}</b>
                                                        <Field type="text" name="accountNumber" className='form-control' placeholder='Enter AccountNumber' />
                                                        <ErrorMessage name="accountNumber" component="div" className='text-danger' />
                                                    </div>
                                                    <div>
                                                        <b>{data.ifscCode}</b>
                                                        <Field type="text" name="IFSC" className='form-control' placeholder='Enter IFSC Code' />
                                                        <ErrorMessage name="IFSC" component="div" className='text-danger' />
                                                    </div>
                                                    <div>
                                                        <button className='btn btn-info mt-2 w-100' type='submit' >Submit</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )
                                    }
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
                                                {EXResponse.BankHolderVerifyCurl}
                                            </code>
                                        </pre>

                                        {/* Copy button on the right */}
                                        <button
                                            className="btn btn-outline-light position-absolute"
                                            style={{ top: '10px', right: '10px', fontSize: '12px', padding: '2px 6px' }}
                                            onClick={() => navigator.clipboard.writeText(EXResponse.BankHolderVerifyCurl)}
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
                                            <button className='btn btn-outline-secondary btn-sm' onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.BankHolderVerifyResponse, null, 2))}> 📋 Copy</button>
                                        </div>
                                    </div>
                                    <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                                        {JSON.stringify(EXResponse.BankHolderVerifyResponse, null, 2)}
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

export default BankHolderName
