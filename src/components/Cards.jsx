import React, {useContext} from 'react';
import { wardrobeProducts } from '../constants.js/products';
import { CartContext } from './CardContext';
const Card = (props) => {
    const product = props.product
    const cart = useContext(CartContext);
    // const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
  return (

    <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3">
      {wardrobeProducts.map((product) => (
        <div key={product.id} className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 mt-2" >₹ {product.price}</p>
          {cart.getProductQuantity(product.id)>0 
          ? 
          <>
            <form className='mt-5'
                onSubmit={(e) => e.preventDefault()}>
                <label className='mr-2 font-medium '>In Cart{' '}
                <span className='ml-10 mr-5 '>
                {cart.getProductQuantity(product.id)}
                </span></label>
                <button 
                onClick={(()=>cart.addoneToCart(product.id))}
                className='mr-3 '>+</button>
                <button 
                 onClick={(()=>cart.removeOneToCart(product.id))}
                 className='ml-2'>-</button>
            </form>
            <button
             onClick={(()=>cart.deleteFromCart(product.id))}
             className='bg-standardBg p-2 mt-5 rounded-lg hover:bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 hover:text-white'>
              Remove from Cart</button>
          </>
          : (
          <button 
          onClick={()=>cart.addoneToCart((product.id))}

          className='bg-standardBg p-2 mt-5 rounded-lg hover:bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 hover:text-white'>
          Add to Cart
          </button>
      )}
          
        </div>
      ))}
    </div>
  );
};

export default Card;
