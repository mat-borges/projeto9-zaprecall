import styled from 'styled-components';
import startIcon from '../assets/img/play-outline-icon.svg';
import errorIcon from '../assets/img/close-circle-icon.svg';
import almostIcon from '../assets/img/help-circle-icon.svg';
import zapIcon from '../assets/img/checkmark-circle-icon.svg';
import turnCard from '../assets/img/setinha.png';
import { useState } from 'react';
import Actions from './Actions';

export default function DeckMain(props) {
	const { deck, setDeck, cardsDone, setCardsDone, zappedCards, setZappedCards } = props;
	const [clickedCard, setClickedCard] = useState('');
	const [answer, setAnswer] = useState('');

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
					<Actions
						flashcardStatus={flashcardStatus}
						flashcard={flashcard}
						setCardsDone={setCardsDone}
						cardsDone={cardsDone}
						zappedCards={zappedCards}
						setZappedCards={setZappedCards}
						setClickedCard={setClickedCard}
						setAnswer={setAnswer}
					/>
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
