import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


import Login from './pages/Login'
import Product from './pages/Product'
import Location from './pages/Location'
import HomePage from './pages/HomePage'

import { BASE, LOGIN, PRODUCT, LOCATION, REGISTRATION } from './constants/routeConstants'
import { AUTH_TOKEN } from './constants/constants'

const App = () => {
	const [role, setRole] = useState(localStorage.getItem(AUTH_TOKEN));


	return (
		<>
			<Routes>
				<Route path={LOGIN} element={<Login />} />
				<Route path={BASE} element={<HomePage role={role} />} />
				<Route path={PRODUCT} element={<Product />} />
				<Route path={LOCATION} element={<Location />} />
				<Route path={"*"} element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
