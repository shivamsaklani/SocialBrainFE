
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard } from "./Components/DashBoard";
import { HomePage } from "./Components/HomePage";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import { Authpage } from "./Components/Authpage";
import { SharePage } from "./Components/SharePage";
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<HomePage/>}/>
           <Route path="dash" element={<DashBoard/>}/>

           <Route path="/user" element={<Authpage/>}>
           <Route path="signin" element={<SignIn/>}/>
           <Route path="signup" element={<SignUp/>}/>
           </Route>
      <Route path="/content/share/:id" element={<SharePage/>}/>
      
         
      
    </Routes>
    
    </BrowserRouter>
   
      
    </>
  );
}

export default App;
