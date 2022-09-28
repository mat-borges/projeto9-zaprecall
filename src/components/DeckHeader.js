import styled from 'styled-components';

export default function DeckHeader({ logo }) {
	return (
		<Header>
			<img src={logo} alt="logoZap" />
			<h1>ZapRecall</h1>
		</Header>
	);
}

const Header = styled.div`
	position: fixed;
	height: 80px;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	font-size: 36px;
	color: white;
	font-family: 'Righteous', sans-serif;
	z-index: 1;
	background-color: #fb6b6b;
	img {
		width: 52px;
		height: 60px;
		margin-right: 20px;
	}
`;
