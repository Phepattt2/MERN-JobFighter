import React, { useState } from "react";
import Profile from "../../assets/pics/profile-company.png";

function Prosile_st() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    bisiness: "",
    details: "",
    welfare: "",
    editable: true,
  });

  const handleSubmit = (e) => {
    alert("Saved");
    e.preventDefault();
    setValue({
      editable: false,
    });
  };
  const handleEdit = (e) => {
    alert("Change");
    setValue({
      editable: true,
    });
  };
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  /* const fix = true;
    console.log(fix); */
  return (
    <div className="mx-80 my-20 bg-gray-200 shadow  rounded-lg font-sans">
      {/*         <div> {fix ? "a" : "b"} </div>
       */}{" "}
      <div className=" h-20 w-200  bg-green-300  shadow  rounded-lg">
        <div className="p-4 text-center font-bold  text-gray-700 text-3xl ">
          โปรไฟล์บริษัท
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="font-bold  text-gray-700 m-4 text-xl">ข้อมูลบริษัท</div>
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
            /* onChange={this.setValue("fileProfile")} */
            onChange={(e) => {
              onImageChange(e);
            }}
            /* value={fileProfile} */
            accept="image/png, image/jpeg"
            required
            disabled={value.editable === false}
          ></input>
        </div>

        <div className="m-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            // ชื่อ
          >
            ชื่อบริษัท *
          </label>
          <input
            className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-full ${
              value.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            id="name"
            type="name"
            onChange={handleChange}
            name="name"
            placeholder="ชื่อบริษัท"
            required
            autoComplete="none"
            disabled={value.editable === false}
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
                value.editable ? "text-black" : "text-gray-400"
              } focus:text-black focus:ring-blue-300 focus:ring-2`}
              id="email"
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="jane@example.com"
              required
              autoComplete="none"
              disabled={value.editable === false}
            />

            <input
              className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-96 ${
                value.editable ? "text-black" : "text-gray-400"
              } focus:text-black focus:ring-blue-300 focus:ring-2`}
              id="tel"
              type="tel"
              pattern="[0-9]*"
              onChange={handleChange}
              name="tel"
              placeholder="0800000000"
              required
              autoComplete="none"
              disabled={value.editable === false}
            />
          </div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            // ลักษณะธุรกิจ
          >
            ลักษณะธุรกิจ *
          </label>
          <select
            name="bisiness"
            onChange={handleChange}
            id="bisiness"
            required
            autoComplete="none"
            disabled={value.editable === false}
            className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block leading-normal w-full ${
              value.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            aria-label="Default select example"
          >
            <option value="">ระบุลักษณะธุรกิจ</option>
            <option value="1">บลาๆ</option>
            <option value="2">บลาๆๆ</option>
            <option value="3">บลาๆๆๆ</option>
          </select>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            // รายละเอียด
          >
            รายละเอียดเกี่ยวกับบริษัทและการดำเนินการ
          </label>
          <textarea
            className={`resize-none bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-full ${
              value.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            id="details"
            onChange={handleChange}
            name="details"
            rows="5"
            placeholder="รายละเอียดเกี่ยวกับบริษัท"
            autoComplete="none"
            disabled={value.editable === false}
          ></textarea>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            // สวัสดิการ
          >
            สวัสดิการ
          </label>
          <textarea
            className={`resize-none bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-full ${
              value.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            id="welfare"
            onChange={handleChange}
            name="welfare"
            rows="3"
            placeholder="รายละเอียดสวัสดิการ"
            autoComplete="none"
            disabled={value.editable === false}
          ></textarea>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            // ที่อยู่
          >
            ที่อยู่
          </label>
          <textarea
            className={`resize-none bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-full ${
              value.editable ? "text-black" : "text-gray-400"
            } focus:text-black focus:ring-blue-300 focus:ring-2`}
            id="address"
            onChange={handleChange}
            name="address"
            rows="3"
            placeholder="รายละเอียดที่อยู่"
            autoComplete="none"
            disabled={value.editable === false}
          ></textarea>
        </div>

        <div className="m-4">
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
export default Prosile_st;
