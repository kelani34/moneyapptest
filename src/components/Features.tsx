import React from "react";
import tick from "../assets/tick.svg";

type Props = {
  selected: boolean;
  title: string;
  text: string;
  img: string;
};
const Features = ({ selected, title, text, img }: Props) => {
  return (
    <div
      className={` flex items-center pr-[30px] justify-between my-4 ${
        selected ? "bg-[#F8F8F6]" : ""
      } rounded-[20px] p-3 max-w-[462px]`}
    >
      <div className={`flex gap-5 items-center  `}>
        <img src={img} alt="feature" />
        <div className=" max-w-[296px]">
          <h3 className=" font-medium text-base text-[#858585]">{title}</h3>
          <p className="text-xs text-[#A3A3A3]">{text}</p>
        </div>
      </div>
      {selected && (
        <div className="">
          <img src={tick} alt="tick" />
        </div>
      )}
    </div>
  );
};

export default Features;
