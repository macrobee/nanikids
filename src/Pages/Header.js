import React, { Component } from 'react';
import nani from '../Images/nani.jpg';
import './Header.css';

class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="header">
                <h1>The Nani Kids</h1>
                <img src={nani} width="75px" className="logo" alt="nani in Japanese kanji" />
            </div>
        )
    }
}
export default Header;