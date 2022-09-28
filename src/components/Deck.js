import styled from 'styled-components';
import DeckFooter from './DeckFooter.js';
import DeckHeader from './DeckHeader.js';
import DeckMain from './DeckMain.js';
import { useState } from 'react';

export default function Deck(props) {
	const { logo, display, setDisplay, deck, setDeck, goal, setGoal, zappedCards, setZappedCards } =
		props;

	const [cardsDone, setCardsDone] = useState(0);

	return (
		<DeckDiv display={display === 'recall' ? 'flex' : 'none'}>
			<DeckHeader
				logo={logo}
				setDisplay={setDisplay}
				goal={goal}
				setGoal={setGoal}
				setDeck={setDeck}
			/>
			<DeckMain
				deck={deck}
				setDeck={setDeck}
				cardsDone={cardsDone}
				setCardsDone={setCardsDone}
				zappedCards={zappedCards}
				setZappedCards={setZappedCards}
			/>
			<DeckFooter deck={deck} cardsDone={cardsDone} goal={goal} zappedCards={zappedCards} />
		</DeckDiv>
	);
}

const DeckDiv = styled.div`
	display: ${(props) => props.display};
	flex-direction: column;
`;
