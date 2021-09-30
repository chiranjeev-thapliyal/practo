import './SearchHeader.css';

const SearchHeader = () => {
	return (
		<div className='filterDiv'>
			<ul className='filterList'>
				<li className='filter_box'>
					<label className='filter_checkbox' htmlFor='video_consult'>
						<input type='checkbox' className='no_appearance' name='video_consult' id='video_consult' />
						<div className='filter_select__checkbox' id='video_consult_checkbox  ' />
						<div className='video_consult_label'>Video Consult</div>
					</label>
				</li>
				<li className='filter_box' id='availability'>
					<span className='dropdown_selected' id='availability_selected'>
						<span>Availabilty</span>
						<i class='fas fa-chevron-up' />
					</span>
					<ul className='dropdown_list' id='availability_list '>
						<li>Available Today</li>
						<li>Available Today</li>
						<li>Available Today</li>
					</ul>
				</li>
				<li className='filter_box' id='all_filters'>
					<span>All Filters</span>
					<i class='fas fa-chevron-up' />
				</li>

				<div id='sortBy'>
					<span>Sort By</span>
					<li className='filter_box'>
						<span className='dropdown_selected'>
							<span>Relevance</span>
							<i class='fas fa-chevron-up' />
						</span>
						<ul className='dropdown_list'>
							<li>Relevance</li>
							<li>Earliest Available</li>
							<li>Price - Low to High</li>
							<li>Price - High to Low</li>
							<li>Years of Experience</li>
							<li>Recommendation</li>
						</ul>
					</li>
				</div>
			</ul>
			<div className='filter_bottom'>
				<div className='container'>
					<div>
						<span id='gender_title'>Gender</span>
						<label className='filter_checkbox' htmlFor='male_doctor'>
							<input type='checkbox' className='no_appearance' name='male_doctor' id='male_doctor' />
							<div className='filter_select__checkbox' />
							<div>Male Doctors</div>
						</label>
						<label className='filter_checkbox' htmlFor='female_doctor'>
							<input type='checkbox' className='no_appearance' name='female_doctor' id='female_doctor' />
							<div className='filter_select__checkbox' />
							<div>Female Doctors</div>
						</label>
					</div>
					<div>
						<span id='consultation_fees'>Consultation Fees</span>
						<label className='filter_radio' htmlFor='free'>
							<input type='radio' className='no_appearance' name='consultation_fee' id='free' />
							<div className='filter_select__radio' />
							<div>Free</div>
						</label>
						<label className='filter_radio' htmlFor='100to201'>
							<input type='radio' className='no_appearance' name='consultation_fee' id='100to201' />
							<div className='filter_select__radio' />
							<div>100 - 201</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchHeader;
