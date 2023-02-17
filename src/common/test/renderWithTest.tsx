import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render } from '@testing-library/react';
import { Theme } from 'common/styles/styles';
import { GlobalStyles } from 'common/styles/globalStyles';

export function renderWithTheme(children: React.ReactNode, theme: Theme) {
	return render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</React.StrictMode>,
	);
}