import React, { Component } from 'react';
import stefannie from '../Images/stefannie.jpg';

class Meet extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="meet-page" className="pages">
                <h2>Meet the Kids</h2>
                <img src={stefannie} width="500px" alt="Stef and Annie"/>
                
            </div>
        )
    }
}
export default Meet;