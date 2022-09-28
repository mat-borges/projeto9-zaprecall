import styled from 'styled-components';
import startIcon from '../assets/img/play-outline-icon.svg';
import errorIcon from '../assets/img/close-circle-icon.svg';
import almostIcon from '../assets/img/help-circle-icon.svg';
import zapIcon from '../assets/img/checkmark-circle-icon.svg';
import sad from '../assets/img/sad.png';
import happy from '../assets/img/party.png';

export default function DeckFooter({ deck, cardsDone, goal, zappedCards }) {
	const STARTCOLOR =
		'invert(100%) sepia(100%) saturate(2%) hue-rotate(253deg) brightness(108%) contrast(101%)';
	const ERRORCOLOR =
		'invert(29%) sepia(86%) saturate(2812%) hue-rotate(342deg) brightness(96%) contrast(106%)';
	const ALMOSTCOLOR =
		'invert(67%) sepia(48%) saturate(1583%) hue-rotate(334deg) brightness(98%) contrast(106%)';
	const ZAPCOLOR =
		'invert(55%) sepia(10%) saturate(3367%) hue-rotate(72deg) brightness(106%) contrast(90%)';

	function renderIcons(u, i) {
		if (u.status === '') {
			return <Icon key={i} src={startIcon} color={STARTCOLOR}></Icon>;
		}
		if (u.status === 'error') {
			return <Icon key={i} src={errorIcon} alt="" color={ERRORCOLOR} />;
		}
		if (u.status === 'almost') {
			return <Icon key={i} src={almostIcon} alt="" color={ALMOSTCOLOR} />;
		}
		if (u.status === 'zap') {
			return <Icon key={i} src={zapIcon} alt="" color={ZAPCOLOR} />;
		}
	}

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
			<div>{deck.map((u, i) => renderIcons(u, i))}</div>
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

const Icon = styled.img`
	filter: ${(props) => props.color};
	width: 23px;
	height: 23px;
`;
