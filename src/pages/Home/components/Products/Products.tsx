import React from 'react';

import { ContainerProducts } from './styles';
import { useApp } from 'common/hooks/useApp';
import { Product } from './Product';

export const Products: React.FC = () => {
	const { products } = useApp();

	return (
		<ContainerProducts>
			<header>
				<h4>{products.length === 1 ? `${products.length} resultado` : `${products.length} resultados`}</h4>
			</header>
			<ul>
				{products.map(item => (
					<Product key={item.id} images={item.images} name={item.shortDescription} />
				))}
			</ul>
		</ContainerProducts>
	);
};