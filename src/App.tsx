import '@mantine/core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router';
import { ToastContainer } from 'react-toastify';
import { createContext, useState } from 'react';

export const UrlContext = createContext({
	url: '',
	setUrl: (url: string) => {}
});

function App() {
	const queyClient = new QueryClient();
	const [url, setUrl] = useState('');
	return (
		<MantineProvider defaultColorScheme='dark'>
			<QueryClientProvider client={queyClient}>
				<ToastContainer />
				<UrlContext.Provider value={{ url, setUrl }}>
					<Router />
				</UrlContext.Provider>
			</QueryClientProvider>
		</MantineProvider>
	);
}

export default App;
