import BannerWrapper from './BannerWrapper';

const Banner = ({ bannerImg }) => {
	return (
		<BannerWrapper id="banner_wrapper">
			<img src={bannerImg} alt='Practo India' />
		</BannerWrapper>
	);
};

export default Banner;
