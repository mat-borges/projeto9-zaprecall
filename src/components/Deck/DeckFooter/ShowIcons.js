import styled from 'styled-components';
import emptyIcon from '../../../assets/img/ellipse-outline.svg';
import errorIcon from '../../../assets/img/close-circle-icon.svg';
import almostIcon from '../../../assets/img/help-circle-icon.svg';
import zapIcon from '../../../assets/img/checkmark-circle-icon.svg';

export default function ShowIcons({ i, iconState }) {
	const STARTCOLOR =
		'invert(20%) sepia(0%) saturate(401%) hue-rotate(190deg) brightness(86%) contrast(91%)';
	const ERRORCOLOR =
		'invert(29%) sepia(86%) saturate(2812%) hue-rotate(342deg) brightness(96%) contrast(106%)';
	const ALMOSTCOLOR =
		'invert(67%) sepia(48%) saturate(1583%) hue-rotate(334deg) brightness(98%) contrast(106%)';
	const ZAPCOLOR =
		'invert(55%) sepia(10%) saturate(3367%) hue-rotate(72deg) brightness(106%) contrast(90%)';

	if (iconState[i] === '' || iconState[i] === undefined) {
		return <Icon key={i} src={emptyIcon} color={STARTCOLOR}></Icon>;
	}
	if (iconState[i] === 'error') {
		return <Icon key={i} src={errorIcon} alt="" color={ERRORCOLOR} />;
	}
	if (iconState[i] === 'almost') {
		return <Icon key={i} src={almostIcon} alt="" color={ALMOSTCOLOR} />;
	}
	if (iconState[i] === 'zap') {
		return <Icon key={i} src={zapIcon} alt="" color={ZAPCOLOR} />;
	}
}

const Icon = styled.img`
	filter: ${(props) => props.color};
	width: 23px;
	height: 23px;
`;
