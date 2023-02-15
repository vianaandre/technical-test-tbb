import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { CategoryProps } from 'common/interface/CategoryProps';
import { ProductProps } from 'common/interface/ProductProps';
import api from 'services/api';
import { FETCH_PRODUCTS } from 'services/routes';

interface AppContextProps {
    categories: CategoryProps[];
    products: ProductProps[];
}

const AppContext = createContext({} as AppContextProps);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [ isCategories, setIsCategories ] = useState<CategoryProps[]>([]);
	const [ isProducts, setIsProducts ] = useState<ProductProps[]>([]);
	const [ isSearch, setIsSearch ] = useState<ProductProps[]>();

	const handleFormattedProducts = useCallback((products: ProductProps[]) => {
		const categories = [] as CategoryProps[];

		products.forEach(item => {
			if(categories.find(i => item.category._id === i._id)) return;

			categories.push(item.category);
		});

		setIsCategories(categories);
		setIsProducts(products);
	}, []);

	const handleLoadProducts = useCallback(async () => {
		try {
			const { data } = await api.get(FETCH_PRODUCTS) as { data: { nodes: ProductProps[] } };

			handleFormattedProducts(data.nodes);
		} catch(err: any) {
			console.log(err);
		}
	}, []);

	console.log(import.meta.env.VITE_URL_API);

	useEffect(() => {
		handleLoadProducts();
	}, []);

	return (
		<AppContext.Provider value={{ 
			categories: isCategories,
			products: isProducts
		}}>
			{children}
		</AppContext.Provider>
	);
};

export function useApp(): AppContextProps {
	const context = useContext(AppContext);
	return context;
}