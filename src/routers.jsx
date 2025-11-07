import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginRedirect from "./common/loginRedirect/LoginRedirect";
import Registeration from "./components/Registeration/Registeration";
import Login from "./components/Login/Login";
import MainPage from "./components/mainPage/MainPage";
import Otp from "./components/Otp/Otp";
import ProtectedRoute from "./common/protectedRoute/ProtectedRoute";
import ApiService from "./components/ApiService/ApiService";
import PanVerification from "./components/ApiService/pan/PanVerification";
import AadhaarVerification from "./components/ApiService/aadhaar/AadhaarVerification";
import MobileNumberVerification from "./components/ApiService/mobile/MobileNumberVerification";
import ShopEstablishment from "./components/ApiService/shop/ShopEstablishment";
import GstInVerify from "./components/ApiService/gst/GstInVerify";
import CinNumber from "./components/ApiService/cin/CinNumber";
import FaceMatch from "./components/ApiService/faceservices/FaceMatch";
import Accountverify from "./components/ApiService/Accountverify/Accountverify";
import ServiceTracking from "./components/serviceTracking/ServiceTracking";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import AccountServices from "./components/ApiService/AccountServices";
import ComparingNames from "./components/ApiService/comparingNames/ComparingNames";
import BankHolderName from "./components/ApiService/bankHolderName/BankHolderName";
import BankAccountVerify from "./components/ApiService/bankAccountVerify/BankAccountVerify";
import PanServices from "./components/ApiService/PanServices";
import PanNumberVerification from "./components/ApiService/panNumber/PanNumberVerification";
import DateOfBirthVerify from "./components/ApiService/Dob/DateOfBirthVerify";
import CreateOrder from "./components/ApiService/UPIValidation/createOrder";
import IFSCwithbankAccount from "./components/ApiService/IFSCwithBank/IFSCwithbank";
// import ValidateUPI from "./components/ApiService/UPIValidation/UpiValidation";
import PanHolderNameVerify from "./components/ApiService/panHolderNameVerify/PanHolderNameVerify";
import BinVerify from "./components/ApiService/bin/BinVerify";
import Profile from "./components/Profile/Profile";
import TestingKeys from "./components/keys/TestingKeys";
import ApiMainPage from "./components/ApiKeyService/ApiMainPage";
import Whitelistapis from "./pages/whitelist/whitelistapi";
import PanDocumentation from "./components/Documentation/PanDocumentation";
import CinDocumentation from "./components/Documentation/CinDocumentation";
import Gst_InDocumentation from "./components/Documentation/Gst_InDocumentation";
import BinDocumentation from "./components/Documentation/BinDocumentation";
import AadhaarDocumentation from "./components/Documentation/AadhaarDocumentation";
import MobileDocumentation from "./components/Documentation/MobileDocumentation";
import ShopDocumentation from "./components/Documentation/ShopDocumentation";
import PanDocumentationMain from "./components/panDocumentationMain/PanDocumentationMain";
import PanNameDocumentation from "./components/Documentation/PanNameDocumentation";
import PanDobDocumentation from "./components/Documentation/PanDobDocumentation";
import AccountDocumentationMain from "./components/accountDocumentationMain/AccountDocumentationMain";
import AccountDocumentation from "./components/Documentation/AccountDocumentation";
import NamesDocumentation from "./components/Documentation/NamesDocumentation";
import AccountNameDocumentation from "./components/Documentation/AccountNameDocumentation";
import IfscDocumentation from "./components/Documentation/IfscDocumentation";
import FaceDocumentation from "./components/Documentation/FaceDocumentation";
import UpiDocumentation from "./components/Documentation/UpiDocumentation";
import LiveKeys from "./components/keys/LiveKeys";
import ServiceCharge from "./components/serviceCharge/ServiceCharge";
import WalletPage from "./pages/Walletpage/wallet";
import PersistentDrawerLeft from "./components/Dashboard/userDashboard/UserDashboard";
import AdminDashboard from "./components/Dashboard/adminDashboard/AdminDashboard";

