import { Link, Outlet } from 'react-router-dom';

import { LuArrowLeftCircle } from 'react-icons/lu';
import { $LayoutsScondaryEnd, $LayoutsScondaryWrapper, $LayoutTestEndText } from './style';

export const SecondaryLayout = () => {
	return (
		<$LayoutsScondaryWrapper>
			<Link to='/'>
				<$LayoutsScondaryEnd>
					<LuArrowLeftCircle color='#c6c6c6' size={20} />
					<$LayoutTestEndText>Назад</$LayoutTestEndText>
				</$LayoutsScondaryEnd>
			</Link>
			<Outlet />
		</$LayoutsScondaryWrapper>
	);
};
