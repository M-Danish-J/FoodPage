'use client'
import React, { useEffect, useState } from 'react';
import Card from './components/Card';

import { pizzaData, burgerData, sandwichWraps, shawarmaData, pizzaDeals, parathaGrill } from './menu/menu'
// drinks
import drinksImg from './images/cocacola.jpg';
import spriteImg from './images/sprite.jpg';
import fantaImg from './images/fanta.jpg';
// fries
import friesImg from './images/fries (2).jpg';
import nuggetsImg from './images/nugets.jpg';
// wings
import wingsImg from './images/wings.jpg';

import { IoMdClose } from "react-icons/io";
import SideBar from './components/SideBar';
import Modal from './components/Modal';

export default function Home() {
  interface CartItem {
    name: string;
    description: string;
    size: string;
    quantity: number;
    totalPrice: number;
  }
  interface Order {
    order: CartItem[]
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [Orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true);
  const [onClick, setOnClick] = useState<string>('Pizza')
  const [toggle, setToggle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem("Cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    const storedHistory = localStorage.getItem("Orders");
    if (storedHistory) {
      setOrders(JSON.parse(storedHistory));
    }
    setLoading(false);
  }, [toggle]);

  const totalBill = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  const removeItemFromCart = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("Cart", JSON.stringify(updatedCartItems));
  };

  const handlePayNow = () => {
    if (!cartItems.length) {
      alert("Cart is Empty")
    }
    else {

      handleOpenModal()
      const existingOrders = JSON.parse(localStorage.getItem("Orders") || "[]");
      if (existingOrders.length) {
        let newOrder = [...existingOrders, { order: cartItems }]
        localStorage.setItem("Orders", JSON.stringify(newOrder));
      }
      else {
        let newOrder = [{ order: cartItems }]
        localStorage.setItem("Orders", JSON.stringify(newOrder));
      }
      localStorage.removeItem("Cart");
      setToggle(!toggle)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  // Open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.reload()
  };
  const handlePrint = () => {
    const printContents = document.getElementById('order-history');
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
    <div className="bg-gray-100 min-h-screen">
      <div className='fixed md:right-0 lg:right-auto  left-0 top-0 lg:bottom-0 z-50'>
        <SideBar setOnClick={setOnClick} />
      </div>
      <div className='lg:ml-72 mt-72 lg:mt-0'>
        <div className="py-8 px-2 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Menu - {onClick}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {
                onClick === "Pizza" ?
                  <>
                    {pizzaData.map((item: any, index: number) => {
                      return (
                        <Card
                          key={item.id}
                          toggle={toggle}
                          setToggle={setToggle}
                          name={item.name}
                          priceOptions={item.priceOptions}
                          description={item.description}
                          image={item.image} />
                      );
                    })}
                  </>
                  : onClick === "Burger" ?
                    <>
                      {burgerData.map((item: any, index: number) => {
                        return (
                          <Card
                            key={item.id}
                            toggle={toggle}
                            setToggle={setToggle}
                            name={item.name}
                            priceOptions={item.priceOptions}
                            description={item.description}
                            image={item.image} />
                        );
                      })}
                    </>
                    : onClick === "Sandwich and Warps" ?
                      <>
                        {sandwichWraps.map((item: any, index: number) => {
                          return (
                            <Card
                              key={item.id}
                              toggle={toggle}
                              setToggle={setToggle}
                              name={item.name}
                              priceOptions={item.priceOptions}
                              description={item.description}
                              image={item.image} />
                          );
                        })}
                      </>
                      : onClick === "Shawarma" ?
                        <>
                          {shawarmaData.map((item: any, index: number) => {
                            return (
                              <Card
                                key={item.id}
                                toggle={toggle}
                                setToggle={setToggle}
                                name={item.name}
                                priceOptions={item.priceOptions}
                                description={item.description}
                                image={item.image} />
                            );
                          })}
                        </>
                        : onClick === "Fries and Nuggets" ?
                          <>
                            <Card
                              toggle={toggle}
                              setToggle={setToggle}
                              name='Fries'
                              description='Juicy beef patty with melted cheese, served with fresh lettuce and tomatoes on a sesame seed bun.'
                              image={friesImg}
                              priceOptions={[{ Regular: 100 }, { Loaded: 280 }, { Cheesy: 320 }]}
                            />
                            <Card
                              toggle={toggle}
                              setToggle={setToggle}
                              name='Nuggets'
                              description='Juicy beef patty with melted cheese, served with fresh lettuce and tomatoes on a sesame seed bun.'
                              image={nuggetsImg}
                              priceOptions={[{ '5pcs': 180 }, { '10pcs': 320 }]}
                            />
                          </>
                          : onClick === "Hot wings" ?
                            <>
                              <Card
                                toggle={toggle}
                                setToggle={setToggle}
                                name='Hot wings'
                                description='Juicy beef patty with melted cheese, served with fresh lettuce and tomatoes on a sesame seed bun.'
                                image={wingsImg}
                                priceOptions={[{ '5pcs': 200 }, { '10pcs': 350 }]}
                              />
                            </>
                            : onClick === "Drinks" ?
                              <>
                                <Card
                                  toggle={toggle}
                                  setToggle={setToggle}
                                  name='Coca Cola'
                                  description='Juicy beef patty with melted cheese, served with fresh lettuce and tomatoes on a sesame seed bun.'
                                  image={drinksImg}
                                  priceOptions={[{ Regular: 50 }, { 'Half liter': 100 }, { '1 liter': 150 }, { '1.5 liter': 250 }]}
                                />
                                <Card
                                  toggle={toggle}
                                  setToggle={setToggle}
                                  name='Sprite'
                                  description='Juicy beef patty with melted cheese, served with fresh lettuce and tomatoes on a sesame seed bun.'
                                  image={spriteImg}
                                  priceOptions={[{ Regular: 50 }, { 'Half liter': 100 }, { '1 liter': 150 }, { '1.5 liter': 250 }]}
                                />
                                <Card
                                  toggle={toggle}
                                  setToggle={setToggle}
                                  name='Fanta'
                                  description='Juicy beef patty with melted cheese, served with fresh lettuce and tomatoes on a sesame seed bun.'
                                  image={fantaImg}
                                  priceOptions={[{ Regular: 50 }, { 'Half liter': 100 }, { '1 liter': 150 }, { '1.5 liter': 250 }]}
                                />
                              </>
                              : onClick === "Pizza Deals" ?
                                <>
                                  {pizzaDeals.map((item: any, index: number) => {
                                    return (
                                      <Card
                                        key={item.id}
                                        toggle={toggle}
                                        setToggle={setToggle}
                                        name={item.name}
                                        priceOptions={item.priceOptions}
                                        description={item.description}
                                        image={item.image} />
                                    );
                                  })}
                                </>
                                : onClick === "Paratha Roll and Grill" ?
                                  <>
                                    {parathaGrill.map((item: any, index: number) => {
                                      return (
                                        <Card
                                          key={item.id}
                                          toggle={toggle}
                                          setToggle={setToggle}
                                          name={item.name}
                                          priceOptions={item.priceOptions}
                                          description={item.description}
                                          image={item.image} />
                                      );
                                    })}
                                  </>
                                  : onClick === "History" ?
                                    <div id='order-history'>
                                      {Orders.map((order, orderIndex) => (
                                        <div key={orderIndex} className='bg-gray-100 rounded-lg p-4 mb-4'>
                                          <h3 className="text-xl font-bold mb-2">Order #{orderIndex + 1}</h3>
                                          {order.order.map((item, index) => (
                                            <div key={index} className="border-b border-gray-300 pb-2 mb-2">
                                              <p className="text-lg font-semibold">{item.name}</p>
                                              <p className="text-gray-600">Description: {item.description}</p>
                                              <p className="text-gray-600">Size: {item.size}</p>
                                              <p className="text-gray-600">Quantity: {item.quantity}</p>
                                              <p className="text-gray-600">Total Price: Rs {item.totalPrice}/-</p>
                                            </div>
                                          ))}
                                        </div>
                                      ))}
                                      <button onClick={handlePrint} className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600">
                                        Print Order History
                                      </button>
                                    </div>
                                    : <>Other</>
              }
            </div>
          </div>
        </div>
        {!(onClick === 'History') && <div className="py-8 px-2 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900 my-8 ">Cart Items</h1>
          <div className="bg-gradient-to-r from-yellow-300 to-green-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-black">Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                    <button onClick={() => removeItemFromCart(index)} className="text-black hover:text-white">
                      <IoMdClose />
                    </button>
                  </div>
                  <p className="text-black mb-1">{item.description}</p>
                  <p className="text-black mb-1">Size: {item.size}</p>
                  <p className="text-black mb-1">Quantity: {item.quantity}</p>
                  <p className="text-black mb-1">Total Price: Rs{item.totalPrice}/-</p>
                </div>
              ))
            )}
            <h2 className="text-xl font-semibold my-4 text-black">Total Bill</h2>
            <p className="text-black font-semibold">Total: Rs{totalBill}/-</p>
            <button onClick={handlePayNow} className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600">
              Pay Now
            </button>
          </div>
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            cartItems={cartItems}
            totalBill={totalBill}
          />
        </div>}
      </div>
    </div>
  );
}
