import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function RootLayout() {
	return (
		<div>
			<>
				<NavBar />
				<Outlet />
				<h1>Hello</h1>
			</>
		</div>
	);
}

export default RootLayout;
