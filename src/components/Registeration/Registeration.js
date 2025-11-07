import React, { useState } from "react";
import "./Registeration.css";
import data from "../../json/Data";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Call_Api from "../../Handileapicall/call_api";
import { toast } from "react-toastify";

const Registeration = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  return (
    <>
      <div className="Registerdiv">
        <div
          className="bg-gradient row rounded-2"
          style={{display: 'flex',justifyContent: 'center',alignItems: "center",padding:"30px"}}>
          <div className="col-7 text-light d-flex justify-content-end px-5">
            <div>
              <img
                src="/images/ntar.gif-_VGlxBXr.webp"
                width="300px"
                alt="noImage"
              />
              <div className="text_div">
                <h1 className="text-warning">{data?.WelcomeToNtar}</h1>
                <div className="fw-bold fs-2">
                  Secure Access to Our API Platform
                </div>
                <div className="bg-transparent">
                  Log in securely to access our suite of powerful APIs,
                  including PanVerification.
                  <div>
                    Manage your keys, AadhaarVerification,
                    MobileNumberVerification, GSTIN Verification,
                  </div>
                  <div>
                    {" "}
                    FaceMatch, and more. Manage your API keys, monitor
                    performance, and easily integrate <br /> these services to
                    accelerate your development.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col text-light d-flex justify-content-center align-items-center">
            <div className="align-content-center border border-1 border-primary-subtle h-auto rounded-4 p-3 px-5">
              <h2 className="text-center">{data.register}</h2>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  mobileNumber: "",
                  password: "",
                  companyName: "",
                }}
                validationSchema={yup.object({
                  name: yup.string().required("Name is required"),
                  email: yup
                    .string()
                    .email("Invalid email")
                    .required("Email is required"),
                  mobileNumber: yup
                    .number()
                    .required("Mobile Number is required"),
                  companyName: yup
                    .string()
                    .required("Company Name is required"),
                  password: yup.string().required("Password is required"),
                })}
                onSubmit={async (formData) => {
                  try {
                    const res = await Call_Api(
                      "/registeration/registerationCredentials",
                      "POST",
                      formData
                    );
                    toast.success(res?.response?.message);
                    if (res?.success) {
                      await navigate("/login");
                    }
                  } catch (error) {
                    toast.error(error?.response?.data?.message);
                    console.error("Error during registration:", error);
                  }
                }}
              >
                {(form) => (
                  <Form>
                    <div>
                      <div className="mb-2">
                        <b>Name</b>
                        <Field
                          type="input"
                          name="name"
                          placeholder="Enter your Name"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="mb-2">
                        <b>Email</b>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="mb-2">
                        <b>Number</b>
                        <Field
                          type="number"
                          name="mobileNumber"
                          placeholder="Enter your mobile number"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="mobileNumber"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="mb-2">
                        <b>Company Name</b>
                        <Field
                          type="text"
                          name="companyName"
                          placeholder="Enter your Company Name"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="companyName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="mb-2">
                        <b>Password</b>
                        <div className="password-field">
                          <Field
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="form-control"
                          />
                          <button
                            type="button"
                            className="show-password-btn"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {/* {showPassword ? "Hide" : "Show"} */}
                            {showPassword ? "👁️" : "🙈"}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <button
                          className="btn btn-outline-primary w-50"
                          type="submit"
                        >
                          {data.register}
                        </button>
                      </div>
                      <div>
                        <p
                          onClick={() => navigate("/login")}
                          className="btn btn-link text-danger"
                        >
                          {data.havingAccount}
                        </p>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registeration;