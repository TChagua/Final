import React from 'react'
import CartProduct from './common/CartProduct'

const CartProducts = (props) => {
    return(
        <div className="cart">
            <h1 className="title">Checkout</h1>
            <h3 className="sub-title">My Shopping Cart (1)</h3>
            <div className="cart-header">
                <ul className="cart-headings">
                    <li>Item</li>
                    <li>Product Name</li>
                    <li>Unit Price</li>
                    <li>Delivery Details</li>
                </ul>
            </div>
            <CartProduct />
            <button className="purchase">Purchase</button>
        </div>
    )
}
export default CartProducts