import styled from '@emotion/styled';
export const $ModalAuthWrapper = styled.form({
	display: 'flex',
	flexDirection: 'column',
	gap: '12px'
});

export const $ModalAuthWrapperInput = styled.div({
	display: 'flex',
	flexDirection: 'column',
	gap: '12px'
});

export const $ModalAuthInfoRegistration = styled.h2({
	color: '#2654b1',
	fontSize: '15px',
	cursor: 'pointer',
	fontWeight: '500'
});

export const $ModalAuthInputItem = styled.div({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px'
});

export const $ModalAuthInputError = styled.span({
	color: '#e64545',
	fontSize: '14px',
	fontWeight: '500'
});
