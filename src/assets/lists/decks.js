const INITIALCOLOR =
	'invert(0%) sepia(98%) saturate(7%) hue-rotate(162deg) brightness(103%) contrast(102%)';

export const recallJS = [
	{
		question: 'O que é JSX?',
		answer: 'Uma extensão de linguagem do JavaScript',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'O React é __',
		answer: 'uma biblioteca JavaScript para construção de interfaces',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Componentes devem iniciar com __',
		answer: 'letra maiúscula',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Podemos colocar __ dentro do JSX',
		answer: 'expressões',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'O ReactDOM nos ajuda __',
		answer: 'interagindo com a DOM para colocar componentes React na mesma',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Usamos o npm para __',
		answer: 'gerenciar os pacotes necessários e suas dependências',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Usamos props para __',
		answer: 'passar diferentes informações para componentes',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Usamos estado (state) para __',
		answer:
			'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
		status: '',
		color: INITIALCOLOR,
	},
];

export const recallRandom = [
	{
		question: 'Biscoito ou bolacha?',
		answer: 'Bolacha... obviamente',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Começar a coxinha pela parte maior ou menor?',
		answer: 'De novo, menor, obviamente...',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Toddy ou nescau?',
		answer: 'Toddy!',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'BK ou Mc',
		answer: 'BK pela batata',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Ketchup na pizza?',
		answer: 'NÃO, porém de vez em quando sim',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Batata frita com sorvete?',
		answer: 'Tem gosto pra tudo na vida',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Acabaram as ideias',
		answer: 'Boa sorte',
		status: '',
		color: INITIALCOLOR,
	},
	{
		question: 'Ainda sem ideias',
		answer: 'Fim!',
		status: '',
		color: INITIALCOLOR,
	},
];

const decks = [[''], recallJS, recallRandom];
export const options = [{ label: '' }, { label: 'recallJS' }, { label: 'recallRandom' }];

export default decks;
