import React, { Component } from 'react';

class Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {onClick} = this.props;

        return(
            <div id="nav-bar">
                <div className="nav-item" id="home" onClick={onClick}>Home</div>
                <div className="nav-item" id="about" onClick={onClick}>About</div>
                <div className="nav-item" id="cottage" onClick={onClick}>Cottage</div>
                <div className="nav-item" id="meet" onClick={onClick}>Meet the Kids</div>
                <div className="nav-item" id="stretch" onClick={onClick}>Stretch Club</div>
            </div>
        )
    }
}
export default Nav;