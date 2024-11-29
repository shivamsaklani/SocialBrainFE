
import background from "../assets/background.png";
import { LinkedIn } from "../icons/LinkedIn";
import { Secure } from "../icons/Secure";
import { ShareIcon } from "../icons/Share";
import { Twitter } from "../icons/Twiter";
import { Youtube } from "../icons/Youtube";

import { CustomButton } from "./Button";
import { Header } from "./Header";

import { InlineText } from "./InlineText";
import { Pagebox } from "./Pagebox";

export function HomePage() {
  return (
    <div className="flex flex-col ">
        {/* Screen1 */}
      <div className="w-full h-screen bg-primary  flex flex-col">
        <Header/>
        <div className=" flex sm:flex-row flex-col sm:items-center items-start  justify-center  px-10 h-screen">

          <div className="flex flex-col gap-5 justify-around items-start">
          <div className="text-maintext  text-white">SocialBrain</div>
          <div className="text-left pr-10 text-white text-title text-wrap">
         
           Missed last visited post, Social brain will keep
            it <InlineText>Secure</InlineText> and  <InlineText>Safe</InlineText>

          </div>
          <div className="flex ">
          <CustomButton link="/user/signin" other rounded >Create</CustomButton>

          </div>
          
          </div>

          <div className="flex justify-center  items-center ">

            <img src={background} className="w-full h-full rounded"/>
          
          
          </div>
          
        </div>
      </div>

      {/* Screen2 */}
      <div className="w-full h-screen bg-white flex flex-col">
      
        
        <div className="grid grid-cols-2 px-5 gap-3 content-center py-10  " >
         
        <Pagebox icon={<Secure/>} description="Secure to Share" >Secure</Pagebox>
          <Pagebox icon={<Secure/>} description="Safe for use">Safe</Pagebox>
          <Pagebox icon={<ShareIcon/>} description="Share your Brain with others">Shareable</Pagebox>
          
          <Pagebox icon={<Secure/>} description="Share your Brain with others">Shareable</Pagebox>

     
        
        </div>
        <div className="flex sm:flex-row flex-col px-5 justify-around items-center  h-screen">
          <div className="flex flex-col ">
         <h1 className="flex font-bold font-title text-secondarytext">Build perfect docs, together.</h1> 

          <p className="flex text-gray font-subtitle text-wrap">Capture your ideas, share them with your team, and gain valuable feedback 
            to refine and improve your concepts. Collaborate effectively, leveraging diverse perspectives to innovate and create
             impactful solutions.
          </p>

          </div>
          <div className="flex flex-col  items-end px-3">
            <div className="flex"> Access Direct Posts from </div>
            <div className="flex flex-row">
            <LinkedIn/>
         <Youtube/>
         <Twitter/>

            </div>
         
          </div>
          
       
        
        </div>
     
        <div className="flex justify-center text-white bg-primary font-subtitle w-full"> Copyright@Social Brain</div>
      </div>
    </div>
  );
}
