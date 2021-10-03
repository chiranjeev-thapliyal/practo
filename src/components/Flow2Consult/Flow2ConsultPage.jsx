import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Flow2ConsultPage.module.css';
import { AuthContext } from '../../Contexts/AuthContextProvider';

export default function Flow2ConsultPage() {
	const [ login, setLogin ] = useState(false);
	const [ more, setMore ] = useState(false);
	const [ payment, setPayment ] = useState(false);
	const [ deaseses, setDeaseses ] = useState('');
	// const [price, setPrice] = useState(399);
	const [ mobNumber, setMobNumber ] = useState(0);
	const [ otp, setOtp ] = useState('');
	const [ nameInput, setNameInput ] = useState('');

	const { token, user, setUser, setToken, price, setPrice } = useContext(AuthContext);

	const handleChange = (e) => {
		const { value } = e.target;
		setDeaseses(value);
		value === 'fever' && setMore(true);
	};

	const handleCheck = async () => {
		// if (mobNumber === 0) return;
		if (user.phone === '') return;
		let data = await getData();
		if (!data || data.length === 0) return;
		console.log('yes');
		setUser(data[0]);
		setPayment(true);
	};
	const handleLogin = () => {
		console.log(mobNumber);
		if (otp === null) return;
		if (+otp === 123456) return setToken('authenticated');
	};

	const getData = async () => {
		let res = await axios.get(`${process.env.REACT_APP_DATABASE}/users`, {
			params: {
				phone: user.phone
			}
		});
		return res.data;
	};

	return (
		<div className={styles.ConsultPageSection}>
			{!payment ? (
				<div>
					<div className={styles.flexBox}>
						<div className={styles.flex2}>
							{!more && (
								<div className={styles.flex12}>
									<div className={styles.flex12Header}>
										<span>
											<h3 style={{ display: 'inline' }}>Consult with a doctor</h3>
										</span>
									</div>
									<div className={styles.PatientHeader}>
										<div className={styles.fullNameLabel}>
											Tell us your symptom or health problem
										</div>
										<div className={`${styles.inputFullNameBox}`}>
											<input
												onChange={handleChange}
												type='text'
												value={deaseses}
												placeholder='Eg: fever, headache'
											/>
										</div>
										<div style={{ fontSize: '120%' }}>Min 4 characters</div>
									</div>
									<div className={styles.mobileNumberDiv}>
										A relevant speciality will be shown below...
									</div>
									<div className={styles.PatientHeader}>
										<div className={styles.fullNameLabel}>Mobile number</div>
										<div className={`${styles.inputFullNameBox} ${styles.numberBox}`}>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<g clipPath='url(#clip0)'>
													<path
														d='M0 17.9997C0 18.7069 0.280952 19.3852 0.781049 19.8853C1.28115 20.3854 1.95942 20.6663 2.66667 20.6663H21.3333C22.0406 20.6663 22.7189 20.3854 23.219 19.8853C23.719 19.3852 24 18.7069 24 17.9997V15.333H0V17.9997Z'
														fill='#138808'
													/>
													<path d='M0 8.66699H24V15.3337H0V8.66699Z' fill='#EEEEEE' />
													<path
														d='M24 8.66634V5.99967C24 5.29243 23.719 4.61415 23.219 4.11406C22.7189 3.61396 22.0406 3.33301 21.3333 3.33301H2.66667C1.95942 3.33301 1.28115 3.61396 0.781049 4.11406C0.280952 4.61415 0 5.29243 0 5.99967L0 8.66634H24Z'
														fill='#FF9933'
													/>
													<path
														d='M11.9999 14.6663C13.4727 14.6663 14.6666 13.4724 14.6666 11.9997C14.6666 10.5269 13.4727 9.33301 11.9999 9.33301C10.5272 9.33301 9.33325 10.5269 9.33325 11.9997C9.33325 13.4724 10.5272 14.6663 11.9999 14.6663Z'
														fill='#000080'
													/>
													<path
														d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
														fill='#EEEEEE'
													/>
													<path
														d='M12 10L12.0973 11.5093L12.7647 10.1527L12.278 11.584L13.414 10.5853L12.416 11.722L13.8473 11.2347L12.4907 11.9027L14 12L12.4907 12.0973L13.8473 12.7647L12.416 12.278L13.414 13.414L12.278 12.416L12.7647 13.8473L12.0973 12.4907L12 14L11.9027 12.4907L11.2347 13.8473L11.722 12.416L10.5853 13.414L11.584 12.278L10.1527 12.7647L11.5093 12.0973L10 12L11.5093 11.9027L10.1527 11.2347L11.584 11.722L10.5853 10.5853L11.722 11.584L11.2347 10.1527L11.9027 11.5093L12 10Z'
														fill='#6666B3'
													/>
													<path
														d='M11.9999 12.6663C12.3681 12.6663 12.6666 12.3679 12.6666 11.9997C12.6666 11.6315 12.3681 11.333 11.9999 11.333C11.6317 11.333 11.3333 11.6315 11.3333 11.9997C11.3333 12.3679 11.6317 12.6663 11.9999 12.6663Z'
														fill='#000080'
													/>
												</g>
												<defs>
													<clipPath id='clip0'>
														<rect width='24' height='24' fill='white' />
													</clipPath>
												</defs>
											</svg>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path d='M7 10L12 15L17 10H7Z' fill='black' />
											</svg>
											<input value={user.phone} type='number' placeholder='Enter mobile number' />
										</div>
										<div className={`${styles.mobileNumberDiv} ${styles.hint_text}`}>
											A verification code will be sent to this number
										</div>
										<div
											className={`${styles.inputFullNameBox} ${user.phone.length < 10
												? styles.disabled_div
												: styles.confirmDiv}`}
										>
											<div className={styles.confirmBox}>Confirm</div>
										</div>
									</div>
								</div>
							)}
							{more && (
								<div className={styles.flex12}>
									<div className={styles.flex12Header}>
										<span>
											<h3 style={{ display: 'inline' }}>Consult with a doctor</h3>
										</span>
									</div>
									<div className={styles.PatientHeader}>
										<div className={styles.fullNameLabel}>
											Tell us your symptom or health problem
										</div>
										<div className={`${styles.inputFullNameBox}`}>
											<input type='text' value={deaseses} placeholder='Eg: fever,hedech' />
										</div>
										<div style={{ fontSize: '120%' }}>Min 4 characters</div>
									</div>
									<div className={styles.mobileNumberDiv}>Choose a relevant speciality</div>
									<div className={styles.PatientHeader}>
										<div
											onClick={() => setPrice(399)}
											className={`${styles.inputFullNameBox} ${styles.speciality} `}
										>
											{price === 399 ? (
												<svg
													className={styles.icons}
													width='18'
													height='18'
													viewBox='0 0 18 18'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<circle cx='9' cy='9' r='9' fill='#14BEF0' />
													<path
														d='M3 9.29412L6.80769 13L14 6'
														stroke='white'
														stroke-width='2'
														stroke-linecap='square'
													/>
												</svg>
											) : (
												<svg
													width='18'
													className={styles.icons}
													height='18'
													viewBox='0 0 18 18'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<circle opacity='0.2' cx='9' cy='9' r='8.5' stroke='black' />
												</svg>
											)}
											<div className={styles.specialityBox}>Pediatrics</div>
											<div>₹399</div>
										</div>
										<div
											onClick={() => setPrice(299)}
											className={`${styles.inputFullNameBox} ${styles.speciality} `}
										>
											{price === 299 ? (
												<svg
													className={styles.icons}
													width='18'
													height='18'
													viewBox='0 0 18 18'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<circle cx='9' cy='9' r='9' fill='#14BEF0' />
													<path
														d='M3 9.29412L6.80769 13L14 6'
														stroke='white'
														stroke-width='2'
														stroke-linecap='square'
													/>
												</svg>
											) : (
												<svg
													width='18'
													className={styles.icons}
													height='18'
													viewBox='0 0 18 18'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<circle opacity='0.2' cx='9' cy='9' r='8.5' stroke='black' />
												</svg>
											)}

											<div className={styles.specialityBox}>General Physician</div>
											<div>₹299</div>
										</div>
										<div
											onClick={() => setPrice(349)}
											className={`${styles.inputFullNameBox} ${styles.speciality} `}
										>
											{price === 349 ? (
												<svg
													className={styles.icons}
													width='18'
													height='18'
													viewBox='0 0 18 18'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<circle cx='9' cy='9' r='9' fill='#14BEF0' />
													<path
														d='M3 9.29412L6.80769 13L14 6'
														stroke='white'
														stroke-width='2'
														stroke-linecap='square'
													/>
												</svg>
											) : (
												<svg
													width='18'
													className={styles.icons}
													height='18'
													viewBox='0 0 18 18'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<circle opacity='0.2' cx='9' cy='9' r='8.5' stroke='black' />
												</svg>
											)}

											<div className={styles.specialityBox}>Ear,Nose,Throat</div>
											<div>₹349</div>
										</div>
										<div className={styles.fullNameLabel}>Mobile number</div>
										<div className={`${styles.inputFullNameBox} ${styles.numberBox}`}>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<g clipPath='url(#clip0)'>
													<path
														d='M0 17.9997C0 18.7069 0.280952 19.3852 0.781049 19.8853C1.28115 20.3854 1.95942 20.6663 2.66667 20.6663H21.3333C22.0406 20.6663 22.7189 20.3854 23.219 19.8853C23.719 19.3852 24 18.7069 24 17.9997V15.333H0V17.9997Z'
														fill='#138808'
													/>
													<path d='M0 8.66699H24V15.3337H0V8.66699Z' fill='#EEEEEE' />
													<path
														d='M24 8.66634V5.99967C24 5.29243 23.719 4.61415 23.219 4.11406C22.7189 3.61396 22.0406 3.33301 21.3333 3.33301H2.66667C1.95942 3.33301 1.28115 3.61396 0.781049 4.11406C0.280952 4.61415 0 5.29243 0 5.99967L0 8.66634H24Z'
														fill='#FF9933'
													/>
													<path
														d='M11.9999 14.6663C13.4727 14.6663 14.6666 13.4724 14.6666 11.9997C14.6666 10.5269 13.4727 9.33301 11.9999 9.33301C10.5272 9.33301 9.33325 10.5269 9.33325 11.9997C9.33325 13.4724 10.5272 14.6663 11.9999 14.6663Z'
														fill='#000080'
													/>
													<path
														d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
														fill='#EEEEEE'
													/>
													<path
														d='M12 10L12.0973 11.5093L12.7647 10.1527L12.278 11.584L13.414 10.5853L12.416 11.722L13.8473 11.2347L12.4907 11.9027L14 12L12.4907 12.0973L13.8473 12.7647L12.416 12.278L13.414 13.414L12.278 12.416L12.7647 13.8473L12.0973 12.4907L12 14L11.9027 12.4907L11.2347 13.8473L11.722 12.416L10.5853 13.414L11.584 12.278L10.1527 12.7647L11.5093 12.0973L10 12L11.5093 11.9027L10.1527 11.2347L11.584 11.722L10.5853 10.5853L11.722 11.584L11.2347 10.1527L11.9027 11.5093L12 10Z'
														fill='#6666B3'
													/>
													<path
														d='M11.9999 12.6663C12.3681 12.6663 12.6666 12.3679 12.6666 11.9997C12.6666 11.6315 12.3681 11.333 11.9999 11.333C11.6317 11.333 11.3333 11.6315 11.3333 11.9997C11.3333 12.3679 11.6317 12.6663 11.9999 12.6663Z'
														fill='#000080'
													/>
												</g>
												<defs>
													<clipPath id='clip0'>
														<rect width='24' height='24' fill='white' />
													</clipPath>
												</defs>
											</svg>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path d='M7 10L12 15L17 10H7Z' fill='black' />
											</svg>
											<input
												type='number'
												value={user.phone}
												onChange={(e) => {
													setUser((prev) => {
														return { ...prev, phone: e.target.value };
													});
													// setMobNumber(e.target.value);
												}}
												placeholder='Enter mobile number'
											/>
										</div>
										<div className={styles.mobileNumberDiv}>
											A verification code will be sent to this number
										</div>
										<div
											onClick={handleCheck}
											className={`${styles.inputFullNameBox} ${user.phone.length < 10
												? styles.disabled_div
												: styles.confirmDiv}`}
										>
											<div className={styles.confirmBox}>Confirm</div>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className={styles.flex3}>
							<div className={styles.flex1}>
								<div>
									<img
										src='https://www.practo.com/consult/bundles/cwipage/images/ic-security-v1.png'
										alt='img'
									/>
									<div className={styles.imageTitle}>Private & secure</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>
					<div className={styles.flexBox}>
						<div className={styles.flex2}>
							<div className={styles.flex12}>
								<div className={styles.flex12Header}>
									<svg
										width='15'
										height='13'
										viewBox='0 0 15 13'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M14.6251 5.70815H3.0778L7.26809 1.51785L6.14868 0.398438L0.0473022 6.49981L6.14868 12.6012L7.26809 11.4818L3.0778 7.29148H14.6251V5.70815Z'
											fill='black'
										/>
									</svg>
									<span>
										<h3 style={{ display: 'inline', marginLeft: '10px' }}>Confirm & Pay</h3>
									</span>
								</div>
								<div className={styles.PatientHeader}>
									<div className={styles.fullNameLabel}>Verified Pediatricians online now</div>
									<div className={styles.ballIconBox}>
										<div className={StyleSheet.ballIconContainer}>
											<i className={`ion-help-buoy ${styles.iconBall}`} />
											<i className={`ion-help-buoy ${styles.iconBall}`} />
											<i className={`ion-help-buoy ${styles.iconBall}`} />
											<i className={`ion-help-buoy ${styles.iconBall}`} />
										</div>
										<div>+194</div>
									</div>
									<div style={{ fontSize: '120%' }}>One of them will speak to you shortly.</div>
								</div>
								<div className={`${styles.mobileNumberDiv} ${styles.text3}`}>
									<svg
										width='19'
										height='19'
										viewBox='0 0 19 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M3.47103 0.579102L2.54703 1.50179L3.92188 2.87598L4.84456 1.95329L3.47037 0.579102H3.47103ZM15.5296 0.579102L14.1548 1.95329L15.0781 2.87598L16.4523 1.50245L15.529 0.579102H15.5296ZM9.5 0.988602C9.28344 0.991227 9.06425 1.0037 8.84375 1.0306C8.83719 1.0306 8.83063 1.02929 8.82406 1.0306C6.16231 1.33576 4.04394 3.48629 3.67578 6.13623C3.38178 8.26904 4.26116 10.203 5.72656 11.4486C6.32599 11.9601 6.73143 12.6621 6.875 13.437V17.3745H8.37125C8.59962 17.7663 9.01634 18.0308 9.5 18.0308C9.98366 18.0308 10.4004 17.7663 10.6287 17.3745H12.125V14.7495H12.1867V13.9699C12.1867 13.0078 12.6867 12.0379 13.4992 11.2839C14.5859 10.1958 15.4062 8.65032 15.4062 6.87516C15.4062 3.63329 12.7379 0.958414 9.5 0.988602ZM9.5 2.3011C12.0364 2.26566 14.0938 4.34204 14.0938 6.87516C14.0938 8.24935 13.4572 9.45948 12.5758 10.3402L12.5968 10.3612C11.721 11.1688 11.1547 12.2569 10.9956 13.4377H8.12516C7.98078 12.3129 7.49844 11.2241 6.58691 10.4432C5.42731 9.45882 4.73628 7.9757 4.96728 6.30095C5.25406 4.23376 6.93144 2.57148 8.98681 2.34376C9.15651 2.3201 9.32741 2.30608 9.49869 2.30176L9.5 2.3011ZM0.3125 6.87516V8.18766H2.28125V6.87516H0.3125ZM16.7188 6.87516V8.18766H18.6875V6.87516H16.7188ZM3.92188 12.1869L2.54769 13.5604L3.47103 14.4837L4.84391 13.1095L3.92188 12.1869ZM15.0781 12.1869L14.1554 13.1095L15.529 14.4837L16.4523 13.5604L15.0781 12.1869ZM8.1875 14.7502H10.8125V16.0627H8.1875V14.7502Z'
											fill='#02A401'
										/>
									</svg>
									<div>93% of users found online consultation helpful</div>
								</div>
								<div className={`${styles.mobileNumberDiv} ${styles.text3}`}>
									<svg
										width='22'
										height='22'
										viewBox='0 0 22 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0)'>
											<path
												d='M15.125 1.375C15.4897 1.375 15.8394 1.51987 16.0973 1.77773C16.3551 2.03559 16.5 2.38533 16.5 2.75V19.25C16.5 19.6147 16.3551 19.9644 16.0973 20.2223C15.8394 20.4801 15.4897 20.625 15.125 20.625H6.875C6.51033 20.625 6.16059 20.4801 5.90273 20.2223C5.64487 19.9644 5.5 19.6147 5.5 19.25V2.75C5.5 2.38533 5.64487 2.03559 5.90273 1.77773C6.16059 1.51987 6.51033 1.375 6.875 1.375H15.125ZM6.875 0C6.14565 0 5.44618 0.289731 4.93046 0.805456C4.41473 1.32118 4.125 2.02065 4.125 2.75V19.25C4.125 19.9793 4.41473 20.6788 4.93046 21.1945C5.44618 21.7103 6.14565 22 6.875 22H15.125C15.8543 22 16.5538 21.7103 17.0695 21.1945C17.5853 20.6788 17.875 19.9793 17.875 19.25V2.75C17.875 2.02065 17.5853 1.32118 17.0695 0.805456C16.5538 0.289731 15.8543 0 15.125 0L6.875 0Z'
												fill='#02A401'
											/>
											<path
												d='M11 19.25C11.3647 19.25 11.7144 19.1051 11.9723 18.8473C12.2301 18.5894 12.375 18.2397 12.375 17.875C12.375 17.5103 12.2301 17.1606 11.9723 16.9027C11.7144 16.6449 11.3647 16.5 11 16.5C10.6353 16.5 10.2856 16.6449 10.0277 16.9027C9.76987 17.1606 9.625 17.5103 9.625 17.875C9.625 18.2397 9.76987 18.5894 10.0277 18.8473C10.2856 19.1051 10.6353 19.25 11 19.25Z'
												fill='#02A401'
											/>
										</g>
										<defs>
											<clipPath id='clip0'>
												<rect width='22' height='22' fill='white' />
											</clipPath>
										</defs>
									</svg>

									<div>Consultation will only happen on mobile app</div>
								</div>
								<div className={styles.PatientHeader}>
									<div className={styles.fullNameLabel}>Patient name</div>
									<div className={`${styles.inputFullNameBox} ${styles.nameBox}`}>
										<input
											value={user.name}
											// onChange={(e) => setNameInput(e.target.value)}
											type='text'
											placeholder='Your name'
										/>
									</div>
									<div className={`${styles.mobileNumberDiv} ${styles.text4} ${styles.have_coupon}`}>
										Have a coupon code?
									</div>
									<div
										className={`${styles.mobileNumberDiv} ${styles.text4} ${styles.coupon_applied}`}
									>
										₹59.85 HealthCash applied
									</div>
									<div className={`${styles.mobileNumberDiv} ${styles.text4} ${styles.final_fee}`}>
										Final Fee
									</div>
									<h4 className={styles.price}>₹{+price - 59.85}</h4>
									<div
										className={`${styles.mobileNumberDiv} ${styles.text4} ${styles.fee_breakdown}`}
									>
										Show fee breakup
									</div>
									<Link
										to='/payment'
										// onClick={() => {
										//   if (user.name === "") return;
										//   console.log(user.name);
										//   // return;
										// }}
										className={`${styles.confirmDiv} ${styles.payment}`}
									>
										<div onClick={() => setPrice(+price - 59.85)} className={styles.confirmBox}>
											Continue to payment
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.flex3}>
							<div className={styles.flex1}>
								<div>
									<img
										src='https://www.practo.com/consult/bundles/cwipage/images/ic-chats-v1.png'
										alt='img'
									/>
									<div className={styles.imageTitle}>Free Follow-up</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{token === '' &&
			payment && (
				<div className={styles.modalOuter}>
					<div className={styles.modal}>
						<div className={styles.modalHeader}>
							<div>Log in</div>
							<svg
								onClick={() => {
									setPayment(false);
								}}
								width='13'
								height='13'
								viewBox='0 0 13 13'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M7.49875 6.49964L11.9612 2.04423C12.0946 1.91084 12.1696 1.72994 12.1696 1.54131C12.1696 1.35268 12.0946 1.17177 11.9612 1.03839C11.8279 0.905011 11.647 0.830078 11.4583 0.830078C11.2697 0.830078 11.0888 0.905011 10.9554 1.03839L6.5 5.50089L2.04458 1.03839C1.9112 0.905011 1.73029 0.830078 1.54166 0.830078C1.35303 0.830078 1.17213 0.905011 1.03875 1.03839C0.905366 1.17177 0.830433 1.35268 0.830433 1.54131C0.830433 1.72994 0.905366 1.91084 1.03875 2.04423L5.50125 6.49964L1.03875 10.9551C0.972356 11.0209 0.919661 11.0992 0.8837 11.1856C0.847738 11.2719 0.829224 11.3645 0.829224 11.458C0.829224 11.5515 0.847738 11.6441 0.8837 11.7304C0.919661 11.8167 0.972356 11.895 1.03875 11.9609C1.1046 12.0273 1.18294 12.08 1.26926 12.1159C1.35557 12.1519 1.44816 12.1704 1.54166 12.1704C1.63517 12.1704 1.72776 12.1519 1.81407 12.1159C1.90039 12.08 1.97873 12.0273 2.04458 11.9609L6.5 7.49839L10.9554 11.9609C11.0213 12.0273 11.0996 12.08 11.1859 12.1159C11.2722 12.1519 11.3648 12.1704 11.4583 12.1704C11.5518 12.1704 11.6444 12.1519 11.7307 12.1159C11.8171 12.08 11.8954 12.0273 11.9612 11.9609C12.0276 11.895 12.0803 11.8167 12.1163 11.7304C12.1523 11.6441 12.1708 11.5515 12.1708 11.458C12.1708 11.3645 12.1523 11.2719 12.1163 11.1856C12.0803 11.0992 12.0276 11.0209 11.9612 10.9551L7.49875 6.49964Z'
									fill='black'
								/>
							</svg>
						</div>
						<div className={styles.modalContent}>
							<div className={styles.text}>We have sent you an OTP on</div>
							<div className={styles.otpNumbBox}>
								<h3>+91 {user.phone}</h3>

								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M0.375 12.25L9.875 2.75L12.25 5.125L2.75 14.625H0.375V12.25ZM10.6667 1.95833L12.25 0.375L14.625 2.75L13.0409 4.33413L10.6667 1.95833Z'
										fill='black'
									/>
								</svg>
							</div>
							<div className={styles.text}>OTP</div>
							<div className={styles.modalOtpBox}>
								<input
									onChange={(e) => setOtp(e.target.value)}
									type='password'
									placeholder='Please enter the 6 digit OTP here to verify'
								/>
							</div>
							<div className={styles.text2}>
								<div>
									Still not received OTP?
									<span style={{ color: '#14bef0' }}> Get via call</span>
								</div>
								<div style={{ color: '#14bef0' }}>Resend OTP</div>
							</div>
							<div
								onClick={handleLogin}
								className={`${otp.length < 6 ? styles.login_disabled : styles.loginButton}`}
							>
								<div>Login</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
