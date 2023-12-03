import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import image from "../Assets/image.svg";

import mic from "../Assets/mic.svg";
import { useNavigate, useParams } from "react-router-dom";

function SearchInput() {
  const { query } = useParams();
  console.log(query);
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      id="SearchBox"
      className="h-12 w-full  md:max-w-xl border border-[#dfe1e5] rounded-full hover:bg-white  hover:shadow-c hover:border-0 focus-within:shadow-c2 focus-within:border-0 flex gap-3 items-center pl-3 pr-6 sm:px-4"
    >
      <label htmlFor="search">
        <AiOutlineSearch size={18} color="#9aa0a6" className="cursor-pointer" />
      </label>
      <input
        id="search"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus={true}
        autoComplete="off"
        className="w-full outline-none text-black/[0.87]"
      />
      <div className="flex items-center gap-3 ">
        {searchQuery && (
          <IoMdClose
            size={60}
            color="#9aa0a6"
            className="cursor-pointer"
            onClick={(e) => setSearchQuery("")}
          />
        )}

        <img className="h-5 w-5 cursor-pointer" src={mic} alt="" />
        <img className="h-5 w-5 cursor-pointer" src={image} alt="" />
      </div>
    </div>
  );
}

export default SearchInput;
