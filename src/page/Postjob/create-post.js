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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const API_PROVINCE = 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json'
const API_COLLEGE = 'https://raw.githubusercontent.com/MicroBenz/thai-university-database/master/dist/universities-pretty.json'

export default function Postjob(){

  var { user } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate()

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
    const d =  Date.now()
      console.log(e.target.name ,e.target.value )
      if(e.target.name === 'postDateExpire' ){
        let addtime = e.target.value*3600000
        let settime = addtime+d
        const exp = new Date(settime)
        setPost({
          ...postdata,
          [e.target.name]:exp
        })
     
      }else{
        setPost({
          ...postdata,
          [e.target.name]:e.target.value
        })
      }
    }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('this is working')
      let keyP = ['desc' ,'college','faculty' ,'program' ,'jobType' ,'position','wageMin','wageMax' ,'rate' ,'provinceAddress','postDateExpire','companyAddress','img']
      for (var i =0 ; i < keyP.length ;i++){
        if (postdata[keyP[i]] === '' || postdata[keyP[i]] === 0){
          delete postdata[keyP[i]]
        }
      }
      console.log('postdata',postdata)
      
      createPost(user.token, postdata)
        .then((res) => {
            console.log('res',res.data);
            navigate('/paymentcompany')
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

      
      const programList = [
        "ชีวการแพทย์",
        "คอมพิวเตอร์",
        "แมคคาทรอนิกส์",
        "แมคคาทรอนิกส์และหุ่นยนต์",
        "ไฟฟ้า",
        "โยธา",
        "ธรณี",
        "อิเล็กทรอนิกส์",
        "โทรคมนาคม",
        "เคมี",
        "เกษตร",
        "การจัดการและโลจิสติกส์",
        "ขนส่ง",
        "ปิโตรเลียม",
        "ซอฟต์แวร์",
        "สารสนเทศ",
        "สิ่งแวดล้อม",
        "เครื่องกล",
        "สิ่งทอ",
        "การตลาด",
        "การจัดการ ",
        "การเงินและการธนาคาร ",
        "การบัญชี",
        "ระบบสารสนเทศธุรกิจ",
        "การจัดการการท่องเที่ยวและการบริการ",
        "ธุรกิจอสังหาริมทรัพย์ ",
        "การจัดการอุตสาหกรรม",
        "การประกันภัย",
        "การจัดการ(กลุ่มวิชาพาณิชยศาสตร์)",
        "เศรษฐศาสตร์ธุรกิจ",
        "ภาษาฝรั่งเศสธุรกิจ ",
        "ภาษาจีนธุรกิจ",
        "ภาษาญี่ปุ่นธุรกิจ",
        "ภาษาจีนเพื่อเศรษฐกิจและการค้า",
        "เทคโนโลยีสารสนเทศ",
        "วิทยาการโทรคมนาคม",
        "การวิเคราะห์ข้อมูลเชิงธุรกิจ",
        "การจัดการเทคโนโลยี",
        "ธุรกิจดนตรี",
        "การแสดงดนตรี",
        "การประชาสัมพันธ์",
        "การสื่อสารผ่านสื่อใหม่",
        "การสื่อสารการแสดง",
        "การออกแบบนิเทศศิลป์",
        "กระบวนจินตภาพคอมพิวเตอร์",
        "เทคโนโลยีการอาหาร",
        "อุตสาหกรรมเกษตร",
        "สถาปัตยกรรมศาสตร์ ",
        "สถาปัตยกรรมภายใน",
        "ออกแบบภายใน",
        "ออกแบบผลิตภัณฑ์",
        "คณิตศาสตร์และวิทยาการคอมพิวเตอร์",
        "เคมี",
        "ชีววิทยา",
        "ฟิสิกส์",
        "พฤกษศาสตร์",
        "เคมีเทคนิค",
        "วิทยาศาสตร์สิ่งแวดล้อม",
        "วิทยาศาสตร์ทางทะเล",
        "ชีวเคมี",
        "วัสดุศาสตร์",
        "จุลชีววิทยา",
        "เทคโนโลยีทางอาหาร",
        // ].sort((a, b) => a.length - b.length);
      ].sort();
    
      const facultyList = [
        "เกษตรศาสตร์",
        "ครุศาสตร์อุตสาหกรรม",
        "เทคโนโลยีสารสนเทศ",
        "ประมง",
        "วิทยาศาสตร์",
        "วิศวกรรมศาสตร์",
        "สิ่งแวดล้อม",
        "กายภาพบำบัด",
        "การแพทย์แผนไทย",
        "ทันตแพทยศาสตร์",
        "เทคนิคการแพทย์",
        "แพทยศาสตร์",
        "พยาบาลศาสตร์",
        "เภสัชศาสตร์",
        "สหเวชศาสตร์",
        "สัตวแพทยศาสตร์",
        "สาธารณสุขศาสตร์",
        "ทัศนมาตรศาสตร์",
        "นิติศาสตร์",
        "นิเทศศาสตร์",
        "บริหารธุรกิจและการบัญชี",
        "มนุษยศาสตร์",
        "รัฐศาสตร์",
        "ศิลปกรรมศาสตร์",
        "เศรษฐศาสตร์",
        "สถาปัตยกรรมศาสตร์",
        "สังคมศาสตร์",
        "สังคมสงเคราะห์ศาสตร์",
      ].sort();

      const jobTypeList = [
        "เกษตร/จัดสวน/ปศุสัตว์/ประมง/เหมืองแร่",
        "งานขาย",
        "เขียนแบบ/งานDrawing/AutoCad/ออกแบบวิศวกรรม",
        "กฎหมาย",
        "คอมพิวเตอร์/IT/โปรแกรมเมอร์",
        "งานการเงิน-ธนาคาร",
        "งานขนส่ง-คลังสินค้า",
        "งานนำเข้า-ส่งออก",
        "งานบริการลูกค้า Call Center",
        "งานบัญชี",
        "งานบันเทิง/นักแสดง/นางแบบ/นักร้อง",
        "จัดซื้อ/ธุรการ/ประสานงานทั่วไป",
        "เจ้าหน้าที่ความปลอดภัย(จป.)/สิ่งแวดล้อม/ISO",
        "ช่างเทคนิค/อิเลคโทรนิค/ซ่อมบำรุง/ช่างพิมพ์",
        "นักเขียน/บรรณาธิการ/พิสูจน์อักษร/Copywriter/นักแปลภาษาบุคคล/ฝึกอบรม",
        "ผลิต/ควบคุมคุณภาพ/โรงงาน",
        "ผู้จัดการ/ผู้อำนวยการ/MD/CEO",
        "แผนกรักษาความปลอดภัย/งานอาคารจอดรถ",
        "แพทย์/เภสัชกร/สาธารณสุข",
        "ภูมิศาสตร์/แผนที่/GIS/ผังเมือง",
        "แม่บ้าน/พี่เลี้ยง/คนสวน",
        "โยธา/สำรวจ/สถาปัตย์/มัณฑนากร/ประเมินราคา",
        "ล่าม/มัคคุเทศก์/จองห้อง/จองตั๋ว",
        "เลขานุการ",
        "วิจัย/วิเคราะห์ (เศรษฐศาสตร์/หุ้น/ประกันภัย/ธนาคาร)",
        "วิทยาศาสตร์/Lab/วิจัยพัฒนา",
        "วิศวกร",
        "ศิลปะ/กราฟฟิค/ออกแบบ/ช่างภาพ",
        "ส่งเอกสาร/ขับรถ/ส่งผลิตภัณฑ์",
        "สื่อสารมวลชน/นักข่าว/งานวิทยุ/โทรทัศน์/หนังสือพิมพ์",
        "สุขภาพ/โภชนาการ/ความงาม/ฟิตเนส/สปา",
        "เสื้อผ้า/สิ่งทอ/ช่างแพทเทิร์นdropdown",
        "ออกแบบเว็บไซต์/Web",
        "อัญมณีและเครื่องประดับ",
        "อาจารย์/ครู/งานวิชาการ",
        "อาหาร/เครื่องดื่ม/กุ๊ก/บาร์เทนเดอร์/พนักงานเสิร์ฟ",
        "งาน Part-time/พนักงานชั่วคราว",
        "Freelance",
        "อื่นๆ",
      ].sort();
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
            placeholder="กรุณากรอกรายละเอียด..."  required onChange={handleChange}
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
                <select name = "college" 
                required 
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" 
                onChange={handleChange}>
                <option value="">ระบุมหาลัยที่จบมา</option>
                        {colleges.map((item)=>
                        <option>{item.university}</option>
                        )}
                </select>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        คณะ
                </Typography>
                <select name ="faculty" required className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option value="">ระบุคณะที่จบมา</option>
              {facultyList.map((e, idx) => (
                <option value={e}>{e}</option>
              ))}
                </select>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        สาขา
                </Typography>
                <select name="program" required className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option value="">ระบุสาขาที่จบมา</option>
              {programList.map((e, idx) => (
                <option value={e}>{e}</option>
              ))}
                </select>
                </div>
                
              </div>


              <div className="flex space-x-6 pt-3">
                <div className="flex space-x-2">
                <Typography variant="body2">
                        ประเภทงาน
                </Typography>
                <select name="jobType" required   className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option value=''>ระบุประเภทงาน</option>
                {jobTypeList.map((e, idx) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>
                </div>

                <div className="flex space-x-2">
                    <Typography variant="body2">ตำแหน่ง</Typography>
                    <input
                      type="text"
                      name="position"
                      required
                      onChange={handleChange}
                      className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"
                      placeholder="กรุณากรอกตำแหน่ง"
                    ></input>
                  </div>

                {/* เช็คใน input ใส่ได้แค่เลข */}
                <div className="flex space-x-2">
                <Typography variant="body2">
                        เงินเดือน
                </Typography>
                <input name = 'wageMin' type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="ต่ำสุด" required onChange={handleChange} onKeyPress = {isNumberInput} ></input>
                <Typography variant="body2">
                        -
                </Typography>
                <input name = 'wageMax' type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="สูงสุด" required onChange={handleChange} onKeyPress = {isNumberInput}></input>
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
                placeholder="จำนวน" required onChange={handleChange} onKeyPress = {isNumberInput}></input>
                
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        จังหวัดของสถานประกอบการ
                </Typography>
                <select name="provinceAddress" required className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" onChange={handleChange}>
                <option value="">ระบุจังหวัดของสถานประกอบการ</option>
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
                <select name="postDateExpire" required className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5" 
                onChange={handleChange}>
                <option value="">ระบุระยะเวลาการโพสต์</option>
                <option value = '1'>1hr</option>
                <option value = '2'>2 hrs</option>
                <option value = '3'>3 hrs</option>
                <option value = '4'>4 hs</option>
                </select>
                </div>
                
              </div>
            </div>
            
            
            {/* สถานที่ประกอบการของบริษัท */}
            <div className="pl-7 pt-3">
            <Typography variant="body1">
              สถานที่ประกอบการของบริษัท
            </Typography>
            <textarea name ='companyAddress' required className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-6 mt-2 rounded-lg ring-2 ring-black" placeholder="กรุณากรอกรายละเอียด..." onChange={handleChange}></textarea>
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

    
            <div className="flex items-center justify-center">
     
            <button
              class="bg-[#24AB82] drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5 mt-5 mb-4 hover:bg-[#1F795E] hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white focus:outline-none " 
            onChange={handleChange} 
            
            >
             
              <Typography variant="body1">
              หน้าต่อไป
              </Typography>
                  </button>
          
            </div>
       


            
        
      </div>
      </form>
  </ThemeProvider>
    );
}
