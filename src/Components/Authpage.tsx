import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Toaster } from "react-hot-toast";

export function Authpage(){
    return(
        <>
        
        
        <div className=" h-screen w-screen flex flex-col">
        <Header/>
        <Toaster position="top-center"/>
        <div className="flex flex-row h-full">
                
                <div className="flex bg-light-gray w-full justify-center items-center">
                    <Outlet/>
                </div>

        </div>

        </div>
        
        </>
    );

}