import { useContext, useRef } from 'react';
import { Redirect, useHistory } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import './SearchCard.css';

const getTimeDetails = (afterToday = 0) => {
	const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const myDate = new Date(new Date().getTime() + afterToday * 24 * 60 * 60 * 1000);
	const day = days[myDate.getDay()];
	const date = myDate.getDate();
	const month = monthNames[myDate.getMonth() + 1];
	const year = myDate.getFullYear();
	return { day, date, month, year };
};

const SearchCard = ({
	name,
	img,
	speciality,
	clinics,
	locality,
	experience,
	video_consult,
	charges,
	ratings,
	stories,
	time
}) => {
	const Timings = useRef();
	const { setCurrentAppointment } = useContext(AuthContext);
	const history = useHistory();

	const handleBookAppointment = (e) => {
		e.stopPropagation();
		if (Timings.current.className.indexOf('expanded') === -1) {
			Timings.current.className = `slots expanded`;
		} else {
			Timings.current.className = `slots`;
		}
	};

	const today = getTimeDetails(2);
	const currApp = {
		name: name,
		img: img,
		titleMain: 'BDS, MDS - Orthodontics and Dentofacial',
		titleOther: 'Dentist, Orthodontist, Cosmetic/Aesthetic'
	};

	const { morning, afternoon, evening } = time;

	return (
		<div className='card_general'>
			<div className='doctor_card'>
				<div className='card_info'>
					<div className='card_profile'>
						<img src={img} alt={name} />
						<button className='view_profile'>View Profile</button>
					</div>
					<div className='card_info_section'>
						<h2 className='doctor_name'>{name}</h2>
						<p className='doctor_speciality'>{speciality}</p>
						<p className='doctor_experience'>{experience} years experience overall</p>
						<div className='clinic_details'>
							<span className='practice_locality'>New Rajendra Nagar, </span>
							<span className='practice_city'>{locality}</span>
							<div className='separator' />
							<span className='doctor_clinic_name'>{clinics[0].name}</span>
						</div>
						<div className='fees'>
							<span className='consultation_fee'>
								<span className='rupees_symbol'>₹</span> {charges}{' '}
							</span>
							<span>Consultation fee at clinic</span>
						</div>

						<div className='card_bottom'>
							<span className='card_like_button'>
								<i className='fas fa-thumbs-up' />
								<span>{ratings}%</span>
							</span>
							<span className='card_stories'>{stories} Patient Stories</span>
						</div>
					</div>
				</div>
				<div className='appointment_section'>
					<div className='appointment_status'>
						<i className='far fa-calendar' />
						<span>Available Today</span>
					</div>
					<div className='appointment_button'>
						<button className='book_appointment' onClick={handleBookAppointment}>
							Book Appointment
							<div>No Booking Fee</div>
						</button>
					</div>
					{video_consult ? (
						<div className='appointment_button'>
							<button className='video_consult'>Video Consult</button>
						</div>
					) : (
						''
					)}
				</div>
			</div>
			<div className='doctor_slots'>
				<div className='slots' ref={Timings}>
					<div className='slots_header'>
						<div className='slot_header_btn slots_header_prev'>
							<span>
								<i className='fas fa-chevron-left' />
							</span>
						</div>
						<div className='slots_header_daybar'>
							<div className='day_label day_selected'>
								<h3>Today</h3>
								<h4>{morning.length + afternoon.length + evening.length} slots available</h4>
							</div>
							<div className='day_label'>
								<h3>Tomorrow</h3>
								<h4>{morning.length + afternoon.length + evening.length} slots available</h4>
							</div>
							<div className='day_label'>
								<h3>{`${today.day.slice(0, 3)}, ${today.date} ${today.month.slice(0, 3)}`}</h3>
								<h4>{morning.length + afternoon.length + evening.length} slots available</h4>
							</div>
							<div className='header_slider' />
						</div>
						<div className='slot_header_btn slots_header_next'>
							<span className='slot_available'>
								<i className='fas fa-chevron-right' />
							</span>
						</div>
					</div>
					<div className='day-slots'>
						{morning.length > 0 ? (
							<div className='day_sessions' id='morning'>
								<div className='day_session_header'>
									<svg
										width='18'
										height='18'
										viewBox='0 0 18 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M3.55216 3.97746L2.79187 3.2137L3.24099 2.76253L4.005 3.52576L3.55216 3.97746ZM0.5 9.32192V8.67808H1.95455V9.32192H0.5ZM8.68182 1.92466V0.5H9.31818V1.92466H8.68182ZM15.2081 3.2137L14.4491 3.97621L14.001 3.52603L14.76 2.76352L15.2081 3.2137ZM14.7528 15.2437L13.9918 14.475L14.4337 14.031L15.199 14.7955L14.7528 15.2437ZM17.5 9.32192H16.0455V8.67808H17.5V9.32192ZM4.59091 9C4.59091 6.55344 6.57011 4.56849 9 4.56849C11.4299 4.56849 13.4091 6.55344 13.4091 9C13.4091 11.4466 11.4299 13.4315 9 13.4315C6.57011 13.4315 4.59091 11.4466 4.59091 9ZM9.31818 16.0753V17.5H8.68182V16.0753H9.31818ZM4.00002 14.4667L3.23901 15.2355L2.79089 14.7853L3.5519 14.0166L4.00002 14.4667Z'
											stroke='black'
										/>
									</svg>

									<div className='day_session_header_name'>Morning</div>
								</div>
								<div className='day_session_body'>
									{morning.map((time) => {
										return (
											<div key={time} className='slot_time'>
												<span
													onClick={() => {
														setCurrentAppointment({
															...currApp,
															date: getTimeDetails(),
															time: time
														});
														return history.push('/consultpage');
													}}
												>
													{time}
												</span>
											</div>
										);
									})}
								</div>
							</div>
						) : (
							''
						)}

						{afternoon.length > 0 ? (
							<div className='day_sessions' id='afternoon'>
								<div className='day_session_header'>
									<svg
										width='18'
										height='18'
										viewBox='0 0 18 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M3.55216 3.97746L2.79187 3.2137L3.24099 2.76253L4.005 3.52576L3.55216 3.97746ZM0.5 9.32192V8.67808H1.95455V9.32192H0.5ZM8.68182 1.92466V0.5H9.31818V1.92466H8.68182ZM15.2081 3.2137L14.4491 3.97621L14.001 3.52603L14.76 2.76352L15.2081 3.2137ZM14.7528 15.2437L13.9918 14.475L14.4337 14.031L15.199 14.7955L14.7528 15.2437ZM17.5 9.32192H16.0455V8.67808H17.5V9.32192ZM4.59091 9C4.59091 6.55344 6.57011 4.56849 9 4.56849C11.4299 4.56849 13.4091 6.55344 13.4091 9C13.4091 11.4466 11.4299 13.4315 9 13.4315C6.57011 13.4315 4.59091 11.4466 4.59091 9ZM9.31818 16.0753V17.5H8.68182V16.0753H9.31818ZM4.00002 14.4667L3.23901 15.2355L2.79089 14.7853L3.5519 14.0166L4.00002 14.4667Z'
											stroke='black'
										/>
									</svg>

									<div className='day_session_header_name'>Afternoon</div>
								</div>
								<div className='day_session_body'>
									{afternoon.map((time) => {
										return (
											<div key={time} className='slot_time'>
												<span
													onClick={() => {
														setCurrentAppointment({
															...currApp,
															date: getTimeDetails(),
															time: time
														});
														return history.push('/consultpage');
													}}
												>
													{time}
												</span>
											</div>
										);
									})}
								</div>
							</div>
						) : (
							''
						)}

						{evening.length > 0 ? (
							<div className='day_sessions' id='evening'>
								<div className='day_session_header'>
									<svg
										width='15'
										height='18'
										viewBox='0 0 15 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M5 1C3.33333 5 3.19916 13.8 13.9992 17' stroke='black' />
										<path d='M14 16.8425C6.7258 17.6676 -5.26776 15.6543 4.9516 1' stroke='black' />
									</svg>

									<div className='day_session_header_name'>Evening</div>
								</div>
								<div className='day_session_body'>
									{evening.map((time) => {
										return (
											<div key={time} className='slot_time'>
												<span
													onClick={() => {
														setCurrentAppointment({
															...currApp,
															date: getTimeDetails(),
															time: time
														});
														return history.push('/consultpage');
													}}
												>
													{time}
												</span>
											</div>
										);
									})}
								</div>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchCard;
