import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/navigation/Home';
import Store from './component/navigation/Store';
import Mac from './component/navigation/Mac';
import Ipad from './component/navigation/Ipad';
import Iphone from './component/navigation/Iphone';
import Watch from './component/navigation/Watch';
import Airpods from './component/navigation/Airpods';
import TvandHome from './component/navigation/TvandHome';
import Entertainment from './component/navigation/Entertainment';
import Accessories from './component/navigation/Accessories';
import Support from './component/navigation/Support';


const Render = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/mac' element={<Mac />} />
                    <Route path='/ipad' element={<Ipad />} />
                    <Route path='/iphone' element={<Iphone />} />
                    <Route path='/watch' element={<Watch />} />
                    <Route path='/airpods' element={<Airpods />} />
                    <Route path='/tvandhome' element={<TvandHome />} />
                    <Route path='/entertainment' element={<Entertainment />} />
                    <Route path='/accessories' element={<Accessories />} />
                    <Route path='/support' element={<Support />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Render