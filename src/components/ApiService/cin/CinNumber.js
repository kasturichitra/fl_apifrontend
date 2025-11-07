import React, { useState } from "react";
import axios from "axios";
import data from "../../../json/Data";
import "../Service.css"
import DisplayObject from "../../../common/DisplayObject/DisplayObject";
import gettingTokenFromLocalStorage from "../../../common/getTokenFromLocalStorage/GetToken";
import { toast } from "react-toastify";
import Call_Api from "../../../Handileapicall/call_api";
import JsonResponseCard from "../../../common/DisplayJson/displayjson";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ErrorCode from "../../../common/ErrorCode/Errorcode";
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl'
import { path } from "../../../common/path/path";
import useGetWallet from "../../../common/GetWalletdetails/wallet";

const CinNumber = () => {
    const [cinNumber, setCinNumber] = useState("")
    const [response, setResponse] = useState("")
    const [storingresponse, setStoringResponse] = useState("")
    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const apiUrl = process.env.REACT_APP_BACKEND_URL;
    const fetchWallet = useGetWallet()

    const handleCinNumber = (e) => {
        const token = gettingTokenFromLocalStorage()
        setToken(token)
        setCinNumber(e.target.value.toUpperCase())
    }

    const handleCinVerification = async () => {
        if (cinNumber.length === 0) {
            toast.warning("Enter Cin Number")
        }
        else if (!cinNumber.length === 21) {
            toast.warning("Your Entered Cin Number is wrong")
        }
        else {
            try {
                const res = await Call_Api(
                    path.CINVERIFY,
                    'POST',
                    { CIN: cinNumber },
                    token
                )
                console.log(res)
                setStoringResponse(res?.response?.message)
                setResponse(true)
                fetchWallet()
                setCinNumber("")
            } catch (error) {
                console.log(error)
                toast.error(error?.response?.data?.message)
            }
        }
    }

    return (
        <>
            <div>
                <div className="bg-light text-dark p-2 rounded-3" >
                    <h2 className="text-center">{data.cinVerification}</h2>
                    <div className="row p-2">
                        {/* Left Section */}
                        <div className="card p-4 col-6">
                            <div className="d-flex justify-content-between align-items-center pe-4">
                                <div className="fs-3">
                                    <span className="text-info">POST</span> Step 1:  Enter Your Cin Number
                                </div>
                                <button className="btn rounded-4 bg-success-subtle text-success" onClick={() => setError(!error)}>
                                    View Error Codes
                                </button>
                            </div>
                            <div className="py-3 mt-3" style={{ borderTop: "1px solid black" }}>
                                <div className="my-2">
                                    <b>Description:</b> Enter your CIN number to verify the company details.
                                </div>
                                <div className="d-flex justify-content-between pe-3 my-3">
                                    <div className="text-secondary">Step 1: Enter Your Cin Number</div>
                                    <div className="text-primary">View More Details</div>
                                </div>
                                <div className="my-3">
                                    <b>Body:</b>
                                </div>
                            </div>
                            {/* PAN Input Field */}
                            <div>
                                Enter Your Cin Number <span className="text-danger">*</span>
                            </div>
                            <div className="input-group w-50">
                                <input type="text" name="cinNumber" value={cinNumber} placeholder="Enter Cin Number" onChange={(e) => handleCinNumber(e)} className="form-control" />
                                <button onClick={handleCinVerification} className="btn btn-info">{data.submit}</button>
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
                                            <code className="language-bash">{EXResponse.CinCurl}</code>
                                        </pre>
                                        <button
                                            className="btn btn-outline-light position-absolute"
                                            style={{ top: "10px", right: "10px", fontSize: "12px", padding: "2px 6px" }}
                                            onClick={() => navigator.clipboard.writeText(EXResponse.CinCurl)}
                                        >
                                            📋 Copy
                                        </button>
                                    </div>
                                </div>

                                <div className="ExResponse">
                                    <b>Example Response</b>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn bg-secondary text-light px-2 py-1 rounded mb-3">Response</button>
                                        <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.CinResponse, null, 2))}>
                                            📋 Copy
                                        </button>
                                    </div>
                                    <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                                        {JSON.stringify(EXResponse.CinResponse, null, 2)}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ErrorCode open={error} onClose={() => setError(false)} />
            </div>
        </>
    )
}

export default CinNumber;
