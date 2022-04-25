import React, { useState, useEffect } from "react";
import Profile from "../../assets/pics/profile-student.png";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, updateUser } from "../../api/auth"

function ProfileStudent() {

  const { user } = useSelector((state) => ({ ...state }));


  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    college: "",
    faculty: "",
    program: "",
    file: "",
    // fileprofile: "",
    editable: true,
  });

  useEffect(() => {
    //code
        loadData(user.token);
    }, []);
  
    const loadData = (authtoken) => {
 
      currentUser(authtoken)
        .then((res) => {  
          
          setValues({...values,...res.data});
          console.log(res.data)
        })
        .catch((err) => {
          //err
          console.log("Error loadData", err.response.data);
        });
    };



  const handleSubmit = (e) => {
    alert("Saved");
    e.preventDefault();
    setValues({
      editable: false,
    });

    updateUser(user.token, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleEdit = (e) => {
    alert("Change");
    setValues({
      editable: true,
    });
    console.log(image);
  };

  const [image, setImage] = useState(null);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, 
      [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-80 my-20 bg-gray-200 shadow  rounded-lg font-sans">
      <div className=" h-20 w-200  bg-green-300  shadow  rounded-lg">
        <div className="p-4 text-center font-bold  text-gray-700 text-3xl ">
          โปรไฟล์ผู้ใช้งาน
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="font-bold  text-gray-700 m-4 text-xl">
          ประวัติส่วนตัว
        </div>
        <div className="flex justify-center">
          <img
            className="h-36 w-36"
            img
            src={image === null ? Profile : image}
            alt="profile"

            // รูปภาพ
          />
        </div>
        <div className="flex justify-center w-64 mx-80">
          <input
            className="form-control block text-base font-normal text-gray-700  bg-white bg-clip-padding border  border-solid border-gray-300 rounded transition ease-in-out mt-3 mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            type="file"
            id="fileProfile"
            onChange={(e) => {
              onImageChange(e);
            }}
            accept="image/png, image/jpeg"
            required
            /*             src={image === null ? Profile : image}
             */ disabled={values.editable === false}
          ></input>
        </div>

        <div className="m-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            // ชื่อ-นามสกุล
          >
            ชื่อ-นามสกุล *
          </label>
          <input
            className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-full ${
              values.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            id="name"
            type="name"
            onChange={handleChange}
            name="name"
            placeholder="ชื่อ-นามสกุล"
            value={values.name}
            required
            autoComplete="none"
            disabled={values.editable === false}

            /* {...(fix === true ? abled : disabled)} */
          />

          <div
            className="block text-gray-700 text-sm font-bold mb-2 mt-4 space-x-96"
            // E-mail เบอร์โทรศัพท์
          >
            <label>E-mail *</label>
            <label> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;เบอร์โทรศัพท์ *</label>
          </div>
          <div className="flex flex-row ml-auto space-x-20 items-center">
            <input
              className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-96 ${
                values.editable ? "text-black" : "text-gray-400"
              } focus:text-black focus:ring-blue-300 focus:ring-2`}
              id="email"
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="jane@example.com"
              value={values.email}
              required
              autoComplete="none"
              disabled={values.editable === false}
            />

            <input
              className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-96 ${
                values.editable ? "text-black" : "text-gray-400"
              } focus:text-black focus:ring-blue-300 focus:ring-2`}
              id="phone"
              type="tel"
              pattern="[0-9]*"
              onChange={handleChange}
              name="phone"
              placeholder="0800000000"
              value={values.phone}
              required
              autoComplete="none"
              disabled={values.editable === false}
            />
          </div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            // ที่อยู่
          >
            ที่อยู่
          </label>
          <textarea
            className={`resize-none bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-full ${
              values.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            id="address"
            onChange={handleChange}
            name="address"
            rows="3"
            placeholder="รายละเอียดที่อยู่"
            value={values.address}
            autoComplete="none"
            disabled={values.editable === false}
          ></textarea>
        </div>
        <div className="py-0.5 mx-5 bg-gray-300  "></div>
        <div className="font-bold  text-gray-700 m-4 text-xl">
          ประวัติการศึกษา
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            // มหาลัย
          >
            มหาลัย *
          </label>
          <select
            name="college"
            onChange={handleChange}
            id="univercity"
            required
            autoComplete="none"
            value={values.college}
            disabled={values.editable === false}
            className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block leading-normal w-full ${
              values.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            aria-label="Default select example"
          >
            <option value="">ระบุมหาลัยที่จบมา</option>
            <option value="1">จุฬาลงกรณ์มหาวิทยาลัย</option>
            <option value="2">มหาวิทยาลัยเกษตรศาสตร์</option>
            <option value="3">มหาวิทยาลัยขอนแก่น</option>
          </select>

          <div
            className="block text-gray-700 text-sm font-bold mb-2 mt-4 space-x-96"
            // คณะ สาขา
          >
            <label>คณะ *</label>
            <label> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; สาขา *</label>
          </div>
          <div className="flex flex-row ml-auto space-x-20 items-center">
            <select
              name="faculty"
              onChange={handleChange}
              id="faculty"
              required
              autoComplete="none"
              value={values.faculty}
              disabled={values.editable === false}
              className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-96 ${
                values.editable ? "text-black" : "text-gray-400"
              } focus:text-black focus:ring-blue-300 focus:ring-2`}
              aria-label="Default select example"
            >
              <option value="">ระบุคณะที่จบมา</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              name="program"
              onChange={handleChange}
              id="program"
              required
              autoComplete="none"
              value={values.program}
              disabled={values.editable === false}
              className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-96 ${
                values.editable ? "text-black" : "text-gray-400"
              } focus:text-black focus:ring-blue-300 focus:ring-2`}
              aria-label="Default select example"
            >
              <option value="">ระบุสาขาที่จบมา</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <label
            className="block text-gray-700 text-sm font-bold mt-4"
            // มหาลัย
          >
            ใบทรานสคริปต์ *
          </label>
          <div className="flex justify-left w-72">
            <input
              className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-3 mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="File"
              onChange={handleChange}
              name="file"
              accept="application/pdf"
              required
              autoComplete="none"
              // value={values.File}
              disabled={values.editable === false}
            ></input>
          </div>
          <div className="flex space-x-12 justify-center mt-4 ">
            <button
              onClick={(e) => {
                handleEdit(e);
              }}
              type="button"
              className="inline-block px-7 py-3 bg-[#da3d3d] text-white text-md font-bold  leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-[#a12727]  hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
              id="change"
            >
              แก้ไข
            </button>
            <a
            // path กดตกลง
            >
              <button
                className="inline-block px-7 py-3 bg-[#24AB82] text-white text-md font-bold leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-[#1F795E] hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
                id="submit"
              >
                ตกลง
              </button>
            </a>
          </div>
          <div className="h-10 w-200 bg-gray-200   rounded-lg "></div>
        </div>
      </form>
    </div>
  );
}

export default ProfileStudent;
