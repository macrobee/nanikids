import React, { Component } from 'react';
import hangout from '../Images/hangout.jpg';

class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="home" className="pages">
                <div className="section">
                    <h2>Hello this is the home page</h2>
                    <img src={hangout} width="500px" className="photo-large" alt="nani kids hanging out" className="display-img" />

                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam voluptates eveniet ex ullam? Ipsam aliquam a in perferendis laudantium animi, saepe exercitationem magnam ipsa sunt quibusdam. Aspernatur, aliquam cumque.
                    Quas voluptatem voluptatibus eum fuga ad tenetur! Doloribus voluptates corrupti cumque possimus voluptatem harum accusamus voluptas atque, maxime hic tempora optio magni error commodi saepe, iure deleniti minima ipsum! Dignissimos.</p>
                </div>
            </div>
        )
    }
}
export default Home;