import React from "react";
import { Card } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Bitcoin, TrendingUp, TrendingDown } from "lucide-react";

const data = [
  { name: "Jan", value: 2000 },
  { name: "Feb", value: 2400 },
  { name: "Mar", value: 2200 },
  { name: "Apr", value: 2800 },
  { name: "May", value: 2600 },
];



export default function GlassmorphicDashboard() {
  return (
    <>
      <div className="position-relative vh-100 bg-dark d-flex align-items-center justify-content-center px-4">
      {/* Background Glow Effects */}
      <div className="position-absolute top-0 end-0 w-50 h-25 bg-white opacity-25 rounded-circle" style={{ filter: "blur(50px)" }}></div>
      <div className="position-absolute bottom-0 start-0 w-50 h-25 bg-white opacity-25 rounded-circle" style={{ filter: "blur(50px)" }}></div>

      {/* Main Wallet Card */}
      <Card className="text-white bg-transparent border border-white p-4 shadow-lg rounded-3 w-25" style={{ backdropFilter: "blur(10px)" }}>
        <h2 className="fs-5 fw-semibold">My Wallet</h2>
        <p className="fs-2 fw-bold mt-2">₹ 9,238.31</p>
        <p className="text-success d-flex align-items-center mt-1">
          <TrendingUp className="me-1" size={20} /> +$170.25 (22.1%)
        </p>

        {/* Crypto Assets */}
        <div className="mt-4 d-grid gap-3">
          {["BTC", "ETH", "XRP"].map((coin, index) => (
            <Card key={index} className="p-3 bg-white bg-opacity-10 border-0 rounded d-flex flex-row justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <Bitcoin size={24} className="text-warning" />
                <p className="fw-medium mb-0">{coin}</p>
              </div>
              <p className="fw-semibold mb-0 text-light">₹{(2000 + index * 500).toFixed(2)}</p>
              <p className={`d-flex align-items-center mb-0 ${index % 2 === 0 ? "text-success" : "text-danger"}`}>
                {index % 2 === 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {(index % 2 === 0 ? "+6.9%" : "-2.5%")}
              </p>
            </Card>
          ))}
        </div>

        {/* Line Chart */}
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" hide />
              <Tooltip contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none" }} />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      
    </div>
    {/* <div>
        <table className="table table-hover">
          <thead>
            <th>#</th>
            <th>serviceName</th>
            <th>Date</th>
            <th>Time</th>
            <th>Charged Fee</th>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div> */}
    </>
  );
}