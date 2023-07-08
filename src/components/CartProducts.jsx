import { CartContext } from './CardContext';
import React,{ useContext } from "react";
import { getProductData} from '../constants.js/products';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
        <div className='max-sm:text-[16px] max-xs:text-[14px] '>
        <h3 className=''>{productData.name}</h3>
            <p>Total : {quantity} </p>
            <p className='gradient'>₹  {(quantity * productData.price).toFixed(2)}</p>
            <button className='max-sm:w-full max-md:w-full max-xs:w-full bg-standardBg hover:bg-gradient-to-r from-indigo-900 via-indigo-900 to-red-500 hover:text-white rounded-lg p-2 mt-5' onClick={() => cart.deleteFromCart(id)}>Remove</button>
            <hr className='my-3'></hr>
        </div>
          
        </>
    )
}

export default CartProduct;