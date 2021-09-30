import SearchHeader from './SearchHeader';

import './SearchList.css';

import SearchCard from './SearchCard';
import SearchListHeader from './SearchListHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SearchWrapper = () => {
	const [ doctorsList, setDoctorsList ] = useState([]);

	const getDoctors = async () => {
		const { data } = await axios.get(`http://localhost:3001/doctors`);
		setDoctorsList(data);
	};

	useEffect(() => {
		getDoctors();
	}, []);

	return (
		<div>
			<SearchHeader />
			<div className='search_list'>
				<div className='search_list__left'>
					<div className='container'>
						<SearchListHeader />
						{doctorsList.map((doctor) => <SearchCard {...doctor} />)}
					</div>
				</div>
				<div className='search_list__right' />
			</div>
		</div>
	);
};

export default SearchWrapper;
