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
import Homestudent from "./page/Home-student";

// page company
// import HomeCompany from "./page/company/home"
import ProfileCompany from "./page/Profile-company";
import EditPost from "./page/Postjob/edit-post";
import CreatePost from "./page/Postjob/create-post";
import Applicantcompany from "./page/Applicant-company";
import Paymentcompany from "./page/Payment-company/payment";
import Homecompany from "./page/Home-company";
import CompanyPost from "./page/WaitPost";

import Search from "./page/Search";
import Applyjob from "./page/Applyjob"

// functions
import { currentUser } from "./api/auth";
// Routes
import StudentRoute from "./components/routes/StudentRoute";
import CompanyRoute from "./components/routes/CompanyRoute";
import AdminRoute from "./components/routes/AdminRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;

  if (idtoken) {
    dispatch({
      type: "LOGIN",
      payload: {
        token: idtoken,
       
      },
    });
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

        <Route element={<Layout></Layout>}>
          <Route path="/profileCompany" element={<ProfileCompany />} />
          <Route path="/profileStudent" element={<ProfileStudent />} />
          <Route path="/homestudent" element={<Homestudent />} />
          <Route path="/homecompany" element={<Homecompany />} />
          {/* <Route path="/HomeCompany" element={<HomeCompany />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/applyjob/" element={<Applyjob/>} />
          <Route path="/postjob/:id" element={<EditPost />} />
          <Route path="/postjob" element={<CreatePost />} />
          <Route path="/applicantcompany" element={<Applicantcompany/>} />
          <Route path="/paymentcompany" element={<Paymentcompany />} />

        <Route 
           path="/historystudent"  
           element={
            <StudentRoute>
           <Historystudent />
           </StudentRoute>
          } 
        />

    
        
        <Route
          path="/companypost"
          element={
            <CompanyRoute>
              <CompanyPost />
            </CompanyRoute>
          }
        />

      
        
        <Route
          path="/applicantcompany"
          element={
            <CompanyRoute>
              <Applicantcompany />
            </CompanyRoute>
          }
        />  
        </Route>

{/* //////////////////////////////////////////////////////////////////////////////////////// */}

        <Route path="/" element={<Login />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/signupstudent" element={<Signupstudent />} />
        <Route path="/signupcompany" element={<Signupcompany />} />
        




        <Route path="/Homeuser" element={<HomeUser />} />
        <Route path="/companyTest" element={<companyTest />} />
        



        
       

        
      
      </Routes>
    </div>
  );
}

export default App;
