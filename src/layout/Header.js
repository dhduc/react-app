import React, {Component} from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
                <ul className="App-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;