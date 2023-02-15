import React from 'react';

import { AppProvider } from 'common/hooks/useApp';
import { Header } from 'components/Header';

export const LayoutHome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<AppProvider>
			<Header />
			{children}
		</AppProvider>
	);
};