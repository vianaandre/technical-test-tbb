import React from 'react';

import { CheckboxProps } from './interface';
import { ContainerCheckbox, ContainerCheckboxInput } from './styles';

export const Checkbox: React.FC<CheckboxProps> = ({ id, name, label, value, ...rest }) => {
	return (
		<ContainerCheckbox>
			<ContainerCheckboxInput type="checkbox" id={id} name={name} value={value} {...rest}/>
			<label htmlFor={id}>{label}</label>
		</ContainerCheckbox>
	);
};