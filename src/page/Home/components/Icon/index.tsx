import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa';

export const HeartIcon = () => {
	return <FaRegHeart style={{ fontSize: '18px', cursor: 'pointer' }} />;
};

export const HeartLike = () => {
	return <FaHeart style={{ fill: 'red', fontSize: '18px', cursor: 'pointer' }} />;
};

export const CommentIcon = () => {
	return <FaRegComment style={{ fontSize: '18px', cursor: 'pointer' }} />;
};
