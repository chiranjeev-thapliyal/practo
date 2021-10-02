import styles from './Offer.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import Category from './Category';

const OfferCard = ({ heading, type, desc, img, bg }) => (
	<div className={`${styles.offer_card} ${styles[bg]}`}>
		<div className={styles.card_content}>
			<div className={`${styles.badge} ${styles[bg]}`}>{type}</div>
			<h4 className={styles.heading}>{heading}</h4>
			<p className={styles.cta}>
				{desc}{' '}
				<svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='7.5' cy='7.5' r='7.5' fill='#1E1E28' />
					<path
						d='M6.66369 12C6.74908 12.0003 6.83344 11.9814 6.91058 11.9448C6.98773 11.9082 7.05569 11.8548 7.10949 11.7886L9.86998 8.3603C9.95405 8.25807 10 8.12983 10 7.99748C10 7.86514 9.95405 7.7369 9.86998 7.63466L7.01233 4.20641C6.91531 4.08973 6.77591 4.01635 6.62478 4.00242C6.47366 3.98849 6.32318 4.03515 6.20647 4.13213C6.08975 4.22912 6.01635 4.36848 6.00242 4.51957C5.98848 4.67065 6.03516 4.82109 6.13217 4.93777L8.68691 8.00034L6.2179 11.0629C6.14801 11.1468 6.10361 11.2489 6.08997 11.3572C6.07632 11.4655 6.09399 11.5755 6.14089 11.674C6.18778 11.7726 6.26195 11.8557 6.3546 11.9135C6.44725 11.9712 6.55451 12.0012 6.66369 12Z'
						fill='white'
					/>
				</svg>	
			</p>
		</div>
		<img src={img} alt={heading} className={styles.img}/>
	</div>
);

const Offers = () => {
	const offers = [
		{
			heading: 'Download the App & get ₹200 HealthCash',
			type: 'offer',
			bg: "green",
			desc: 'Download App',
			img: 'https://www.practo.com/consult/static/images/offer-app-v1.png'
		},
		{
			heading: 'Free online consultations starting at ₹799/month',
			type: 'practo plus',
			bg: "pink",
			desc: 'Get Membership',
			img: 'https://www.practo.com/consult/static/images/offer-plus-plan-v2.png'
		},
		{
			heading: 'Consult with specialists at just ₹199',
			type: 'offer',
			bg: "orange",
			desc: 'Consult Now',
			img: 'https://www.practo.com/consult/static/images/offer-specialist-v1.png'
		}
	];

	const arr = offers.map((el) => <OfferCard {...el} />);

	return (
		<Category heading='Offers'>
			<SliderWrapper arr={arr} limit={1} />
		</Category>
	);
};

export default Offers;
