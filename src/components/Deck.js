import styled from 'styled-components';
import DeckFooter from './DeckFooter.js';
import DeckHeader from './DeckHeader.js';
import DeckMain from './DeckMain.js';

export default function Deck(props) {
	const { logo } = props;
	return (
		<DeckDiv>
			<DeckHeader logo={logo} />
			<DeckMain />
			<DeckFooter />
		</DeckDiv>
	);
}

const DeckDiv = styled.div`
	display: flex;
	flex-direction: column;
`;
