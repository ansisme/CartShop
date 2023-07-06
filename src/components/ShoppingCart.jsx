import React, { useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import shoppingCart from '../assets/images/shoppingCart.jpg';
import './styles.css';
import NavBar from './NavBar';
import Modal from 'react-modal';
import Cards from './Cards';
import { CartContext } from './CardContext';
import CartProduct from './CartProducts';

const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      {/* making the navbar for shopping cart */}
      <div>
        <NavBar title='SHOP best' shopColor='[#110f1a]' bestColor='gradient' />
      </div>
      <div className='flex justify-between items-center max-sm:flex-col max-md:flex-col'>
        <div className='w-1/2'>
          <div>
            <h1 className='p-9 font-bold text-[72px] text-[#110f1a]'>
              Shopping <span className='pl-3 gradient'>Cart</span>
            </h1>
          </div>
          <div>
            <p className='pl-10 text-[#b4b4b4] text-[24px] font-medium'>Get ready to give your wardrobe a fresh look at the cheapest rate!
            Grab the discounts and get ready for the trendy makeover!</p>
            <p className='pl-10 text-[#b4b4b4] text-[24px] font-medium'>
             Get upto 
              <span className='pl-2 gradient text-[32px] font-bold'>50%</span>{'   '}
              {' '}Discounts 
            </p>
          </div>
          <div className='mt-3'>
            <button className='ml-10 bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 text-white p-2 flex rounded-xl font-semibold'>
              Add Items
              <span className='font-bold p-1 ml-2 custom-bounce-arrow'>
                <Icon icon='ph:arrow-down' />
              </span>
            </button>
          </div>
        </div>

        <div className='w-1/2 items-center'>
          <img src={shoppingCart} alt='cart' className='w-4/5 custom-bounce' />
        </div>
      </div>
      {/* Actual shopping cart */}
      <div className='flex max-sm:flex-col max-md:flex-col justify-center items-center mt-10'>
        <div className='w-1/2 font-semibold text-[24px] ml-5'>
          <h2>SHOP YOUR WARDROBE HERE </h2>
        </div>
        <div className='w-1/2 justify-end flex items-center pr-5'>
          <button
            className='ml-10 bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 text-white p-2 flex rounded-xl font-semibold'
            onClick={handleShow}
          >
            <span className='font-bold p-2 ml-2'>
              <Icon icon='mdi:cart-outline' color='white' />
            </span>
            <span className='font-bold p-1 ml-2 custom-bounce-arrow'>{productCount}</span>
          </button>
        </div>
      </div>

      <Modal isOpen={show} onRequestClose={handleClose}>
        <div className='flex items-center justify-between p-3'>
          <h2 className='font-bold text-[32px]'>Shopping Cart</h2>
          <button onClick={handleClose} className='text-red-500'>
            <Icon icon='material-symbols:close' />
          </button>
        </div>
        <div>
          {productCount > 0 ? (
            <>
              <p className='font-semibold p-3 text-[24px]'>Items in the cart:</p>
              {cart.items.map((currentProduct, id) => (
                <div className='pl-3'>
                <CartProduct
                
                key={id} id={currentProduct.id} quantity={currentProduct.quantity} ></CartProduct>
                </div>
               
              ))}
              <h1 className=' pl-3'>Total: {cart.getTotalToCost().toFixed(2)}</h1>
              <button className=' pl-3 bg-standardBg hover:bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 hover:text-white rounded-lg p-2'>Buy</button>
            </>
          ) : (
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-2xl'>There is nothing in the cart!</h1>
            </div>
              )}
        </div>
      </Modal>

      <div className='p-5'>
        <Cards />
      </div>
    </>
  );
};

export default ShoppingCart;