import styled from 'styled-components';

const Download = styled.div`
	display: flex;
	height: 100%;

	& > .left {
		width: 50%;
		position: relative;
		height: 100%;

		& > img {
			height: 100%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 100px;
			width: 332px;
			height: 376px;
		}
	}

	& > .right {
		position: relative;
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;

		& > h3 {
			font-size: 3.2rem;
			/* font-weight: bold;  */
			font-weight: 400;
			color: #414146;
			font-family: 'CamphorBold';
		}

		& > p.app_info {
			max-width: 44rem;
			margin-top: 2rem;
			color: #414146;
			font-size: 1.4rem;
		}

		& > p.get_link {
			/* font-weight: 700; */
			font-weight: 400;
			font-family: 'CamphorBold';
			color: #414146;
			margin-top: 5rem;
			font-size: 1.6rem;
			line-height: 1.5;
		}

		& > .app_link_form {
			display: flex;
			align-items: center;
			margin-top: 1rem;

			& > .app_link_input {
				width: 256px;
				border: 1px solid #d7d7e0;
				border-radius: 4px;
				margin-right: 10px;
				display: flex;
				position: relative;

				& > .country_code {
					vertical-align: bottom;
					border-right: 1px solid rgba(180, 180, 190, .3);
					padding: 1.5rem;
					color: #000;
					/* font-weight: 700; */
					font-size: 1.5rem;
					display: flex;
					justify-content: center;
					align-items: center;
					font-weight: 400;
					font-family: 'CamphorBold';
				}

				& > input {
					outline: none;
					border: none;
					padding-left: 20px;
					flex-grow: 100;
					background-color: transparent;
					padding: 1.5rem;
					font-weight: 400;
					font-family: 'CamphorBold';
				}

				& > input::placeholder{
					color: #686867;
					font-weight: 400;
					font-family: 'CamphorBold';
				}
			}

			& > button {
				padding: 1.5rem 3rem;
				background-color: #14bef0;
				cursor: pointer;
				font-size: 14px;
				text-decoration: none;
				color: #fff;
				display: inline-block;
				text-align: center;
				border: 0;
				font-weight: 700;
				border-radius: 4px;
			}
		}

		& > .downloads {
			margin-top: 3rem;

			& > img {
				width: 130px;
				height: 40px;
				cursor: pointer;
			}

			& > img.play_store_button {
				margin-right: 1.5rem;
			}
		}
	}
`;

export default Download;
