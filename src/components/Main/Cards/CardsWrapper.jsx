import Section from '../../Section/Section';
import Cards from './Cards';
import Card from './Card';

const CardsWrapper = () => {
	const info = [
		{
			title: 'Instant Video Consultation',
			desc: 'Connect within 60 secs',
			img:
				'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',
			bg: '#afcfed'
		},
		{
			title: 'Find Doctors Near You',
			desc: 'Confirmed Appointments',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
			bg: '#98cbd6'
		},
		{
			title: 'Medicines',
			desc: 'Essentials at your doorstep',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png',
			bg: '#ccd0db'
		},
		{
			title: 'Lab Tests',
			desc: 'Sample pickup at your home',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',
			bg: '#a2cae7'
		},
		{
			title: 'Surgeries',
			desc: 'Safe and trusted surgery centers',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',
			bg: '#d5d8fc'
		}
	];

	return (
		<Section className='mt-60'>
			<Cards className='content'>
				{info.map(({ title, desc, img, bg }) => (
					<Card bg={bg} key={title} className='Card'>
						<div className='img-wrapper'>
							<img src={img} alt={title} />
						</div>
						<div className='info'>
							<h3>{title}</h3>
							<p>{desc}</p>
						</div>
					</Card>
				))}
			</Cards>
		</Section>
	);
};

export default CardsWrapper;
