import React, { Component } from 'react';
import hangout from '../Images/hangout.jpg';

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="home">
                <h2>Hello this is the home page</h2>
                <img src={hangout} width="500px" className="photo-large" alt="nani kids hanging out" />
                
            </div>
        )
    }
}
export default Home;