const Mainrouter = () => {
  return (
    <Routes>
      <Route path="/register"
        element={
          <LoginRedirect>
            <Registeration />
          </LoginRedirect>
        }
      />
      <Route
        path="/login"
        element={
          <LoginRedirect>
            <Login />
          </LoginRedirect>
        }
      />
      <Route
        path="/"
        element={
          <LoginRedirect>
            <MainPage />
          </LoginRedirect>
        }
      />
      <Route path="/otpVerify" element={<Otp />} />
      <Route path="/dashboard" element={<ProtectedRoute> <PersistentDrawerLeft /></ProtectedRoute>}>
        <Route index element={<ApiService />} />
        <Route path="profile" element={<Profile />} />
        <Route path="PanVerification" element={<PanVerification />} >
          <Route index element={<PanServices />} />
          <Route path="pan" element={<PanNumberVerification />} />
          <Route path="nameVerify" element={<PanHolderNameVerify />} />
          <Route path="dob" element={<DateOfBirthVerify />} />
        </Route>
        <Route path="AadhaarVerification" element={<AadhaarVerification />} />
        <Route path="MobileNumberVerification" element={<MobileNumberVerification />} />
        <Route path="ShopEstablishment" element={<ShopEstablishment />} />
        <Route path="GstInVerify" element={<GstInVerify />} />
        <Route path="CinNumber" element={<CinNumber />} />
        <Route path="FaceMatch" element={<FaceMatch />} />
        <Route path="binVerify" element={<BinVerify />} />
        <Route path="Accountverify" element={<Accountverify />}>
          <Route index element={<AccountServices />} />
          <Route path="bank" element={<BankAccountVerify />} />
          <Route path="name" element={<ComparingNames />} />
          <Route path="holder" element={<BankHolderName />} />
          <Route path="ifsc" element={<IFSCwithbankAccount />} />
        </Route>
        <Route path="UPIVerification" element={<CreateOrder />} />
        <Route path="ApiKeys" element={<ApiMainPage />} >
          <Route index element={<TestingKeys />} />
          <Route path="Whitelistapis" element={<Whitelistapis />} />
          <Route path="liveKeys" element={<LiveKeys />} />
        </Route>
        <Route path="PanDocumentation" element={<PanDocumentationMain />} >
          <Route index element={<PanDocumentation />} />
          <Route path="pName" element={<PanNameDocumentation />} />
          <Route path="pDob" element={<PanDobDocumentation />} />
        </Route>
        <Route path="CinDocumentation" element={<CinDocumentation />} />
        <Route path="Gst_InDocumentation" element={<Gst_InDocumentation />} />
        <Route path="BinVerifyDocumentation" element={<BinDocumentation />} />
        <Route path="AadhaarDocumentation" element={<AadhaarDocumentation />} />
        <Route path="MobileDocumentation" element={<MobileDocumentation />} />
        <Route path="ShopDocumentation" element={<ShopDocumentation />} />
        <Route path="FaceMatchDocumentation" element={<FaceDocumentation />} />
        <Route path="UPIDocumentation" element={<UpiDocumentation />} />
        <Route path="AccountDocumentation" element={<AccountDocumentationMain />} >
          <Route index element={<AccountDocumentation />} />
          <Route path="AName" element={<AccountNameDocumentation />} />
          <Route path="TwoNames" element={<NamesDocumentation />} />
          <Route path="IfscV" element={<IfscDocumentation />} />
        </Route>
      <Route path="ServiceTracking" element={<ServiceTracking />} />
      <Route path="ServiceCharge" element={<ServiceCharge />} />
      </Route>
      <Route path="/adminDashboard" element={<ProtectedRoute> <AdminDashboard /></ProtectedRoute>}/>
      <Route path='/wallet' element={<WalletPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default Mainrouter;
