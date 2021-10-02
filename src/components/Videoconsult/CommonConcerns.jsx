import { Link } from 'react-router-dom';
import styles from './CommonConcerns.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import Category from './Category';

const CommonProblems = ({ name, price, img }) => (
	<div className={styles.problem_card}>
		<img src={img} alt={name} className={styles.problem_card_img} />
		<h3 className={styles.problem_card_title}>{name}</h3>
		<h4 className={styles.problem_card_price}>
			<span className='rupees_symbol'>₹</span>
			{price}
		</h4>
		<Link className={styles.consult_link} to='/search'>
			Consult Now
		</Link>
	</div>
);

const CommonConcerns = () => {
	const problems = [
		{
			name: 'Cough & Cold?',
			price: 349,
			img: 'https://www.practo.com/consult/static/images/cough-cold-v1.jpg'
		},
		{
			name: 'Period problems?',
			price: 400,
			img: 'https://www.practo.com/consult/static/images/period-problems-v1.jpg'
		},
		{
			name: 'Performance issues in bed?',
			price: 299,
			img: 'https://www.practo.com/consult/static/images/performance-issues-bed-v1.jpg'
		},
		{
			name: 'Skin problems?',
			price: 400,
			img: 'https://www.practo.com/consult/static/images/skin-problems-v1.jpg'
		},
		{
			name: 'Depression or anxiety?',
			price: 349,
			img: 'https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
		},
		{
			name: 'Want to lose weight?',
			price: 400,
			img: 'https://www.practo.com/consult/static/images/lose-weight-v1.jpg'
		},
		{
			name: 'Vaginal infections?',
			price: 349,
			img: 'https://www.practo.com/consult/static/images/vaginal-infections-v1.jpg'
		},
		{ name: 'Sick kid?', price: 400, img: 'https://www.practo.com/consult/static/images/sick-kid-v1.jpg' }
	];

	const arr = problems.map((el) => <CommonProblems {...el} />);

	return (
		<Category heading="Common Problems" description="Consult a doctor online for any health issue" type="Symptoms">
			<SliderWrapper arr={arr} limit={3} />
		</Category>
	);
};

export default CommonConcerns;
