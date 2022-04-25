// import React, { useState, useEffect } from "react";
// import { currentPost, updatePost } from "../../api/post";
// import { useSelector } from "react-redux";
// import Typography from '@material-ui/core/Typography';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';
// import { useNavigate, useParams } from "react-router-dom";
// import "./Postjob.css";



// export default function EditPost(){
//   const params = useParams();
//   const navigate = useNavigate();

//   //redux
//   const { user } = useSelector((state) => ({ ...state }));

//   const [post, setPost] = useState({
//     desc: "",
//     college: "",
//     program: "",
//     faculty: "",
//     jobType: "",
//     position: "",
    
//     rate: "",
//     provinceAddress: "",
//     companyAddress: "",
//     boost: false,

//   });


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('post',post)
//     updatePost(user.token, post, params.id)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response.data);
//       });
//   };

//   const handleChange = (e) => {
//     setPost({
//       ...post,
//       [e.target.name]: e.target.value,
      
//     });

//     setPost({
//         ...post,
//         boost: e.target.checked,
        
//       });
    
//     console.log(post)
//   };

//     const notosan1=createTheme({
//         typography:{
//           subtitle1:{
//             fontSize:35,
//             fontWeight:'bold',
//             fontFamily: [
//               'Noto Sans Thai',
//               'sans-serif',
//             ].join(','),
//           },
//           body1:{
//             fontSize:25,
//             fontFamily: [
//               'Noto Sans Thai',
//               'sans-serif',
//             ].join(','),
//           },
//           body2:{
//             fontSize:18,
//             fontWeight:500,
//             fontFamily: [
//               'Noto Sans Thai',
//               'sans-serif',
//             ].join(','),
//           }
//         },
//       });

//     return(
      
//         <ThemeProvider theme={notosan1}>
//         <div className=" h-20 w-200 bg-green-300 rounded-t-lg mx-10 mt-8">

//             {/* หัวข้อ */}
//             <div div className="pl-8 pt-2.5 ">
//             <Typography variant="subtitle1">
//                 สร้างโพสต์หาพนักงาน
//             </Typography>
//             </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//         <div className=" w-200  bg-gray-200  shadow-lg md:drop-shadow-xl rounded-b-lg mx-10 mb-10 shadow-black">
//             {/* รายละเอียดงาน */}
//             <div className="pl-7 pt-3">
//             <Typography variant="body1">
//                 รายละเอียดงาน
//             </Typography>
//             {/* <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"/> */}
//             <textarea  className="message" rows="12" class="resize-none p-2.5 w-11/12 ml-7 mt-2 rounded-lg ring-2 ring-black"
//             placeholder="กรุณากรอกรายละเอียด..."  name="desc" onChange={handleChange}  
//             ></textarea>
        

          
            

//             {/* คุณสมบัติของผู้สมัคร */}
//             <div className="pt-3">
//             <Typography variant="body1">
//                 คุณสมบัติของผู้สมัคร
//             </Typography>
//             <div className="flex space-x-6 pt-2">
//                 <div className="flex space-x-2" >
//                 <Typography variant="body2">
//                         มหาลัย
//                 </Typography>
//                 <select id="college" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"
//                 name="college"  onChange={handleChange}>
//                 <option>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//                 </select>
//                 </div>

//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         คณะ
//                 </Typography>
//                 <select id="countries" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5">
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//                 </select>
//                 </div>

//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         สาขา
//                 </Typography>
//                 <select id="countries" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5">
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//                 </select>
//                 </div>
                
//               </div>


//               <div className="flex space-x-6 pt-3">
//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         ประเภทงาน
//                 </Typography>
//                 <select id="countries" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5">
//                 <option>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//                 </select>
//                 </div>

//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         ตำแหน่ง
//                 </Typography>
//                 <select id="countries" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5">
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//                 </select>
//                 </div>

//                 {/* เช็คใน input ใส่ได้แค่เลข */}
//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         เงินเดือน
//                 </Typography>
//                 <input type="number"
//                 className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
//                 placeholder="ต่ำสุด"></input>
//                 <Typography variant="body2">
//                         -
//                 </Typography>
//                 <input type="number"
//                 className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
//                 placeholder="สูงสุด"></input>
//                 </div>
                
//               </div>
//             </div>


//             <div className="flex space-x-6 pt-12">
//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         อัตราที่รับ
//                 </Typography>
//                 <input type="number"
//                 className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
//                 placeholder="จำนวน" name="rate"    onChange={handleChange} ></input>
                
//                 </div>

//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         จังหวัดของสถานประกอบการ
//                 </Typography>
//                 <select id="countries" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5">
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//                 </select>
//                 </div>

