import styled from 'styled-components';

const Navbar = styled.div`
	font-weight: 400;
	border-bottom: 1px solid #f0f0f5;
	background-color: #fafafa;
	width: 100%;
	top: 0;

	& > .nav {
		height: 60px;
		background-color: #fff;

		padding: 0;
		color: #414146;
		box-sizing: border-box;
		border-bottom: 1px solid #f0f0f5;
		border-radius: 0;

		& > .wrapper {
			cursor: auto;
			display: block;
			width: 100%;
			height: 100%;
			max-width: 1280px;
			margin: 0 auto;
			padding: 0 50px;

			& > .nav-left {
				vertical-align: middle;
				width: 158px;

				padding: 24px 0 23px;
				display: inline-block;
				height: 100%;
			}

			& > .nav-mid {
				height: 100%;
				vertical-align: top;
				display: inline-block;

				& > .prod {
					display: inline-block;
					min-width: 112px;
					margin-right: 20px;
					padding: 22px 0 9px;

					& > .prod-title {
						font-size: 16px;
						line-height: 20px;
						font-weight: bold;
						color: #2d2d32;
						letter-spacing: -0.3px;
					}

					& > .prod-sub {
						font-size: 12px;
						line-height: 18px;
						color: #787887;
						letter-spacing: -0.1px;
					}
				}
			}

			& > .nav-right {
				float: right;
				padding: 20px 0 19px;
				display: flex;
				height: 100%;
				vertical-align: top;
				text-align: right;

				& > .main {
					cursor: pointer;
					padding: 0;
					font-weight: 400;
					font-size: 14px;
					line-height: 20px;
				}
				& > .down-arrow {
					font-size: 15px;
					line-height: 30px;
					padding: 0 1px;
					cursor: pointer;
					vertical-align: middle;
					display: inline-block;
				}
			}
		}
	}
`;

export default Navbar;
