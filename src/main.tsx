import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './App';
import { GlobalStyles } from 'common/styles/globalStyles';
import { theme } from 'common/styles/theme';
import { ToastProvider } from 'common/hooks/useToast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ToastProvider>
				<GlobalStyles />
				<App />
			</ToastProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
