import React, { ComponentType, useState } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';


import NavBar from './pages/NavBar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'
import Location from './pages/Location'
import HomePage from './pages/HomePage'

import { BASE, LOGIN, PRODUCT, LOCATION, REGISTRATION } from './constants/routeConstants'

const App = () => {
	return (
		<>
			<Routes>
				<Route path={BASE} element={<HomePage />} />
				<Route path={LOGIN} element={<Login />} />
				<Route path={"*"} element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
