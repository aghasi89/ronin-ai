import React from "react";
import HomeLogo from "../assets/images/home-logo_2.png";
import Text from "./Text";
import Button from "./Button";
const MobileHeader = () => {
  return (
    <header className="overflow-hiddengap-[10px] gap-[20px] position-sticky top-[114px] z-10  shadow-md flex justify-between items-center ">
      <div className="flex items-center gap-[18px] rounded-[14px] skew-x-[-20deg] ml-[-50px] bg-[#1E1E1E] p-[16px] pl-[24px]">
      <a href="./dashboard"><div className="flex items-center gap-[10px] skew-x-[20deg] pl-[50px] ">
          <img
            src={HomeLogo}
            alt="Home Logo"
            className="w-[61px] h-[64px] mx-auto"
          />
          <Text yellow middle bold>
            RONIN AI
          </Text>
        </div></a>
      </div>
      <div className="flex flex-1 justify-between  items-center py-4 px-8 gap-[18px] h-[95px] rounded-[14px] skew-x-[-20deg] bg-[#1E1E1E] p-[16px] pr-[50px] mr-[-50px]">
        <div className="flex items-center justify-between w-full gap-[10px] pr-[23px]  skew-x-[20deg]">
          <div className="flex justify-between items-center py-4 px-8 gap-[25px]">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
