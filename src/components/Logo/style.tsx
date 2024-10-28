import styled from '@emotion/styled';

export const $TextLogo = styled.h1({
  fontSize: '24px',
  fontWeight: '700',
  userSelect: 'none',
});

export const $LogoWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
});

export const ImageLogo = styled.img({
  width: '40px',
  cursor: 'pointer',
  pointerEvents: 'none',
  height: '40px',
});
