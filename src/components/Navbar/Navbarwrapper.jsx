import React from 'react';
import Section from '../Section/Section';
import Navbar from './Navbar';

const Navbarwrapper = () => {
	return (
		<Section style={{ marginBottom: '30px' }}>
			<Navbar>
				<div className='nav'>
					<div className='wrapper'>
						<div className='nav-left'>
							<span style={{ lineHeight: '27px' }}>
								<img
									src='https://www.practo.com/nav/9.5.10/consumer/images/practo.svg'
									alt='practo_logo'
									style={{ maxWidth: '108px', maxHeight: '25px' }}
								/>
							</span>
						</div>
						<div className='nav-mid'>
							<div className='prod'>
								<div className='prod-title'>Find Doctor</div>
								<div className='prod-sub'>Book an appointment</div>
							</div>
							<div className='prod'>
								<div className='prod-title'>Find Doctor</div>
								<div className='prod-sub'>Book an appointment</div>
							</div>
							<div className='prod'>
								<div className='prod-title'>Find Doctor</div>
								<div className='prod-sub'>Book an appointment</div>
							</div>
							<div className='prod'>
								<div className='prod-title'>Find Doctor</div>
								<div className='prod-sub'>Book an appointment</div>
							</div>
						</div>
						<div className='nav-right' style={{ marginLeft: '-30px' }}>
							<div style={{ marginRight: '15px' }}>
								<span className='main' style={{ fontSize: '14px' }}>
									For Providers
								</span>
								<span className='down-arrrow'>
									<i className='fas fa-chevron-down' />
								</span>
								<div />
							</div>
							<div>
								<span className='main' style={{ fontSize: '14px' }}>
									Security and help
								</span>
								<span className='down-arrrow'>
									<i className='fas fa-chevron-down' />
								</span>
							</div>
							<div
								style={{
									fontSize: '13px',
									lineHeight: '13px',
									color: ' #787887 !important',
									borderRadius: '4px',
									border: 'solid 1px #d3d3d3',
									marginLeft: '15px'
								}}
							>
								<span>Login/Signup</span>
							</div>
						</div>
					</div>
				</div>
			</Navbar>
		</Section>
	);
};

export default Navbarwrapper;
