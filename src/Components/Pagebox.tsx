import { ReactElement, ReactNode } from "react";

export function Pagebox({
  children,
  icon,
  description,
}: {
  children: ReactNode;
  icon: ReactElement;
  description:string
}) {
  return (
    <>
   

   
      <div className=" sm:px-10  shadow-lg transition duration-700 ease-in hover:scale-105 hover:text-white hover:bg-secondary cursor-pointer  rounded-lg sm:py-10 px-3 py-4">
        <div className="flex   flex-col   items-center">
          <div className="flex">{icon}</div>
          <div className="flex  ">{children}</div>
          <div className="flex ">{description}</div>
        </div>
      </div>
      
    </>
  );
}
