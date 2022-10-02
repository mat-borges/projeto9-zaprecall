import sad from '../../../assets/img/sad.png';
import happy from '../../../assets/img/party.png';
import styled from 'styled-components';

export default function ShowText(props) {
	const { cardsDone, goal, zappedCards, deck } = props;

	if (cardsDone === deck.length) {
		if (zappedCards >= goal) {
			return (
				<Texto>
					<div data-identifier="flashcard-counter">
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
					<div data-identifier="flashcard-counter">
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
			<Texto data-identifier="flashcard-counter">
				{cardsDone}/{deck.length} Concluidos || Meta: {zappedCards >= goal ? goal : zappedCards}/
				{goal}
				<img src={zappedCards >= goal ? happy : ''} alt="" />
			</Texto>
		);
	}
}

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