//                 {/* เช็คใน input ใส่ได้แค่เลข */}
//                 <div className="flex space-x-2">
//                 <Typography variant="body2">
//                         ระยะเวลาการโพสต์
//                 </Typography>
//                 <select id="countries" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5">
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//                 </select>
//                 </div>
                
//               </div>
//             </div>
            
            
//             {/* สถานที่ประกอบการของบริษัท */}
//             <div className="pl-7 pt-3">
//             <Typography variant="body1">
//               สถานที่ประกอบการของบริษัท
//             </Typography>
//             <textarea className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-6 mt-2 rounded-lg ring-2 ring-black" placeholder="กรุณากรอกรายละเอียด..."
//             name='companyAddress'  onChange={handleChange} ></textarea>
//             </div>
            
//             <div class="flex items-center pl-8 pt-3">
//             <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-black rounded ring-2 ring-gray-700 " 
             
//             onChange={e => handleChange(e)}

//             />
//             <label for="checkbox-2" class="ml-3 text-sm font-medium text-black">
//               <Typography variant="body1">
//               จ่ายเงินเพื่อ Boost Post
//               </Typography>
//               </label>

//             </div>

//             <a href="/paymentcompany" class="text-decoration-none">
//             <div className="flex items-center justify-center">
//             <button
//               class="bg-[#24AB82] drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5 mt-5 mb-4 hover:bg-[#1F795E] hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white focus:outline-none "
//             >
//               <Typography variant="body1">
//               หน้าต่อไป
//               </Typography>
//                   </button>
//             </div>
//             </a>


            
        
//       </div>
//       </form>
//     </ThemeProvider>
//     );
// }

