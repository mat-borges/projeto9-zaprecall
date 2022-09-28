import styled from 'styled-components';
import startIcon from '../assets/img/play-outline-icon.svg';
import errorIcon from '../assets/img/close-circle-icon.svg';
import almostIcon from '../assets/img/help-circle-icon.svg';
import zapIcon from '../assets/img/checkmark-circle-icon.svg';
import turnCard from '../assets/img/setinha.png';
import { useState } from 'react';

export default function DeckMain(props) {
	const { deck, setDeck, cardsDone, setCardsDone } = props;
	const [clickedCard, setClickedCard] = useState('');
	const [answer, setAnswer] = useState('');
	const [zappedCards, setZappedCards] = useState(0);

	const errorColor =
		'invert(29%) sepia(86%) saturate(2812%) hue-rotate(342deg) brightness(96%) contrast(106%)';
	const almostColor =
		'invert(67%) sepia(48%) saturate(1583%) hue-rotate(334deg) brightness(98%) contrast(106%)';
	const zapColor =
		'invert(55%) sepia(10%) saturate(3367%) hue-rotate(72deg) brightness(106%) contrast(90%)';

	function flashcardStatus(flashcard, status, color) {
		const newDeck = deck;
		flashcard.status = status;
		flashcard.color = color;
		setClickedCard('');
		setAnswer('');
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
		if (clickedCard !== i) {
			return (
				<Flashcard key={i} onClick={() => setClickedCard(i)}>
					<QuestionId
						color={flashcard.color}
						decoration={flashcard.status !== '' ? 'line-through' : 'none'}>
						Pergunta {i + 1}
					</QuestionId>
					<Icon src={setIcon(flashcard.status)} alt="" color={flashcard.color} />
				</Flashcard>
			);
		} else if (clickedCard === i && answer !== i) {
			return (
				<FlashcardAberto key={i}>
					<p>{flashcard.question}</p>
					<div>
						<img src={turnCard} alt="" onClick={() => setAnswer(i)} />
					</div>
				</FlashcardAberto>
			);
		} else if (clickedCard === i && answer === i) {
			return (
				<FlashcardAberto key={i}>
					<p>{flashcard.answer}</p>
					<Actions>
						<ErrorButton
							onClick={() => {
								flashcardStatus(flashcard, 'error', errorColor);
								setCardsDone(cardsDone + 1);
							}}>
							Não lembrei
						</ErrorButton>
						<AlmostButton
							onClick={() => {
								flashcardStatus(flashcard, 'almost', almostColor);
								setCardsDone(cardsDone + 1);
							}}>
							Quase não lembrei
						</AlmostButton>
						<ZapButton
							onClick={() => {
								flashcardStatus(flashcard, 'zap', zapColor);
								setZappedCards(zappedCards + 1);
								setCardsDone(cardsDone + 1);
							}}>
							Zap!
						</ZapButton>
					</Actions>
				</FlashcardAberto>
			);
		}
	}

	return (
		//ternario para mudar cor e para mudar a imagem
		<Main>{deck.map((flashcard, i) => showCard(flashcard, i))}</Main>
	);
}

const Main = styled.div`
	max-height: 70vh;
	overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	margin: 70px 0 80px 0;
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
`;

const QuestionId = styled.p`
	filter: ${(props) => props.color};
	text-decoration: ${(props) => props.decoration};
`;

const FlashcardAberto = styled(Flashcard)`
	min-height: 130px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background-color: #ffffd4;
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
	filter: ${(props) => props.color};
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
