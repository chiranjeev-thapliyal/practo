import './SearchListHeader.css';

const SearchListHeader = ({total}) => {
	return (
		<div className='search_list__header'>
			<p>{total} doctors available in Delhi</p>
			<div className='search_list__sub_header'>
				<img src='https://www.practostatic.com/web-assets/images/verified.1f87346e730e.svg' alt='tick' />
				<p>Book appointments with minimum wait-time & verified doctor details</p>
			</div>
		</div>
	);
};

export default SearchListHeader;