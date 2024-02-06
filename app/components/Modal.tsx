import React from 'react';

interface CartItem {
    name: string;
    quantity: number;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    totalBill: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, cartItems, totalBill }) => {
    const handlePrint = () => {
        const printContents = document.getElementById('modal-content');
        const originalContents = document.body.innerHTML;

        if (printContents) {
            document.body.innerHTML = printContents.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
            document.location.reload();
        } else {
            console.error("Modal content not found.");
        }
    };

    return (
        <>
            {isOpen && (
                <div id='modal-content' className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
                        <div className="mb-4">
                            {cartItems.map((item, index) => (
                                <div key={index} className="mb-2">
                                    <p>{item.name} - Quantity: {item.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-xl font-bold">Total Bill: Rs{totalBill}/-</p>
                        <div className="flex justify-between items-center ">
                            <button onClick={onClose} className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-red-600">
                                Close
                            </button>
                            <button onClick={handlePrint} className=" bg-green-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-green-600">
                                Print
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
