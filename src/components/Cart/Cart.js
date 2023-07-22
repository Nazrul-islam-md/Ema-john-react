import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // const total = cart.reduce( (previous, product) => previous + product.price, 0 )
    const shipping = total>0 ? 15:0;
    const tax = (total + shipping) * 0.10;
    const grand = total + shipping + tax;
    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand total: {grand.toFixed(2)}</p>
        </div>
    );
};

export default Cart;