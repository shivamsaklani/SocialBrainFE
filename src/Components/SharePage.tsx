import { useLocation } from "react-router-dom";
import {  ContentBox } from "./DashBoard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Brand } from "./Header";
import { ObjectId } from "mongodb";
interface BrainItem {
    type: string;
    title: string;
    description: string;
    link: string;
    _id:ObjectId , 
  }
export function SharePage(){
    const location = useLocation();
    const sharelink= location.pathname.replace("/content/share/","");

    const [data,setdata]=useState<BrainItem[]>([]);
    const [user,setuser]=useState({});


    useEffect(() => {
        const fetch = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_baseurl}/content/share/` + sharelink);
            const data =response.data.content;
            setdata(data);
           
            
            const user_response= await axios.get(`${import.meta.env.VITE_baseurl}/user/details/`+sharelink);
            setuser(user_response.data.response);
         
            
           
            
          
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetch();
      }, [sharelink]);


  return <>
  <div className="flex flex-col h-screen  w-screen bg-slate-300">

    <div className="flex justify-around  font-subtitle text-white items-center h-1/4 w-full bg-primary">
      <Brand/>
      <div>
        <p className="flex justify-start items-start flex-col">
          <span>{user.name}</span>
          <span>{user.email}</span>
        </p>
      </div>
    </div>
    <div className="flex h-full py-5 w-full items-center justify-center">
        

        <ContentBox  Brain={data}  />

    </div>

  </div>
  </>;
}