import React, { useState , useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import "./Postjob.css";

import { createPost } from "../../api/post";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const API_PROVINCE = 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json'
const API_COLLEGE = 'https://raw.githubusercontent.com/MicroBenz/thai-university-database/master/dist/universities-pretty.json'

export default function Postjob(){

  var { user } = useSelector((state) => ({ ...state }));
  const [provinces,setProvice] = useState([]) 
  const [colleges,setCollege] = useState([]) 
  const [postdata,setPost] = useState({
      'desc':''
  
      ,'college':''
      ,'faculty':''
      ,'program':''
      ,'jobType':''
      ,'position':''
      ,'wageMin':0
      ,'wageMax':0
      ,'rate':0
      ,'provinceAddress':''
      ,'postDateExpire':''
      ,'companyName':''
      ,'companyAddress':''
      ,'boost':false
    })
    async function fetchProvincesName(){  
      const response = await fetch(API_PROVINCE)
      const data = await response.json() 
      setProvice(data)
    }
    async function fetchCollegesName(){  
      const response = await fetch(API_COLLEGE)
      const data = await response.json() 
      setCollege(data)
    }

  useEffect(()=> {
      fetchProvincesName()
      fetchCollegesName()
    },[])

  const isNumberInput =(e)=>{
      var char = String.fromCharCode(e.which)
      if(!(/[0-9]/.test(char))){
        alert('Please Enter Number')
        e.preventDefault()
      }
    }
  
  const handleCheck = (e) => {
    var checkBox = document.getElementById("myCheck")
    if (checkBox.checked === true){
        console.log('checked')
        setPost({
          ...postdata,
          boost:true
        })
    }else {setPost({
      ...postdata,
      boost:false
    })}
    

    }
    console.log(postdata.boost)

  const handleChange = (e) => {
      console.log(e.target.name ,e.target.value )
      setPost({
        ...postdata,
        [e.target.name]:e.target.value
      })
    }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('this is working')
      let keyP = ['desc' ,'college','faculty' ,'program' ,'jobType' ,'position','wageMin','wageMax' ,'rate' ,'provinceAddress','postDateExpire','companyName','companyAddress','img']
      for (var i =0 ; i < keyP.length ;i++){
        if (postdata[keyP[i]] === '' || postdata[keyP[i]] === 0){
          delete postdata[keyP[i]]
        }
      }
      console.log('postdata',postdata)
      
      createPost(user.token, postdata)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    };

  

    const notosan1=createTheme({
        typography:{
          subtitle1:{
            fontSize:35,
            fontWeight:'bold',
            fontFamily: [
              'Noto Sans Thai',
              'sans-serif',
            ].join(','),
          },
          body1:{
            fontSize:25,
            fontFamily: [
              'Noto Sans Thai',
              'sans-serif',
            ].join(','),
          },
          body2:{
            fontSize:18,
            fontWeight:500,
            fontFamily: [
              'Noto Sans Thai',
              'sans-serif',
            ].join(','),
          }
        },
      });
    // const initialValues = {detailwork: "",};
    // const [formValues, setFormValues]=useState();
    return(
      
    <ThemeProvider theme={notosan1}>
      <form onSubmit={handleSubmit}>
        <div className=" h-20 w-200 bg-green-300 rounded-t-lg mx-10 mt-8">
          
            {/* หัวข้อ */}
            <div div className="pl-8 pt-2.5 ">
              <Typography variant="subtitle1">
                  สร้างโพสต์หาพนักงาน
              </Typography>
            </div>
        </div>

        <div className=" w-200  bg-gray-200  shadow-lg md:drop-shadow-xl rounded-b-lg mx-10 mb-10 shadow-black">
            {/* รายละเอียดงาน */}
            <div className="pl-7 pt-3">
            <Typography variant="body1">
                รายละเอียดงาน
            </Typography>
            {/* <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"/> */}
            <textarea name="desc" className="message" rows="12" class="resize-none p-2.5 w-11/12 ml-7 mt-2 rounded-lg ring-2 ring-black"
            placeholder="กรุณากรอกรายละเอียด..." onChange={handleChange}
            ></textarea>
        
    

            

            {/* คุณสมบัติของผู้สมัคร */}
            <div className="pt-3">
            <Typography variant="body1">
                คุณสมบัติของผู้สมัคร
            </Typography>
            <div className="flex space-x-6 pt-2">
                <div className="flex space-x-2">
                <Typography variant="body2">
                        มหาลัย
                </Typography>
                <select name = "college" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option></option>
                        {colleges.map((item)=>
                        <option>{item.university}</option>
                        )}
                </select>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        คณะ
                </Typography>
                <select name ="faculty" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        สาขา
                </Typography>
                <select name="program" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>
                
              </div>


              <div className="flex space-x-6 pt-3">
                <div className="flex space-x-2">
                <Typography variant="body2">
                        ประเภทงาน
                </Typography>
                <select name="jobType" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        ตำแหน่ง
                </Typography>
                <select name="position" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>

                {/* เช็คใน input ใส่ได้แค่เลข */}
                <div className="flex space-x-2">
                <Typography variant="body2">
                        เงินเดือน
                </Typography>
                <input name = 'wageMin' type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="ต่ำสุด" onChange={handleChange} onKeyPress = {isNumberInput} ></input>
                <Typography variant="body2">
                        -
                </Typography>
                <input name = 'wageMax' type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="สูงสุด" onChange={handleChange} onKeyPress = {isNumberInput}></input>
                </div>
                
              </div>
            </div>


            <div className="flex space-x-6 pt-12">
                <div className="flex space-x-2">
                <Typography variant="body2">
                        อัตราที่รับ
                </Typography>
                <input name = 'rate' type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="จำนวน" onChange={handleChange} onKeyPress = {isNumberInput}></input>
                
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        จังหวัดของสถานประกอบการ
                </Typography>
                <select name="provinceAddress" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option></option>
                        {provinces.map((item)=>
                        <option>{item.name_th}</option>
                        )}
                </select>
                </div>

                {/* เช็คใน input ใส่ได้แค่เลข */}
                <div className="flex space-x-2">
                <Typography variant="body2">
                        ระยะเวลาการโพสต์
                </Typography>
                <select name="postDateExpire" className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <opion></opion>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>
                
              </div>
            </div>
            
            
            {/* สถานที่ประกอบการของบริษัท */}
            <div className="pl-7 pt-3">
            <Typography variant="body1">
              สถานที่ประกอบการของบริษัท
            </Typography>
            <textarea name ='companyAddress'className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-6 mt-2 rounded-lg ring-2 ring-black" placeholder="กรุณากรอกรายละเอียด..." onChange={handleChange}></textarea>
            </div>
            
            <div class="flex items-center pl-8 pt-3">
            <input id="myCheck" type = "checkbox" aria-describedby="checkbox-2"  class="w-4 h-4 text-black rounded ring-2 ring-gray-700 " 
             onClick={handleCheck} />
            <label for="checkbox-2" class="ml-3 text-sm font-medium text-black">
              <Typography variant="body1">
              จ่ายเงินเพื่อ Boost Post
              </Typography>
              </label>

            </div>

            <a href="/paymentcompany" class="text-decoration-none">
            <div className="flex items-center justify-center">
            <button
              class="bg-[#24AB82] drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5 mt-5 mb-4 hover:bg-[#1F795E] hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white focus:outline-none " 
            onChange={handleChange} 
            
            >
              <Typography variant="body1">
              {/* <Link to={'/paymentcompany/'+} */}หน้าต่อไป
              </Typography>
                  </button>
            </div>
            </a>


            
        
      </div>
      </form>
  </ThemeProvider>
    );
}
