import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [ user, setUser ] = useState({ name: '', phone: '' });
	const [price, setPrice] = useState(399);
	const [ token, setToken ] = useState('');
	const [ currentAppointment, setCurrentAppointment ] = useState({});

	const history = useHistory();

	const [ query, setQuery ] = useState({
		location: '',
		keyword: ''
	});
	const [ searched, setSearched ] = useState(false);

	useEffect(
		() => {
			const { location, keyword, searched } = query;
			if (location && keyword && !searched) {
				handleSearched();
				return history.push('/search');
			}
		},
		[ query ]
	);

	const handleLocation = (newLocation) => {
		setQuery({ ...query, location: newLocation });
	};

	const handleKeyword = (newKeyword) => {
		setQuery({ ...query, keyword: newKeyword });
	};

	const handleSearched = () => {
		setSearched(!searched);
	};

	const values = {
		...query,
		user,
		token,
		price,
		searched,
		currentAppointment,
		handleLocation,
		handleKeyword,
		handleSearched,
		setUser,
		setToken,
		setPrice,
		setCurrentAppointment
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
