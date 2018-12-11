import React from 'react'
import axios from 'axios'

class ProductDetails  extends React.Component {
    state={
        product: {

        }
    }

    getProduct = () => {
        axios.get('http://localhost:5000/products/'+this.props.match.params.id)
        .then(response => {
          console.log(response.data)
           this.setState({product:response.data})
        })
      }

    componentDidMount(){
       this.getProduct()
    }
    render(){
        return (
            <div className="details">
                <img src={this.state.product.url} alt="" className="details-image"/>
                <div className="details-text">
                    <h2 className="details-name">{this.state.product.name}</h2>
                    <h3 className="details-price">${this.state.product.price}</h3>
                    <hr/>
                    <p>{this.state.product.desc} {this.state.product.desc} {this.state.product.desc}</p>
                    <button className="details-button">Add to Cart</button>
                </div>   
            </div>
        )
    }
}

export default ProductDetails