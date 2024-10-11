"use client"

import React, { useState } from 'react';

const DropdownLan = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button 
                onClick={toggleDropdown} 
                className='flex flex-row justify-center items-center gap-2 bg-slate-100 px-4 py-1 rounded-lg'
            >
                <i className="ri-global-line text-slate-950 text-xl"></i>
                <span>{selectedLanguage}</span>
                <i className="ri-arrow-drop-down-fill text-slate-950"></i>
            </button>
            {isOpen && (
                <ul className="absolute bg-white border mt-2 rounded-lg w-32 z-10">
                    <li 
                        className="px-4 py-2 hover:bg-slate-200 rounded-t-lg cursor-pointer" 
                        onClick={() => selectLanguage('English')}
                    >
                        English
                    </li>
                    <li 
                        className="px-4 py-2 hover:bg-slate-200 rounded-b-lg cursor-pointer" 
                        onClick={() => selectLanguage('Arabic')}
                    >
                        العربية
                    </li>
                    {/* Add more languages as needed */}
                </ul>
            )}
        </div>
    );
};

export default DropdownLan;
