import React from "react";

import LoginContent from "../components/LoginContent";
import LoginForm from "../components/LoginForm";

const Login = () => {
  
  return (
    <div className="flex h-full max-w-7l">
      <div className="flex-1 flex justify-evenly">
        <LoginContent />
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#FEE7EA]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
