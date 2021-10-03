import styles from './Appointment.module.css';
import SliderWrapper from '../../SliderWrapper/SliderWrapper';
import Category from '../../Videoconsult/Category';

const AppointmentCard = ({ img, title, desc }) => <div className={styles.appointment_card}>
	<div className={styles.appointment_card_img}>
		<img src={img} alt={title} />
	</div>
	<h3 className={styles.appointment_card_title}>{title}</h3>
	<p className={styles.appointment_card_desc}>{desc}</p>
</div>;

const Appointment = () => {
	const appointments = [
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg',
			title: 'Dentist',
			desc: 'Teething troubles? Schedule a dental checkup'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
			title: 'Gynecologist/Obstetrician',
			desc: 'Explore for women’s health, pregnancy and infertility treatments'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg',
			title: 'Dietitian/Nutrition',
			desc: 'Get guidance on eating right, weight management and sports nutrition'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg',
			title: 'Physiotherapist',
			desc: 'Pulled a muscle? Get it treated by a trained physiotherapist'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg',
			title: 'General surgeon',
			desc: 'Need to get operated? Find the right surgeon'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg',
			title: 'Orthopedist',
			desc: 'For Bone and Joints issues, spinal injuries and more'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg',
			title: 'General physician',
			desc: 'Find the right family doctor in your neighborhood'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg',
			title: 'Pediatrician',
			desc: 'Child Specialists and Doctors for Infant'
		},
		{
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg',
			title: 'Gastroenterologist',
			desc: 'Explore for issues related to digestive system, liver and pancreas'
		}
	];

	const arr = appointments.map((el) => <AppointmentCard {...el} />);

	return (
		<Category
			heading='Book an appointment for an in-clinic consultation'
			description='Find experienced doctors across all specialties'
		>
			<SliderWrapper arr={arr} limit={4.60} />
		</Category>
	);
};

export default Appointment;
