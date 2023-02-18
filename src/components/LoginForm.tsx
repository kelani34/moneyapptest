import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUser } from "../AuthProvider";

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { login, user } = useUser();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };
  useEffect(() => {
    if (user.loggedIn) {
      window.location.href = "/profile";
    }
  }, [user.loggedIn, navigate]);

  return (
    <div className=" flex-1 max-w-2xl  px-14 py-10 bg-white rounded-xl shadow-[0px_4px_25px_rgba(102,102,102,0.2)] m-3">
      <div className=" lg:mb-12 md:mb-8 mb-6">
        <h2 className="text-[#1A1A1A] font-semibold lg:text-2xl md:text-lg text-sm ">
          Login to your dashboard
        </h2>
        <p className="lg:text-base md:text-sm text-xs text-[#858585]">
          Provide details to login to your account{" "}
        </p>
      </div>
      <div>
        <form onSubmit={(e) => handleLogin(e)} id="form">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className=" p-5 b-white border border-solid border-[#1A1A1A] rounded-lg border-spacing-3 outline-none focus:ring-4 focus:ring-gray-200 lg:mb-6 md:mb-4 mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 relative lg:mb-12 md:mb-7 mb-5">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={viewPassword ? "password" : "text"}
              placeholder=""
              className="p-5 b-white border border-solid border-[#1A1A1A] rounded-lg border-spacing-3 outline-none focus:ring-4 focus:ring-gray-200 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconContext.Provider value={{ style: { color: "#A6A6A6" } }}>
              <div className="absolute right-4 bottom-5">
                <div
                  className={`${viewPassword ? "" : "hidden"}`}
                  onClick={() => setViewPassword(false)}
                >
                  <AiOutlineEye size={21} />
                </div>
                <div
                  className={`${viewPassword ? "hidden" : ""}`}
                  onClick={() => setViewPassword(true)}
                >
                  <AiOutlineEyeInvisible size={21} />
                </div>
              </div>
            </IconContext.Provider>
          </div>
          <button
            type="submit"
            className="bg-[#1CC578] w-full p-5 rounded-[40px] text-white lg:text-base md:text-sm text-xs "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
