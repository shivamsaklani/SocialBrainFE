

import { LinkedIn } from "../icons/LinkedIn";
import { Logout } from "../icons/Logout";
import { Tags } from "../icons/Tags";

import { Twitter } from "../icons/Twiter";
import { Youtube } from "../icons/Youtube";
import { Brand } from "./Header";
import { SideIcon } from "./SideIcon";

export function Sidebar({show}:{
  show:()=>void
}) {

 
  
  return (
    <div className="h-screen  w-72  flex flex-col">
      <div className="flex bg-primary justify-center p-3">
        <Brand />
      </div>

      <div className="h-full flex flex-col  py-10 items-center justify-between ">
        <div className="flex flex-col gap-3 ">
          <SideIcon icon={<Twitter />} title="Twitter" />
          <SideIcon icon={<Youtube />} title="Youtube" />
          <SideIcon icon={<LinkedIn />} title="LinkedIn" />
          <SideIcon icon={<Tags />} title="Tags" />
        </div>
        <div onClick={show} className="justify-center gap-2 hover:bg-secondary transition ease-in text-white  duration-800 bg-gray  rounded-md px-3 py-3 cursor-pointer flex items-center">
          <span  className="font-title text-white">Logout </span> <Logout  />

        </div>
      </div>
    </div>
  );
}

