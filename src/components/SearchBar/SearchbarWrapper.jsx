import styles from './SearchBar.module.css';

const SearchbarWrapper = ({children}) => {
	return (
		<div className={styles.content}>
			{children}
			<img src='https://www.practostatic.com/subscriptions/images/plus-tag.png' alt='' />
		</div>
	)
}

export default SearchbarWrapper
