import React from 'react';
import HomeLogo from '../assets/images/home-logo.png';
import Text from './Text';
import Button from './Button';
const Header = () => {
    return (
        <header className="overflow-hidden rounded-[14px] gap-[10px] position-sticky top-[114px] mt-[114px] z-10  shadow-md mx-[20px] flex justify-between items-center ">
            <div className='flex items-center gap-[18px] rounded-[14px] skew-x-[-20deg] ml-[-50px] bg-[#1E1E1E] p-[16px] pl-[24px]'>
                <div className='flex items-center gap-[10px] skew-x-[20deg] pl-[50px] '>
                    <img src={HomeLogo} alt="Home Logo" className="w-[61px] h-[64px] mx-auto" />
                    <Text yellow middle bold>RONIN AI <Text white>AGENT</Text></Text>
                </div>

            </div>
            <div className="flex flex-1 justify-between  items-center py-4 px-8 gap-[18px] rounded-[14px] skew-x-[-20deg] bg-[#1E1E1E] p-[16px] pr-[50px] mr-[-50px]" >
                <div className='flex items-center justify-between w-full gap-[10px] pr-[23px]  skew-x-[20deg]'>
                    <div className="flex justify-between items-center py-4 px-8 gap-[25px]">
                        <div><Text white normal>Dashboard</Text></div>
                        <div className='h-[30px] w-[2px] rotate-[20deg] bg-[#FFFFFF33]'></div>
                        <div><Text white normal>Staking</Text></div>
                        <div className='h-[30px] w-[2px] rotate-[20deg] bg-[#FFFFFF33]'></div>
                        <div><Text white normal>Tool Kit</Text></div>
                        <div className='h-[30px] w-[2px] rotate-[20deg] bg-[#FFFFFF33]'></div>
                        <div><Text white normal>Roadmap</Text></div>
                        <div className='h-[30px] w-[2px] rotate-[20deg] bg-[#FFFFFF33]'></div>
                        <div><Text white normal>$RONIN AI</Text></div>
                    </div>
                    <div className="flex justify-between items-center gap-[45px]">
                        <Button><Text black base>Github</Text></Button>
                        <Button><Text black base>Twitter</Text></Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;