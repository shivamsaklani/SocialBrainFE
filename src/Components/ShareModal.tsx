
import { Close } from "../icons/Close";
import { useRecoilState } from "recoil";
import { Share } from "../Global/Global";
import { CustomButton } from "./Button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Copy } from "../icons/copy";
export function ShareModal({
  open,
  onclose,
}: {
  open: boolean;

  onclose:any;
}) {
  const [showlink,setlink]=useState<string>();
  const [isPublic, setPublic] = useRecoilState(Share);

  const setvisible = async (visible:boolean) => {
    try {
      const response= await axios.post<any>(
        `${import.meta.env.VITE_baseurl}/content/share`,
        {
          share: visible,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    setlink(`${import.meta.env.VITE_frontendurl}`+ response.data.link);
    } catch (e) {
      toast.error("Error:" + e);
    }
  };

  const Public = () => {
    setvisible(false);
    setPublic(false);
  };

  const Private = () => {
    setvisible(true);
    setPublic(true);
  };

  const copytext =async()=>{
   try{
    await window.navigator.clipboard.writeText(showlink as string);

   }
   catch(e){
    console.log(e)
   }
  }

 

  return (
    <>
      {open && (
        <div className="h-screen flex fixed justify-center items-center w-screen bg-black/50">
          <div className="flex flex-col bg-white h-96  rounded  w-96">
            <div className="px-5 py-3 flex justify-between cursor-pointer">
              <h1 className="text-title text-center">Share your Brain</h1>
              <div onClick={() => onclose(false)}>
                <Close />
              </div>
            </div>
            <div className="flex flex-col px-3 py-3 gap-y-10 h-full items-center justify-center">
              <div className="flex px-3 justify-start text-gray">
                Everyone can access your all the tweets, post, video and
                artilces saved in your second brain.
                {isPublic ? (
                  <>Copy your Link to share your Brain</>
                ) : (
                  <>Make your Brain Accessible to Everyone</>
                )}
              </div>
              <div className="flex flex-row gap-3">
                <input
                 
                  disabled
                  value={showlink}
                  className="border px-3 rounded shadow-md h-10"
                />
                <CustomButton children="Copy" Click={copytext} icon={<Copy />} primary rounded />
              </div>
              {isPublic ? (
                <CustomButton
                  children="Public"
                  primary
                  rounded
                  Click={Public}
                />
              ) : (
                <CustomButton
                  other
                  rounded
                  Click={Private}
                  children="Private"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
