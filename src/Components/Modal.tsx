import { useRef } from "react";
import { Close } from "../icons/Close";
import { Plus } from "../icons/Plus";
import { CustomButton } from "./Button";
import { Inputbox } from "./Inputbox";
import toast from "react-hot-toast";
import axios from "axios";
import { CustomTags } from "./CustomTags";
import { useRecoilState } from "recoil";
import { create } from "../Global/Global";
export function Modal({open,onClose}){
    const Title =useRef<HTMLInputElement>(null);
    const Link =useRef<HTMLInputElement>(null);
    const Description= useRef<HTMLTextAreaElement>(null);
    const Type =useRef<HTMLSelectElement>(null);
    const [modal,setmodal]=useRecoilState(create);

    const AddContent= async () =>{
      try {
         const response= await axios.post(`${import.meta.env.VITE_baseurl}/content/put`,{
              
                  "title":Title.current?.value,
                  "tags":[],
                  "type":Type.current?.value,
                  "link":Link.current?.value,
                  "description":Description.current?.value
      
                  
      
  
          },{
              headers:{
                  authorization:localStorage.getItem("token")
              }
          });
          if(response.status ===201){
            toast.success("Content Added ");
            setmodal(false);


        }
      } catch (e) {
        toast.error("error occured"+e);
        
      }

      

        
    }


    return(
      <>
            {open &&<>
              <div className="w-screen h-screen bg-black/50 fixed inset-0 flex justify-center items-center">
  <div className="flex flex-col bg-white shadow-md p-4 text-black rounded-lg w-full max-w-md">
    {/* Close Button */}
    <div className="flex justify-end cursor-pointer" onClick={onClose}>
      <Close />
    </div>

    {/* Modal Title */}
    <div className="flex text-title items-center justify-center py-2">
      <span>Add New Brain</span>
    </div>

    {/* Input Fields */}
    <div className="p-3 gap-2 w-full flex flex-col items-center">
      <Inputbox reference={Title} type="text" title="Title" placeholder="Title" />
      <Inputbox reference={Link} type="text" title="Link" placeholder="Link" />
      <div className="flex flex-col w-full gap-2">
  {/* Label for the textarea */}
  <label htmlFor="description" className="font-subtitle text-subtitle text-Textprimary">
    Description
  </label>

  {/* Textarea container */}
  <div className="w-full">
    <textarea
      ref={Description}
      id="description"
      placeholder="Enter your description here..."
      className="w-full h-32 text-black rounded-md outline px-3 py-2 text-start focus:ring-2 focus:ring-primary focus:outline-none"
    />
  </div>
</div>


    <div className="flex w-1/2">
     <select ref={Type} defaultValue="LinkedIn" className="text-white bg-primary rounded p-3 w-full">
        <option  value="Linkedin">LinkedIn</option>
        <option value="Youtube">Youtube</option>
        <option value="Twitter">Twitter</option>
        <option value="Article">Article</option>
      </select>
     </div>

      {/* Tags */}
      <div className="flex flex-wrap py-3 gap-3 justify-center items-center">
        <CustomTags tag="Computer" />
        <CustomTags tag="Youtube" />
        <CustomTags tag="LinkedIn" />
        <CustomTags tag="Computer" />
        <CustomTags tag="Youtube" />
        <CustomTags tag="LinkedIn" />
      </div>

      {/* Create Button */}
      <div className="flex justify-center p-3">
        <CustomButton Click={AddContent} primary rounded icon={<Plus />}>
          Create
        </CustomButton>
      </div>
    </div>
  </div>
</div>

               
               
                </>
                
            }
</>
      
    )
}