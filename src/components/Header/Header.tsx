import React from 'react';

import { ContainerHeader, ContainerHeaderForm } from './styles';
import { Container } from 'common/styles/container';
import { Input } from 'components/Form/Input';
import { Search } from 'components/Icons';
import { theme } from 'common/styles/theme';
import { useApp } from 'common/hooks/useApp';

export const Header: React.FC = () => {
	const { onSearchProduct, onSearchSubmit } = useApp();

	return (
		<ContainerHeader>
			<Container>
				<h1><strong>O que você</strong> está procurando?</h1>
				<ContainerHeaderForm onSubmit={onSearchSubmit}>
					<Input 
						name='search'
						id='search'
						placeholder='BUSCAR PRODUTO...'
						type='text'
						icon={{
							icon: <Search width={32} height={32} color={theme.colors.PRIMARY.MAIN} />,
							direction: 'right'
						}}
						onChange={(event) => onSearchProduct(event.target.value)}
					/>
				</ContainerHeaderForm>
			</Container>
		</ContainerHeader>
	);
};