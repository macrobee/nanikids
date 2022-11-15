import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../Pages/Nav';
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
            <Route path='/meet' element={<Meet />} />
            <Route path='/stretch' element={<Stretch />} />
            <Route path='*' element={<p>There's nothing here!</p>} />
        </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;