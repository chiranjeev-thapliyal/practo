import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Section from '../Section/Section';
import Navbar from './Navbar';
import style from './Navbar.module.css';

const Navbarwrapper = () => {
	const [ state, setstate ] = useState(false);
	const handelclick = () => {
		if (state) {
			setstate(false);
		} else {
			setstate(true);
		}
	};

	const { pathname } = useLocation();

	return (
		<Section>
			<Navbar fixed={pathname === '/doctors' ? true : false}>
				<div className='nav'>
					<div className='wrapper'>
						<div className='nav-left'>
							<Link
								to='/'
								style={{
									lineHeight: '27px'
								}}
							>
								<img
									src='https://www.practo.com/nav/9.5.10/consumer/images/practo.svg'
									alt='practo_logo'
									style={{
										maxWidth: '108px',
										maxHeight: '25px'
									}}
								/>{' '}
							</Link>{' '}
						</div>{' '}
						<div className='nav-mid'>
							<Link to='/doctors' className={`prod ${pathname === '/doctors' ? 'active' : ''}`}>
								<div className='prod-title'> Find Doctor </div>{' '}
								<div className='prod-sub'> Book an appointment </div>{' '}
							</Link>{' '}
							<Link
								to='video-consult'
								className={`prod ${pathname === '/video-consult' ? 'active' : ''}`}
							>
								<div className='prod-title'> Video Consult </div>{' '}
								<div className='prod-sub'> Consult top doctor </div>{' '}
							</Link>{' '}
							<div className='prod'>
								<div className='prod-title'> Medicines </div>{' '}
								<div className='prod-sub'> Practo pharmecy </div>{' '}
							</div>{' '}
							<div className='prod'>
								<div className='prod-title'> Lab Tests </div>{' '}
								<div className='prod-sub'> Book test & checkup </div>{' '}
							</div>{' '}
							<div className='prod'>
								<div className='prod-title'> Surgeries </div>{' '}
								<div className='prod-sub'> Eexpert sugical care </div>{' '}
							</div>{' '}
						</div>{' '}
						<div
							style={{
								float: 'right',
								padding: '20px 0 19px',
								display: 'inline-block',
								height: '100%',
								verticalAlign: 'top',
								textAlign: 'right'
							}}
						>
							<div
								style={{
									position: 'relative',
									cursor: 'pointer',
									lineHeight: '35px',
									display: 'inline-block',
									marginRight: '15px'
								}}
								onClick={handelclick}
							>
								<span
									style={{
										cursor: 'pointer',
										padding: 0,
										fontWeight: 400,
										fontSize: '14px',
										lineHeight: '20px'
									}}
								>
									For Providers {' '}
								</span>{' '}
								<span
									style={{
										fontSize: '15px',
										lineHeight: '30px',
										verticalAlign: 'middle',
										display: 'inline-block',
										padding: '0 1px',
										cursor: 'pointer'
									}}
								>
									<i className='fas fa-chevron-down' />
								</span>{' '}
								<div
									style={{
										cursor: 'auto',
										overflow: 'hidden',
										position: 'absolute',
										right: 0,
										zIndex: -1,
										opacity: 0,
										visibility: state === false ? 'hidden' : 'visible',
										backgroundColor: '#fff',
										boxShadow: '0 4px 8px 0 rgb(0 0 0 / 11%)',
										color: '#414146',
										padding: '5px 0',
										transition: 'all 0.1s ease-out',
										textAlign: 'left',
										marginTop: '4px',
										width: '223px',
										borderRadius: '2px',
										border: 'solid 1px #f0f0f5'
									}}
								>
									<div className={style.u}>
										<a className={style.nav} href='/'>
											Practo prime <span className={style.new}> New </span>{' '}
										</a>{' '}
									</div>{' '}
									<div className={style.u}>
										<a className={style.nav} href='/'>
											<span className={style.u}> Software for providers </span>{' '}
										</a>{' '}
									</div>{' '}
									<div className={style.u}>
										<a className={style.nav} href='/'>
											List your practice for for{' '}
										</a>{' '}
									</div>{' '}
									<div className={style.u}>
										<a className={style.nav} href='/'>
											Corporate wellness{' '}
										</a>{' '}
									</div>{' '}
								</div>{' '}
							</div>{' '}
							<div
								style={{
									position: 'relative',
									cursor: 'pointer',
									lineHeight: '35px',
									display: 'inline-block',
									marginRight: '15px'
								}}
							>
								<span
									style={{
										cursor: 'pointer',
										padding: 0,
										fontWeight: 400,
										fontSize: '14px',
										lineHeight: '20px'
									}}
								>
									Security & help{' '}
								</span>{' '}
								<span
									style={{
										fontSize: '15px',
										lineHeight: '30px',
										verticalAlign: 'middle',
										display: 'inline-block',
										padding: '0 1px',
										cursor: 'pointer'
									}}
								>
									<i className='fas fa-chevron-down' />
								</span>{' '}
							</div>
							<div
								style={{
									marginRight: 0,
									display: 'inline-block'
								}}
							>
								<span>
									<a
										href='/'
										style={{
											fontSize: '13px',
											lineHeight: '13px',
											color: '#787887 !important',
											borderRadius: '4px',
											border: 'solid 1px #d3d3d3',
											padding: '8px 10px',
											textDecoration: 'none',
											fontWeight: 400
										}}
									>
										Login / Signup{' '}
									</a>{' '}
								</span>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</Navbar>{' '}
		</Section>
	);
};

export default Navbarwrapper;
