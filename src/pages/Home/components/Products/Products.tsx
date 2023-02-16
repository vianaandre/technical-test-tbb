import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { ContainerProducts } from './styles';
import { useApp } from 'common/hooks/useApp';
import { Product } from './Product';
import { Empty } from 'components/Empty';
import { SkeletonComponent } from './Skeleton';

export const Products: React.FC = () => {
	const { products, search, loadingProducts } = useApp();

	return (
		<ContainerProducts>
			<header>
				<h4>
					{!search && (
						products.length === 1 ? `${products.length} resultado` : `${products.length > 1 ? `${products.length} resultados` : 'Nenhum resultado'}`
					)}
					{search && (
						search.length === 1 ? `${search.length} resultado` : `${search.length > 1 ? `${search.length} resultados` : 'Nenhum resultado'}`
					)}
				</h4>
			</header>
			<ul>
				{loadingProducts && (
					<SkeletonTheme>
						{[1, 2, 3, 4, 5, 6, 7].map(item => (
							<SkeletonComponent key={item} />
						))}
					</SkeletonTheme>
				)}
				{!loadingProducts && !search && products.length > 0 && products.map(item => (
					<Product key={item.id} images={item.images} name={item.name} />
				))}
				{!loadingProducts && !search && products.length <= 0 && (
					<Empty text='Nada encontrado' />
				)}
				{!loadingProducts && search && search.length > 0 && search.map(item => (
					<Product key={item.id} images={item.images} name={item.name} />
				))}
				{!loadingProducts && search && search.length <= 0 && (
					<Empty text='Nada encontrado' />
				)}
			</ul>
		</ContainerProducts>
	);
};