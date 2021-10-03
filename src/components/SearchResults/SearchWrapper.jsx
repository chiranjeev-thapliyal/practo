import SearchHeader from './SearchHeader';
import './SearchList.css';

import SearchCard from './SearchCard';
import SearchListHeader from './SearchListHeader';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContextProvider';

const SearchWrapper = () => {
	const { location, keyword, searched, handleLocation, handleKeyword, handleSearched } = useContext(AuthContext);

	const [ formData, setFormData ] = useState({
		video_consult: false,
		availability: '',
		sortBy: 'relevance',
		male: false,
		female: false,
		consultation_fees: ''
	});

	const handleFormData = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const content = { formData, setFormData, handleFormData };

	const [ doctorsList, setDoctorsList ] = useState([]);

	const getDoctors = async () => {
		console.log(location, keyword);

		let gte, lte;
		if (formData.consultation_fees === 'free') {
			[ gte, lte ] = [ 0, 0 ];
		} else if (formData.consultation_fees === '500+') {
			[ gte, lte ] = [ 501, Number.MAX_SAFE_INTEGER ];
		} else {
			[ gte, lte ] = formData.consultation_fees.split('to').map(Number);
		}
		const { data } = await axios.get(`${process.env.REACT_APP_DATABASE}/doctors`, {
			params: {
				...(location && { locality: location }),
				...(keyword && { speciality: keyword }),
				...(formData.video_consult && { video_consult: true }),
				...(formData.male !== formData.female && formData.male && { gender: 'male' }),
				...(formData.male !== formData.female && formData.female && { gender: 'female' }),
				...(formData.sortBy === 'lowToHigh' && { _sort: 'charges', _order: 'ASC' }),
				...(formData.sortBy === 'highToLow' && { _sort: 'charges', _order: 'DESC' }),
				...(formData.consultation_fees !== '' && { charges_gte: gte, charges_lte: lte })
			}
		});
		setDoctorsList(data);
	};

	useEffect(
		() => {
			getDoctors();

			return () => {
				handleSearched();
			};
		},
		[ formData, location, keyword ]
	);

	return (
		<div className="bg-white">
			<SearchHeader {...content} /> 
			<div className='search_list'>
				<div className='search_list__left'>
					<div className='container'>
						<SearchListHeader total={doctorsList.length} place={location}/>
						{doctorsList.map((doctor) => <SearchCard key={doctor.id} {...doctor} />)}
					</div>
				</div>
				<div className='search_list__right' />
			</div>
		</div>
	);
};

export default SearchWrapper;
