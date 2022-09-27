import styled from 'styled-components';

export default function Home(props) {
	return (
		<HomeDiv>
			<img src={props.logo} alt="logoZap" />
			<h1>ZapRecall</h1>
			<button>Iniciar Recall!!</button>
		</HomeDiv>
	);
}

const HomeDiv = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 1;
	position: absolute;
	background-color: var(--cor-fundo);
	h1 {
		font-family: 'Righteous', cursive;
		font-size: 36px;
		color: white;
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
		&:hover {
			background-color: #cea2a0;
		}
	}
	img {
		width: 136px;
		height: 161px;
	}
	display: none;
`;
