import styled from 'styled-components';
import { deck1, deck2 } from '../assets/lists/decks.js';

export default function Deck(props) {
	return (
		<DeckDiv>
			<DeckHeader>
				<img src={props.logo} alt="logoZap" />
				<h1>ZapRecall</h1>
			</DeckHeader>
			<DeckMain>
				<Flashcard>a</Flashcard>
				<Flashcard>Teste</Flashcard>
			</DeckMain>
			<DeckFooter>
				<Actions>
					<ErrorButton>Não lembrei</ErrorButton>
					<AlmostButton>Quase não lembrei</AlmostButton>
					<ZapButton>Zap!</ZapButton>
				</Actions>
				<p>0/4 Concluidos</p>
			</DeckFooter>
		</DeckDiv>
	);
}

const Button = styled.button`
	width: 100%;
	height: 40px;
	background-color: green;
	color: white;
	font-size: 12px;
	font-weight: 700;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		filter: brightness(0.7);
	}
`;

const DeckDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const DeckHeader = styled.div`
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
	background-color: var(--cor-fundo);
	img {
		width: 52px;
		height: 60px;
	}
`;

const DeckMain = styled.div`
	max-height: 400px;
	overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const DeckFooter = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
	z-index: 1;
	width: 100%;
	min-height: 70px;
	padding: 14px 10px;
	font-size: 18px;
	color: black;
	position: fixed;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Actions = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
`;

const Flashcard = styled.div`
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	color: black;
	border-radius: 5px;
	margin: 10px 0px;
	padding: 10px 10px;
	cursor: pointer;
	font-family: 'Recursive', cursive;
`;

const ErrorButton = styled(Button)`
	background-color: var(--cor-nao-lembrei);
`;

const AlmostButton = styled(Button)`
	background-color: var(--cor-quase-nao-lembrei);
`;

const ZapButton = styled(Button)`
	background-color: var(--cor-zap);
`;
