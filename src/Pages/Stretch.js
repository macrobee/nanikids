import React, { Component } from 'react';
import stretch from '../Images/stretch.jpg';

class Stretch extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="stretch-page" className="pages">
                <h2>Join our stretch program</h2>
                <p>Hosted whenever someone remembers to ask for it</p>
                <img src={stretch} width="500px" alt="nani kids stretch club"/>
                
            </div>
        )
    }
}
export default Stretch;