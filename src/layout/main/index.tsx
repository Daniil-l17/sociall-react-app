import { Outlet } from 'react-router-dom';
import { $LayoutWrapper, $LayoutWrapperContext, $LayoutContentFlex } from './style';
import { Header } from '../../components/Header';
import { Dasboard } from '../../components/Dasboard';

export const Layout = () => {
	return (
		<$LayoutWrapper>
			<Header />
			<$LayoutWrapperContext>
				<Dasboard />
				<$LayoutContentFlex>
					<Outlet />
				</$LayoutContentFlex>
			</$LayoutWrapperContext>
		</$LayoutWrapper>
	);
};
