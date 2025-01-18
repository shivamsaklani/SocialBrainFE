
import { ShareIcon } from "../icons/Share";
import { Delete } from "../icons/Delete";
import { LinkedIn } from "../icons/LinkedIn";
import { Youtube } from "../icons/Youtube";
import { Twitter } from "../icons/Twiter";
import axios from "axios";
import toast from "react-hot-toast";
import { ObjectId } from "mongodb";
import { Iconlink } from "../icons/Iconlinks";
import { Link } from "react-router-dom";

export type BrainboxType = "Linkedin" | "Youtube"| "Article" | "Twitter"| "other"; // Example types

export interface BrainProps {
    title:string,
    link:string,
    description:string,
    deleteid:ObjectId,
    type:BrainboxType ,
}
export function Brainbox({title ,link,description,type,deleteid}:BrainProps){

  const Del =async ()=>{
  try {
     const response= await axios.delete(`${import.meta.env.VITE_baseurl}/content/delete`,{
        //@ts-ignore
        data:{
           contentId:deleteid
        },
        headers:{
          authorization:localStorage.getItem("token"),
        },
        
      
      });
      if(response.status ===201){
        toast.success("Item Deleted");
      }
  } catch (e) {
    toast.error("Error occured"+e);

  }

    
  }
   
  

   
    return(
        <>
        <div className="bg-white rounded-md shadow-md px-3 py-3 outline-slate-300 max-h-96 max-w-96  ">
            <div className="flex justify-between items-center gap-3">
                <span className="flex justify-center items-center">
                    <div className="text-gray-300 px-3">
                     {type ==="Linkedin" && <LinkedIn/>}  {type === "Youtube" && <Youtube/>}  {type ==="Twitter" && <Twitter/>}
                    </div>
                    {title}

                </span>
                <span className="flex">
               <div className="cursor-pointer px-3 text-red-500">
                    <button onClick={Del} ><Delete/></button>

                  </div>
               
                  <div className=" px-3 cursor-pointer text-primary ">
                   <a href={link}>  <Iconlink/></a>
                  </div>
                
                </span>
            </div>
            <div className="" >
              <div className=" flex pt-5 flex-col gap-5 ">
              
             
            { type === "Youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          }
            
            
            
             {type ==="Twitter" &&  
               <div className="flex ">
        <blockquote  className="twitter-tweet">
          <a href={link.replace("x.com", "twitter.com")}></a>
        </blockquote>
      </div>} 

                {type  === "Article" &&
                <div>
                  
                  
                  </div>}

                  {type ==="Linkedin" && <iframe src={link} className="w-full h-full  overflow-y-hidden"></iframe>}
                  <div className="flex flex-col overflow-hidden">
                 
                    {description}
                   
                  

                  </div>
              
                  </div>

            </div>
            
        </div>
        </>
    );

}