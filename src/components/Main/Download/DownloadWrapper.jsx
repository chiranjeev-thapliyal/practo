import React from 'react';
import Download from '../../../Styled/Download/Download';
import Section from '../../../Styled/Section/Section';

const DownloadWrapper = () => {
	return (
		<Section className='mt-60 DownloadWrapper'>
			<Download className='download content'>
				<div className='left'>
					<img
						src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png'
						alt='download practo app'
					/>
				</div>
				<div className='right'>
					<h3>Download the Practo app </h3>
					<p className='app_info'>
						Access video consultation with India’s top doctors on the Practo app. Connect with doctors
						online, available 24/7, from the comfort of your home.
					</p>
					<p className='get_link'>Get the link to download the app</p>
					<div className="app_link_form">
						<div className="app_link_input">
							<span className="country_code">+91</span>
							<input type="number" name="number" placeholder="Enter your number"/>
						</div>
						<button>Send SMS</button>
					</div>
					<div className='downloads'>
						<img
							className='play_store_button'
							src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png'
							alt='google play store'
						/>
						<img
							className='app_store_button'
							src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png'
							alt='apple store'
						/>
					</div>
				</div>
			</Download>
		</Section>
	);
};

export default DownloadWrapper;
