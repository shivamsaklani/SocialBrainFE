import { Link } from "react-router-dom";
import { Brain } from "../icons/Brain";
import { ButtonLink } from "./ButtonLink";

export function Header(){
    return <div className="bg-primary  flex  justify-between  w-full  py-5 px-10">
    <Brand/>
    <div className="flex gap-3 sm:flex hidden justify-between">
        
    <ButtonLink link="/" children="Home"/>
      
       <ButtonLink link="/user/signin" children="SignIn"/>
       <ButtonLink link="/user/signup" children="Signup"/>

    </div>

</div>
}

export function Brand(){
    return (
        <div className="flex   gap-3 items-center justify-center ">
            
        <Brain/>   <span className="font-subtitle text-title text-white"><Link to="/">SocialBrain</Link></span>
    
    </div>
    )
}