import React, { useEffect, useState } from "react";
import "../Service.css"
import data from "../../../json/Data";
import axios from "axios";
import DisplayObject from "../../../common/DisplayObject/DisplayObject";
import gettingTokenFromLocalStorage from "../../../common/getTokenFromLocalStorage/GetToken";
import Call_Api from "../../../Handileapicall/call_api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from "react-toastify";
import JsonResponseCard from "../../../common/DisplayJson/displayjson";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ErrorCode from "../../../common/ErrorCode/Errorcode";
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl'
import useGetWallet from "../../../common/GetWalletdetails/wallet";

const MobileNumberVerification = () => {
    const [mobileNumber, setMobileNumber] = useState("")
    const [mobileresponse, Setmobileresponse] = useState('')
    const [OtpResponse, SetOtpResponse] = useState('')
    const [otp, setOtp] = useState("false")
    const [response, setResponse] = useState(false)
    const [token, setToken] = useState("")
    const [storingresponse, setStoringResponse] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchWallet = useGetWallet()

    const apiUrl = process.env.REACT_APP_BACKEND_URL

    const handleMobileNumber = (e) => {
        const Mnumber = e.target.value
        const token = gettingTokenFromLocalStorage()
        setToken(token)
        setMobileNumber(Mnumber)
        setResponse(false)
    }
    const handleOtp = (e) => {
        setOtp(e.target.value)
    }

    const handleNumberOtpGeneration = async () => {
        if (mobileNumber.length === 10) {
            try {
                const res = await Call_Api(
                    '/otp/mobileOtp',
                    'POST',
                    {
                        mobileNumber
                    },
                    token
                )
                console.log(res)
                toast.info(res?.response?.success)
                Setmobileresponse(res)
                fetchWallet()
                setOtp("")
            } catch (err) {
                toast.error(err?.response?.data?.message)
                console.error("Error during registration:", err);
                console.error("Error during registration:", err.response.data.message);
            }
        }
        else {
            toast.warning("Please enter 10 digit mobile number")
        }
    }
    const handleNumberValidOtpVerification = async () => {
        if (otp.length === 4) {
            try {
                const res = await Call_Api(
                    '/otp/mobileotpVerify',
                    'POST',
                    { submittedOtp: otp, mobile: mobileNumber },
                    token
                )
                console.log(res)
                toast.info(res?.response?.message?.message)
                setResponse(true)
                fetchWallet()
                SetOtpResponse(res)
                setOtp("")
                setMobileNumber("")
                setToken("");
                setResponse(false)
            } catch (err) {
                toast.error(err?.response?.data?.message)
                console.error("Error during registration:", err);
                console.error("Error during registration:", err.response.data.message);
            }
        } else {
            toast.error('please enter valid otp')
        }
    }
    return (
        <>
            {/* Step 1: Enter Mobile Number */}
            <div className="bg-light text-dark p-2 rounded-3">
                <h2 className="text-center mb-4">{data.DobVerify}</h2>
                <div className="row p-2">
                    {/* Left Section */}
                    <div className="card p-4 col-6">
                        <div className="d-flex justify-content-between align-items-center pe-4">
                            <div className="fs-3">
                                <span className="text-info">POST</span> Step 1: Enter Mobile Number
                            </div>
                            <button className="btn rounded-4 bg-success-subtle text-success" onClick={() => setError(!error)}>
                                View Error Codes
                            </button>
                        </div>
                        <div className="py-3 mt-3" style={{ borderTop: "1px solid black" }}>
                            <div className="my-2">
                                <b>Description:</b> Verify Mobile Number
                            </div>
                            <div className="d-flex justify-content-between pe-3 my-3">
                                <div className="text-secondary">Step 1: Enter Mobile Number</div>
                                <div className="text-primary">View More Details</div>
                            </div>
                            <div className="my-3">
                                <b>Body:</b>
                            </div>
                        </div>
                        {/* PAN Input Field */}
                        <div>
                            MobileNumber <span className="text-danger">*</span>
                        </div>
                        <div className="input-group w-50">
                            <input type="number" name="mobileNumber" value={mobileNumber} className="form-control w-50" placeholder="Enter Mobile Number" onChange={(e) => handleMobileNumber(e)} pattern="^\d{10}$" title="Please enter exactly 10 digits" required />
                            <button onClick={() => handleNumberOtpGeneration()} className="btn btn-info">{data.submit}</button>
                        </div>

                        {/* Response Card */}
                        {mobileresponse && (
                            <div className="card p-4 mt-3">
                                <JsonResponseCard Details={mobileresponse} />
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
                                        <code className="language-bash">{EXResponse.MobileverificationCurl}</code>
                                    </pre>
                                    <button
                                        className="btn btn-outline-light position-absolute"
                                        style={{ top: "10px", right: "10px", fontSize: "12px", padding: "2px 6px" }}
                                        onClick={() => navigator.clipboard.writeText(EXResponse.MobileverificationCurl)}
                                    >
                                        📋 Copy
                                    </button>
                                </div>
                            </div>

                            <div className="ExResponse">
                                <b>Example Response</b>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn bg-secondary text-light px-2 py-1 rounded mb-3">Response</button>
                                    <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.MobileverificationResponse, null, 2))}>
                                        📋 Copy
                                    </button>
                                </div>
                                <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                                    {JSON.stringify(EXResponse.MobileverificationResponse, null, 2)}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Step 2: Mobile Verification with OTP */}
                <div className="row p-2">
                    {/* Left Section */}
                    <div className="card p-4 col-6">
                        <div className="d-flex justify-content-between align-items-center pe-4">
                            <div className="fs-3">
                                <span className="text-info">POST</span> Step 2: Enter OTP
                            </div>
                            <button className="btn rounded-4 bg-success-subtle text-success" onClick={() => setError(!error)}>
                                View Error Codes
                            </button>
                        </div>
                        <div className="py-3 mt-3" style={{ borderTop: "1px solid black" }}>
                            <div className="my-2">
                                <b>Description:</b>Verify  Mobile Number with Otp 
                            </div>
                            <div className="d-flex justify-content-between pe-3 my-3">
                                <div className="text-secondary">Step 2: Enter OTP</div>
                                <div className="text-primary">View More Details</div>
                            </div>
                            <div className="my-3">
                                <b>Body:</b>
                            </div>
                        </div>
                        {/* PAN Input Field */}
                        <div>
                            MobileNumber <span className="text-danger">*</span>
                        </div>
                        <div className="input-group w-50">
                            <input type="number" name="otp" value={otp} placeholder="Enter Otp" onChange={(e) => handleOtp(e)} className="form-control" />
                            <button onClick={() => handleNumberValidOtpVerification()} className="btn btn-info">{data.verify}</button>
                        </div>

                        {/* Response Card */}
                        {OtpResponse && (
                            <div className="card p-4 mt-3">
                                <JsonResponseCard Details={OtpResponse} />
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
                                        <code className="language-bash">{EXResponse.MobileOTPverificationCurl}</code>
                                    </pre>
                                    <button
                                        className="btn btn-outline-light position-absolute"
                                        style={{ top: "10px", right: "10px", fontSize: "12px", padding: "2px 6px" }}
                                        onClick={() => navigator.clipboard.writeText(EXResponse.MobileOTPverificationCurl)}
                                    >
                                        📋 Copy
                                    </button>
                                </div>
                            </div>

                            <div className="ExResponse">
                                <b>Example Response</b>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn bg-secondary text-light px-2 py-1 rounded mb-3">Response</button>
                                    <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.MobileOTPverificationResponse, null, 2))}>
                                        📋 Copy
                                    </button>
                                </div>
                                <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                                    {JSON.stringify(EXResponse.MobileOTPverificationResponse, null, 2)}
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

export default MobileNumberVerification