import GlobalStyle from '../style/GlobalStyle.js';
import logoG from '../assets/img/logo.png';
import Home from './Home.js';
import Deck from './Deck.js';

export default function App() {
	return (
		<>
			<GlobalStyle />

			<Home logo={logoG} />
			<Deck logo={logoG} />
		</>
	);
}
