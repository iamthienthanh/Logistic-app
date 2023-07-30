import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import SideBarD from '../components/SideBarD';
import SideBar from '../components/SideBarCustomer';
import { MainContext } from '../context/MainContext';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
function DriverRoute() {
  const { user } = useContext(MainContext)
 const [open, setOpen] = useState(false);

  const [width,setWidth]=useState(window.innerWidth)
  const handleOpen = () => {
    setOpen(!open);
  };
  
  useEffect(()=>{
    const getWidth = ()=>{
        setWidth(window.innerWidth)
     }
     window.addEventListener("resize",getWidth)
     if(width>=640){
       setOpen(false)
      }
     return()=>{
       window.removeEventListener("resize",getWidth)
     }
  },[width])
  if (user && user?.role.staff_type==="driver") {
    return (
            <>
              <SideBar className="" handleOpen={handleOpen} open={open} />
              <div>
                <span   onClick={() => handleOpen()} className="sm:hidden w-9 h-9 z-100 fixed top-[10%] left-[0%] z-3 transition sm:top-[11%]  lg:top-[15%]">
                  <IoArrowForwardCircleOutline
                    className="w-7 h-7 z-100   "  
                    onClick={() => handleOpen()}   
                  />
                </span>

              </div>

       
           <div className=" relative md:mx-5 lg:mx-28 py-4 bg-gray-white mx-2  grid grid-cols-9 pt-[78px]">
             <div className="hidden sm:block sm:col-span-2">
                <SideBarD/>
              </div>
              <div className="col-span-9 sm:col-span-7 bg-[#f8faff] rounded-lg   shadow-xl mb-3">
               <Outlet></Outlet>

              </div>
           </div>
          </>
    )
  }
  return <Navigate to="/dang-nhap-nhan-vien" />;
};
export default DriverRoute