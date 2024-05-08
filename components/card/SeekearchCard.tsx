import React from "react";
import CommandInputSearch from "../input-search/CommandInputSearch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { searchSuggestions } from "./../../data/searchSuggestion";

const SeekearchCard = () => {
  return (
    <>
      <Card className="w-[350px] mt-[100px]">
        <CardHeader className="text-center">
          <CardTitle>Seekearch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center border-b-2 p-2">
            <CommandInputSearch
              placeholder="Search...."
              lists={searchSuggestions}
            />
          </div>
          <CardDescription className="italic text-center mt-[10px]">
            "Seek and Search Products"
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
};

export default SeekearchCard;
