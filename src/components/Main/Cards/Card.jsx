import styled from 'styled-components';

const Card = styled.div`
	border: 1px solid #f0f0f5;
	box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
	border-radius: 2.4rem;
	cursor: pointer;
	width: 20rem;
	height: 29rem;

	& > .img-wrapper {
		/* position: relative; */
		display: flex;
		justify-content: center;
		align-items: flex-end;
		border-top-left-radius: 2.4rem;
		border-top-right-radius: 2.4rem;
		height: 60%;
		background-color: ${({ bg }) => bg};
		
		& > img {
			/* padding-top: 12px; */
			/* padding-left: 35px; */
			/* padding-right: 35px; */
			/* padding-bottom: 0px; */
			/* position: absolute; */
			/* bottom: 0; */
			/* object-fit: contain;
			height: 16rem; */
			/* position: relative; */
			/* top: 1.2rem; */
			width: 100%;
			/* width: auto; */
			/* width: 150%; */
			/* height: 100%; */
		}

		& > .img-0{
			width: 65%;
		}

		& > .img-1{
			width: 80%;
		}
		 
		& > .img-2{
			width: 85%;
		}

		& > .img-3{
			width: 90%;
		}

		& > .img-4{
			width: 85%;
		}

	}

	& > .info {
		height: 40%;
		padding-top: 2rem;
		padding-left: 1.6rem;
		padding-right: 1.6rem;

		& > h3 {
			padding-bottom: 8px;
			color: #2d2d32;
			/* font-weight: 700; */
			font-weight: 400;
			font-family: 'CamphorBold';
			font-size: 2rem;
		}

		& > p {
			font-size: 1.4rem;
			font-weight: 400;
			color: #787887;
		}
	}
`;

export default Card;
