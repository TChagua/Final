import React from 'react'
import { Link} from 'react-router-dom';

const CartProduct = (props) => {
    return(

            <div className="cart-item">
                <ul className="cart-item-list">
                    <li><Link to={"/products/"} className="cart-item-link"><img src="https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg" alt="" className="cart-item-image"/></Link></li>
                    <li>Timex</li>
                    <li>$290</li>
                    <li>
                        <i className="fas fa-times"></i>
                        <p>Free</p>
                        <p>Delivered in 2-3 business days</p>
                     </li>
                     
                </ul>
            </div>
    )
}
export default CartProduct