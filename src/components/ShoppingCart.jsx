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
        <div className='w-1/2 max-sm:w-full max-xs:w-full max-md:w-full'>
          <div>
            <h1 className='p-9 font-bold text-[72px] max-sm:text-[28px] max-xs:text-[24px] max-md:text-[32px] max-lg:text-[55px] text-blueBlack'>
              Shopping <span className='pl-3 gradient'>Cart</span>
            </h1>
          </div>
          <div>
            <p className='px-10 max-sm:px-9 max-xs:px-9 max-md:px-9 max-sm:text-[16px] max-xs:text-[14px] text-lighGrey text-[24px] font-medium'>Get ready to give your wardrobe a fresh look at the cheapest rate!
            Grab the discounts and get ready for the trendy makeover!</p>
            <p className='px-10 max-sm:px-9 max-xs:px-9 max-md:px-9 max-sm:text-[16px] max-xs:text-[14px] text-lighGrey text-[24px] font-medium'>
             Get upto 
              <span className='pl-2 gradient  font-bold 
              px-10 max-sm:px-1 max-xs:px-1 max-md:px-2 max-sm:text-[16px] max-xs:text-[14px]  text-[24px] '>50%</span>{'   '}
              {' '}Discounts 
            </p>
          </div>
          <div className='mt-3'>
            <button className='ml-10 max-sm:text-[16px] max-xs:text-[12px] bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 text-white p-2 flex rounded-xl font-semibold'>
              Add Items
              <span className='font-bold p-1 ml-2 custom-bounce-arrow'>
                <Icon icon='ph:arrow-down' />
              </span>
            </button>
          </div>
        </div>

        <div className='w-1/2 items-center max-sm:w-full max-md:w-full max-xs:w-full justify-center '>
          <img src={shoppingCart} alt='cart' className='w-4/5 custom-bounce' />
        </div>
      </div>
      {/* Actual shopping cart */}
      <div className='flex max-sm:flex-col max-xs:flex-col max-md:flex-col justify-center items-center mt-10'>
        <div className='w-1/2 font-semibold max-sm:text-[16px] max-xs:text-[14px] max-sm:w-full text-[24px] pl-9 max-sm:mb-3 max-md:mb-3 max-xs:mb-3'>
          <h2>SHOP YOUR WARDROBE HERE </h2>
        </div>
        <div className='w-1/2 justify-end flex items-center pr-5'>
          <button
            className='ml-10 bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 text-white p-2 flex rounded-xl font-semibold'
            onClick={handleShow}
          >
            <span className='font-bold p-2 ml-2 max-sm:text-[16px] max-xs:text-[14px] max-sm:w-full max-md:w-full max-xs:w-full'>
              <Icon icon='mdi:cart-outline' color='white' />
            </span>
            <span className='font-bold p-1 ml-2 max-xs:ml-0 custom-bounce-arrow max-sm:text-[16px] max-xs:text-[14px] max-sm:w-full max-md:w-full max-xs:w-full'>{productCount}</span>
          </button>
        </div>
      </div>

      <Modal isOpen={show} onRequestClose={handleClose}>
        <div className='flex items-center justify-between p-3'>
          <h2 className='font-bold text-[32px] max-sm:text-[16px] max-xs:text-[14px] max-sm:w-full max-md:w-full max-xs:w-full'>Shopping Cart</h2>
          <button onClick={handleClose} className='text-red-500 max-sm:text-[16px] max-xs:text-[14px] max-sm:pl-2'>
            <Icon icon='material-symbols:close' />
          </button>
        </div>
        <div>
          {productCount > 0 ? (
            <>
              <p className='font-semibold p-3 text-[24px] max-sm:text-[16px] max-xs:text-[14px] max-sm:w-full max-md:w-full max-xs:w-full'>Items in the cart:</p>
              {cart.items.map((currentProduct, id) => (
                <div className='pl-3 '>
                <CartProduct
                
                key={id} id={currentProduct.id} quantity={currentProduct.quantity} ></CartProduct>
                </div>
               
              ))}
              <h1 className=' pl-3 max-sm:text-[16px] max-xs:text-[14px]'>Total: {cart.getTotalToCost().toFixed(2)}</h1>
              <button className=' pl-3 max-sm:text-[16px] max-xs:text-[14px] max-sm:w-full max-md:w-full max-xs:w-full m-2 bg-standardBg hover:bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 hover:text-white rounded-lg p-2'>Buy</button>
            </>
          ) : (
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-2xl max-sm:text-[16px] max-xs:text-[14px] max-sm:w-full max-md:w-full max-xs:w-full'>There is nothing in the cart!</h1>
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