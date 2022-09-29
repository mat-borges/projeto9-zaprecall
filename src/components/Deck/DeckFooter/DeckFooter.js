import styled from 'styled-components';
import sad from '../../../assets/img/sad.png';
import happy from '../../../assets/img/party.png';
import ShowIcons from './ShowIcons.js';

export default function DeckFooter(props) {
	const { deck, cardsDone, goal, zappedCards, iconState } = props;

	function renderFooter() {
		if (cardsDone === deck.length) {
			if (zappedCards >= goal) {
				return (
					<p>
						Parabéns, você cumpriu sua meta!
						<img src={happy} alt="happy" />
					</p>
				);
			} else {
				return (
					<p>
						Putz!
						<img src={sad} alt="sad" />
					</p>
				);
			}
		} else {
			return (
				<p>
					{cardsDone}/{deck.length} Concluidos || Meta: {zappedCards >= goal ? goal : zappedCards}/
					{goal}
					<img src={zappedCards >= goal ? happy : ''} alt="" />
				</p>
			);
		}
	}

	return (
		<Footer>
			{renderFooter()}
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
	padding: 14px 10px;
	font-size: 18px;
	color: black;
	position: fixed;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
