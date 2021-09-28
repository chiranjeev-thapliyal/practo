import BannerWrapper from '../../../Styled/Banner/BannerWrapper';

const Banner = ({ bannerImg }) => {
	return (
		<BannerWrapper>
			<img src={bannerImg} alt='Practo India' />
		</BannerWrapper>
	);
};

export default Banner;
