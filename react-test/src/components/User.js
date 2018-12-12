import React from 'react'
import { Link} from 'react-router-dom';
const User = (props) => {
     return(
        <div className="user">
            <h1 className="user-title">Account</h1>
            <div className="user-nav">
                <h3 className="user-sub-title"> <i className="fas fa-user"></i> Welcome, User!</h3>
                <h3>Balance <span> $1000</span></h3>
                <Link to={"/products/"} className="user-nav-link"><h3> <i className="fas fa-cart-plus"> </i> In Cart</h3></Link>
                <Link to={"/products/"} className="user-nav-link"><h3> <i className="fas fa-cart-arrow-down"> </i> Purchases </h3></Link>
                <Link to={"/contact/"} className="user-nav-link"><h3>Contact Us</h3></Link>
            </div>
        </div>
     )
}
export default User