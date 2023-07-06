import React,{createContext, useState} from 'react';
import { wardrobeProducts, getProductData} from '../constants.js/products';

export const CartContext = createContext({
    items:[],
    getProductQuantity:()=>{},
    addoneToCart:()=>{},
    removeOneToCart:()=>{},
    deleteFromCart:()=>{},
    getTotalToCost:()=>{},

})

export function CartProvider({children}) {
   const [cartProducts, setCartProducts] = useState([]);
   //id f the product and the quanitity of the product

   const getProductQuantity=(id)=>{
        const quantity = cartProducts.find(product=>product.id===id)?.quantity 
        if(quantity===undefined) {
            return 0;
        }
        return quantity;
   }

   const addoneToCart=(id)=>{
        const quantity = getProductQuantity(id);
        if(quantity===0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id:id,
                        quantity:1
                    }
                ]
            )
        }
        else{
            setCartProducts(
                cartProducts.map(
                    product=>
                    product.id===id
                    ? {...product, quantity: product.quantity +1}
                    : product
                )
            )
        }     
   }

   const removeOneToCart=(id)=>{
    const quantity = getProductQuantity(id);
    if(quantity===1) {
        deleteFromCart(id);
    }else{
        setCartProducts(
            cartProducts.map(
                product=>
                product.id===id
                ? {...product, quantity: product.quantity - 1}
                : product
            )
        )
    }
   }
   const deleteFromCart=(id)=>{
        setCartProducts(
            cartProducts=>
            cartProducts.filter(currentProduct=>{
                return currentProduct.id !== id;
            })
        )
   }
   const getTotalToCost=()=>{
    let totalCost = 0;
    cartProducts.forEach((cartItem)=>{
        const productData = getProductData(cartItem.id);
        totalCost += productData ? productData.price * cartItem.quantity : 0;
    });
    return totalCost;
   }
   const contextValue = {
        items:cartProducts,
        getProductQuantity,
        addoneToCart,
        removeOneToCart,
        deleteFromCart,
        getTotalToCost,
   }
   return (
    <CartContext.Provider value={contextValue}>
            {children}
    </CartContext.Provider>
   )
}

export default CartProvider;