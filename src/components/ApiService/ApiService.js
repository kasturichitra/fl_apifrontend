import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Call_Api from "../../Handileapicall/call_api";

const ApiService = ()=>{

    const user = useSelector((state=>state.user.user))
    console.log(user)
    const getUsersCount = async ()=>{
        const response = await Call_Api('http://localhost:3001/api/users')
    }
    useEffect(()=>{
        getUsersCount()
    },[])
    return (
        <>
        <div className="apiServiceDiv">
            {user && user.name == "john" ? <div>
                <div className="card p-3">
                    <p>UserCount : {user?.count}</p>
                </div>
            </div> : 
            <h1 className="text-dark text-center">Select One ApiService that You Want</h1>
        }
        </div>
        </>
    )
}

export default ApiService;