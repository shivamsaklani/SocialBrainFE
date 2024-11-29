import { Link } from "react-router-dom"


export function ButtonLink({children,link}:{
    children:string,
    link:string
}){
   return (
    <div className="flex px-3 py-2 rounded-lg hover:bg-secondary text-white font-subtitle transition duration-700 ease-in-out hover:scale-110">

      <Link to={link}>{children}</Link>

    </div>
   )
}