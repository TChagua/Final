import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegistrationForm from './components/RegistrationForm'
import Main from './components/Main'
import Products from './components/Products'
import ProductDetails from './components/common/ProductDetails'
import CartProducts from './components/CartProducts'

class App extends Component {
  state= {
    users:'',
    products:'',
  } 

  getProducts = () => {
    axios.get('http://localhost:5000/products')
    .then(response => {
      console.log(response.data)
       this.setState({products:response.data})
    })
  }
  getUsers = () => {
    axios.get('http://localhost:5000/users')
    .then(response => {
      console.log(response.data)
       this.setState({products:response.data})
  })
}
  registerUser = (newUser) => {
      axios.post('http://localhost:5000/register', newUser)
      .then(response => response.data)
      .then(newItem => {
         console.log(newItem)
         const  data = [...this.state.users, newItem]
         this.setState({users:data})
      })
  
  }

  // componentDidMount(){
  //   this.getProducts()
    // this.getUsers()
  // }
  render() {
    return (
      <Router>
        <div>
        <Route 
          path="/"
          exact 
          component={Products}
          />
          <Route 
          path="/products/:id" 
          component={ProductDetails}
          />
          <Route 
          path="/cart" 
          component={CartProducts}
          />
        </div>
      
      </Router>
    );
  }
}
 {/* <Router>
        <div className="App">
        <Route 
          path="/"
          exact 
          component={Main}
          />
        <Route 
          path="/register" 
          component={ (props) => <RegistrationForm register={this.registerUser} {...props}/>}
          />
    
      </div>
       </Router> */}

export default App;
