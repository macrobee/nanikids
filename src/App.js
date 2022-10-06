import './App.css';
import React, { Component } from 'react';
import Nav from './Pages/Nav';
import Header from './Pages/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Cottage from './Pages/Cottage';
import Meet from './Pages/Meet';
import Stretch from './Pages/Stretch';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedPage: 'home',
    }
    this.choosePage = this.choosePage.bind(this);
    this.displayPage = this.displayPage.bind(this);
  }
  choosePage(e) {
    console.log(`clicked`);
    console.log(e.currentTarget.id);
    const clickedId = e.currentTarget.id;
    this.setState({ selectedPage: clickedId });
    this.displayPage(clickedId)
  }
  displayPage(page) {
    const pages = {
      home: <Home />,
      about: <About />,
      cottage: <Cottage />,
      meet: <Meet />,
      stretch: <Stretch />,
    }
    return pages[page];
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav onClick={this.choosePage} />
        {this.displayPage(this.state.selectedPage)}
      </div>
    );
  }
}

export default App;
