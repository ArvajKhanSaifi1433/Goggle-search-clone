import React from "react";
import { quickLinks, settingMenu } from "../utils/Constants";
import { BsImage } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#f2f2f2] absolute bottom-0 inset-x-0">
     {/*  <div className="flex p-[15px] md:px-[30px] border-b border-[#dadce0]">
        <span className="text-[#70767a] text-[15px] leading-none">India</span>
      </div> */}
      <div className="flex flex-col sm:flex-row justify-between py-3 md:py-0 md:px-[15px]">
        <div className="flex justify-center flex-wrap">
          {quickLinks.map((menu) => {
            return (
              <span
                key={crypto.randomUUID()}
                className="text-[#707578] text-sm leading-none p-2.5 md:p-3.5 hover:text-[#353637] cursor-pointer"
              >
                {menu}
              </span>
            );
          })}
        </div>
        <div className="flex justify-center flex-wrap">
          {settingMenu.map((menu) => {
            return (
              <span
                key={crypto.randomUUID()}
                className="text-[#707578] text-sm leading-none p-2.5 md:p-3.5 hover:text-[#353637] cursor-pointer"
              >
                {menu}
              </span>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
