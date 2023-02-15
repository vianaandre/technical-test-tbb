export const theme = {
	spacing(size: number) {
		return `${size * 0.5}rem`;
	},
	colors: {
		PRIMARY: {
			DARK: '#14003D',
			MAIN: '#1526C0',
		},
		TEXT: {
			DARK: '#0C0121',
			MAIN: '#2B2A30'
		},
		GREY: {
			500: '#757575'
		}, 
		WHITE: '#FFFFFF',
		BLACK: '#000000'
	},
	fonts: {
		sizes: {
			64: '4rem',
			56: '3.5rem',
			48: '3rem',
			40: '2.5rem',
			32: '2rem',
			24: '1.5rem',
			20: '1.25rem',
			18: '1.125rem',
			16: '1rem',
			14: '0.875rem',
			12: '0.75rem',
			10: '0.625rem',
		},
		family: {
			PRIMARY: '"Inter", "Roboto", sans-serif',
		},
		height: {
			100: '100%',
			110: '110%',
			125: '125%',
			150: '150%',
			160: '160%',
		},
	},
	zIndex: {
		BASE: 1010,
		DROPDOWN: 1015,
		MENU: 1020,
		OVERLAY: 1030,
		MODAL: 1040,
	},
	breakpoints: {
		mobile: '767px',
		tablet: '1024px',
		desktop: '1192px',
	},
};