import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseItemQuantity, getCartTotal, increaseItemQuantity, remove } from "../store/cartSlice";
import "../assets/scss/Cart.scss";

const Cart = () => {
    const dispatch = useDispatch();

    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.cart
    );

    const { cartValue } = useSelector(
        (state) => state.cart
    );


    console.log(cartValue);


    // console.log(totalQuantity);
    // console.log(totalPrice);


    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const handleInc = (productId) => {
        dispatch(increaseItemQuantity(productId))
    };

    const handleDec = (productId) => {
        dispatch(decreaseItemQuantity(productId))
    };

    const handleClick = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <h1>Cart</h1>
            <div className="cart">
                <pre>
                    <strong>Total amount:  </strong>
                    {console.log(totalPrice * 80)}
                    <span>
                        <b><strong>₹{parseInt(parseInt(totalPrice) * 80)}     </strong>   </b>
                    </span>
                    Total Quantity
                    <span>{totalQuantity}</span>
                </pre>
                {cart.map((product) => (
                    <div className="cartCard" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h4>₹{parseInt(product.price) * 80}</h4>
                        <button className="bt" onClick={() => handleInc(product.id)}>
                            +
                        </button>
                        <span>{product.quantity}</span>
                        <button className="bt" onClick={() => handleDec(product.id)}>
                            -
                        </button>
                        <button className="btn" onClick={() => handleRemove(product.id)}>
                            remove
                        </button>
                        <p>Total: {parseInt((parseInt((product.price)) * parseInt((product.quantity)) * 80))}</p>
                    </div>
                ))}
                <button className="btn" onClick={handleClick}>
                    Clear Cart
                </button>

            </div>
        </>
    );
};

export default Cart;
