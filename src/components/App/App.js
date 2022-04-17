import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from '../../features/Nav/Nav';
import { User } from '../../features/User/User';
import { Dashboard } from '../../features/Dashboard/Dashboard';
import { AddRoute } from '../../features/AddRoute/AddRoute';
import { Home } from '../../features/Home/Home';
import { Cars } from '../../features/Cars/Cars';
import { GasStations } from '../../features/GasStation/GasStation';
import { TankStops } from '../../features/TankStops/TankStops';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/gasstations">
            <GasStations />
          </Route>
          <Route path="/tankstops">
            <TankStops />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path='/cars'>
            <Cars />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addRoute">
            <AddRoute />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

