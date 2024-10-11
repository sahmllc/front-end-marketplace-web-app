"use client";

import React from 'react';
import Dropdown from '@/components/MegaMenuDropdown';

const MegaMenu: React.FC = () => {
    const categories = Array.from({ length: 8 }, (_, i) => `التصنيف ${i + 1}`);
    
    // Example subcategories for each category
    const subcategories: string[][] = [
        ['التصنيف الثانوي 1', 'التصنيف الثانوي 2', 'التصنيف الثانوي 3'],
        ['التصنيف الثانوي 4', 'التصنيف الثانوي 5', 'التصنيف الثانوي 6'],
        ['التصنيف الثانوي 7', 'التصنيف الثانوي 8', 'التصنيف الثانوي 9'],
        ['التصنيف الثانوي 10', 'التصنيف الثانوي 11', 'التصنيف الثانوي 12'],
        ['التصنيف الثانوي 13', 'التصنيف الثانوي 14', 'التصنيف الثانوي 15'],
        ['التصنيف الثانوي 16', 'التصنيف الثانوي 17', 'التصنيف الثانوي 18'],
        ['التصنيف الثانوي 19', 'التصنيف الثانوي 20', 'التصنيف الثانوي 21'],
    ];

    return (
        <div className='md:pt-2 md:border-b border-b-slate-200 justify-center items-center w-full' dir='rtl'>
            <div className='md:flex hidden flex-row justify-between items-center max-w-6xl mx-auto'>
                {categories.map((item, index) => (
                    <div 
                        className='relative group' 
                        key={item} // Added key prop for list items
                    >
                        <a 
                            href='/' 
                            className='flex flex-col justify-between gap-2'
                        >
                            <h1 className='font-bold text-slate-950 text-sm mb-1'>{item}</h1>
                            {/* Position the line below the text with margin */}
                            <div className='h-[3px] w-auto bg-slate-950 transition-opacity duration-200 opacity-0 group-hover:opacity-100' />
                        </a>
                        {/* Pass subcategories to the Dropdown component */}
                        <Dropdown items={subcategories[index] || []} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
