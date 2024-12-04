import { useRef } from "react";
import { CustomButton } from "./Button";
import { Inputbox } from "./Inputbox";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function SignIn() {
  const Email = useRef<HTMLInputElement | null>(null);
  const Password = useRef<HTMLInputElement | null>(null);
  const navigate=useNavigate();
  const SignIn = async () => {
    const toastid=toast("Loading...");

    try {

    
      const response = await axios
        .post(`${import.meta.env.VITE_baseurl}/Signin`, {
          email: Email.current?.value,
          password: Password.current?.value,
        });

        if(response.status===200){
          navigate("/dash");
          toast.success("SignIn Successful");


          localStorage.setItem("token", response.data.token);
        }
    } catch (e) {
      toast("Error message" + e);
    }
    finally{
      toast.remove(toastid);
    }
  };

  return (
    <>
      <div className="flex  h-full w-full  justify-center items-center ">
        <div className="flex flex-col gap-1 py-3 shadow-xl  shadow-gray/50 rounded-md h-96 w-96 items-center bg-white">
          <div className="flex text-title font-title py-3">
            Sign In
          </div>
          <div className="flex flex-col gap-5 w-full h-full justify-center items-start px-10  ">
            <div className="flex flex-col w-full   gap-3 ">
              <span>
                <Inputbox
                  reference={Email}
                  placeholder="Email"
                  title="Email"
                  type="text"
                />
              </span>
              <span>
                <Inputbox
                  reference={Password}
                  placeholder="Password "
                  title="Password"
                  type="password"
                />
              </span>
            </div>

            <div className="flex justify-center items-center  w-full">
              <CustomButton primary rounded Click={SignIn}>
                Submit
              </CustomButton>
            </div>
            <div className="flex w-full justify-end gap-1 font-title text-gray">
              New user?{" "}
              <Link className="text-secondary underline" to="/user/signup">
                {" "}
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
