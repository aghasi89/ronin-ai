import React, { Children, useState, cloneElement } from 'react';
import 'tailwindcss/tailwind.css';
import Text from './Text';
import ArrowIcon from './../assets/icons/arrow-down.svg';
import BgFeaturesLt from './../assets/bgs/features-l-t.svg';
import BgFeaturesRt from './../assets/bgs/features-r-t.svg';
import BgFeaturesRb from './../assets/bgs/features-r-b.svg';
import BgFeaturesb from './../assets/bgs/side-b.svg';
import BgItem from './BgItem';


const Slide = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = Children.toArray(children);
    const goToNextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToPreviousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="flex flex-col items-center p-[24px] ">
            <BgItem item={BgFeaturesLt} className='top-0 left-0' >
                <BgItem item={BgFeaturesRt} className='top-[-10px] right-[-80px]' >
                    <Text title white upper className='ml-[90px]'>Features</Text>
                </BgItem>
            </BgItem>
            <BgItem item={BgFeaturesRb} className='bottom-[-35px] right-[-190px]' >
            <div className='flex flex-row mt-[50px] ml-[100px] gap-[15px]'>
                <Text gray default className="mt-[25px] opacity-25">0{currentIndex+1}</Text>
                <Text big yellow upper className=''>Ai TOOL KIT <br /> MADE EASY </Text>
            </div>
            </BgItem>
            <div className="w-[400px] min-h-[420px] flex justify-center ml-[100px] mt-[80px] bg-[#FFFFFF33] px-[25px] py-[12px] rounded-[10px] border-[1px] border-[#FFFFFF33]">
                {slides[currentIndex]}
            </div>
            <BgItem item={BgFeaturesb} className='bottom-[-33px] right-[-141px]' >
            <div className="flex self-start gap-[20px] mt-[20px] bg-[#F1C42E] px-[15px] py-[12px] rounded-tr-[9.6px] rounded-bl-[9.6px]">
                <div className="cursor-pointer text-2xl px-[12px] py-[10px]" onClick={goToNextSlide}>
                    <img src={ArrowIcon} className={`${(currentIndex === slides.length - 1) && `opacity-50`}`}></img>
                </div>
                <div className="cursor-pointer text-2xl px-[12px] py-[10px]" onClick={goToPreviousSlide}>
                    <img src={ArrowIcon} className={`${(currentIndex === 0) && `opacity-50`} rotate-[180deg]`}></img>
                </div>
            </div>
            </BgItem>
        </div>
    );
};

export default Slide;