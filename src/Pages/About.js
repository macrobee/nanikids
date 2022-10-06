import React, { Component } from 'react';
import photo from '../Images/fire.jpg';

class About extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="about-page" className="pages">
                <h2>Hello this is the about page</h2>
                <img src={photo} width="500px" alt="nani kids hanging out"/>
                
            </div>
        )
    }
}
export default About;