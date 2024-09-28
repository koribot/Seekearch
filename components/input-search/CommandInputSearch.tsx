"use client";
import React, { FormEvent, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type CommandInputSearchProps = {
  placeholder?: string;
  lists?: Array<{ [key: string]: any }>;
};

const CommandInputSearch = ({
  placeholder = "Search...",
  lists,
}: CommandInputSearchProps) => {
  const [commandItemLists, setCommandItemLists] = useState<
    Array<{ [key: string]: any }> | undefined
  >([]);
  const [openSuggestion, setOpenSuggestion] = useState<boolean>(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const keywordRef = useRef<string>("");
  const initSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    keywordRef.current = val;
    const filteredSearch = lists
      ?.filter((item) => item.keyword.toLowerCase().includes(val.toLowerCase()))
      .slice(0, 10);
    setCommandItemLists(filteredSearch);
    setOpenSuggestion(true);
  };
  const router = useRouter();

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenSuggestion(false);
    router.push(`/search/${keywordRef.current}`);
  };

  return (
    <div className="relative rounded-lg shadow-md w-full">
      <form onSubmit={onSearch}>
        <div className="flex gap-[2px]">
          <div className="flex justify-center border-2 rounded-lg items-center">
            <IoIosSearch className="text-[25px]" />
            <input
              name="searchInput"
              type="text"
              value={keywordRef.current}
              placeholder={placeholder}
              onChange={initSeek}
              className="p-2 focus:outline-none"
              required
            />
          </div>
          <Button type="submit" variant="primary" ref={buttonRef}>
            Search
          </Button>
        </div>

        {keywordRef.current !== "" && openSuggestion && (
          <div className="absolute scrollbar max-h-[400px] w-full overflow-auto z-10 bg-white border border-gray-300 rounded-b-lg shadow-md scrollbar-thin scrollbar-thumb-gray-700">
            {commandItemLists?.map((item, index) => (
              <Button
                key={index}
                className="justify-start items-center w-full p-[20px] text-start"
                variant="ghost"
                onClick={(e) => {
                  keywordRef.current = item.keyword;
                  if (buttonRef.current) {
                    buttonRef.current.click();
                  }
                  e.preventDefault();
                }}
              >
                {item.keyword}
              </Button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default CommandInputSearch;
