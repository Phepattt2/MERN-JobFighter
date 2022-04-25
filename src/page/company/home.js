import React from "react"
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";



const HomeUser = () => {
  const { user } = useSelector((state) => ({ ...state }));



  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>company</h1>
          <Link to={'/companypost'} >                   posts</Link>
          <Link to={'/postjob'} >                   create</Link>
          <Link to={'/applicantcompany'} >                   applicaiton</Link>
        </div>
      </div>
    </div>
  );
};


export default HomeUser;
