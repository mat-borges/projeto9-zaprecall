import styled from 'styled-components';
import { deck1 } from '../assets/lists/decks';
import startIcon from '../assets/img/play-outline-icon.svg';
import errorIcon from '../assets/img/close-circle-icon.svg';
import almostIcon from '../assets/img/help-circle-icon.svg';
import zapIcon from '../assets/img/checkmark-circle-icon.svg';
import turnCard from '../assets/img/setinha.png';
import { useState } from 'react';

export default function DeckMain() {
	const [cardClicado, setCardClicado] = useState('');
	const [resposta, setResposta] = useState('');
	const [deck, setDeck] = useState(deck1);

	function flashcardStatus(flashcard, status, color) {
		const newDeck = deck;
		flashcard.status = status;
		flashcard.color = color;
		setCardClicado('');
		setResposta('');
		setDeck(newDeck);
	}

	function setIcon(status) {
		if (status === '') {
			return startIcon;
		}
		if (status === 'error') {
			return errorIcon;
		}
		if (status === 'almost') {
			return almostIcon;
		}
		if (status === 'zap') {
			return zapIcon;
		}
	}

	function showCard(flashcard, i) {
		if (cardClicado !== i) {
			return (
				<Flashcard key={i} onClick={() => setCardClicado(i)}>
					<p color={flashcard.color} decoration={flashcard.status !== '' ? 'line-through' : 'none'}>
						Pergunta {i + 1}
					</p>
					<Icon src={setIcon(flashcard.status)} alt="" color={flashcard.color} />
				</Flashcard>
			);
		} else if (cardClicado === i && resposta !== i) {
			return (
				<FlashcardAberto key={i}>
					<p>{flashcard.question}</p>
					<div>
						<img src={turnCard} alt="" onClick={() => setResposta(i)} />
					</div>
				</FlashcardAberto>
			);
		} else if (cardClicado === i && resposta === i) {
			return (
				<FlashcardAberto key={i}>
					<p>{flashcard.answer}</p>
					<Actions>
						<ErrorButton onClick={() => flashcardStatus(flashcard, 'error', '#ff3030')}>
							Não lembrei
						</ErrorButton>
						<AlmostButton onClick={() => flashcardStatus(flashcard, 'almost', '#ff922e')}>
							Quase não lembrei
						</AlmostButton>
						<ZapButton onClick={() => flashcardStatus(flashcard, 'zap', '#2fbe34')}>Zap!</ZapButton>
					</Actions>
				</FlashcardAberto>
			);
		}
	}

	return (
		//ternario para mudar cor e para mudar a imagem
		<Main>{deck1.map((flashcard, i) => showCard(flashcard, i))}</Main>
	);
}

const Main = styled.div`
	max-height: 400px;
	overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	margin-bottom: 30px;
`;

const Flashcard = styled.div`
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border-radius: 5px;
	margin: 13px 0px;
	padding: 10px 10px;
	cursor: pointer;
	font-family: 'Recursive', cursive;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	p {
		color: ${(props) => props.color};
		text-decoration: ${(props) => props.decoration};
	}
`;

const FlashcardAberto = styled(Flashcard)`
	min-height: 130px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background-color: var(--cor-fundo-card);
	cursor: default;
	padding: 20px 10px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	div {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	img {
		cursor: pointer;
	}
	p {
		line-height: 22px;
	}
`;

const Icon = styled.img`
	color: #333333;
	width: 23px;
	height: 23px;
`;

const Actions = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
	margin-top: 15px;
`;

const Button = styled.button`
	border: transparent;
	width: 100%;
	height: 40px;
	background-color: green;
	color: white;
	font-size: 12px;
	font-weight: 700;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;

	&:hover {
		filter: brightness(0.7);
	}
`;

const ErrorButton = styled(Button)`
	background-color: #ff3030;
`;

const AlmostButton = styled(Button)`
	background-color: #ff922e;
`;

const ZapButton = styled(Button)`
	background-color: #2fbe34;
`;
