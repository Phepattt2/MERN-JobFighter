import { Outlet } from "react-router-dom";
import Navbarstudent from "../../components/navbar/Navbar-student";
import Navbarcompany from "../../components/navbar/Navbar-company";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";

function Layout() {
  const { user } = useSelector((state) => ({ ...state }));
  
  return (
    <div className="h-screen">
      {/* {user.role === "student" ? <Navbarstudent /> : <Navbarcompany />} */}
      <Navbarstudent />
      {/* <Navbarcompany/> */}
      
      
      <Outlet />
      
      <Footer />
    </div>
  );
}

export default Layout;