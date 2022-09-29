import styled from 'styled-components';
import homeIcon from '../../assets/img/home-outline.svg';

export default function DeckHeader(props) {
	const {
		logo,
		setDisplay,
		setGoal,
		setDeck,
		setClickedCard,
		setAnswer,
		setCardsDone,
		setZappedCards,
		setIconState,
	} = props;

	function homePage() {
		setDisplay('home');
		setDeck([]);
		setGoal('');
		setClickedCard('');
		setAnswer('');
		setCardsDone(0);
		setZappedCards(0);
		setIconState([]);
	}

	return (
		<Header>
			<img src={logo} alt="logoZap" onClick={homePage} title="Home Page" />
			<h1 onClick={homePage} title="Home Page">
				ZapRecall
			</h1>
			<Button onClick={homePage} title="Home Page">
				<img src={homeIcon} alt="home" />
				Home Page
			</Button>
		</Header>
	);
}

const Header = styled.div`
	position: fixed;
	height: 100px;
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
	h1,
	img {
		cursor: pointer;
	}
`;

const Button = styled.button`
	border: transparent;
	position: fixed;
	top: 30px;
	left: 30px;
	width: 160px;
	height: 30px;
	border-radius: 5px;
	filter: invert(0%) sepia(98%) saturate(7%) hue-rotate(162deg) brightness(103%) contrast(102%);
	font-family: 'Recursive', cursive;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	&:hover {
		background-color: #cea2a0;
	}
	img {
		width: 25px;
		height: 25px;
	}
`;
