"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

type CommandInputSearchProps = {
  placeholder?: string;
  lists?: Array<{ [key: string]: any }>;
};

const CommandInputSearch = ({
  placeholder = "Search...",
  lists,
}: CommandInputSearchProps) => {
  const [seek, setSeek] = useState<string>("");
  const [commandItemLists, setCommandItemLists] = useState<
    Array<{ [key: string]: any }> | undefined
  >([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>("");
  const initSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSuggestion("");
    const val = e.target.value;
    const filteredSearch = lists
      ?.filter((item) => item.keyword.toLowerCase().includes(val.toLowerCase()))
      .slice(0, 10);
    setCommandItemLists(filteredSearch);
    setSeek(e.target.value);
  };
  return (
    <div className="relative rounded-lg border shadow-md w-full">
      <div className="flex justify-center items-center">
        <IoIosSearch className="text-[25px]" />
        <input
          type="text"
          value={selectedSuggestion !== "" ? selectedSuggestion : seek}
          placeholder={placeholder}
          onChange={initSeek}
          className="p-2 focus:outline-none"
        />
      </div>
      {seek !== "" && selectedSuggestion === "" && (
        <div className="absolute max-h-[400px] w-full overflow-auto z-10 bg-white border border-gray-300 rounded-b-lg shadow-md scrollbar-thin scrollbar-thumb-gray-700">
          {commandItemLists?.map((item, index) => (
            <div
              key={index}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              <p onClick={() => setSelectedSuggestion(item.keyword)}>
                {item.keyword}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommandInputSearch;
