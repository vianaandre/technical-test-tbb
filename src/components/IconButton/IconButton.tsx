import React from 'react';
import { IconButtonProps } from './interface';

import { ContainerIconButton } from './styles';

export const IconButton: React.FC<IconButtonProps> = ({ children, ...rest }) => {
	return (
		<ContainerIconButton {...rest}>
			{children}
		</ContainerIconButton>
	);
};