import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { User } from '../User/User';
import { Dashboard } from '../Dashboard/Dashboard';
import { AllRoutes } from '../Routes/Routes';
import { AddRoutes } from '../AddRoute/AddRoute';
import { Cars } from '../Cars/Cars';
import { GasStations } from '../GasStation/GasStation';
import { TankStops } from '../Tankstops/TankStops';
import { UpdateRoute } from '../UpdateRoutes/UpdateRoutes';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/gasstations" element={<GasStations />} />
          <Route path="/tankstops" element={<TankStops />} />
          <Route path="/user" element={<User />} />
          <Route path='/cars' element={<Cars />} />
          <Route path="/addRoute" element={<AddRoutes />} />
          <Route path="/updateRoute/:id" element={<UpdateRoute />} />
          <Route path="/routes" element={<AllRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

