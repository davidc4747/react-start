import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';


export default class App extends Component {
    render() {
        return (<div>Lets get started!</div>);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));