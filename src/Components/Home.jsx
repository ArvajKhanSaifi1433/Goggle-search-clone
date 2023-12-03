import React from "react";
import logo from "../Assets/google-logo.png";
import HomeHeader from "../Components/HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex h-screen flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-40">
          <img src={logo} className="w-44 md:w-72 mb-8" alt="goggle_Logo" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="py-2 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 ">
              Goggle Search
            </button>
            <button className="py-2 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
