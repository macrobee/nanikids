import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Nav from '../Pages/Nav';
import Header from '../Pages/Header';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Cottage from '../Pages/Cottage';
import Meet from '../Pages/Meet';
import Stretch from '../Pages/Stretch';

const RouteSwitch = ()=>{
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cottage' element={<Cottage />} />
            <Route path='/nanikids' element={<Meet />} />
            <Route path='/stretch' element={<Stretch />} />

        </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;