import React from 'react';

import { LayoutHome } from 'layout/Home';
import { Filter } from './components/Filter';
import { Container } from 'common/styles/container';
import { Products } from './components/Products';
import { ContainerHome } from 'common/styles/pages/Home';

export const Home: React.FC = () => {
	return (
		<LayoutHome>
			<Container>
				<ContainerHome>
					<Filter />
					<Products />
				</ContainerHome>
			</Container>
		</LayoutHome>
	);
};