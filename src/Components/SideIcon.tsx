import { ReactElement } from "react";

export function SideIcon({icon,title}:{
    icon:ReactElement,
    title:string
}){
    return (
            <div className="px-5 gap-3 py-3 flex hover:bg-secondary text-gray hover:text-white justify-center items-center hover:scale-110 transition ease-out duration-700 cursor-pointer rounded">
                {icon} <span>{title}</span>


            </div>
    );
}