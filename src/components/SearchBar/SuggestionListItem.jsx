import styles from './SearchBar.module.css';

const SuggestionListItem = ({ list, type, handleQuery }) => {
	return (
		<div className={styles.suggestion_list}>
			<div className={styles.suggestion_group}>
				{list.map(({ id, title, sub_title, speciality }) => (
					<div key={id} className={styles.suggestion_item} onClick={() => {
						if (type === "speciality") return handleQuery("keyword", title);
						else return handleQuery("location", sub_title);
					}}>
						<div className={styles.suggest_item_media}>
							<div className={styles.suggest_item_media_item}>
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M15.2945 14.4698L10.5568 9.4643C11.292 8.46012 11.6897 7.23235 11.6897 5.94097C11.6897 4.39517 11.1187 2.94575 10.0862 1.8529C9.0536 0.760048 7.67807 0.158691 6.2168 0.158691C4.75554 0.158691 3.38001 0.761976 2.34746 1.8529C1.31308 2.94382 0.743896 4.39517 0.743896 5.94097C0.743896 7.48484 1.3149 8.93812 2.34746 10.029C3.38001 11.1219 4.75371 11.7232 6.2168 11.7232C7.43909 11.7232 8.59934 11.3031 9.54981 10.5282L14.2875 15.5318C14.3014 15.5465 14.3179 15.5582 14.3361 15.5661C14.3542 15.5741 14.3737 15.5782 14.3933 15.5782C14.413 15.5782 14.4324 15.5741 14.4506 15.5661C14.4688 15.5582 14.4852 15.5465 14.4991 15.5318L15.2945 14.6934C15.3084 14.6787 15.3195 14.6613 15.327 14.6421C15.3345 14.6229 15.3384 14.6024 15.3384 14.5816C15.3384 14.5609 15.3345 14.5403 15.327 14.5211C15.3195 14.5019 15.3084 14.4845 15.2945 14.4698ZM9.1065 8.99401C8.333 9.80931 7.30774 10.2584 6.2168 10.2584C5.12587 10.2584 4.10061 9.80931 3.32711 8.99401C2.55543 8.17678 2.13037 7.09357 2.13037 5.94097C2.13037 4.78837 2.55543 3.70323 3.32711 2.88793C4.10061 2.07263 5.12587 1.62354 6.2168 1.62354C7.30774 1.62354 8.33482 2.0707 9.1065 2.88793C9.87818 3.70516 10.3032 4.78837 10.3032 5.94097C10.3032 7.09357 9.87818 8.17871 9.1065 8.99401Z'
										fill='#737376'
									/>
								</svg>
							</div>
						</div>
						{type === "speciality" ?
							<>
							<span className={styles.suggest_item_content}>
								<div className={styles.suggest_item_content_title}>{title}</div>
							</span>
							<span className={styles.suggest_item_right}>
								<span>{speciality}</span>
							</span>
							</>
							: (
								<>
								<span className={styles.suggest_item_content}>
								<div className={styles.suggest_item_content_title}>{title}</div>
										<div className={styles.suggest_item_content_sub_text}>{sub_title}</div>
								</span>
								</>
						)
					}
						
					</div>
				))}
			</div>
		</div>
	);
};

export default SuggestionListItem;
