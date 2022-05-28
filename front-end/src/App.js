import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


import Login from './pages/Login'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct'
import AddLocation from './pages/AddLocation'
import Location from './pages/Location'
import HomePage from './pages/HomePage'

import { getRole } from './utils/JwtDecoder'

import { BASE, LOGIN, PRODUCT, LOCATION, ADDPRODUCT, ADDLOCATION } from './constants/routeConstants'
import { AUTH_TOKEN } from './constants/constants'

const App = () => {
	let token = localStorage.getItem(AUTH_TOKEN)
	const [role, setRole] = useState(getRole(token));
	return (
		<>
			<Routes>
				<Route path={LOGIN} element={<Login />} />
				<Route path={BASE} element={<HomePage role={role} />} />
				<Route path={PRODUCT} element={<Product />} />
				<Route path={LOCATION} element={<Location />} />
				<Route path={ADDPRODUCT} element={<AddProduct />} />
				<Route path={ADDLOCATION} element={<AddLocation />} />
				<Route path={"*"} element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
