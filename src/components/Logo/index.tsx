import { $LogoWrapper, $TextLogo, ImageLogo } from './style';

export const Logo = () => {
  return (
    <$LogoWrapper>
      <ImageLogo alt="logo" src={'/logo.png'} width={40} height={40} />
      <$TextLogo>Network Social</$TextLogo>
    </$LogoWrapper>
  );
};
