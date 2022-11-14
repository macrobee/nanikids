import './App.css';
import React, { useState} from 'react';
import Nav from './Pages/Nav';
import Header from './Pages/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Cottage from './Pages/Cottage';
import Meet from './Pages/Meet';
import Stretch from './Pages/Stretch';
import RouteSwitch from './components/routeswitch';

const App = () =>{
  const [selectedPage, setSelectedPage] = useState('home');
  
  function choosePage(e) {
    console.log(`clicked`);
    console.log(e.currentTarget.id);
    const clickedId = e.currentTarget.id;
    setSelectedPage(clickedId);
    displayPage(clickedId);
  }
  function displayPage(choice) {
    const pages = {
      home: <Home />,
      about: <About />,
      cottage: <Cottage />,
      meet: <Meet />,
      stretch: <Stretch />,
    }
    return pages[choice];
  }
  
    return (
      <div className="App">
        <Header />
        <RouteSwitch />
      </div>
    );

}

export default App;
