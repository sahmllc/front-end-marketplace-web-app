"use client";

import React from 'react';

interface DropdownProps {
    items: string[];
}

const MegaMenuDropdown: React.FC<DropdownProps> = ({ items }) => {
    return (
        <div className='absolute right-0 z-20 hidden group-hover:block bg-white border border-slate-200 p-2 rounded-md whitespace-nowrap'>
            <ul className='flex flex-col'>
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className={`hover:text-[#07ABF1] px-4 py-2 ${index < items.length - 1 ? 'border-b' : 'border-b-0'} border-b-slate-200`}
                    >
                        <a href='/'>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MegaMenuDropdown;
