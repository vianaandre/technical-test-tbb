import React from 'react';

import { ContainerFilter } from './styles';
import { useApp } from 'common/hooks/useApp';
import { Checkbox } from 'components/Form';

export const Filter: React.FC = () => {
	const { categories } = useApp();

	return (
		<ContainerFilter>
			<header>
				<h4>Filtros</h4>
			</header>
			<ul>
				{categories.map(item => (
					<li key={item._id}>
						<Checkbox name={item._id} id={item._id} label={item.name} value={item._id} />
					</li>
				))}
			</ul>
		</ContainerFilter>
	);
};