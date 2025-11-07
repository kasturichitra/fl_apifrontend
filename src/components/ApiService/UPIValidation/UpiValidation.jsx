import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';

// "userid": "12345",
// "amount": 5,
// "MerchantId": "merchant123",
// "userName": "John Doe",
// "mobileNumber": "9876543210",
// "chargedAmount": 5,
// "actualAmount": 5,
// "subService": "Top_Up",
// "finalPayableAmount": 5

const ValidateUPI = () => {
    return(
        <>
            <div className="text-light">
                <h1>Validate UPI</h1>
                <Formik>
                    {
                        form=><Form>
                            <div>
                                <b>Amount</b>
                                <Field type="number" name="amount" placeholder="Enter Amount" className='form-control'/>
                                <ErrorMessage name="amount" component="div" className="text-danger"/>
                            </div>
                            <div>
                                <b>UserName</b>
                                <Field type="text" name="userName" placeholder="Enter User Name" className='form-control'/>
                                <ErrorMessage name="userName" component="div" className="text-danger"/>
                            </div>
                            <div>
                                <b>Mobile Number</b>
                                <Field type="number" name="mobileNumber" placeholder="Enter Mobile Number" className='form-control' />
                                <ErrorMessage name="mobileNumber" component="div" className="text-danger"/>
                            </div>
                            <div>
                                <b>Charged Amount</b>
                                <Field type="number" name="chargedAmount" placeholder="Enter Charged Amount" className = 'form-control'/>
                                <ErrorMessage name="chargedAmount" component="div" className="text-danger"/>
                            </div>
                            <div>
                                <b>Actual Amount</b>
                                <Field type="number" name="actualAmount" placeholder="Enter Actual Amount" className = 'form-control'/>
                                <ErrorMessage name="actualAmount" component="div" className="text-danger"/>
                            </div>
                            {/* <div>
                                <b>Sub Service</b>
                                <Field type="text" name="subService" placeholder="Enter Sub Service" className = 'form-control'/>
                                <ErrorMessage />
                            </div> */}
                        </Form>
                    }
                </Formik>
            </div>
        </>
    )
}
export default ValidateUPI;