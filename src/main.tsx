import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import { App } from './App';
import { GlobalStyles } from 'common/styles/globalStyles';
import { theme } from 'common/styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
