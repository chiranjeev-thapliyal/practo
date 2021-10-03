import React, { useContext, useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import axios from 'axios';
import SuggestionListItem from './SuggestionListItem';
import { AuthContext } from '../../Contexts/AuthContextProvider';

export default function Searchbar() {
	const { location, keyword, handleLocation, handleKeyword } = useContext(AuthContext);
	const [ showPlaces, setShowPlaces ] = useState(false);
	const [ showSpeciality, setShowSpeciality ] = useState(false);

	const [ suggestionList, setSuggestionList ] = useState([]);

	useEffect(
		() => {
			getData();
		},
		[ showSpeciality, showPlaces ]
	);

	const handleQuery = (type, value) => {
		if (type === 'location') handleLocation(value);
		else handleKeyword(value);
	};

	const getData = async () => {
		if (!showPlaces && !showSpeciality) return;
		const endpoint = showPlaces ? 'place' : 'speciality';
		const { data } = await axios.get(`${process.env.REACT_APP_DATABASE}/${endpoint}`);
		setSuggestionList(data);
	};

	const showSuggestion = (type) => {
		if (type === 'places') {
			if (showPlaces === false) {
				setShowSpeciality(false);
			}
			setShowPlaces(!showPlaces);
		} else {
			if (showSpeciality === false) {
				setShowPlaces(false);
			}
			setShowSpeciality(!showSpeciality);
		}
	};

	return (
		<div className={styles.searchBarWrapper}>
			<div className={styles.searchBarContainer}>
				<div className={styles.searchBarLocality} onClick={() => showSuggestion('places')}>
					<div className={styles.searchbox_wrapper}>
						<span className={styles.searchbox_icon}>
							<svg
								width='13'
								height='17'
								viewBox='0 0 13 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.6'>
									<path
										d='M6.6505 0.0593262C10.1216 0.0593262 12.9353 3.13616 12.9353 6.93198C12.9353 9.83611 11.0692 13.0011 7.38534 16.4606C7.1805 16.6531 6.91934 16.7588 6.6493 16.7585C6.37926 16.7582 6.11826 16.6521 5.91373 16.4592L5.67008 16.228C2.14931 12.8587 0.365723 9.77126 0.365723 6.93198C0.365723 3.13616 3.17937 0.0593262 6.6505 0.0593262ZM6.6505 1.11666C5.24011 1.11666 3.88748 1.72934 2.89019 2.81993C1.89289 3.91051 1.33261 5.38966 1.33261 6.93198C1.33261 9.40049 2.97503 12.2447 6.305 15.4308L6.54543 15.6585C6.57467 15.686 6.61195 15.7011 6.6505 15.7011C6.68906 15.7011 6.72634 15.686 6.75557 15.6585C10.2467 12.3793 11.9684 9.459 11.9684 6.93198C11.9684 6.1683 11.8308 5.4121 11.5636 4.70655C11.2963 4.001 10.9046 3.35993 10.4108 2.81993C9.91701 2.27992 9.33077 1.85157 8.68557 1.55932C8.04037 1.26708 7.34886 1.11666 6.6505 1.11666ZM6.6505 4.28865C7.29159 4.28865 7.90642 4.56714 8.35974 5.06286C8.81306 5.55858 9.06773 6.23092 9.06773 6.93198C9.06773 7.63303 8.81306 8.30537 8.35974 8.80109C7.90642 9.29681 7.29159 9.5753 6.6505 9.5753C6.00941 9.5753 5.39458 9.29681 4.94127 8.80109C4.48795 8.30537 4.23328 7.63303 4.23328 6.93198C4.23328 6.23092 4.48795 5.55858 4.94127 5.06286C5.39458 4.56714 6.00941 4.28865 6.6505 4.28865ZM6.6505 5.34598C6.26585 5.34598 5.89695 5.51308 5.62496 5.81051C5.35297 6.10794 5.20017 6.51135 5.20017 6.93198C5.20017 7.35261 5.35297 7.75601 5.62496 8.05345C5.89695 8.35088 6.26585 8.51797 6.6505 8.51797C7.03515 8.51797 7.40405 8.35088 7.67604 8.05345C7.94803 7.75601 8.10084 7.35261 8.10084 6.93198C8.10084 6.51135 7.94803 6.10794 7.67604 5.81051C7.40405 5.51308 7.03515 5.34598 6.6505 5.34598Z'
										fill='#737376'
									/>
								</g>
							</svg>
						</span>
						<input
							value={location}
							className={styles.searchbox}
							type='text'
							name='searchbox_locality'
							id={styles.searchbox_locality}
							placeholder={location ? location : 'Search Location'}
						/>
					</div>
					{showPlaces ? (
						<SuggestionListItem handleQuery={handleQuery} list={suggestionList} type='places' />
					) : (
						''
					)}
				</div>
				<div className={styles.searchBarKeyword} onClick={() => showSuggestion('speciality')}>
					<div className={styles.searchbox_wrapper}>
						<span className={styles.searchbox_icon}>
							<svg
								width='19'
								height='21'
								viewBox='0 0 19 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.6'>
									<path
										d='M16.7364 17.2594L12.159 12.2539C12.8693 11.2497 13.2536 10.0219 13.2536 8.73052C13.2536 7.18472 12.7019 5.7353 11.7043 4.64245C10.7067 3.5496 9.3777 2.94824 7.96589 2.94824C6.55409 2.94824 5.22512 3.55153 4.22751 4.64245C3.22814 5.73337 2.67822 7.18472 2.67822 8.73052C2.67822 10.2744 3.2299 11.7277 4.22751 12.8186C5.22512 13.9114 6.55232 14.5128 7.96589 14.5128C9.14681 14.5128 10.2678 14.0926 11.1861 13.3178L15.7634 18.3214C15.7769 18.3361 15.7928 18.3477 15.8103 18.3557C15.8279 18.3636 15.8467 18.3677 15.8657 18.3677C15.8847 18.3677 15.9035 18.3636 15.921 18.3557C15.9385 18.3477 15.9545 18.3361 15.9679 18.3214L16.7364 17.483C16.7498 17.4683 16.7605 17.4509 16.7677 17.4317C16.775 17.4125 16.7787 17.3919 16.7787 17.3712C16.7787 17.3504 16.775 17.3298 16.7677 17.3107C16.7605 17.2915 16.7498 17.2741 16.7364 17.2594ZM10.7578 11.7836C10.0105 12.5989 9.0199 13.048 7.96589 13.048C6.91188 13.048 5.92133 12.5989 5.174 11.7836C4.42844 10.9663 4.01777 9.88312 4.01777 8.73052C4.01777 7.57792 4.42844 6.49278 5.174 5.67748C5.92133 4.86218 6.91188 4.41309 7.96589 4.41309C9.0199 4.41309 10.0122 4.86025 10.7578 5.67748C11.5033 6.49471 11.914 7.57792 11.914 8.73052C11.914 9.88312 11.5033 10.9683 10.7578 11.7836Z'
										fill='#737376'
									/>
								</g>
							</svg>
						</span>
						<input
							value={keyword}
							className={styles.searchbox}
							type='text'
							name='searchbox_keyword'
							id={styles.searchbox_keyword}
							placeholder={keyword ? keyword : 'Search doctors, clinics, hospitals, etc.'}
						/>
					</div>
					{showSpeciality ? (
						<SuggestionListItem handleQuery={handleQuery} list={suggestionList} type='speciality' />
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}
