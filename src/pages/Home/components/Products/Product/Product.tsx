import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { ContainerProduct } from './styles';
import { ProductProps } from './interface';

export const Product: React.FC<ProductProps> = ({ images, name }) => {
	const [isIndexCarousel, setIsIndexCarousel] = useState<number>(0);

	const handleSelect = (selectedIndex: number) => {
		setIsIndexCarousel(selectedIndex);
	};

	return (
		<ContainerProduct>
			<Carousel slide={false} activeIndex={isIndexCarousel} onSelect={handleSelect}>
				{images.map((item, index) => (
					<Carousel.Item key={item.asset.url}>
						<img src={item.asset.url} alt={item.alt} tabIndex={index}  />
					</Carousel.Item>
				))}
			</Carousel>
			<h6>{name}</h6>
		</ContainerProduct>
	);
};