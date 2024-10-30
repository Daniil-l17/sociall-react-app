import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../page/Home';
import { Users } from '../page/Users';
import { SecondaryLayout } from '../layout/secondary';
import { Layout } from '../layout/main';
import { Subscribers } from '../page/Subscribers';
import { Post } from '../page/Post';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/' element={<SecondaryLayout />}>
						<Route path='/users/:id' element={<Users />} />
						<Route path='/posts/:id' element={<Post />} />
						<Route path='/subscribers' element={<Subscribers />} />
						<Route path='/subscriptions' element={<Subscribers />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
