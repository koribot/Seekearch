import React from "react";

type CardProps = {
  title: string;
};

const WebsiteNameCard = ({ title = "" }: CardProps) => {
  return (
    <div
      className="flex justify-center bg-gray-100 gap-5 border-2 border-[#42423E] 
    w-full items-center py-[10px] px-[50px] rounded-md shadow-[rgba(0,0,15,0.5)_4px_5px_4px_0px]"
    >
      <p className="italic text-center font-bold">{title}</p>
    </div>
  );
};

export default WebsiteNameCard;
