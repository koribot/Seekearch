"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaPlusCircle } from "react-icons/fa";
import SeekearchCard from "../card/SeekearchCard";
import WebsiteNameCard from "../card/WebsiteNameCard";
import { websiteNames } from "./../../data/websiteNames";
const HomeDisplay = () => {
  const [showAddWebsite, setShowAddWebsite] = useState<boolean>(false);
  return (
    <div>
      <div className="absolute top-[20px] right-[30px]">
        <Button
          onMouseOver={() => setShowAddWebsite(true)}
          onMouseLeave={() => setShowAddWebsite(false)}
          variant="ghost"
          className="flex gap-[5px]"
        >
          {showAddWebsite && <p>Add Website</p>}
          <FaPlusCircle className="text-lg text-green-500" />
        </Button>
      </div>
      <div className="mt-[50px] px-[100px] grid justify-between gap-[15px] grid-cols-3">
        {websiteNames?.map((item: { platform: string }) => {
          return <WebsiteNameCard key={item.platform} title={item.platform} />;
        })}
      </div>
    </div>
  );
};

export default HomeDisplay;
