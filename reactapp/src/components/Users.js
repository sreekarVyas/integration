import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
	let [users, setUsers] = useState([]);
	console.log('Inside Users Function');
	useEffect(() => {
		axios
			.get('http://127.0.0.1:8000/users/')
			.then((response) => {
				console.log(response);
				setUsers(response.data);
			})
			.catch((err) => {
				console.log('No Response');
			});
	}, []);
	return (
		<>
			<h1>There</h1>
			{users.map((user) => (
				<p>{user.name}</p>
			))}
		</>
	);
}

export default Users;
