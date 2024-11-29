import { useNavigate } from "react-router-dom";
import { CustomButton } from "./Button";
import toast from "react-hot-toast";

export function Logoutfun({onclose}:{
    onclose:()=>void,
  }){
    const navigate=useNavigate();
    const logout=()=>{
        navigate("/user/signin");
        localStorage.removeItem("token");
        toast.success("Sign Out");
        
    }
   return <>
 <div className=" w-screen flex justify-center fixed items-center h-screen bg-black/50 ">
  <div className="flex px-5 py-5 text-subtitle flex-col bg-white rounded justify-center items-center">
   <span className="text-title"> Do you want to Logout ?</span>
    <div className="flex flex-row  py-3  gap-3" >
    <CustomButton children="No" rounded  other Click={onclose} />
    <CustomButton children="Yes"primary  Click={logout} rounded /> 
    </div>
  
  </div>
  
  </div>
  
   </>
  
  }