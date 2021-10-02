import { Link } from 'react-router-dom';
import styles from './Specialities.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import Category from './Category';

const SpecializationCard = ({ name, price, img }) => (
	<div className={styles.speciality_card}>
		<img src={img} alt={name} className={styles.speciality_card_img} />
		<h3 className={styles.speciality_card_title}>{name}</h3>
		<h4 className={styles.speciality_card_price}>
			<span className='rupees_symbol'>₹</span>
			{price}
		</h4>
		<Link className={styles.consult_link} to='/search'>
			Consult Now
		</Link>
	</div>
);

const Specialities = () => {
	const specialization = [
		{
			name: 'Gynaecology',
			price: 349,
			img: 'https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg'
		},
		{
			name: 'Sexology',
			price: 400,
			img: 'https://www.practo.com/consult/static/images/top-speciality-sexology.svg'
		},
		{
			name: 'General physician',
			price: 299,
			img: 'https://www.practo.com/consult/static/images/top-speciality-gp.svg'
		},
		{
			name: 'Dermatology',
			price: 400,
			img: 'https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg'
		},
		{
			name: 'Psychiatry',
			price: 349,
			img: 'https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg'
		},
		{
			name: 'Stomach and digestion',
			price: 400,
			img: 'https://www.practo.com/consult/static/images/top-speciality-stomach.svg'
		},
		{
			name: 'Pediatrics',
			price: 349,
			img: 'https://www.practo.com/consult/static/images/top-speciality-pediatric.svg'
		},
		{ name: 'Urology', price: 400, img: 'https://www.practo.com/consult/static/images/top-speciality-kidney.svg' }
	];

	const arr = specialization.map((el) => <SpecializationCard {...el} />);

	return (
		<Category
			heading='25+ Specialities'
			description='Consult with top doctors across specialities'
			type='Specialities'
		>
			<SliderWrapper arr={arr} limit={6} />
		</Category>
	);
};

export default Specialities;
