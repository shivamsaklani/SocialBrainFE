import { useEffect, useState } from "react";
import { Plus } from "../icons/Plus";
import { Brainbox } from "./Brainbox";
import { CustomButton } from "./Button";
import { Modal } from "./Modal";
import { Sidebar } from "./Sidebar";
import { ShareIcon } from "../icons/Share";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRecoilState } from "recoil";
import { create, DataContent } from "../Global/Global";
import { ObjectId } from "mongodb";
import { ShareModal } from "./ShareModal";
import { Logoutfun } from "./Logout";
export function DashBoard() {
  const [modalopen, setmodalopen] = useRecoilState(create);
  const [share, setshare] = useState(false);

  const [logout,setlogout]=useState(false);

  const showlogout= ()=>{
    setlogout(true);
   

  }

  const closelogout =()=>{
    setlogout(false);
   
  }

  const [Brain, setBrain] = useRecoilState(DataContent);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${import.meta.env.VITE_baseurl}/content/get`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setBrain(response.data.data);
    };

    fetch();
  }, []);

  return (
    <>
      <Modal
        open={modalopen}
        onClose={() => {
          setmodalopen(false);
        }}
      />
      <ShareModal
        open={share}
        onclose={() => {
          setshare(false);
        }}
      />
     {logout &&   <Logoutfun onclose={closelogout}/>}
      <Toaster position="top-center" />
      <div className="flex flex-row">
        <Sidebar show={showlogout}/>
        <div className="flex flex-col w-full bg-slate-300">
          <div className="flex p-3 w-full justify-end ">
            <div className="flex  justify-between gap-3">
              <CustomButton
                secondary
                icon={<Plus />}
                Click={() => setmodalopen(true)}
              >
                Create Brain
              </CustomButton>
              <CustomButton
                primary
                icon={<ShareIcon />}
                Click={() => {
                  setshare(true);
                }}
              >
                Share
              </CustomButton>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <ContentBox Brain={Brain} />
          </div>
        </div>
      </div>
    </>
  );
}
export interface BrainItem {
  type: string;
  title: string;
  description: string;
  link: string;
  _id: ObjectId;
}
export function ContentBox({ Brain }: { Brain: BrainItem[] }) {
  return (
    <div className="grid  md:grid-cols-3 place-items-center grid-cols-1 w-full  h-full px-3  gap-3 ">
      {Brain.map((item) => (
        <Brainbox
          type={item.type}
          title={item.title}
          description={item.description}
          link={item.link}
          deleteid={item._id}
        />
      ))}
    </div>
  );
}
