import styled from '@emotion/styled';

export const $Error = styled.div({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '40vh',
	flexDirection: 'column',
	gap: '10px'
});

export const $ErrorText = styled.h2({
	fontSize: '20px',
	fontWeight: '500',
	color: '#d64545',
	textAlign: 'center'
});
