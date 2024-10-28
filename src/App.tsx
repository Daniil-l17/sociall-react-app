import '@mantine/core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router';
import { ToastContainer } from 'react-toastify';
function App() {
	const queyClient = new QueryClient();
	return (
		<MantineProvider defaultColorScheme='dark'>
			<QueryClientProvider client={queyClient}>
				<ToastContainer />
				<Router />
			</QueryClientProvider>
		</MantineProvider>
	);
}

export default App;
