import timer from "../assets/timer.svg";
import Navbar from "../components/Navbar";
import soon1 from "../assets/soon-1.png";
import soon2 from "../assets/soon-2.png";
import soon3 from "../assets/soon-3.png";
import notification from "../assets/notification.png";
import { useQuery, gql } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { UseData } from "../types/Types";
import { useContext, useEffect } from "react";
import { UserContext } from "../auth/UserContext";

const GET_DATA = gql`
  {
    company {
      name
      ceo
      cto
    }
  }
`;
const Dashboard = () => {
  const { loading, data, error } = useQuery<UseData>(GET_DATA);
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.pathname = "/";
    }
  }, [isLoggedIn]);

  if (error) {
    toast.error("Something went wrong");
  }

  return (
    <div className="h-full relative">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <div className="max-w-7xl my-4 mx-auto h-full ">
        <div className="flex lg:gap-10 md:gap-8 gap-4 m-4 flex-wrap ">
          <div className=" flex-[2] border border-solid border-[#DDE1E3] px-16 py-8 rounded-lg">
            <div>
              <div className="flex flex-col lg:flex-row md:flex-row lg:gap-5 md:gap-3 gap-1 h-24 items-center">
                <div className="border border-solid border-[#FCB6C0] rounded-[100%]  p-[3px] relative">
                  <div className="bg-[#FEE7EA] p-3 text-[#1CC578] lg:text-2xl md:text-lg text-sm rounded-full ">
                    <p className="w-8 text-center h-8">
                      {data?.company.name
                        .split(" ")
                        .map(([firstLetter]) => firstLetter)
                        .join("")}
                    </p>
                  </div>
                </div>
                <h2 className=" font-semibold lg:text-2xl md:text-lg text-sm">
                  {loading ? "Loading..." : data?.company.name}
                </h2>
              </div>
              <div className="mt-5">
                <div className=" md:mb-6">
                  <p className="fonrt-normal text-xs text-[#858585] leading-5 md:text-left text-center">
                    CEO
                  </p>
                  <h3 className="font-normal text-base text-[#1A1A1A] leading-6 md:text-left text-center">
                    {loading ? "Loading..." : data?.company.ceo.toUpperCase()}
                  </h3>
                </div>
                <div>
                  <p className="fonrt-normal text-xs text-[#858585] leading-5 md:text-left text-center">
                    CTO
                  </p>
                  <h3 className="font-normal text-base text-[#1A1A1A] leading-6 md:text-left text-center">
                    {loading ? "Loading..." : data?.company.cto.toUpperCase()}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-xl p-6 flex-1">
            <div className=" inline-block">
              <span className=" px-4 py-2 flex bg-[#FEEBEE] items-center gap-2 rounded-[30px]">
                <img src={timer} alt="timer" />
                <p className="text-[#E60A2B] font-medium text-sm">
                  Coming soon
                </p>
              </span>
            </div>
            <div className="bg-white  mt-6 rounded-[10px] border border-solid border-[#EBEBEB]">
              <div className="flex gap-4 p-3 items-center  max-w-sm animate-pulse">
                <div className="bg-[#F5F5F5] py-3 px-4 rounded-md">
                  <div>
                    <img src={soon1} alt="soon" />
                  </div>
                </div>
                <div>
                  <div className="bg-[#F5F5F5] h-[14px] w-48 mb-1" />
                  <div className="bg-[#F5F5F5] h-[14px] w-32" />
                </div>
              </div>
              <div className="flex gap-4 p-3 items-center  max-w-sm animate-pulse">
                <div className="bg-[#F5F5F5] py-3 px-4 rounded-md">
                  <img src={soon3} alt="soon" />
                </div>
                <div>
                  <div className="bg-[#F5F5F5] h-[14px] w-48 mb-1" />
                  <div className="bg-[#F5F5F5] h-[14px] w-32" />
                </div>
              </div>
              <div className="flex gap-4 p-3 items-center  max-w-sm animate-pulse">
                <div className="bg-[#F5F5F5] py-3 px-4 rounded-md">
                  <img src={soon2} alt="soon" />
                </div>
                <div>
                  <div className="bg-[#F5F5F5] h-[14px] w-48 mb-1" />
                  <div className="bg-[#F5F5F5] h-[14px] w-32" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6">
              <div className="flex items-center justify-center text-2xl font-semibold text-[#1A1A1A]">
                <img src={notification} alt="notification" />
                &nbsp; Notifications
              </div>
              <p className=" font-normal text-center text-base text-[#595959] max-w-[280px]">
                Receive notifcations about your rider performance, efficiency
                reviews and a lot more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
