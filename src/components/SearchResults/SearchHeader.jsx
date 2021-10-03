import { useState } from 'react';
import './SearchHeader.css';

const SearchHeader = (props) => {
	const { formData, handleFormData } = props;

	const [ filterForm, setFilterForm ] = useState({
		availability: false,
		all_filters: false,
		sortBy: false
	});

	// handling onClick events
	const changeFilterOption = (name, value = null) => {
		setFilterForm({ ...filterForm, [name]: value ? value : !filterForm[name] });
	};

	return (
		<div className='filterDiv'>
			<ul className='filterList'>
				<li className='filter_box'>
					<span
						className='filter_checkbox'
						htmlFor='video_consult'
						onClick={() => handleFormData('video_consult', !formData.video_consult)}
					>
						<input type='checkbox' className='no_appearance' name='video_consult' id='video_consult' />
						<div
							className={`filter_select__checkbox ${formData.video_consult ? 'checked' : ''}`}
							id='video_consult_checkbox'
						/>
						<div className='video_consult_label'>Video Consult</div>
					</span>
				</li>
				<li className='filter_box' id='availability' onClick={() => changeFilterOption('availability')}>
					<span className='dropdown_selected' id='availability_selected'>
						<span>Availabilty</span>
						<i className='fas fa-chevron-up' />
					</span>
					<ul className={`dropdown_list ${filterForm.availability ? 'visible' : ''}`} id='availability_list '>
						<li onClick={() => handleFormData('availability', 'today')}>Available Today</li>
						<li onClick={() => handleFormData('availability', 'tomorrow')}>Available Tomorrow</li>
						<li onClick={() => handleFormData('availability', 'within 7 days')}>
							Available in next 7 days
						</li>
					</ul>
				</li>
				<li className='filter_box' id='all_filters' onClick={() => changeFilterOption('all_filters')}>
					<span>All Filters</span>
					<i className='fas fa-chevron-up' />
				</li>

				<li id='sortBy' onClick={() => changeFilterOption('sortBy')}>
					<span>Sort By</span>
					<li className='filter_box'>
						<span className='dropdown_selected'>
							<span>Relevance</span>
							<i className='fas fa-chevron-up' />
						</span>
						<ul className={`dropdown_list ${filterForm.sortBy ? 'visible' : ''}`}>
							<li onClick={() => handleFormData('sortBy', 'relevance')}>Relevance</li>
							<li onClick={() => handleFormData('sortBy', 'earliest')}>Earliest Available</li>
							<li onClick={() => handleFormData('sortBy', 'lowToHigh')}>Price - Low to High</li>
							<li onClick={() => handleFormData('sortBy', 'highToLow')}>Price - High to Low</li>
							<li onClick={() => handleFormData('sortBy', 'experience')}>Years of Experience</li>
							<li onClick={() => handleFormData('sortBy', 'recommendation')}>Recommendation</li>
						</ul>
					</li>
				</li>
			</ul>
			<div className={`filter_bottom ${filterForm.all_filters ? 'expanded' : ''}`}>
				<div className='container'>
					<div>
						<span id='gender_title'>Gender</span>
						<span
							className='filter_checkbox'
							onClick={() => handleFormData('male', !formData.male)}
							htmlFor='male_doctor'
						>
							<input type='checkbox' className='no_appearance' name='male_doctor' id='male_doctor' />
							<div className={`filter_select__checkbox ${formData.male ? 'checked' : ''}`} />
							<div>Male Doctors</div>
						</span>
						<span
							className='filter_checkbox'
							onClick={() => handleFormData('female', !formData.female)}
							htmlFor='female_doctor'
						>
							<input type='checkbox' className='no_appearance' name='female_doctor' id='female_doctor' />
							<div className={`filter_select__checkbox ${formData.female ? 'checked' : ''}`} />
							<div>Female Doctors</div>
						</span>
					</div>
					<div>
						<span id='consultation_fees'>Consultation Fees</span>
						<label
							className='filter_radio'
							htmlFor='free'
							onClick={() => handleFormData('consultation_fees', 'free')}
						>
							<input type='radio' className='no_appearance' name='consultation_fee' id='free' />
							<div className='filter_select__radio' />
							<div>Free</div>
						</label>
						<label
							className='filter_radio'
							htmlFor='1to201'
							onClick={() => handleFormData('consultation_fees', '1to201')}
						>
							<input type='radio' className='no_appearance' name='consultation_fee' id='1to201' />
							<div className='filter_select__radio' />
							<div>1 - 200</div>
						</label>
						<label
							className='filter_radio'
							htmlFor='201to500'
							onClick={() => handleFormData('consultation_fees', '201to500')}
						>
							<input type='radio' className='no_appearance' name='consultation_fee' id='201to500' />
							<div className='filter_select__radio' />
							<div>201 - 500</div>
						</label>
						<label
							className='filter_radio'
							htmlFor='500+'
							onClick={() => handleFormData('consultation_fees', '500+')}
						>
							<input type='radio' className='no_appearance' name='consultation_fee' id='500+' />
							<div className='filter_select__radio' />
							<div>500+</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchHeader;
