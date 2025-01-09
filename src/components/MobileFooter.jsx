import React from "react";
import Text from "./Text";
import LinkVector from "../assets/icons/link-vector.svg";

const MobileFooter = () => {
  return (
    <footer className="flex justify-between shadow-md border-t-2 border-white/10 px-[50px] py-[5px]">
      <div className="flex items-center gap-[12px]">
        <Text white middle className="text-center">
          X
        </Text>
        <img src={LinkVector} alt="Eye Icon" />
      </div>
      <div className="flex items-center gap-[12px]">
        <Text white middle className="text-center">
          Git
        </Text>
        <img src={LinkVector} alt="Eye Icon" />
      </div>
    </footer>
  );
};

export default MobileFooter;
