
import className from "classnames";
import { ReactElement } from "react";
import { Link } from "react-router-dom";



export function CustomButton({
    children,
    primary,
    secondary,
    other,
    rounded,Click,icon,link
}:{
    link?:string,
    icon?:ReactElement,
    Click?:()=>void
}){
    const classes = className("px-3 py-2 flex flex-row gap-3 cursor-pointer transition duration-700 ease-in-out hover:scale-110 items-center font-subtitle justify-center  rounded-md", {
        "border-blue-500 bg-other  shadow-md  text-white": primary,
        "border-gray-900 bg-gray shadow-md text-white": secondary,
        "border-gray-900 bg-secondary shadow-md text-white":other,

        "rounded-full": rounded,
      });

      return (
      
           
            <button className={classes} onClick={Click}>

           
            {icon && <span>{icon}</span>}
            <Link to={link}> {children}</Link>
               </button>
      
      );
      

}


