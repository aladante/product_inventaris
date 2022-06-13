import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


import Login from './pages/Login'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct'
import AllProduct from './pages/AllProduct'
import AddLocation from './pages/AddLocation'
import Location from './pages/Location'
import LocationId from './pages/LocationId'
import HomePage from './pages/HomePage'
import SignUp from './pages/Signup'

import { AUTH_TOKEN } from './constants/constants'

import { BASE, LOGIN, PRODUCT, LOCATION, ADDPRODUCT, ADDLOCATION, LOCATIONWITHSLUG, ALLPRODUCT, REGISTRATION } from './constants/routeConstants'

const App = () => {
	const [jwt, setJwt] = useState(localStorage.getItem(AUTH_TOKEN))

	return (
		<>
			<Routes>
				<Route path={LOGIN} element={<Login setJwt={setJwt} />} />
				<Route path={REGISTRATION} element={<SignUp />} />
				<Route path={BASE} element={<HomePage jwt={jwt} />} />

				<Route path={LOCATION} element={<Location />} />
				<Route path={LOCATIONWITHSLUG} element={<LocationId />} />
				<Route path={ADDLOCATION} element={<AddLocation />} />

				<Route path={PRODUCT} element={<Product />} />
				<Route path={ADDPRODUCT} element={<AddProduct />} />
				<Route path={ALLPRODUCT} element={<AllProduct />} />
				<Route path={"*"} element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
