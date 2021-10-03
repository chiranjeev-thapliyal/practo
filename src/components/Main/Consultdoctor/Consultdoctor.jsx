import React from 'react';
import Section from '../../Section/Section';
import Wrapper from './doc';

const Consultdoctor = () => {
	return (
		<Section style={{ marginTop: '60px' }}>
			<Wrapper>
				<div className='content'>
					<div className='head'>
						<h2>
							Consult top doctors online for any health concern
						</h2>
						<div style={{ marginTop: '5px', fontSize: '14px' }}>
							Private online consultations with verified doctors in all specialists
						</div>
						<button className='btn'>View All Specialities</button>
						<div id="consult_doc" style={{ marginTop: '20px' }}>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png'
												alt='pregnancy'
											/>
										</span>
									</div>
									<div className='speciality'>Period doubts or Pregnancy</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png'
												alt='acne'
											/>
										</span>
									</div>
									<div className='speciality'>Acne, pimple or skin issues</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://www.practo.com/consult/static/images/top-speciality-sexology.svg'
												alt=''
											/>
										</span>
									</div>
									<div className='speciality'>Performance issues in bed</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png'
												alt='cold'
											/>
										</span>
									</div>
									<div className='speciality'>Cold,cough or fever</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://www.practo.com/consult/static/images/top-speciality-pediatric.svg'
												alt='child'
											/>
										</span>
									</div>
									<div className='speciality'>Child not feeling well</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png'
												alt='mental illnes'
											/>
										</span>
									</div>
									<div className='speciality'>Dpression or axiety</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</Section>
	);
};
export default Consultdoctor;
