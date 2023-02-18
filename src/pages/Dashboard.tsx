import React, { useEffect } from "react";
import timer from "../assets/timer.svg";
import ContentLoader from "react-content-loader";
import { useUser } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {
  props: any;
};
const Dashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.loggedIn) {
      const timer = setTimeout(() => {
        logout();
      }, 30 * 60 * 1000);

      return () => clearTimeout(timer);
    }
    if (!user.loggedIn) {
      navigate("/login");
    }
  }, [user.loggedIn, logout, navigate]);

  console.log("profile uessssss", user);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl my-4 mx-auto">
        <div className="flex lg:gap-10 md:gap-8 gap-4 m-4">
          <div className=" flex-[2] border border-solid border-[#DDE1E3] px-16 py-8 rounded-lg">
            <div>
              <div className="flex lg:gap-5 md:gap-3 gap-1 h-24 items-center">
                <div className="border border-solid border-[#FCB6C0] rounded-[100%]  p-[3px] relative">
                  <div className="bg-[#FEE7EA] p-3 text-[#1CC578] lg:text-2xl md:text-lg text-sm rounded-full">
                    <p>CN</p>
                  </div>
                </div>
                <h2 className=" font-semibold lg:text-2xl md:text-lg text-sm">
                  Company Name
                </h2>
              </div>
              <div>
                <div>
                  <p className="fonrt-normal text-xs text-[#858585] leading-5">
                    CEO
                  </p>
                  <h3 className="font-normal text-base text-[#1A1A1A] leading-6">
                    CEO NAME
                  </h3>
                </div>
                <div>
                  <p className="fonrt-normal text-xs text-[#858585] leading-5">
                    CEO
                  </p>
                  <h3 className="font-normal text-base text-[#1A1A1A] leading-6">
                    CEO NAME
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-xl p-6 flex-1 ">
            <div className=" px-4 py-2 flex bg-[#FEEBEE] items-center gap-2 rounded-[30px] ">
              <img src={timer} alt="timer" />
              <p className="text-[#E60A2B] font-medium text-sm">Coming soon</p>
            </div>
            <div className="bg-white h-20">
              <ContentLoader
                speed={2}
                width={45}
                height={45}
                viewBox="0 0 45 45"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="4" y="93" rx="3" ry="3" width="194" height="14" />
                <rect x="3" y="113" rx="3" ry="3" width="134" height="14" />
              </ContentLoader>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
