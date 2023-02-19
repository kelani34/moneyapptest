import soon1 from "../assets/soon-1.png";
import soon2 from "../assets/soon-2.png";
import soon3 from "../assets/soon-3.png";
import timer from "../assets/timer.svg";
import notification from "../assets/notification.png";

const ComingSoon = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-xl p-6 flex-1">
      <div className=" inline-block">
        <span className=" px-4 py-2 flex bg-[#FEEBEE] items-center gap-2 rounded-[30px]">
          <img src={timer} alt="timer" />
          <p className="text-[#E60A2B] font-medium text-sm">Coming soon</p>
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
          Receive notifcations about your rider performance, efficiency reviews
          and a lot more
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
