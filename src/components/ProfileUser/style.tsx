import styled from '@emotion/styled';
export const $HomeAvatarProfile = styled.div({
	width: '280px',
	background: '#262626',
	height: '390px',
	position: 'sticky',
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px 16px',
	borderRadius: '12px',
	top: '110px'
});

export const $AvatarProfile = styled.img({
	cursor: 'pointer',
	borderRadius: '12px',
	width: '240px',
	height: '280px'
});

export const $UserInfoWrrapper = styled.div({
	display: 'flex',
	padding: '0 8px',
	flexDirection: 'column',
	alignItems: 'start',
	marginTop: '12px',
	width: '100%'
});

export const $UserName = styled.h2({
	fontSize: '18px',
	color: '#ffffff',
	fontWeight: '500'
});

export const $UserEmail = styled.span({
	color: '#919191',
	fontWeight: '500'
});
