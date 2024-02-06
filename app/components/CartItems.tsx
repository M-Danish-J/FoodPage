import React, { useEffect, useState } from 'react';

interface CartItem {
    name: string;
    description: string;
    size: string;
    quantity: number;
    totalPrice: number;
}

const CartItems: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCartItems = localStorage.getItem("Cart");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="border-b pb-4 mb-4">
                        <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                        <p className="text-gray-600 mb-1">{item.description}</p>
                        <p className="text-gray-600 mb-1">Size: {item.size}</p>
                        <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
                        <p className="text-gray-600 mb-1">Total Price: Rs{item.totalPrice}/-</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartItems;
