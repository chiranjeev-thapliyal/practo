import styled from 'styled-components';

const Footer = styled.div`
	height: 100%;
	display: flex;
	margin-bottom: 28px;
	flex-wrap: wrap;

	& > .footerdata {
		font-size: 14px;
		width: 18.9%;
		line-height: 20px;
		vertical-align: top;
		display: inline-block;
		font-family: 'Camphor';

		& > h3 {
			font-size: 1.4rem;
			font-weight: 400;
			font-family: 'CamphorBold';
			margin-bottom: 1rem;
		}
	}
`;

export default Footer;
