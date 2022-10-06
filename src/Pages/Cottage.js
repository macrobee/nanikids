import React, { Component } from 'react';
import photo from "../Images/river.jpg";

class Cottage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="cottage-page" className="pages">
                <h2>This is the Nani Kids at the cottage</h2>
                <img src={photo} width="500px"></img>
            </div>
        )
    }
}
export default Cottage;