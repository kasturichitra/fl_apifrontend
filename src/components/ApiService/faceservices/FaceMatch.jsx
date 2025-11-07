import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import data from '../../../json/Data';
import Call_Api from '../../../Handileapicall/call_api.js';
import { toast } from "react-toastify";
import JsonResponseCard from "../../../common/DisplayJson/displayjson";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ErrorCode from "../../../common/ErrorCode/Errorcode";
import EXResponse from '../../../common/ResponsewithCurl/ResponsewithCurl'

const FaceMatch = () => {
  const [base64UserImage, setBase64UserImage] = useState('');
  const [base64AadharImage, setBase64AadharImage] = useState('');
  const [previewUserImage, setPreviewUserImage] = useState('');
  const [previewAadharImage, setPreviewAadharImage] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: async () => {
      if (!base64UserImage || !base64AadharImage) {
        toast.warn('Please upload both images.')
        return;
      }
      const token = JSON.parse(localStorage.getItem('token'));
      try {
        const apiResponse = await Call_Api(
          '/face/facematchapi', // API route
          'POST', // HTTP method
          {
            userimage: base64UserImage,
            aadharImage: base64AadharImage,
          },
          token
        );
        console.log(apiResponse);
        setResponse(apiResponse);
        toast.info(apiResponse?.response?.message)
      } catch (error) {
        console.error('Error submitting data:', error);
        toast.error(error.message || 'An error occurred')
      }
    },
  });
  const handleFileChange = (event, setBase64, setPreview) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        setBase64(base64String);
        setPreview(reader.result);
      };
      reader.onerror = () => {
        console.error('Error reading file.');
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="bg-light text-dark p-2 rounded-3" >
        <h2 className='text-center mb-4'>{data.faceMatch}</h2>
        <div className="row p-2">
          {/* Left Section */}
          <div className="card p-4 col-6">
            <div className="d-flex justify-content-between align-items-center pe-4">
              <div className="fs-3">
                <span className="text-info">POST</span> Verify Face
              </div>
              <button className="btn rounded-4 bg-success-subtle text-success" onClick={() => setError(!error)}>
                View Error Codes
              </button>
            </div>
            <div className="py-3 mt-3" style={{ borderTop: "1px solid black" }}>
              <div className="my-2">
                <b>Description:</b> Upload two images, one of the user and one of the Aadhar card. The system will then verify the face of the user in the Aadhar card image. Or two images to verify the face of the user.
              </div>
              <div className="d-flex justify-content-between pe-3 my-3">
                <div className="text-secondary">Step 1: Upload User Image or Image 1</div>
                <div className="text-primary">View More Details</div>
              </div>
              <div className="d-flex justify-content-between pe-3 my-3">
                <div className="text-secondary">Step 2: Upload Aadhar Image or Image 2</div>
              </div>
              <div className="my-3">
                <b>Body:</b>
              </div>
            </div>
            {/* PAN Input Field */}
            <form onSubmit={formik.handleSubmit} className="border rounded-2 ">
              <table className="d-flex justify-content-start">
                <tbody>
                  <tr>
                    <td><label>userimage</label></td>
                    <td className='ps-3'><input type="file" onChange={(e) => handleFileChange(e, setBase64UserImage, setPreviewUserImage)} className="form-control" /></td>
                    {previewUserImage && (
                      <td>
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center me-2 bg-dark" style={{ width: '60px', height: '60px' }}>
                          <img src={previewUserImage} alt="Preview" />
                        </div>
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td><label>AadharImage</label></td>
                    <td className='ps-3'><input type="file" onChange={(e) => handleFileChange(e, setBase64AadharImage, setPreviewAadharImage)} className="form-control" /></td>
                    {previewAadharImage && (
                      <td className='ps-3'>
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center me-2 bg-dark" style={{ width: '60px', height: '60px' }}>
                          <img src={previewAadharImage} alt="Preview" />
                        </div>
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td  colSpan='3'>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            {/* Response Card */}
            {response && (
              <div className="card mt-3">
                <JsonResponseCard Details={response} />
              </div>
            )}

            {/* Loader */}
            {loading && (
              <div className="text-center mt-3">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Example Request & Response */}
          <div className="col-6 p-3 border border-1 p-2 card">
            <div className="bg-dark text-light p-3 rounded position-relative">
              <div className="Curl">
                <b>Example Request</b>
                <div className="bg-dark text-light p-3 rounded position-relative" style={{ fontFamily: "monospace", overflowX: "auto", maxHeight: "400px" }}>
                  <div className="bg-secondary text-light px-2 py-1 rounded" style={{ display: "inline-block", fontSize: "14px", fontWeight: "bold" }}>
                    Curl
                  </div>
                  <pre style={{ marginTop: "10px", whiteSpace: "pre-wrap" }}>
                    <code className="language-bash">{EXResponse.FatchmathCurl}</code>
                  </pre>
                  <button
                    className="btn btn-outline-light position-absolute"
                    style={{ top: "10px", right: "10px", fontSize: "12px", padding: "2px 6px" }}
                    onClick={() => navigator.clipboard.writeText(EXResponse.FatchmathCurl)}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>

              <div className="ExResponse">
                <b>Example Response</b>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn bg-secondary text-light px-2 py-1 rounded mb-3">Response</button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(JSON.stringify(EXResponse.FatchmathResponse, null, 2))}>
                    📋 Copy
                  </button>
                </div>
                <SyntaxHighlighter language="json" style={atomOneDark} className="json-highlighter">
                  {JSON.stringify(EXResponse.FatchmathResponse, null, 2)}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ErrorCode open={error} onClose={() => setError(false)} />
    </>
  );
}
export default FaceMatch;