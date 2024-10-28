import { Link, Outlet } from 'react-router-dom';
import { LuArrowLeftCircle } from 'react-icons/lu';
import { $LayoutsScondaryEnd, $LayoutsScondaryWrapper, $LayoutTestEndText } from './style';
import { motion } from 'framer-motion';
export const SecondaryLayout = () => {
	return (
		<$LayoutsScondaryWrapper>
			<motion.div whileHover={{ scale: 1.008, transition: { duration: 0.3 } }} transition={{ duration: 0.4 }}>
				<Link to='/'>
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
