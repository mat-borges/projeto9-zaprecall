import styled from 'styled-components';
import startIcon from '../../../assets/img/play-outline-icon.svg';
import errorIcon from '../../../assets/img/close-circle-icon.svg';
import almostIcon from '../../../assets/img/help-circle-icon.svg';
import zapIcon from '../../../assets/img/checkmark-circle-icon.svg';
import ShowFlashcard from './ShowFlashcard.js';

export default function DeckMain(props) {
	const {
		deck,
		cardsDone,
		setCardsDone,
		zappedCards,
		setZappedCards,
		clickedCard,
		setClickedCard,
		answer,
		setAnswer,
		iconState,
		setIconState,
	} = props;

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

	return (
		//ternario para mudar cor e para mudar a imagem
		<Main>
			{deck.map((flashcard, i) => (
				<ShowFlashcard
					key={i}
					i={i}
					flashcard={flashcard}
					setCardsDone={setCardsDone}
					cardsDone={cardsDone}
					zappedCards={zappedCards}
					setZappedCards={setZappedCards}
					setClickedCard={setClickedCard}
					setAnswer={setAnswer}
					clickedCard={clickedCard}
					setIcon={setIcon}
					answer={answer}
					iconState={iconState}
					setIconState={setIconState}
				/>
			))}
		</Main>
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
