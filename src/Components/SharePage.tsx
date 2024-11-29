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

    useEffect(() => {
        const fetch = async () => {
          try {
            const response = await axios.get("http://localhost:3000/content/share/" + sharelink);
            console.log(response.data.content);
            setdata(response.data.content);
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
        User Details
      </div>
    </div>
    <div className="flex h-full py-5 w-full items-center justify-center">
        

        <ContentBox Brain={data} />

    </div>

  </div>
  </>;
}
