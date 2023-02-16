import React from 'react';

import { IconsProps } from 'common/interface/IconsProps';

export const Filter: React.FC<IconsProps> = ({ color, height, width }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15 19.88C15.04 20.18 14.94 20.5 14.71 20.71C14.32 21.1 13.69 21.1 13.3 20.71L9.29001 16.7C9.06001 16.47 8.96001 16.16 9.00001 15.87V10.75L4.21001 4.62C3.87001 4.19 3.95001 3.56 4.38001 3.22C4.57001 3.08 4.78001 3 5.00001 3H19C19.22 3 19.43 3.08 19.62 3.22C20.05 3.56 20.13 4.19 19.79 4.62L15 10.75V19.88ZM7.04001 5L11 10.06V15.58L13 17.58V10.05L16.96 5H7.04001Z" fill={color}/>
		</svg>
	);
};