import React from 'react';

import { ContainerEmpty } from './styles';
import { EmptyProps } from './interface';

export const Empty: React.FC<EmptyProps> = ({ text }) => {
	return (
		<ContainerEmpty>
			<h6>{text}</h6>
		</ContainerEmpty>
	);
};