import styled from 'styled-components';

const Navbar = styled.div`
	font-weight: 400;
	border-bottom: 1px solid #f0f0f5;
	background-color: #fafafa;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
	width: 100%;
	z-index: 2000;
	top: 0;
	position: ${({ fixed }) => {
		return fixed ? 'fixed' : 'relative';
	}};

	& > .nav {
		margin: 0px;
		background-color: #fff;
		height: 74px;
		padding: 0;
		color: #414146;
		box-sizing: border-box;
		border-bottom: 1px solid #f0f0f5;
		border-radius: 0;
		display: block !important;

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
				box-sizing: border-box;
				padding: 24px 0 23px;
				display: inline-block;
				height: 100%;
			}

			& > .nav-mid { 
				height: 100%;
				vertical-align: top;
				display: inline-block;
				box-sizing: border-box;

				& > .active {
					border-bottom: 5px solid #14bef0;

					& > .prod-title {
						color: #28328c !important;
					}
				}

				& > .prod {
					display: inline-block;
					min-width: 112px;
					margin-right: 20px;
					padding: 22px 0 9px;
					text-decoration: none;

					& > .prod-title {
						font-size: 16px;
						line-height: 20px;
						/* font-weight: bold; */
						color: #2d2d32;
						letter-spacing: -0.3px;
						font-family: 'CamphorBold';
					}

					& > .prod-sub {
						font-size: 12px;
						line-height: 18px;
						color: #787887;
						letter-spacing: -0.1px;
					}
				}
			}
		}
	}

	& .navbar_login {
		font-size: 1.3rem;
		line-height: 1.3rem;
		color: #787887 !important;
		border-radius: 4px;
		border: solid 1px #d3d3d3;
		padding: 8px 10px;
		text-decoration: none;
		font-weight: 400;

		&:hover {
			border-color: #14bef0;
			color: #14bef0 !important;
		}
	}
`;

export default Navbar;
