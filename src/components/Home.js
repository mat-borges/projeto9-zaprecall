import styled from 'styled-components';

export default function Home(props) {
	const { logo, display, setDisplay, goal, setGoal } = props;

	return (
		<HomeDiv display={display === 'home' ? 'flex' : 'none'}>
			<img src={logo} alt="logoZap" />
			<h1>ZapRecall</h1>
			<input
				type="number"
				placeholder="Digite sua meta de zaps..."
				value={goal}
				onChange={(e) => setGoal(e.target.value)}
			/>
			<button onClick={() => setDisplay('recall')}>Iniciar Recall!!</button>
		</HomeDiv>
	);
}

const HomeDiv = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: ${(props) => props.display};
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 1;
	position: absolute;
	background-color: #fb6b6b;
	h1 {
		font-family: 'Righteous', cursive;
		font-size: 36px;
		color: white;
		margin: 30px 0;
	}
	button {
		width: 246px;
		height: 54px;
		padding: 16px 22px;
		border-radius: 5px;
		color: #d70900;
		border: 1px;
		font-size: 18px;
		cursor: pointer;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		&:hover {
			background-color: #cea2a0;
		}
	}
	input[type='number'] {
		border: transparent;
		outline: none;
		border-radius: 5px;
		width: 246px;
		height: 30px;
		margin-bottom: 10px;
		-moz-appearance: textfield;
		&::-webkit-outer-spin-button,
		::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
	img {
		width: 136px;
		height: 161px;
	}
`;
