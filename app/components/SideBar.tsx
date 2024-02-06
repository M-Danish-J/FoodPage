'use client'
import React, { useState } from 'react';

const SideBar = ({ setOnClick }: any) => {
    return (
        <div className="bg-gradient-to-b from-yellow-500 to-green-500 h-full flex flex-col justify-between w-full lg:w-64">
            <div className="pt-4 pb-2 px-4 text-center">
                <p className='text-3xl font-bold text-white'>Our Menu</p>
            </div>
            <div className="flex flex-wrap lg:flex-col items-center lg:space-y-1 pb-8">
                <Tab name='Pizza' onClick={() => setOnClick('Pizza')} />
                <Tab name='Burger' onClick={() => setOnClick('Burger')} />
                <Tab name='Sandwich and Warps' onClick={() => setOnClick('Sandwich and Warps')} />
                <Tab name='Shawarma' onClick={() => setOnClick('Shawarma')} />
                <Tab name='Fries and Nuggets' onClick={() => setOnClick('Fries and Nuggets')} />
                <Tab name='Hot wings' onClick={() => setOnClick('Hot wings')} />
                <Tab name='Drinks' onClick={() => setOnClick('Drinks')} />
                <Tab name='Paratha Roll and Grill' onClick={() => setOnClick('Paratha Roll and Grill')} />
                <Tab name='Pizza Deals' onClick={() => setOnClick('Pizza Deals')} />
            </div>
            <div onClick={() => setOnClick('History')} className="lg:w-40 py-2 px-4 rounded-md cursor-pointer font-bold text-center text-white transition duration-100 transform hover:scale-105 hover:shadow-lg border mx-auto mb-3">
                Order History
            </div>
        </div>
    );
};

interface TabProps {
    name: string;
    onClick: any;
}

const Tab: React.FC<TabProps> = ({ name, onClick }) => {
    return (
        <div className={`lg:w-40 py-2 px-4 rounded-md cursor-pointer text-center text-white transition duration-100 transform hover:scale-105 hover:shadow-lg border`} onClick={onClick}>
            {name}
        </div>
    );
};

export default SideBar;
