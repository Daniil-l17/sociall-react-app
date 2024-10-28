import styled from '@emotion/styled';
export const $UsersWrapper = styled.div({
	width: '100%',
	height: '100%'
});

export const $LoaderWrapper = styled.div({
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
	alignItems: 'center',
	height: '30vh'
});

const $ErrorWrapper = styled.div({});

export const $UserMenu = styled.div({
	display: 'flex',
	background: '#222222',
	width: '240px',
	flexDirection: 'column',
	alignItems: 'center',
	height: '100%',
	gap: '10px',
	borderRadius: '8px',
	padding: '15px 20px'
});

export const $UserWrapper = styled.div({
	display: 'flex',
	gap: '20px'
});

export const $UserInfoItem = styled.div({
	display: 'flex',
	alignItems: 'center',
	gap: '10px'
});

export const $UserInfoText = styled.h2({
	color: '#8e8e8e',
	fontWeight: '500'
});

export const $UserInfo = styled.div({
	background: '#222222',
	borderRadius: '8px',
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	flex: 1,
	padding: '15px 20px'
});

export const $UserMenuImg = styled.img({
	width: '200px',
	height: '230px',
	borderRadius: '8px'
});

export const $UserMenuText = styled.h2({
	textAlign: 'center',
	fontSize: '20px',
	fontWeight: '500',
	color: '#e4e4e4'
});

export const $UserInfoFollowWrapper = styled.div({
	marginTop: '20px',
	display: 'flex',
	gap: '30px'
});

export const $UserInfoFollowItem = styled.div({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px',
	justifyContent: 'center',
	alignItems: 'center'
});

export const $UserInfoFollowItemText = styled.h2({
	color: '#ffffff',
	fontWeight: '500',
	fontSize: '26px'
});
