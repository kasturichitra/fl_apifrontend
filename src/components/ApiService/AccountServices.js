import React from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../json/Data'
const AccountServices = () => {
  const navigate = useNavigate()

  const handleService = (ser) => {
    if (ser) {
      navigate(`/dashboard/Accountverify/${ser}`)
    }
  }
  return (
    <div className='container my-5 row'>
      <div className='col-3'>
        <div className='text-center text-dark'>
          <button className='border btn btn-outline-dark m-2 rounded-3 w-100' onClick={() => handleService("bank")} style={{ cursor: "pointer" }}>
            {data.BankAccountVerification}
          </button>
          <button className='border btn btn-outline-dark m-2 rounded-3 w-100' onClick={() => handleService("name")} style={{ cursor: "pointer" }}>
            {data.ComparingTwoNamesVerification}
          </button>
          <button className='border btn btn-outline-dark m-2 rounded-3 w-100' onClick={() => handleService("holder")} style={{ cursor: "pointer" }}>
            {data.NameVerificationoftheAccountHolder}
          </button>
          <button className='border btn btn-outline-dark m-2 rounded-3 w-100' onClick={() => handleService("ifsc")} style={{ cursor: "pointer" }}>
            {data.GetAccountwithIFSC}
          </button>
        </div>
        {/* <div className='border btn btn-outline-light m-2 rounded-3 w-100' onClick={()=>handleService("ifsc")} style={{cursor:"pointer"}}>
            {data.ifscVerification}
        </div> */}
      </div>
      <div className='col'>

      </div>
    </div>
  )
}

export default AccountServices
