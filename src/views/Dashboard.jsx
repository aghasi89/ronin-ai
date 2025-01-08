
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Button from '../components/Button';
import NewChatIcon from '../assets/icons/new-chat.svg';
import BrainIcon from '../assets/icons/brain.png';
import UI_UXIcon from '../assets/icons/ui-ux.png';
import ImageIcon from '../assets/icons/image.png';
import PinIcon from '../assets/icons/pin.png';
import RoninChat from "../assets/images/ronin-chat.png";

import EyeIcon from '../assets/icons/еye.svg';
import ImageIconSvg from '../assets/icons/image.svg';
import CloudIcon from '../assets/icons/cloud.svg';
import CheckIcon from '../assets/icons/check.svg';
import Text from '../components/Text';
const conversations = [
    { id: 1, name: 'My Memory' },
    { id: 2, name: 'UX / UI design' },
    { id: 3, name: 'Teach me payton ' },
    { id: 4, name: 'How AI works' },
    { id: 5, name: 'Help me to create a prici...' },
    { id: 6, name: 'New copy for my new we...' },
];

const Dashboard = () => {
    const [selectedConversation, setSelectedConversation] = useState(1);
    const [messages, setMessages] = useState({});
    const [input, setInput] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSendMessage = () => {
        setIsModalOpen(true);
        return
        if (input.trim() === '') return;

        setMessages((prevMessages) => {
            const newMessages = { ...prevMessages };
            if (!newMessages[selectedConversation]) {
                newMessages[selectedConversation] = [];
            }
            newMessages[selectedConversation].push({ text: input, sender: 'user' });
            return newMessages;
        });
        setInput('');
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="flex h-screen bg-[#080808]">
            <div className="w-[280px] pl-[32px] pr-[18px] pt-[14px] border-r border-white/20">
                <div className='pb-[9px] border-b border-white/20'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 bg-transparent border border-white/20 rounded-[4px]"
                    />

                </div>
                <Button className='w-full rounded-[4px] flex items-start justify-start pl-[12px] py-[12.5px]'>
                    <div className='flex gap-[10px]'>
                        <img src={NewChatIcon} /><span className='text-[14px] leading-[16.5px]'>New Chat</span>
                    </div>
                </Button>
                <ul className="mt-4">
                    {conversations.map((conversation, i) => (
                        <li
                            key={conversation.id}
                            className={`p-2 cursor-pointer flex justify-between items-center ${selectedConversation === conversation.id ? 'bg-white/30' : 'bg-transparent'}`}
                            onClick={() => setSelectedConversation(conversation.id)}
                        >
                            <div className="flex items-center gap-2 text-[white] text-[14px] text-white">
                                <img src={i === 0 ? BrainIcon : i === 1 ? UI_UXIcon : ImageIcon} alt="Chat Icon" className="w-[24px]" />
                                {conversation.name}
                            </div>
                            {i < 2 && <img src={PinIcon} alt="Pin Icon" className="h-[17px]" />}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-3/4  p-4 px-[175px] flex flex-col">
                <div className='flex items-center gap-[10px] w-full items-center justify-center'>
                    <img
                        src={RoninChat}
                        alt="Chat Logo"
                        className="w-[48px] h-[47px]"
                    /><Text yellow default>RONIN AI</Text>
                </div>
                {selectedConversation ? (
                    <div className="flex flex-col h-full border-t border-white/20">
                        <div className="flex-1 overflow-y-auto mb-4">
                            {messages[selectedConversation] ? (
                                messages[selectedConversation].map((message, index) => (
                                    <div key={index} className={`p-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                        <span className={`inline-block p-2 rounded ${message.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                                            {message.text}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className='flex w-full h-full flex-col'>
                                    <div className='flex flex-1 items-center justify-center gap-2'>
                                        <img
                                            src={RoninChat}
                                            alt="Chat Logo"
                                            className="w-[145px]"
                                        />
                                        <div>
                                            <Text middle white >Hi, I'm Agent Ronin.</Text><br />
                                            <Text white >You're crypto master I handle data, makes smart decisions, and solve tough problems effortlessly, What would you like to do today?</Text>
                                        </div>
                                    </div>
                                    <div className='flex items-end flex-1 justify-center gap-[14px]'>
                                        <div className='flex flex-col items-center gap-[24px] w-[230px]'>
                                            <img src={EyeIcon} alt="Eye Icon" className="w-[24px]" />
                                            <div className='py-[13px] bg-[#031017] rounded-[6px] w-full text-center'>
                                                <span className='text-[14px] text-white'>Execute Solana Blinks</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center gap-[24px] w-[230px]'>
                                            <img src={ImageIconSvg} alt="Eye Icon" className="w-[24px]" />
                                            <div className='py-[13px] bg-[#031017] rounded-[6px] w-full text-center'>
                                                <span className='text-[14px] text-white'>Create & Mint NFTs</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center gap-[24px] w-[230px]'>
                                            <img src={CloudIcon} alt="Eye Icon" className="w-[24px]" />
                                            <div className='py-[13px] bg-[#031017] rounded-[6px] w-full text-center'>
                                                <span className='text-[14px] text-white'> Send ZK Compressed Airdrops</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex  rounded-[4px] border bg-[#031017] border-white/20 overflow-hidden">
                            <input
                                placeholder='Type your message here.'
                                type="text"
                                className="flex-1 bg-transparent p-2 text-white/20 "
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <Button className="rounded-l-[4px] rounded-r-[0px]" onClick={handleSendMessage}>
                                SEND
                            </Button>
                        </div>
                    </div>
                ) : (
                    <p>Please select a conversation to start chatting.</p>
                )}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={handleModalClose}
                    >
                        <div
                            className="bg-[#1D1C1E] px-[10px] py-[15px] rounded-[15px] w-[390px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className=' border border-white/20 px-[40px] py-[30px] rounded-[10px] bg-[#0000000F] flex flex-col gap-[21px] items-center'>
                                <Text white middle>Use our Agents</Text>
                                <span className='text-white/70 text-[16px] text-center'>Sign up today to join the waiting
                                    list and secure ea  rly access to the
                                    Ronin AI Protocol!
                                </span>
                                <div className='flex items-center gap-[10px] flex-col w-7/12'>
                                    <div className='flex items-center gap-[10px]'>
                                        <img src={CheckIcon} alt="Check Icon" className="w-[15px]" />
                                        <span className='text-white text-[14px] text-left'>AI automation made easy</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px] flex-col w-7/12'>
                                    <div className='flex items-center gap-[10px]'>
                                        <img src={CheckIcon} alt="Check Icon" className="w-[15px]" />
                                        <span className='text-white text-[14px] text-left'>Create tokens without coding</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px] flex-col w-7/12'>
                                    <div className='flex items-center gap-[10px]'>
                                        <img src={CheckIcon} alt="Check Icon" className="w-[15px]" />
                                        <span className='text-white text-[14px] text-left'>Trade across blockchains fast</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px] flex-col w-7/12'>
                                    <div className='flex items-center gap-[10px]'>
                                        <img src={CheckIcon} alt="Check Icon" className="w-[15px]" />
                                        <span className='text-white text-[14px] text-left'>Access premium AI services</span>
                                    </div>
                                </div>
                                <button onClick={handleModalClose} className='w-[156px] h-[38px] rounded-[15px] border border-[#F1C42E] text-white'>Sign up today!</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;