import GlobalStyle from '../style/GlobalStyle.js';
import logoG from '../assets/img/logo.png';
import Home from './Home.js';
import Deck from './Deck.js';
import { useState } from 'react';

export default function App() {
	const [display, setDisplay] = useState('home');
	const [goal, setGoal] = useState('');

	return (
		<>
			<GlobalStyle />
			<Home logo={logoG} display={display} setDisplay={setDisplay} goal={goal} setGoal={setGoal} />
			<Deck logo={logoG} display={display} />
		</>
	);
}
