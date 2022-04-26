import { Outlet } from "react-router-dom";
import Navbarstudent from "../../components/navbar/Navbar-student";
import Footer from "../../components/footer/Footer";
function Layout() {
  
  return (
    <div className="h-screen">
      <Navbarstudent/> 
      
      
      <Outlet />
      
      <Footer />
    </div>
  );
}

export default Layout;
