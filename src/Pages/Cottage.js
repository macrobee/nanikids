import React, { Component } from 'react';
import photo from "../Images/river.jpg";

class Cottage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="cottage-page" className="pages">
                <div className="section">
                    <h2>This is the Nani Kids at the cottage</h2>
                    <img src={photo} width="500px" className="display-img"></img>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur exercitationem quis sequi, accusantium atque maxime doloremque minima amet laudantium consequuntur delectus illum culpa illo temporibus, dolor dolores distinctio eligendi!
                    Amet nostrum sit possimus totam non dicta dolor nihil assumenda iste! Aliquid dolore est enim voluptas nesciunt earum similique ipsum ratione. Eveniet illum alias dolore pariatur sint. Architecto, tenetur laborum.</p>
                </div>
            </div>
        )
    }
}
export default Cottage;