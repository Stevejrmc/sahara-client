import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./style/main.less";

class App extends Component {
    render () {
        return <h1>'What up!'</h1>;
    }
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
