import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="nav">
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Home</NavLink>
            <NavLink to="/user" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>User</NavLink>
            <NavLink to="/rute" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Routes</NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Dashboard</NavLink>
            <NavLink to="/cars" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Cars</NavLink>
            <NavLink to="/gasstations" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Gas Station</NavLink>
            <NavLink to="/tankstops" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Tankstops</NavLink>
        </div>
    );
};