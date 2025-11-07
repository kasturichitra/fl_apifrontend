import React, { useState } from "react";
import data from "../../../json/Data";
import "../Service.css"
import gettingTokenFromLocalStorage from "../../../common/getTokenFromLocalStorage/GetToken";
import Call_api from '../../../Handileapicall/call_api'
import { toast } from "react-toastify";
import JsonResponseCard from "../../../common/DisplayJson/displayjson";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ErrorCode from "../../../common/ErrorCode/Errorcode";
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl'
import useGetWallet from "../../../common/GetWalletdetails/wallet";


const ShopEstablishment = () => {
    const [response, setResponse] = useState("")
    const [storingresponse, setStoringResponse] = useState({})
    const [token, setToken] = useState("")
    const [shopDetails, setShopDetails] = useState({
        registrationNumber: "",
        state: "",
    })
    const [error, setError] = useState(false);
    const fetchWallet = useGetWallet()

    const handleShopDetails = (e) => {
        const { name, value } = e.target
        const token = gettingTokenFromLocalStorage()
        setToken(token)
        setShopDetails((prevData) => ({ ...prevData, [name]: value }))
    }
    const handleShopVerification = async () => {
        if (shopDetails.registrationNumber) {
            if (shopDetails.state) {
                try {
                    const res = await Call_api(
                        `/shop/shopest`,
                        "POST",
                        shopDetails,
                        token
                    )
                    console.log(res?.response?.response?.result)
                    setResponse(true)
                    fetchWallet()
                    setStoringResponse(res?.response?.response?.result)
                } catch (error) {
                    console.log(error)
                    toast.error(error?.response?.message)
                }
            } else {
                toast.info('Please enter a state')
            }
        } else {
            toast.info('Please enter a registration number')
        }
    }

    return (
        <>
            <div className='bg-light text-dark p-2 rounded-3'>
                <h2>{data.shopEstablishment}</h2>
                <div className="row p-2">
                    <div className="card p-4 col-6">
                        <div className='d-flex justify-content-between align-items-center pe-4'>
                            <div className='fs-3'><span className='text-info'>POST</span> Shopestablishment Verification</div> <button className='btn rounded-4 bg-success-subtle text-success' onClick={() => setError(!error)}>View error : Codes</button>
                        </div>
                        <div className='py-3 mt-3' style={{ borderTop: '1px solid black' }} >
                            <div className='my-2'>
                                <b>Description: </b>Shopestablishment Verification
                            </div>
                            <div className='d-flex justify-content-between pe-3 my-3'>
                                <div className='text-secondary'> Setp 1: Enter Registration Number </div> <div className='text-primary'> View More Details</div>
                            </div>
                            <div className='d-flex justify-content-between pe-3 my-3'>
                                <div className='text-secondary'> Setp 2: Enter State </div>
                            </div>
                            <div className='my-3'>
                                <b>Body :</b>
                            </div>
                        </div>
                        <div className=" rounded border border-1 p-2">
                            <div className="w-50">
                                <label className="ps-2">Enter Registration Number <span className="text-danger">*</span></label>
                                <input type="text" name="registrationNumber" className="form-control" value={shopDetails.registrationNumber} placeholder="Enter Registration Number" onChange={(e) => handleShopDetails(e)} />

                                <label className="ps-2 mt-2">Enter State <span className="text-danger">*</span></label>
                                <input type="text" name="state" className="form-control" value={shopDetails.state} placeholder="Enter State" onChange={(e) => handleShopDetails(e)} />

                                <button onClick={() => handleShopVerification()} className="btn btn-info mt-3">{data.submit}</button>
                            </div>
                        </div>
                        <div>
                            {response && <div className='card mt-3'>
                                {response && storingresponse && (
                                    <JsonResponseCard Details={storingresponse} />
                                )}
                            </div>}
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
                                            {EXResponse.ShopEstablishmentCurl}
                                        </code>
                                    </pre>

                                    {/* Copy button on the right */}
                                    <button
                                        className="btn btn-outline-light position-absolute"
                                        style={{ top: '10px', right: '10px', fontSize: '12px', padding: '2px 6px' }}
                                        onClick={() => navigator.clipboard.writeText(EXResponse.ShopEstablishmentCurl)}
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
                                        <button className='btn btn-outline-secondary btn-sm' onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.ShopEstablishmentResponse, null, 2))}> 📋 Copy</button>
                                    </div>
                                </div>
                                <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                                    {JSON.stringify(EXResponse.ShopEstablishmentResponse, null, 2)}
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

            {/* Step 1: Enter Mobile Number */}


        </>
    )
}

export default ShopEstablishment