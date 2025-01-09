import React from "react";
import MobileHeader from "./MobileHeader";
import MobileMainLogo from "../assets/images/mobile-main-logo.png";
import Text from "./Text";
import MobileFooter from "./MobileFooter";

const Mobile = () => {
  return (
    <div className="flex flex-col justify-between">
      <MobileHeader />
      <div className="flex justify-center">
        <img src={MobileMainLogo} alt="Home Logo" />
      </div>
      <div className="px-[20px] flex flex-col">
        <Text yellow medium className="text-center mb-[10px]">
          Mobile dApp coming <br /> soon—use desktop
        </Text>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Mobile;
