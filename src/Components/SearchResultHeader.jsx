import React, { useEffect, useState } from "react";
import Logo from "../Assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";
import { useGoggleContext } from "../utils/ContextApi";
import { Link } from "react-router-dom";

const menu = [
  { name: "All", icon: <GoSearch /> },
  { name: "Images", icon: <BsImage size={14} /> },
  { name: "Videos", icon: <RiVideoLine /> },
  { name: "News", icon: <BiNews /> },
  { name: "Shopping", icon: <SlTag size={14} /> },
];
function SearchResultHeader() {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { imageSearch, setImageSearch } = useGoggleContext();
  useEffect(() => {
    setImageSearch(false);
  }, []);

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pt-7 border-b border-[#ebebeb] flex  flex-col items-center sticky top-0 bg-white z-50 ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to={`/`}>
            {" "}
            <img src={Logo} alt="logo" className="hidden md:block w-24 mr-10" />
          </Link>
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex md:self-start ml-[-12px] mt-3 flex-wrap">
        {menu.map((menu) => {
          return (
            <span
              key={crypto.randomUUID()}
              className={`flex items-center p-3 text-[#5f6368] cursor-pointer ${
                selectedMenu === menu.name
                  ? "text-blue-500  before:absolute before:top-[100%] before:left-[50%] before:-translate-x-1/2 before:w-[70%] before:mx-auto before:h-[2px] before:bg-blue-500 duration-150"
                  : ""
              } relative`}
              onClick={() => {
                let isTypeImage = menu.name === "Images";
                setSelectedMenu(menu.name);
                setImageSearch(isTypeImage ? true : false);
              }}
            >
              <span className=" mr-2">{menu.icon}</span>
              <span>{menu.name}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResultHeader;
