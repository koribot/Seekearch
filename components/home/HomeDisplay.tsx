"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaPlusCircle } from "react-icons/fa";
import SeekearchCard from "../card/SeekearchCard";
const HomeDisplay = () => {
  return (
    <div>
      <div className="absolute right-0">
        <Button variant="ghost">
          <FaPlusCircle className="text-lg text-green-500" />
        </Button>
      </div>
      <div className="flex justify-center">
        <SeekearchCard />
      </div>
    </div>
  );
};

export default HomeDisplay;
