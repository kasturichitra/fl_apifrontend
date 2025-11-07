import React, { useState, useEffect } from "react";
import Call_Api from '../../Handileapicall/call_api';
import { path } from '../../common/path/path';
import gettingTokenFromLocalStorage from '../../common/getTokenFromLocalStorage/GetToken';
import { toast } from "react-toastify";
import { Button, Table } from 'react-bootstrap';
import moment from "moment/moment";
import { useSelector } from "react-redux";
import data from "../../json/Data";

const Whitelistapis = () => {
    const [Ip, setIp] = useState('');
    const [whitelistedIps, setWhitelistedIps] = useState([]);
    const [comment, setComment] = useState('');
    const [editingIp, setEditingIp] = useState(null);
    const [editIpValue, setEditIpValue] = useState('');
    const user = useSelector((state) => state?.user?.user);
    console.log(user, '<--- from the whitelisting api');

    useEffect(() => {
        // Fetch the existing whitelisted IPs on component mount
        fetchWhitelistedIps();
    }, []);

    const fetchWhitelistedIps = async () => {
        try {
            const token = await gettingTokenFromLocalStorage();
            if (!token) {
                toast.error("Authentication token missing");
                return;
            }
            const response = await Call_Api(path.IPWHITELIST, "GET", {}, token);
            if (response?.success) {
                setWhitelistedIps(response?.response?.whitelistIP || []);
            } else {
                toast.warn(response?.message || "Failed to fetch whitelisted IPs");
            }
            console.log(response?.response?.whitelistIP.map((ip) => ip.ipAddress))
        } catch (error) {
            console.error("Error in fetchWhitelistedIps:", error);
            const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong!";
            toast.error(errorMessage);
        }
    };

    const handleWhitelistApis = async () => {
        try {
            const token = await gettingTokenFromLocalStorage();
            if (!token) {
                toast.error("Authentication token missing");
                return;
            }

            const response = await Call_Api(path.IPWHITELIST, "POST", { whitelist: Ip, Comment: comment }, token);
            if (response?.success) {
                setIp("");
                setComment("")
                fetchWhitelistedIps();
                toast.success(response?.message || "IP successfully whitelisted!");
            }
        } catch (error) {
            console.error("Error in handleWhitelistApis:", error);
            const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong!";
            toast.error(errorMessage);
        }
    };

    const handleDeleteIp = async (ip) => {
        // alert()
        try {
            const token = await gettingTokenFromLocalStorage();
            if (!token) {
                toast.error("Authentication token missing");
                return;
            }

            const response = await Call_Api(path.IPWHITELIST, "DELETE", { ipAddress: ip }, token);
            if (response?.success) {
                fetchWhitelistedIps();
                toast.success(response?.message || "IP successfully removed from whitelist!", { autoClose: true});
            } else {
                toast.warn(response?.message || "Failed to remove IP from whitelist",{ autoClose: true});
            }
        } catch (error) {
            console.error("Error in handleDeleteIp:", error);
            const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong!";
            toast.error(errorMessage,{ autoClose: true});
        }
    };

    // const handleEditIp = (ip) => {
    //     setEditingIp(ip);
    //     setEditIpValue(ip);
    // };

    // const handleUpdateIp = async () => {
    //     try {
    //         const token = await gettingTokenFromLocalStorage();
    //         if (!token) {
    //             toast.error("Authentication token missing");
    //             return;
    //         }

    //         const response = await Call_Api(path.UPDATE_WHITELIST, "PUT", { oldWhitelist: editingIp, newWhitelist: editIpValue }, token);
    //         if (response?.success) {
    //             setEditingIp(null);
    //             setEditIpValue('');
    //             // fetchWhitelistedIps();
    //             toast.success(response?.message || "IP successfully updated in whitelist!");
    //         } else {
    //             toast.warn(response?.message || "Failed to update IP");
    //         }
    //     } catch (error) {
    //         console.error("Error in handleUpdateIp:", error);
    //         const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong!";
    //         toast.error(errorMessage);
    //     }
    // };

    return (
        <>
            <div className="d-flex justify-content-center m-5">
                <div className="p-2 rounded-2 w-100">
                    <h4>Whitelist APIs</h4>
                    <div className="w-50">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                placeholder="Enter IP"
                                className="form-control me-2"
                                value={Ip}
                                onChange={(e) => setIp(e.target.value)}
                            />
                            <input type="text" placeholder="Comments" className="form-control me-2" value={comment} onChange={(e) => setComment(e.target.value)} />
                            <Button variant="warning" onClick={() => handleWhitelistApis()}>{data?.add}</Button>
                        </div>
                    </div>

                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Time</th>
                                    {/* <th>Company</th>
                                    <th>Email</th> */}
                                    <th>IP Address</th>
                                    <th>Status</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {whitelistedIps.map((ip, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td> {moment(ip?.date).format("YYYY-MM-DD HH:mm:ss")}</td>
                                        {/* <td> {user?.companyName}</td>
                                        <td> {user?.email}</td> */}
                                        <td>{ip?.ipAddress}</td>
                                        <td><button className={`${ip?.Active? 'btn btn-success':'btn btn-warning'}`}>{ip?.Active ? 'Active':'InActive'}</button></td>
                                        <td>{ip?.Comment}</td>
                                        {/* <td>
                                            {editingIp === ip ? (
                                            <input
                                                type="text"
                                                value={editIpValue}
                                                onChange={(e) => setEditIpValue(e.target.value)}
                                                className="form-control"
                                            />
                                        ) : (
                                            ip
                                        )}
                                            {ip.ipAddress}
                                        </td> */}
                                        {/* <td>
                                        {editingIp === ip ? (
                                            <Button variant="success" onClick={()=>handleUpdateIp()}>Update</Button>
                                            ""
                                        ) : (
                                            <>
                                                <Button variant="info" onClick={() => handleEditIp(ip)}>Edit</Button>
                                                <Button variant="danger" onClick={() => handleDeleteIp(ip)}>Delete</Button>
                                            </>
                                        )}
                                    </td> */}
                                    <td><button className="btn btn-danger bi-trash " onClick={() => handleDeleteIp(ip?.ipAddress)}> Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Whitelistapis;
