import './App.css';
import React from 'react';
import Header from './Pages/Header';
import RouteSwitch from './components/routeswitch';

const App = () =>{
  
    return (
      <div className="App">
        <Header />
        <RouteSwitch />
      </div>
    );

}

export default App;
