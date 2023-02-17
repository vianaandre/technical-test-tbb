import { theme } from 'common/styles/theme';
import React, { createContext, useContext } from 'react';
import { ToastContainer, toast, TypeOptions } from 'react-toastify';

interface ToastProps {
    message: string;
    type: TypeOptions;
    timeout?: number;
}

interface ToastContextProps {
    toast: ({ message, type }: ToastProps) => void;
}

export const ToastContext = createContext({} as ToastContextProps);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const toastActive = ({ message, type }: ToastProps) => toast(message, {
		type,
	});

	return (
		<ToastContext.Provider value={{ toast: toastActive }}>
			<ToastContainer
				autoClose={3000}
				position="top-right"
				style={{
					fontSize: theme.fonts.sizes[14],
					fontWeight: 500,
					fontFamily: theme.fonts.family.PRIMARY,
				}}
			/>
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = (): ToastContextProps => {
	const context = useContext(ToastContext);
	return context;
};
