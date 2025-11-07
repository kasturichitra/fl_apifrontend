import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./serviceTracking.css"

const ServiceTracking = () => {
  const currentDate = new Date().toLocaleString("en-GB", { hour12: true });
  const [serviceDetails, setServiceDetails] = useState({
    serviceName: "",
    serviceFor: "",
    serviceClientId: "",
    serviceSecretKey: "",
    serviceStatus: "Active",
    serviceType: "",
    createdDate: currentDate,
    limit: "",
  });
  const [services, setServices] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const servicesList = [
    "Aadhar",
    "Pan",
    "Account Verify",
    "Account Limit",
  ];
  const servicesNamesList = [
    "Invincible",
    "Zoop",
    "EaseBuzz",
    "Account Limit",
  ];

  const apiUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        apiUrl + "/service/get/serviceTracking"
      );
      console.log("services from database===>", response.data.data);
      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  
const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        console.log("serviceDetails===>", serviceDetails);
        const response = await axios.put(
          apiUrl + `/service/updateService`,
          serviceDetails
        );
        console.log("Service updated successfully:", response.data);
        if (response?.data?.success === true) {
          toast.success("Successfully updated API Service");
        } else {
          toast.error("Something went wrong");
        }
      } else {
        const response = await axios.post(
          apiUrl + "/service/save/serviceTracking",
          serviceDetails
        );
        console.log("Service saved successfully:", response.data);
      }
      setServiceDetails({
        serviceName: "",
        serviceFor: "",
        serviceClientId: "",
        serviceSecretKey: "",
        serviceStatus: "Active",
        serviceType: "",
        limit: "",
        createdDate: currentDate,
      });
      setIsEdit(false);
      setEditId(null);
      fetchServices();
    } catch (error) {
      console.error("Error saving service:", error);
    }
  };

  const handleEdit = (service) => {
    setServiceDetails({
      serviceName: service.serviceName,
      serviceFor: service.serviceFor,
      serviceClientId: service.serviceClientId,
      serviceSecretKey: service.serviceSecretKey,
      serviceStatus: service.serviceStatus,
      serviceType: service.serviceType,
      createdDate: service.createdDate,
    });
    setIsEdit(true);
    setEditId(service._id);
  };

  const handleDelete = async (service) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the service: ${service.serviceName}?`
    );

    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `${apiUrl}/service/deleteServiceTracking/${service.serviceName}`
        );
        if (response.data.success) {
          toast.success(response.data.message);
          fetchServices();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error deleting service:", error);
        toast.error("Failed to delete service");
      }
    }
  };

  return (
    <div className="paymentRoutingContainer card">
      <div className="formContainer">
        <h2>{isEdit ? "Edit API Service" : "Manage API Services"}</h2>
        <div className="mainContainer">
          <div className="inputAndDivContainer">
            <div className="inputAndDiv">
              <label>Service Name: </label>
              <select
                name="serviceName"
                value={serviceDetails.serviceName}
                onChange={handleChange}
                className="selectField"
                required
              >
                <option>Please Select</option>
                {servicesNamesList.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputAndDiv">
              <label>Service For:</label>
              <select
                name="serviceFor"
                value={serviceDetails.serviceFor}
                onChange={handleChange}
                className="selectField"
                required
              >
                <option>Please Select</option>
                {servicesList.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputAndDiv">
              <label>Service ID:</label>
              <input
                type="text"
                name="serviceClientId"
                value={serviceDetails.serviceClientId}
                onChange={handleChange}
                className="inputField"
                required
              />
            </div>
            <div className="inputAndDiv">
              <label>Secret Key:</label>
              <input
                type="text"
                name="serviceSecretKey"
                value={serviceDetails.serviceSecretKey}
                onChange={handleChange}
                className="inputField"
                required
              />
            </div>
            <div className="inputAndDiv">
              <label>Service Status:</label>
              <select
                name="serviceStatus"
                value={serviceDetails.serviceStatus}
                onChange={handleChange}
                className="selectField"
                required
              >
                <option value="Active">Active</option>
                <option value="DeActive">DeActive</option>
              </select>
            </div>
            <div className="inputAndDiv">
              <label>Service Type:</label>
              <input
                type="text"
                name="serviceType"
                value={serviceDetails.serviceType}
                onChange={handleChange}
                className="inputField"
                required
              />
            </div>
            <div className="inputAndDiv">
              <label>Created Date:</label>
              <input
                type="text"
                name="createdDate"
                value={serviceDetails.createdDate}
                onChange={handleChange}
                className="inputField"
                required
                disabled
              />
            </div>
            <div className="inputAndDiv">
              <label>Limit</label>
              <input
                type="text"
                name="limit"
                value={serviceDetails.limit}
                onChange={handleChange}
                className="inputField"
              />
            </div>
            <div className="inputAndDiv-button">
              <button
                type="submit"
                className="saveButton"
                onClick={handleSubmit}
              >
                {isEdit ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="servicesList">
        <h2 className="tableTitl-pay">API Services List</h2>
        <div className="down-box-payment">
          <table className="serviceTrackTable">
            <thead className="pay-tablehead">
              <tr>
                <td>S.No</td>
                <td>Service Name</td>
                <td>Service For</td>
                <td>Status</td>
                <td>Limit</td>
                <td>Client Id</td>
                <td>Client Secret</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service._id}>
                  <td>{index + 1}</td>
                  <td>{service.serviceName}</td>
                  <td>{service.serviceFor}</td>
                  <td>{service.serviceStatus}</td>
                  <td>{service.limit}</td>
                  {/* <td>{service.serviceClientId}</td> */}
                  <td>
                    <span
                      className={`truncated-text ${
                        isExpanded ? "expanded" : ""
                      }`}
                      onClick={handleToggleExpand}
                      title={service.serviceClientId}
                    >
                      {service.serviceClientId}
                    </span>
                  </td>
                  {/* <td>{service.serviceSecretKey}</td> */}
                  <td>
                    <span
                      className={`truncated-text ${
                        isExpanded ? "expanded" : ""
                      }`}
                      onClick={handleToggleExpand}
                      title={service.serviceSecretKey}
                    >
                      {service.serviceSecretKey}
                    </span>
                  </td>
                  <td>
                    <div className="iconContainer">
                      <EditIcon
                        style={{
                          cursor: "pointer",
                          color: "green",
                          marginRight: "10px",
                        }}
                        onClick={() => handleEdit(service)}
                      />
                      <DeleteIcon
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(service)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceTracking;
