import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import data from '../../json/Data'
const PanServices = () => {
  const navigate = useNavigate()

  const handleService = (ser) => {
    if (ser) {
      navigate(`/dashboard/PanVerification/${ser}`)
    }
  }
  return (
    <div className='container my-5 row'>
      <div className='col-3'>
        <div className='text-center text-dark'>
          <button className='border btn btn-outline-dark m-2 rounded-3 w-100' onClick={() => handleService("pan")} style={{ cursor: "pointer" }}>
            {data.panNumber}
          </button>
          <button className='border btn btn-outline-dark m-2 rounded-3 w-100' onClick={() => handleService("nameVerify")} style={{ cursor: "pointer" }}>
            {data.panHolder}
          </button>
          <button className='border btn btn-outline-dark m-2 rounded-3 w-100' onClick={() => handleService("dob")} style={{ cursor: "pointer" }}>
            {data.dob}
          </button>
        </div>
      </div>
      <div className='col'>
      </div>
    </div>
  )
}

export default PanServices
