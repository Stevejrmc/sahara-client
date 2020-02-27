import React, { Component } from 'react';
import axios from 'axios';
import '../style/main.less';

const API_URL = 'http://localhost:3000/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }
// TODO: memory leak 
  componentDidMount() {
    this.getProducts('products');
  }

  getProducts(path) {
    axios.get(API_URL + path)
      .then((response) => this.setState({
        products: response.data,
      }))
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const {
      products,
    } = this.state;
    return (
      <div className="main-container">
        <h2>Sahara</h2>
        { products.length ? products.map((p) => <h3 key={p.name}>{p.name}</h3>) : '...loading'}
      </div>
    );
  }
}

export default App;
