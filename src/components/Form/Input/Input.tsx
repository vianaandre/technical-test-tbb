import React, { useState } from 'react';

import { ContainerInput } from './styles';
import { InputProps } from './interface';

export const Input: React.FC<InputProps> = ({ id, name, placeholder, error, icon, ...rest }) => {
	const [ isFocus, setIsFocus ] = useState<boolean>(false);

	return (
		<ContainerInput className={`${isFocus ? 'focus' : ''}`}>
			{icon && icon.direction === 'left' && icon.icon}
			<input name={name} id={id} placeholder={placeholder} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} {...rest} />
			{error && (
				<p>{error}</p>
			)}
			{icon && icon.direction === 'right' && icon.icon}
		</ContainerInput>
	);
};