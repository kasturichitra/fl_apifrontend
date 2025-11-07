import React from "react";
import "./NavBar.css"
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ()=>{
    const location = useLocation()
    const navigate = useNavigate()

    const specificRoute = "/"
    const baseRoute = "/dashboard"
    const uniqueRoute = "/serviceTracking"
    const handleNavigation = (route)=>{
        if(route == "register"){
            navigate("/register")

        }else if(route == "logout"){
            localStorage.removeItem("token")
            navigate("/login")
        }
        else if(route == "service"){
            navigate("/serviceTracking")
        }
        else if(route == "back"){
            navigate("/dashboard")
        }
        else{
            navigate("/login")
        }
    }

    return (<>
    <div className="NavDiv">
        <div className="titleDiv">
        <p>NTAR - API SERVICE</p>
        </div>
        {location.pathname === specificRoute && (
                    <div className="btnsDiv">
                        <button onClick={()=> handleNavigation("register")}>Register</button>
                        <button onClick={()=> handleNavigation("login")}>Login</button>
                    </div>
                )}
        {location.pathname === uniqueRoute && (
                    <div className="btnsDiv">
                        <button onClick={()=> handleNavigation("back")}>Back</button>
                    </div>
                )}
        {location.pathname.startsWith(baseRoute) && (
                    <div className="btnsDiv">
                        <button onClick={()=> handleNavigation("service")}>Services</button>
                        <button onClick={()=> handleNavigation("logout")}>Log Out</button>
                    </div>
                )}
    </div>
    </>)
}


export default NavBar;