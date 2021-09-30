import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [ location, setLocation ] = useState({});
	const [ query, setQuery ] = useState('');

	const handleLocation = (newLocation) => {
		setLocation(newLocation);
	};

	const handleQuery = (newQuery) => {
		setQuery(newQuery);
	};

	const values = {
		location,
		query,
		handleLocation,
		handleQuery
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
