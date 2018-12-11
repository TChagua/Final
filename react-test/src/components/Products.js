import React, {Component} from 'react'
import Product from './common/Product'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import ProductDetails from './common/ProductDetails'

class Products extends Component {
    state={
        products:[]
    }
    getProducts = () => {
        axios.get('http://localhost:5000/products')
        .then(response => {
          console.log(response.data)
           this.setState({products:response.data})
        })
      }

    componentDidMount() {
        this.getProducts()
    }
    render(){
        return (
            <div className="product-container">
            {
                this.state.products.map( (el) =>(
                <Product
                key={el.id}
                id={el.id}
                price={el.price}
                name={el.name}
                url={el.url}
                />
            ))
            }
            </div>
        )
    }
}

export default Products
