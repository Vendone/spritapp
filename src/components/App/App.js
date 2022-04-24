import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { User } from '../User/User';
import { Dashboard } from '../Dashboard/Dashboard';
import { Rute } from '../Routes/Routes';
import { AddRoutes } from '../AddRoute/AddRoute';
import { Home } from '../Home/Home';
import { Cars } from '../Cars/Cars';
import { GasStations } from '../GasStation/GasStation';
import { TankStops } from '../../features/TankStops/TankStops';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/*" element={<Home />}/>        
          <Route path="/gasstations" element={<GasStations />} />
          <Route path="/tankstops" element={<TankStops />}/>          
          <Route path="/user" element={<User />}/>        
          <Route path='/cars' element={<Cars />}/>           
          <Route path="/dashboard" element={<Dashboard />}/>          
          <Route path="/addRoute" element={<AddRoutes />}/>          
          <Route path="/rute" element={<Rute />}/>           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

