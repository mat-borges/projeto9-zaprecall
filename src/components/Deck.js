import styled from 'styled-components';
import DeckFooter from './DeckFooter.js';
import DeckHeader from './DeckHeader.js';
import DeckMain from './DeckMain.js';
import { deck1 } from '../assets/lists/decks';
import { useState } from 'react';

export default function Deck(props) {
	const { logo, display } = props;

	const [deck, setDeck] = useState(deck1);
	const [cardsDone, setCardsDone] = useState(0);

	return (
		<DeckDiv display={display === 'recall' ? 'flex' : 'none'}>
			<DeckHeader logo={logo} />
			<DeckMain deck={deck} setDeck={setDeck} cardsDone={cardsDone} setCardsDone={setCardsDone} />
			<DeckFooter deck={deck} cardsDone={cardsDone} />
		</DeckDiv>
	);
}

const DeckDiv = styled.div`
	display: ${(props) => props.display};
	flex-direction: column;
`;
