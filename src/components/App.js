import { useState } from 'react';
import GlobalStyle from '../style/GlobalStyle.js';
import logoG from '../assets/img/logo.png';
import Home from './Home.js';
import Deck from './Deck/Deck.js';

export default function App() {
	const [display, setDisplay] = useState('home');
	const [goal, setGoal] = useState('');
	const [deck, setDeck] = useState([]);
	const [zappedCards, setZappedCards] = useState(0);

	return (
		<>
			<GlobalStyle />
			<Home
				logo={logoG}
				display={display}
				setDisplay={setDisplay}
				goal={goal}
				setGoal={setGoal}
				deck={deck}
				setDeck={setDeck}
			/>

			<Deck
				logo={logoG}
				display={display}
				setDisplay={setDisplay}
				deck={deck}
				setDeck={setDeck}
				goal={goal}
				setGoal={setGoal}
				zappedCards={zappedCards}
				setZappedCards={setZappedCards}
			/>
		</>
	);
}
