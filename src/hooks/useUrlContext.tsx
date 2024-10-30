import { useContext } from 'react';
import { UrlContext } from '../App';

export const useUrlContext = () => {
	return useContext(UrlContext);
};
