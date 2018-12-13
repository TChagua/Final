import React from 'react'
import Joi from "joi-browser";
import Form from "./common/form";
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

class ProductForm extends Form {
    state = {
        data: {
            name:"Nameeee",
            url:"",
            desc:"",
            price:"",
        },
        errors: {}
    }

    schema ={
        name: Joi.string()
           .required()
           .label('Name'),
        url: Joi.string()
           .required()
           .label("Url"),
        desc: Joi.string()
           .required()
           .label("Description"),
        price: Joi.number()
           .required()
           .label("Price")
    }

    componentDidMount() {
        // const genres= getGenres();
        // this.setState({genres});

        // const movieId = this.props.match.params.id
        // if (movieId === "new") return;

        // const movie = getMovie(movieId)
        // if (!movie) return this.props.history.replace("/not-found")

        // this.setState({data: this.mapToViewModel(movie)})
    }


    doSubmit = () => {
        const data = this.state.data
        this.props.register(data)
        console.log(this.state.data)

        this.props.history.replace("/")
        // <Redirect to={`/`} />
        // return (<Redirect to={`/`} />) 
    }

    render() {
        return (
            <div className="product-form">
              <h1>Product Form</h1>
              <form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Name")}
              {this.renderInput("url", "Url")}
              {this.renderInput("desc", "Description")}
              {this.renderInput("price", "Price")}
              {this.props.match.path.endsWith('add')? this.renderButton("Add") : this.renderButton("Edit")}
              </form>
            </div> 
        )
        }
    }

export default ProductForm