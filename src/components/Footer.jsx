import React from 'react';
import Text from './Text';
import TwitterIcon from '../assets/icons/twitter.svg';

const Footer = () => {
    return (
        <footer className='pl-[80px] mt-[120px]' >
            <div className='pl-[32px] flex flex-row justify-start items-start gap-[20vw]'>
                <Text yellow middle bold>RONIN AI <Text white>AGENT</Text></Text>
                <div className='flex flex-col gap-[10px] items-start'>
                    <Text white normal upper>Socials</Text>
                    <div className='flex flex-row gap-[10px]'> <img src={TwitterIcon} /> <Text gray normal> Twitter</Text></div>
                </div>
            </div>
            <div className='border-t-[1px] border-[#FFFFFF24] text-right mr-[55px] pt-[60px] mt-[20px]'>
                <Text white> Copyright &copy;2025 RONIN AI. All rights reserved.</Text>
            </div>
        </footer>
    );
};
export default Footer;