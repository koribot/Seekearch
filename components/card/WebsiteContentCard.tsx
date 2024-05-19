"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";

type WebsiteContentCardProps = {
  platform: string;
  searhKeyword: string;
  searchUrlStructure: string;
  additionalSearchUrlParams?: string;
};

const WebsiteContentCard = ({
  platform = "",
  searhKeyword = "",
  searchUrlStructure = "",
  additionalSearchUrlParams = "",
}: WebsiteContentCardProps) => {
  const [html, setHtml] = useState<string>("");
  const iframeRef = useRef(null);

  const fetchPlatformHTML = async () => {
    const link = encodeURIComponent(
      searchUrlStructure + searhKeyword + additionalSearchUrlParams
    );
    try {
      const resp = await axios.get(`/api/search?q=${link}`);
      const r = await resp.data;
      setHtml(r);
    } catch (err) {
      console.log(err);
    }
  };
  useLayoutEffect(() => {
    fetchPlatformHTML();
  }, []);
  return (
    <div className="relative">
      <div
        className="flex justify-center bg-gray-100 gap-5 border-2 border-[#42423E] 
        items-center py-[10px] px-[50px] rounded-md"
      >
        <p className="italic text-center font-bold">{platform}</p>
      </div>
      <div className="border-2 border-[#42423E] h-[700px] rounded-md scrollbar">
        <iframe
          ref={iframeRef}
          srcDoc={html}
          rel="noreferrer"
          className="h-full w-full scrollbar "
        />
      </div>
    </div>
  );
};

export default WebsiteContentCard;
