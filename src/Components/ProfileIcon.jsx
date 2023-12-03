import React from "react";
import { TbGridDots } from "react-icons/tb";
import Profile from "../Assets/profile-200x200.jpg";
import profileRing from "../Assets/profile-ring.svg";

function ProfileIcon() {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368" />
      </span>
      <span className="h-10 w-10 flex relative justify-center items-center">
        <img src={profileRing} className="absolute" alt="" />
        <span className=" h-8 w-8 rounded-full overflow-hidden">
          <img src={Profile} alt=""  className="w-full h-full object-cover"/>
        </span>
      </span>
    </div>
  );
}

export default ProfileIcon;
