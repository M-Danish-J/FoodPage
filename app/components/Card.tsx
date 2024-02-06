'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
// import { toast } from 'react-toastify';

interface CardProps {
    name: string;
    description: string;
    image: StaticImageData;
    setToggle: any, toggle: boolean;
    priceOptions: Array<Object>
}
interface CartItem {
    name: string;
    description: string;
    size: string;
    quantity: number;
    totalPrice: number;
}


const Card: React.FC<CardProps> = ({ name, description, image, setToggle, toggle, priceOptions }) => {

    const [quantity, setQuantity] = useState<number>(1);
    const [size, setSize] = useState<string | null>(null);
    const [price, setPrice] = useState<number>(0);

    const addToCart = () => {
        if (size && price) {
            // Parse existing cart items from local storage
            const existingCartItems = JSON.parse(localStorage.getItem("Cart") || "[]") as CartItem[];;

            // Check if the item already exists in the cart
            const existingItemIndex = existingCartItems.findIndex(item => item.name === name && item.size === size);

            if (existingItemIndex !== -1) {
                // Item already exists, update quantity and total price
                const updatedCartItems = [...existingCartItems];
                updatedCartItems[existingItemIndex].quantity += quantity;
                updatedCartItems[existingItemIndex].totalPrice = updatedCartItems[existingItemIndex].quantity * price;
                localStorage.setItem("Cart", JSON.stringify(updatedCartItems));
                alert("Item quantity updated in cart.");
            } else {
                // Item does not exist, add it to the cart
                const cartItem = {
                    name: name,
                    description: description,
                    size: size,
                    quantity: quantity,
                    totalPrice: price * quantity
                };

                const updatedCartItems = [...existingCartItems, cartItem];
                localStorage.setItem("Cart", JSON.stringify(updatedCartItems));
                alert("Item added to cart.");
            }

            setToggle(!toggle);
        } else {
            alert('Please select size and price before adding to cart');
        }
    };





    return (
        <div className="max-w-[360px] p-3 md:p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative mb-4">
                <Image priority src={image} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="absolute top-0 right-0 bg-[#f5a623] text-white p-2 rounded-bl-lg rounded-tr-lg">
                    {name}
                </div>
            </div>
            <div>
                <h2 className="mb-2 text-2xl font-semibold text-gray-900">{name}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="flex items-center justify-between space-x-4 my-3 w-full">
                <select className="w-1/2 text-sm xl:text-base bg-[#adf7b6] text-center rounded-lg py-2 text-gray-800" onChange={(e) => setQuantity(parseInt(e.target.value))}>
                    <option value={0}>Select Quantity</option>
                    {Array.from(Array(6), (e, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                {<select className="w-1/2 text-sm xl:text-base bg-[#adf7b6] rounded-lg text-center py-2 text-gray-800" onChange={(e) => { setSize(e.target.value); setPrice(parseInt(e.target.value)) }}>
                    <option value={0}>Select Size</option>
                    {priceOptions.map((option, index) => (
                        <option key={index} value={Object.values(option)[0]}>
                            {Object.keys(option)[0]} - Rs{Object.values(option)[0]}
                        </option>
                    ))}
                </select>}
            </div>
            <div className="flex items-center justify-between w-full gap-4">
                <div className="w-1/2 inline-block bg-[#f5a623] text-white rounded-lg px-3 py-2">
                    <span className='font-bold'>Price:</span> Rs{price * quantity}/-
                </div>
                <button onClick={addToCart} className="w-1/2 bg-[#f5a623] text-white rounded-lg px-2 py-2 hover:bg-[#ffcb46] transition duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Card;
