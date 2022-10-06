import React, { Component } from 'react';
import stefannie from '../Images/stefannie.jpg';
import cayenne from '../Images/cayenne.jpg';
import david from '../Images/david.jpg';
import rini from '../Images/rini.jpg';
import lem from '../Images/lem.jpg';
import './Meet.css';

class Meet extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="meet-page" className="pages">
                <h2>Meet the Kids</h2>
                <div className="info">
                    <img src={stefannie} width="500px" alt="Stef and Annie"/>
                    <p>Stef and Annie, otherwise known as StefAnnie, Duo Extraordinaire.</p>
                </div>
                <div className="info">
                    <img src={cayenne} width="500px" alt="Cayenne pepper"/>
                    <p>Cayenne pepper, the hottest of all food connoisseurs.</p>
                </div>
                <div className="info">
                    <img src={david} width="500px" alt="david"/>
                    <p>David, the one buffest manz of all.</p>
                </div>
                <div className="info">
                    <img src={rini} width="500px" alt="rini"/>
                    <p>Da Rini, the one you should give life updates to asap.</p>
                </div>
                <div className="info">
                    <img src={lem} width="500px" alt="a tall tree"/>
                    <p>Lembit. Is tall.</p>
                </div>
            </div>
        )
    }
}
export default Meet;