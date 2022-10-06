import React, { Component } from 'react';
import photo from '../Images/fire.jpg';

class About extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="about-page" className="pages">
                <div className="section">
                    <h2>Hello this is the about page</h2>
                    <img src={photo} width="500px" alt="nani kids hanging out" className="display-img"/>
                </div>
                <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas saepe aperiam natus soluta quo ullam rerum. Assumenda nobis reprehenderit adipisci quis debitis nam quaerat placeat! Dolorum, quam! Natus, ullam!
                    Enim at velit numquam impedit, quas culpa corrupti dolorum sapiente commodi ducimus sint. Perferendis quam placeat necessitatibus doloribus a iusto tenetur quis hic totam, reiciendis tempore amet dolorem corporis ratione.</p>
                </div>
            </div>
        )
    }
}
export default About;