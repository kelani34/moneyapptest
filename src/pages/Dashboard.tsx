import React from "react";

const Dashboard = () => {
  return (
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
                <p className="fonrt-normal text-xs text-[#858585]">CEO</p>
                <h3>CEO NAME</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-xl p-6 flex-1 "></div>
      </div>
    </div>
  );
};

export default Dashboard;
