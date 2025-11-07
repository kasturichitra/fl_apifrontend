import React, { useEffect, useState } from "react";
import data from "../../json/Data";
import "./profile.css";
import { useSelector } from "react-redux";
import Call_Api from "../../Handileapicall/call_api";

const Profile = () => {
  const dataReceived = useSelector((state)=>state.user.user)
  console.log(dataReceived , "=====>>>>>>dataReceived")

  // Add state for editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState("");

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  useEffect(()=>{
    setEditedData(dataReceived)
  },[dataReceived])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSave = async() => {
    setIsEditing(false);
    console.log("Saved Data: ", editedData);
    try{
      const response = await Call_Api("/registeration/updateUser", "PUT", editedData)
      console.log(response)
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card m-2 p-2">
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/544/708/original/profile-icon-design-free-vector.jpg"
                  alt="no Image"
                  width="50px"
                  height="50px"
                />
              </div>
              <div>
                <h1 style={{ textTransform: "capitalize", marginBottom: "0px" }}>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editedData?.name}
                      onChange={handleChange}
                      style={{ border: "1px solid #ccc", padding: "5px" }}
                    />
                  ) : (
                    editedData?.name
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex">
        <div className="col">
          <div className="card m-2 p-2">
            <h3>{data?.ProfileDetails}</h3>
            <table className="ptable">
              <tr>
                <td>{data.name}</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editedData?.name}
                      onChange={handleChange}
                    />
                  ) : (
                    editedData?.name
                  )}
                </td>
              </tr>
              <tr>
                <td>{data.email}</td>
                <td>
                  {
                    editedData?.email
                  }
                </td>
              </tr>
              <tr>
                <td>{data.mobile}</td>
                <td>
                  {
                    editedData?.mobileNumber
                  }
                </td>
              </tr>
              <tr>
                <td>{data.gender}</td>
                <td>
                  {isEditing ? (
                    <>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={editedData?.gender === "Male"}
                        onChange={handleChange}
                      />{" "}
                      <label htmlFor="gender">{data?.Male}</label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={editedData?.gender === "Female"}
                        onChange={handleChange}
                      />{" "}
                      <label htmlFor="gender">{data?.Female}</label>
                    </>
                  ) : (
                    editedData?.gender
                  )}
                </td>
              </tr>
              <tr>
                <td>{data.companyName}</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="companyName"
                      value={editedData.companyName || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    editedData?.companyName || "N/A"
                  )}
                </td>
              </tr>
              <tr>
                <td>{data.join}</td>
                <td>
                  {
                    editedData?.createdDate || "N/A"
                  }
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card p-2 m-2">
            <button onClick={handleEditClick} className="m-2">
              {isEditing ? "Cancel" : "Edit"}
            </button>

            {isEditing && (
              <button onClick={handleSave} className="m-2">Save</button>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Profile;

