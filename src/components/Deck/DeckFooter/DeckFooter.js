import styled from 'styled-components';
import ShowIcons from './ShowIcons.js';
import ShowText from './ShowText';

export default function DeckFooter(props) {
	const { deck, cardsDone, goal, zappedCards, iconState } = props;

	return (
		<Footer>
			<ShowText cardsDone={cardsDone} goal={goal} zappedCards={zappedCards} deck={deck} />
			<div>
				{deck.map((e, i) => (
					<ShowIcons key={i} i={i} iconState={iconState} />
				))}
			</div>
		</Footer>
	);
}

const Footer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
	z-index: 1;
	width: 100%;
	min-height: 70px;
	max-height: 90px;
	padding: 14px 10px;
	font-size: 18px;
	color: black;
	position: fixed;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;
