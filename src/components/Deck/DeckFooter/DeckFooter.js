import styled from 'styled-components';
import sad from '../../../assets/img/sad.png';
import happy from '../../../assets/img/party.png';
import ShowIcons from './ShowIcons.js';

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

function ShowText(props) {
	const { cardsDone, goal, zappedCards, deck } = props;

	if (cardsDone === deck.length) {
		if (zappedCards >= goal) {
			return (
				<Texto>
					<div>
						{cardsDone}/{deck.length} Concluidos || Meta: {zappedCards >= goal ? goal : zappedCards}
						/{goal}
					</div>
					<div>
						Parabéns, você cumpriu sua meta!
						<img src={happy} alt="happy" />
					</div>
				</Texto>
			);
		} else {
			return (
				<Texto>
					<div>
						{cardsDone}/{deck.length} Concluidos || Meta: {zappedCards >= goal ? goal : zappedCards}
						/{goal}
					</div>
					<div>
						Putz!
						<img src={sad} alt="sad" />
					</div>
				</Texto>
			);
		}
	} else {
		return (
			<Texto>
				{cardsDone}/{deck.length} Concluidos || Meta: {zappedCards >= goal ? goal : zappedCards}/
				{goal}
				<img src={zappedCards >= goal ? happy : ''} alt="" />
			</Texto>
		);
	}
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

const Texto = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	div {
		flex-direction: column;
	}
	img {
		margin-left: 5px;
	}
`;
