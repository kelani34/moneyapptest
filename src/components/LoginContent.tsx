import React from "react";
import logo from "../assets/moneyapp-logo.png";
import Features from "./Features";
import ft1 from "../assets/feature-1.png";
import ft2 from "../assets/feature-2.png";
import ft3 from "../assets/feature-3.png";
import { Feature } from "../types/Types";


const LoginContent = () => {
  const features: Feature[] = [
    {
      img: ft1,
      title: "Manage your orders",
      text: "View all your orders and their status in real time",
      selected: false,
    },
    {
      img: ft2,
      title: "Manage your orders",
      text: "View all your orders and their status in real time",
      selected: false,
    },
    {
      img: ft3,
      title: "Manage your orders",
      text: "View all your orders and their status in real time",
      selected: true,
    },
  ];
  return (
    <div className="md:m-5 m-2 ">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="max-w-[482px] mx-2 my-3">
        <h2 className="font-bold text-3xl text-[#1A1A1A] mb-2">
          Hi there, see what's new
        </h2>
        <p className="font-normal text-base text-[#595959]">
          Here's how Foodcourt helps you manage your daily operations and ensure
          your riders are efficient
        </p>
      </div>
      <div className="mt-20">
        {features.map((feature) => {
          return (
            <Features
              img={feature.img}
              title={feature.title}
              text={feature.text}
              selected={feature.selected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LoginContent;
