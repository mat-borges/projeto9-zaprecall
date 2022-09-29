import styled from 'styled-components';
import DeckFooter from './DeckFooter/DeckFooter.js';
import DeckHeader from './DeckHeader.js';
import DeckMain from './DeckMain/DeckMain.js';
import { useState } from 'react';

export default function Deck(props) {
	const { logo, display, setDisplay, deck, setDeck, goal, setGoal, zappedCards, setZappedCards } =
		props;

	const [cardsDone, setCardsDone] = useState(0);
	const [clickedCard, setClickedCard] = useState('');
	const [answer, setAnswer] = useState('');
	const [iconState, setIconState] = useState([]);

	return (
		<DeckDiv display={display === 'recall' ? 'flex' : 'none'}>
			<DeckHeader
				logo={logo}
				setDisplay={setDisplay}
				goal={goal}
				setGoal={setGoal}
				setDeck={setDeck}
				setClickedCard={setClickedCard}
				setAnswer={setAnswer}
				setCardsDone={setCardsDone}
				setZappedCards={setZappedCards}
				setIconState={setIconState}
			/>
			<DeckMain
				deck={deck}
				cardsDone={cardsDone}
				setCardsDone={setCardsDone}
				zappedCards={zappedCards}
				setZappedCards={setZappedCards}
				clickedCard={clickedCard}
				setClickedCard={setClickedCard}
				answer={answer}
				setAnswer={setAnswer}
				iconState={iconState}
				setIconState={setIconState}
			/>
			<DeckFooter
				deck={deck}
				cardsDone={cardsDone}
				goal={goal}
				zappedCards={zappedCards}
				iconState={iconState}
			/>
		</DeckDiv>
	);
}

const DeckDiv = styled.div`
	display: ${(props) => props.display};
	flex-direction: column;
`;
