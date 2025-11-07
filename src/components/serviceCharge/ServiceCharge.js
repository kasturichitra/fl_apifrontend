import React, { useEffect, useState } from "react";
import "./serviceCharge.css";
import axios from "axios";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";

const ServiceCharge = () => {
  const serviceList = [
    "aadhaar",
    "pan",
    "MobileNumber",
    "account",
    "shop",
    "gst",
  ];
  const [service, setService] = useState("");
  const [chargeFee, setChargeFee] = useState("");
  const [chargePercentage, setChargePercentage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [nominalChargesList, setNominalChargesList] = useState([]);
  const date = new Date();
  const optionsDate = { day: "2-digit", month: "2-digit", year: "numeric" };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formattedDate = date.toLocaleDateString("en-GB", optionsDate);
  const appUrl = process.env.REACT_APP_BACKEND_URL


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedTime = date.toLocaleTimeString("en-GB", optionsTime);

    const data = {
      service,
      chargeFee,
      chargePercentage,
      createdDate: formattedDate,
      createdTime: formattedTime,
    };

    try {
      const response = await axios.post(
        appUrl + "/charge/save/nominalCharges",
        data
      );
      console.log("response after saving nominal charges===>", response);
      if (response?.data?.message === "success") {
        fetchAllServiceCharges();
        toast.success("Record added successfully");
        setChargeFee("")
        setChargePercentage("")
        setService("");
      } else if (response?.data?.message === "modified") {
        fetchAllServiceCharges();
        toast.success("Record modified successfully");
        setChargeFee("")
        setChargePercentage("")
        setService("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred.");
    }
  };

  const fetchAllServiceCharges = async () => {
    try {
      const response = await axios.get(
        appUrl + "/charge/get/all/nominalCharges"
      );
      console.log("nominal charges list from backend===>", response?.data);
      if (response?.data?.message === "success") {
        setNominalChargesList(response?.data?.response);
      }
    } catch (error) {
      console.log(
        "error while fetching nominal charges from backend==>",
        error
      );
    }
  };

  const handleEdit = (service) => {
    setService(service?.service);
    setChargeFee(service?.chargeFee)
    setChargePercentage(service?.chargePercentage)
    setIsEdit(true);
    setEditId(service._id);
  };

  useEffect(() => {
    fetchAllServiceCharges();
  }, []);

  return (
    <div className="nominalChargesContainer card p-3">
      <h1 className="title">
      <h2>{isEdit ? "Edit API Service Charges" : "API Service Charges"}</h2>
      </h1>
      <form className="nominalChargesForm" onSubmit={handleSubmit}>
        <div className="formRow">
          <label className="formLabel">
            Service:
            <select
              className="formSelect"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Please Select</option>
              {serviceList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="formLabel">
            Charge Fee:
            <input
              type="text"
              value={chargeFee}
              onChange={(e) => setChargeFee(e.target.value)}
              className="formInput"
              required
            />
          </label>
          <label className="formLabel">
            Charge Percentage:
            <input
              type="text"
              value={chargePercentage}
              onChange={(e) => setChargePercentage(e.target.value)}
              className="formInput"
              required
            />
          </label>
          <button type="submit" className="submitButton-nominal">
          {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </form>
      <div className="tableContainer">
        <h2 className="tableTitle">Existing Charges</h2>
        <div className="down-box">
        <table className="chargesTable">
          <thead>
            <tr>
              <th>Service</th>
              <th>Charge Fee</th>
              <th>Charge Percentage</th>
              <th>Created Date</th>
              <th>Created Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {nominalChargesList.map((charge, index) => (
              <tr key={index}>
                <td>{charge.service}</td>
                <td>{charge.chargeFee}</td>
                <td>{charge.chargePercentage}</td>
                <td>
                  {new Date(charge.createdDate).toLocaleDateString("en-GB")}
                </td>
                <td>{charge.createdTime}</td>
                <td>
                    <div className="iconContainer">
                      <EditIcon
                        style={{
                          cursor: "pointer",
                          color: "green",
                          marginRight: "10px",
                        }}
                        onClick={() => handleEdit(charge)}
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

export default ServiceCharge;
