import React, { useState } from "react";
import data from "../../json/Data"
import { useNavigate } from "react-router-dom";
import "./Mainpage.css"
import bg from '../../assets/landingpage_BG.png'

const MainPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const handleVerification = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }
    return (<>
        <div className="main-page">
            <div>
                <header className="d-flex py-3 bg-white justify-content-evenly ">
                    <div className="text-dark fs-2 fw-medium">
                        Ntar
                    </div>
                    <nav>
                        <span className="text-dark fs-5 fw-medium me-3" onClick={() => navigate('/')} style={{cursor:"pointer"}}>
                            About Us
                        </span>
                        <span className="text-dark fs-5 fw-medium me-3" onClick={() => navigate('/')} style={{cursor:"pointer"}}>
                            Contact Us
                        </span>
                        <span className="text-dark fs-5 fw-medium me-3" onClick={() => navigate('/register')} style={{cursor:"pointer"}}>
                            Sign In
                        </span>
                        <span className="text-dark fs-5 fw-medium me-3" onClick={() => navigate('/login')} style={{cursor:"pointer"}}>
                            Login
                        </span>
                    </nav>
                    <div>
                        <button className="btn btn-primary" onClick={handleVerification}>Verify</button>
                    </div>
                </header>
            </div>
            <div className="row pt-5">
                <div className="col-6 text-center pt-5">
                    <div>
                        <div className="fs-2  mt-5 pt-5">
                            Unlock the Power of APIs for Your Business.
                            <div>With<span className="fs-2 ps-2 fw-medium "> NTAR</span></div>
                        </div>
                        <div className="mt-5 pt-5">
                            <div className="d-flex align-items-center flex-wrap w-auto">
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/PanVerification')}>PanVerification →</button>
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/AadhaarVerification')}>AadhaarVerification →</button>
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/MobileNumberVerification')}>MobileNumberVerification →</button>
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/ShopEstablishment')}>ShopEstablishment →</button>
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/GstInverify')}>GstInverify →</button>
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/CinNumber')}>CinNumber →</button>
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/FaceMatch')}>FaceMatch →</button>
                                <button className="btn btn-outline-dark w-50 mb-3 pointer-event"  onClick={()=>navigate('/dashboard/Accountverify')}>Accountverify →</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mainpagebg">
                </div>
            </div>

        </div>
    </>)
}

export default MainPage;