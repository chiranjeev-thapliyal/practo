import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import styles from './ConsultPage.module.css';

const notSelected = (
	<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<circle cx='8' cy='8' r='7.5' stroke='#B4B4BE' />
	</svg>
);

const selected = (
	<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<circle cx='8' cy='8' r='7' stroke='#15BEF0' stroke-width='2' />
		<circle cx='8' cy='8' r='4' fill='#15BEF0' />
	</svg>
);

export default function ConsultPage() {
	// Checking if user is logged in or not
	const { currentAppointment: doctor, token, user, setUser, setToken } = useContext(AuthContext);

	// Checking state for filling patient form
	const [ forOwn, setForOwn ] = useState(true);
	const [ forSomeoneElse, setForSomeoneElse ] = useState(false);
	const [ otp, setOTP ] = useState('');

	const handleOTP = (e) => {
		setOTP(e.target.value);
	};

	// Changing state for person
	const changeRef = (value) => {
		if (value === 'own') {
			setForOwn(true);
			setForSomeoneElse(false);
		} else {
			setForSomeoneElse(true);
			setForOwn(false);
		}
	};

	// Getting user details for current user (ref: AuthContext)
	const [ userDetails, setUserDetails ] = useState(user);

	// State for patient details
	const [ patientDetails, setPatientDetails ] = useState({
		name: userDetails ? userDetails.name : '',
		someone: '',
		fullName: '',
		mobile: ''
	});

	// Asynchronous request for authenticating user
	const getUser = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_DATABASE}/users/`, {
			params: {
				phone: userDetails.phone
			}
		});
		return data.length <= 0 ? null : data[0];
	};

	// Function to check otp
	const getOTP = () => {
		setUser({ ...user, phone: userDetails.phone });
	};

	const handleSignIn = async () => {
		if (otp.length !== 6) {
			setOTP('');
			return;
		}
		const user = await getUser();
		if (!user) return;
		setUser(user);
		setUserDetails(user);
		setToken('authenticated');
	};

	const handlePatientForm = (e) => {
		const { name, value } = e.target;
		setPatientDetails({ ...patientDetails, [name]: value });
	};

	return (
		<div className={styles.ConsultPageSection}>
			<div>
				<div className={styles.flexBox}>
					<div className={styles.flex2}>
						<div className={styles.flex12}>
							<div className={styles.flex12Header}>
								<svg
									width='22'
									height='22'
									viewBox='0 0 22 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='11' cy='11' r='11' fill='#15BEF0' />
									<path
										d='M11 10V14.5M8.5 12H13.5M7 15.5V10H5.5L11 4.5L16.5 10H15V15.5H7Z'
										stroke='white'
									/>
								</svg>

								<span>
									<h3 style={{ display: 'inline' }}>In-clinic Appointment</h3>
								</span>
							</div>
							<div className={styles.dateTimeDiv}>
								<div className={styles.dateTime}>
									<div className={styles.consultTime}>
										<svg
											width='12'
											height='13'
											viewBox='0 0 12 13'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<rect x='0.5' y='1.5' width='11' height='11' rx='1.5' stroke='#545459' />
											<line x1='1' y1='5' x2='11' y2='5' stroke='#545459' stroke-width='2' />
											<line x1='3.5' x2='3.5' y2='3' stroke='#545459' />
											<line x1='8.5' x2='8.5' y2='3' stroke='#545459' />
											<circle cx='8' cy='9' r='1.625' stroke='#545459' stroke-width='0.75' />
										</svg>

										<span>
											On{' '}
											<strong>{`${doctor.date.day.slice(0, 3)} ${doctor.date
												.date} ${doctor.date.month.slice(0, 3)}, ${doctor.date.year}`}</strong>
										</span>
									</div>
									<div className={styles.dateTimeChange}>Change Date & Time</div>
								</div>
								<div className={styles.consultTime}>
									<svg
										width='14'
										height='14'
										viewBox='0 0 14 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M6.66 0C2.98 0 0 2.98667 0 6.66667C0 10.3467 2.98 13.3333 6.66 13.3333C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667C13.3333 2.98667 10.3467 0 6.66 0ZM6.66667 12C3.72 12 1.33333 9.61333 1.33333 6.66667C1.33333 3.72 3.72 1.33333 6.66667 1.33333C9.61333 1.33333 12 3.72 12 6.66667C12 9.61333 9.61333 12 6.66667 12Z'
											fill='#5D5D62'
										/>
										<path
											d='M7 3.3335H6V7.3335L9.5 9.4335L10 8.6135L7 6.8335V3.3335Z'
											fill='#5D5D62'
										/>
									</svg>

									<span>
										At <strong>{doctor.time}</strong>
									</span>
								</div>
							</div>
							<div className={styles.posterDiv}>
								<div className={styles.posterDivImgBox}>
									<img src={doctor.img} alt={doctor.name} />
								</div>
								<div className={styles.posterDetail}>
									<h3 className={styles.doctor_name}>{doctor.name}</h3>
									<h4 className={styles.doctor_qualification}>{doctor.titleMain}</h4>
									<h4 className={styles.doctor_specialization}>{doctor.titleOther}</h4>
								</div>
							</div>
							<div className={styles.posterDiv}>
								<div className={styles.posterDivImgBox}>
									<img
										src='https://images1-fabric.practo.com/practices/1272173/smile-care-orthodontic-center-and-multispeciality-dental-clinic-bangalore-5de10d366e186.jpg'
										alt='img'
									/>
								</div>
								<div className={styles.posterDetail}>
									<h3>Smile Care Orthodontic Center and Multispeciality Dental Clinic</h3>
									<h4>
										First floor, Shridhar building, Devasthanagalu, Balagere Road, Varthur,
										Bangalore
									</h4>
									<a
										className={styles.blue_link}
										href='//maps.google.com/maps?f=d&amp;daddr=12.938853,77.74081(Smile%20Care%20Orthodontic%20Center%20and%20Multispeciality%20Dental%20Clinic)&amp;hl=undefined'
									>
										Get Directions
									</a>
								</div>
							</div>
							<Link to='/search' className={`${styles.blue_link} ${styles.go_back}`}>
								Go Back To Results
							</Link>
						</div>
					</div>
					<div className={styles.flex21}>
						{token && (
							<div className={styles.flex1}>
								<div className={styles.PatientHeader}>
									<h2>Patient Details</h2>
									<div>This in-clinic appointment is for:</div>
								</div>
								<div>
									<div style={{ borderBottom: 'none' }} className={styles.inputNameBox}>
										<input
											type='radio'
											name='patientName'
											id='own'
											onClick={() => changeRef('own')}
										/>
										<label htmlFor='own'>
											{forOwn ? selected : notSelected} <span>{userDetails.name}</span>
										</label>
									</div>
									<div className={styles.inputNameBox}>
										<input
											type='radio'
											name='patientName'
											id='someoneElse'
											onClick={() => changeRef('someoneElse')}
										/>
										<label htmlFor='someoneElse'>
											{forSomeoneElse ? selected : notSelected} <span>Someone Else</span>
										</label>
									</div>
									<div className={styles.followingDiv}>
										Please provide following information about Patient
									</div>
								</div>
								<div>
									<div>
										<div className={styles.fullNameLabel}>Full Name *</div>
										<div className={styles.inputFullNameBox}>
											{forOwn ? (
												<input
													name='name'
													type='text'
													value={userDetails.name}
													placeholder={userDetails.name}
												/>
											) : (
												<input
													name='someone'
													type='text'
													onChange={handlePatientForm}
													value={patientDetails.someone}
													placeholder={
														patientDetails.someone ? patientDetails.someone : 'Name'
													}
												/>
											)}
										</div>
									</div>
									<div>
										<div className={styles.fullNameLabel}>
											Mobile <span className={styles.redstar}>*</span>
										</div>
										<div
											onChange={(e) => {
												setPatientDetails({ ...patientDetails, ['mobile']: e.target.value });
											}}
											className={`${styles.inputFullNameBox} ${styles.mobileInput}`}
										>
											{forOwn ? (
												<input
													name='phone'
													type='text'
													value={userDetails.phone}
													placeholder={userDetails.phone}
												/>
											) : (
												<input
													name='someone'
													type='text'
													onChange={handlePatientForm}
													value={patientDetails.mobile}
													placeholder={
														patientDetails.mobile ? (
															patientDetails.mobile
														) : (
															'Enter Mobile Number'
														)
													}
												/>
											)}
										</div>
									</div>
								</div>
								{/* <div className={styles.inputFullNameBox}>
                <input type="text" />
              </div> */}
								<div
									className={`${styles.inputFullNameBox} ${styles.confirmDiv}`}
								>
									<div className={`${styles.confirmBox}`}>
										Confirm<Link to='/payment' />
									</div>
								</div>
								<div className={styles.mobileNumberDiv}>
									Updates will be sent to +91{forOwn ? user.phone : patientDetails.mobile}
								</div>
								<div className={styles.termsDiv}>
									By booking this appointment, you agree to Practo’s{' '}
									<span className={styles.blue_link}>Terms and Conditions.</span>
								</div>
							</div>
						)}
						{user.phone.length < 10 && (
							<div className={styles.flex1}>
								<div className={styles.PatientHeader}>
									<h2>Enter your moblie number</h2>
									<div className={styles.fullNameLabel}>
										Mobile <span className={styles.redstar}>*</span>
									</div>
									<div className={`${styles.inputFullNameBox} ${styles.mobileInput}`}>
										<input
											type='number'
											placeholder='Mobile'
											onChange={(e) => {
												setUserDetails({ ...userDetails, ['phone']: e.target.value });
											}}
										/>
										<svg
											width='14'
											height='18'
											viewBox='0 0 14 18'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<rect x='0.5' y='6.5' width='13' height='11' rx='1.5' stroke='#787887' />
											<path
												d='M3.5 2C3.5 1.17157 4.17157 0.5 5 0.5H9C9.82843 0.5 10.5 1.17157 10.5 2V6.5H3.5V2Z'
												stroke='#787887'
											/>
											<circle cx='7' cy='13' r='1' fill='#787887' />
											<path d='M7 13V15' stroke='#787887' stroke-width='0.75' />
										</svg>
									</div>
								</div>
								<div className={styles.mobileNumberDiv}>You will receive an OTP shortly</div>
								<div className={styles.mobileNumberDiv}>
									We will send appointment related communication on this number
								</div>
								<div onClick={getOTP} className={`${styles.inputFullNameBox} ${styles.confirmDiv} ${userDetails.phone.length < 10 && styles.disabled_div}`}>
									<div className={`${styles.confirmBox}`}>Confirm</div>
								</div>
							</div>
						)}
						{user.phone.length === 10 &&
						!token && (
							<div className={styles.wholeOtpBox}>
								<div className={`${styles.flex1} ${styles.flex5}`}>
									<div className={`${styles.otpBox} ${styles.PatientHeader}`}>
										<div className={styles.mobileNumberDiv}>We have sent you an OTP on</div>
										<h2>+91 {userDetails.phone}</h2>
										<div className={styles.mobileNumberDiv}>OTP</div>
										<div
											className={`${styles.inputFullNameBox} ${styles.mobileInput} ${styles.inputOtpBox}`}
										>
											<input
												type='text'
												value={otp}
												placeholder='Please enter the 6 digit OTP here'
												onChange={handleOTP}
											/>
										</div>
									</div>
									<div className={styles.resendOtpBox}>
										<div className={styles.mobileNumberDiv}>
											Still not received otp?<span className={styles.blue_link}> Get via call</span>
										</div>
										<div className={`${styles.mobileNumberDiv} ${styles.blue_link}`}>
											Resend OTP
										</div>
									</div>
									<div className={`${styles.inputFullNameBox} ${styles.confirmDiv} ${otp.length < 6 && styles.disabled_div}`}>
										<div onClick={handleSignIn} className={styles.confirmBox}>
											Continue to booking
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
