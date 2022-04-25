import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Forgotpass from "./page/Forgotpass";
import Signupstudent from "./page/Signup-student";
import Signupcompany from "./page/Signup-company";


import Layout from "./page/Layout";

//redux
import { useDispatch } from "react-redux";
// page user
import HomeUser from "./page/user/home";
import ProfileStudent from "./page/Profile-student";
import Historystudent from "./page/History-student";

// page company
import HomeCompany from "./page/company/home"
import ProfileCompany from "./page/Profile-company";
import EditPost from "./page/Postjob/edit-post";
import CreatePost from "./page/Postjob/create-post";
import Applicantcompany from "./page/Applicant-company";
import Paymentcompany from "./page/Payment-company/payment";

import CompanyPost from "./page/WaitPost";
// functions
import { currentUser } from "./api/auth";
// Routes
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;

  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN",
          payload: {
            token: idtoken,
            username: res.data.name,
            role: res.data.role,
          },
        });
      })
      .catch((err) => {
        //err
        console.log(err);
      });
  }
  return (
    <div>
      <Routes>
        {/* ใส่ path ใหม่ๆให้ลิ้มลอง /}
          {/ อยากเปิดแสดงผลหน้าไหนให้พิมพ์ตรง path ต่อท้ายตรง url /}

          {/ <Route path="/" element={<App />} /> */}

        <Route element={<Layout></Layout>}>
          <Route path="/profileCompany" element={<ProfileCompany />} />
          <Route path="/profileStudent" element={<ProfileStudent />} />
          {/*           <Route path="/" element={<Test />} />
           */}{" "}
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/signupstudent" element={<Signupstudent />} />
        <Route path="/signupcompany" element={<Signupcompany />} />
        <Route path="/Homeuser" element={<HomeUser />} />
        <Route path="/profileStudent" element={<ProfileStudent />} />
        
        <Route path="/HomeCompany" element={<HomeCompany />} />
        <Route path="/postjob/:id" element={<EditPost />} />
        <Route path="/postjob" element={<CreatePost />} />
        <Route path="/applicantcompany" element={<Applicantcompany/>} />
        <Route path="/paymentcompany" element={<Paymentcompany />} />

        <Route
          path="/companypost"
          element={
            <UserRoute>
              <CompanyPost />
            </UserRoute>
          }
        />

        <Route
          path="/historystudent"
          element={
            <UserRoute>
              <Historystudent />
            </UserRoute>
          }
        />  
        
        <Route
          path="/applicantcompany"
          element={
            <UserRoute>
              <Applicantcompany />
            </UserRoute>
          }
        />  
      
      </Routes>
    </div>
  );
}

export default App;
