import React, { useCallback, useEffect, useState } from 'react';
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


import { LIST_LOCATIONS } from './graphql/location_gql'
import { useQuery } from '@apollo/client';

import { AUTH_TOKEN } from './constants/constants.js'
import { BASE, LOGIN, PRODUCT, LOCATION, ADDPRODUCT, ADDLOCATION, LOCATIONWITHSLUG, ALLPRODUCT, REGISTRATION } from './constants/routeConstants'

const App = () => {
	const check_jwt = useQuery(LIST_LOCATIONS);


	return (
		<>
			<Routes>
				<Route path={BASE}
					element={<HomePage check_jwt={check_jwt} />} />
				<Route path={LOGIN} element={<Login  />} />
				<Route path={REGISTRATION} element={<SignUp />} />

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
