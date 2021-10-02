import styled from 'styled-components';

const Wrapper = styled.div`
	& > .content {
		width: 1180px;
		zoom: 1;
		margin: auto;
		display: flex;

		& > .head {
			position: relative;
			margin-top: 15px;

			& > h2 {
				margin-top: 15px;
				margin: 0px;
				/* font-weight: 700; */
				font-weight: 400;
				font-family: 'CamphorBold';
				font-size: 24px;
			}

			& > .btn {
				font-size: 14px;
				color: #14bef0;
				font-weight: 400;
				padding: 12px 16px;
				border: 1.5px solid #14bef0;
				background-color: #fff;
				right: 10px;
				top: 22px;
				cursor: pointer;
				display: inline-block;
				text-align: center;
				border-radius: 4px;
				outline: none;
				position: absolute;
				overflow: visible;
			}
		}

		& .speciality_card {
			padding: 3rem;
			width: 18rem;
			position: relative;
			text-align: center;
		}

		& .speciality {
			/* font-weight: 700; */
			font-weight: 400;
			font-family: 'CamphorBold';
			color: #414146;
			font-size: 1.4rem;
			text-align: center;
			margin-top: 10px;
		}

		& .consult_now {
			margin-top: 10px;
			text-transform: uppercase;
			color: #14bef0;
			text-align: center;
			/* font-weight: 700; */
			font-weight: 400;
			font-family: 'CamphorBold';
			font-size: 1.2rem;
		}
	}
`;
export default Wrapper;
