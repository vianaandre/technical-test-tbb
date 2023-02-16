import React from 'react';

import { ContainerProduct } from './styles';
import { ProductProps } from './interface';

export const Product: React.FC<ProductProps> = ({ images, name }) => {
	return (
		<ContainerProduct>
			<img src={images[0].asset.url} alt={images[0].alt} />
			<h6>{name}</h6>
		</ContainerProduct>
	);
};