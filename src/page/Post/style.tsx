import styled from '@emotion/styled';
export const $ContentItem = styled.div({
	display: 'flex',
	position: 'relative',
	background: '#222222',
	padding: '10px 12px',
	width: '100%',
	minHeight: '120px',
	borderRadius: '8px'
});

export const $ContentDescription = styled.p({
	marginTop: '10px',
	fontWeight: '500',
	color: '#ffffff'
});

export const $ContentItemHeader = styled.div({
	display: 'flex',
	width: '100%',
	flexDirection: 'column'
});

export const $ContentItemHeaderUserInfo = styled.div({
	display: 'flex',
	gap: '10px',
	alignItems: 'center'
});

export const $ContentItemHeaderUserInfoDate = styled.p({
	fontSize: '12px',
	fontWeight: '500',
	color: '#969696'
});

export const $ContentItemHeaderDeleteIcon = styled.p({
	position: 'absolute',
	top: '15px',
	zIndex: '1',
	right: '15px',
	color: '#ffffff'
});

export const $ContentItemHeaderUserInfoName = styled.h2({
	fontWeight: '500',
	color: '#ffffff'
});

export const $ContentItemHeartIconWrapper = styled.h2({
	display: 'flex',
	marginTop: '5px',
	alignItems: 'center',
	gap: '10px'
});

export const $ContentItemHearCommnetWrapper = styled.h2({
	display: 'flex',
	marginTop: '15px',
	flexDirection: 'column',
	width: '100%',
	gap: '10px'
});

export const $ContentItemHearCommnetWrapperButton = styled.h2({
	display: 'flex',
	justifyContent: 'end'
});

export const $LoaderWrapper = styled.div({
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
	alignItems: 'center',
	height: '30vh'
});
