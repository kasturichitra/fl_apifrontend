import React, { useState } from 'react'
import AdminHeader from '../../AdminHeader/AdminHeader'
import handleuser from '../../../common/getUserDetails/GetUserDetails'
import { addUser } from '../../../redux/slice/User/userSlice'
import { useDispatch } from 'react-redux'

const AdminDashboard = () => {
  const dispatch = useDispatch()
  const [data , setData] = useState({})

  const handleUserDetails = async() => {
    try {
      const response = await handleuser()
      console.log(response);
      if (response?.response?.response?.role == "admin") {
        dispatch(addUser(response?.response?.response));
        setData(response?.response?.response)
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    handleUserDetails()
  },[])

  return (
    <div>
        <AdminHeader/>
      AdminDashboard
    </div>
  )
}

export default AdminDashboard
