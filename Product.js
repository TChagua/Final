import React from 'react'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

const Product = ({url,name,price,id}) => {
    return(   
		<div className="product-item">
			<Link to={"/products/"+id} className="product-link"><img src={url} alt="" className="product-image"/></Link>
				<div className="product-bottom">
					<h3 className="product-name">{name}</h3>
					<p className="product-par">Explore Now</p>
					<h4><i className="fas fa-shopping-cart"></i><span className="product-price"> ${price}</span></h4>
				</div>
		</div>
    
       
    )
}
export default Product
