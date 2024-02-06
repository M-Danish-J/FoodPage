import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo and Restaurant Name */}
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-800">FoodStore</h1>
                </div>
                {/* Cart Icon with Notification */}
                <div className="flex items-center relative">
                    <button className="text-gray-800 hover:text-gray-600 relative">
                        <FiShoppingCart className="h-6 w-6" />
                        <div className="bg-red-500 rounded-full w-4 h-4 text-white flex items-center justify-center absolute top-0 right-0 -mt-1 -mr-1">
                            2
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
