import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from '../pages/Calculator';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => {

    return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path="/calculator" element={<Calculator />} />
		</Routes>
    );
}

export default AppRouter;
