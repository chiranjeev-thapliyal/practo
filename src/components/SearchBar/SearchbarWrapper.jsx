import styles from './SearchBar.module.css';

const SearchbarWrapper = ({children}) => {
	return (
		<div id="searchbar_content" className={styles.content}>
			{children}
			<img id="try_plus_ad" src='https://www.practostatic.com/subscriptions/images/plus-tag.png' alt='' />
		</div>
	)
}

export default SearchbarWrapper
