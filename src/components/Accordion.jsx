import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSetIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto mt-5 text-white font-normal flex flex-col gap-[25px]">
            {items.map((item, index) => (
                <div key={index} className='border-[yellow] border rounded-[25px]' >
                    <button
                        className="w-full text-left py-4 px-5focus:outline-none "
                        onClick={() => handleSetIndex(index)}
                    >
                        <div className="flex justify-between items-center px-[60px]">
                            <span className="text-lg ">{item.title}</span>
                            <span className='text-[#00FF97] text-[40px] font-thin' >{activeIndex === index ? '-' : '+'}</span>
                        </div>
                    </button>
                    {activeIndex === index && (
                        <div className="px-[60px] py-4">
                            <p className="text-gray-700">{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;