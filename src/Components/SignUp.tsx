import { useRef } from "react";
import { CustomButton } from "./Button";
import { Inputbox } from "./Inputbox";
import axios from "axios";
import toast from "react-hot-toast";
export function SignUp() {
  const Email = useRef<HTMLInputElement | null>(null);
  const Password = useRef<HTMLInputElement | null>(null);
  const User = useRef<HTMLInputElement | null>(null);

  const SignUp = async () => {
    const toastid=toast("Loading ....");
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_baseurl}/Signup`, {
        email: Email.current?.value,
        user: User.current?.value,
        password: Password.current?.value,
      })

      if(response.status ===201){
        
        toast.success("SignUp Successful");
      }
    } catch (e) {
      toast("Error occured" +e);
    }
    finally {
      toast.remove(toastid);
    }
  };

  return (
    <>
      <div className="flex  h-full w-full  justify-center items-center ">
        <div className="flex flex-col gap-3 py-3 shadow-xl  shadow-gray/50 rounded-md h-96 w-96 items-center bg-white">
          <div className="flex text-title  font-title py-3">
            Sign Up
          </div>
          <div className="flex flex-col gap-5 w-full h-full justify-center items-start px-10  ">
            <div className="flex flex-col w-full gap-3  ">
              <span>
                <Inputbox
                  reference={Email}
                  placeholder="Enter Email"
                  title="Email"
                  type="text"
                />
              </span>

              <span>
                <Inputbox
                  reference={User}
                  placeholder="Enter User Name"
                  title="User"
                  type="text"
                />
              </span>

              <span>
                <Inputbox
                  reference={Password}
                  placeholder="Enter Password "
                  title="Password"
                  type="password"
                />
              </span>
            </div>

            <div className="flex justify-center items-center  w-full">
              <CustomButton primary rounded Click={SignUp}>
                Submit
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
