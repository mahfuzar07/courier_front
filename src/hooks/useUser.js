import { useState, useEffect } from 'react';
import { storeUser, removeUser, retrieveUser } from '../utility/userStore';

export default function useUser() {
	const [accessUser, setAccessUser] = useState(null);

	useEffect(() => {
		const user = retrieveUser();
		setAccessUser(user);
	}, []);

	const setUser = (user) => {
		if (user) {
			storeUser(user);
		}
	};

	const clearUserData = () => {
		removeUser();
	};

	return {
		user: retrieveUser(),
		setUser,
		clearUserData,
		accessUser,
	};
}
