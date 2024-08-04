import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, updateQuantity, clearCart } from '../Redux/Cartslice';
import { FaTrashAlt, FaCartArrowDown } from 'react-icons/fa'; // Import icons
import "../../src/App.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    const handleQuantityChange = (id, change) => {
        dispatch(updateQuantity({ id, change }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div>
   
            <div className='cartWrapper'>
                {cartItems.map((item) => (
                    <div key={item.id} className='cartCard'>
                        <img src={item.image} alt="Product" className='productImage' />
                        <div className='quantityControl font-bold'>
                            <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                        <h5 className='productTitle'>{item.title}</h5>
                        <h5>${item.price.toFixed(2)}</h5>
                        <h5>${(item.price * item.quantity).toFixed(2)}</h5>
                        <button className='btn removeBtn' onClick={() => handleRemove(item.id)}>
                            <FaTrashAlt />
                        </button>
                    </div>
                ))}
            </div>
            <div className='totalPrice'>
                <h3>Total Price: ${getTotalPrice()}</h3>
                <button className='btn clearBtn' onClick={handleClearCart}>
                    <FaCartArrowDown /> Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
