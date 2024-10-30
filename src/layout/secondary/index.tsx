import { Link, Outlet, useLocation } from 'react-router-dom';
import { LuArrowLeftCircle } from 'react-icons/lu';
import { $LayoutsScondaryEnd, $LayoutsScondaryWrapper, $LayoutTestEndText } from './style';
import { motion } from 'framer-motion';
import { useUrlContext } from '../../hooks/useUrlContext';
export const SecondaryLayout = () => {
	const { url, setUrl } = useUrlContext();
	const { pathname } = useLocation();
	return (
		<$LayoutsScondaryWrapper>
			<motion.div whileHover={{ scale: 1.008, transition: { duration: 0.3 } }} transition={{ duration: 0.4 }}>
				<Link onClick={() => setUrl(pathname === url ? '/' : url)} to={url === pathname ? '/' : url}>
					<$LayoutsScondaryEnd>
						<LuArrowLeftCircle color='#c6c6c6' size={20} />
						<$LayoutTestEndText>Назад</$LayoutTestEndText>
					</$LayoutsScondaryEnd>
				</Link>
			</motion.div>
			<Outlet />
		</$LayoutsScondaryWrapper>
	);
};
