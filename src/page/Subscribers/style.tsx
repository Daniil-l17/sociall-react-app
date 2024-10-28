import styled from '@emotion/styled';
export const $HomeAvatarProfile = styled.div({
	width: '200px',
	background: '#262626',
	height: '280px',
	position: 'sticky',
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '15px 12px',
	borderRadius: '12px',
	top: '110px'
});

export const $AvatarProfileWrapper = styled.div({
	display: 'flex',
	gap: '10px',
	flexWrap: 'wrap'
});

export const $AvatarProfile = styled.img({
	cursor: 'pointer',
	borderRadius: '12px',
	width: '160px',
	height: '190px'
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
	width: '150px',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	textAlign: 'center',
	fontWeight: '500'
});
