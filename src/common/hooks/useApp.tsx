import React, { createContext, FormEvent, useCallback, useContext, useEffect, useState } from 'react';

import { CategoryProps } from 'common/interface/CategoryProps';
import { ProductProps } from 'common/interface/ProductProps';
import { FETCH_PRODUCTS } from 'services/routes';
import { useFetch } from './useFetch';

interface AppContextProps {
    categories: CategoryProps[];
    products: ProductProps[];
    search?: ProductProps[];
    catgoriesSelected: string[];
    loadingProducts: boolean;
    onSearchProduct: (search: string) => void;
    onSearchSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onFilterPerCategory: (_id: string, categoriesSelected: string[]) => void;
}

const AppContext = createContext({} as AppContextProps);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { data, error } = useFetch<{
        nodes: ProductProps[]
    }>(FETCH_PRODUCTS);

	const [ isCategories, setIsCategories ] = useState<CategoryProps[]>([]);
	const [ isProducts, setIsProducts ] = useState<ProductProps[]>([]);
	const [ isSearch, setIsSearch ] = useState<ProductProps[]>();
	const [ isCatgoriesSelected, setIsCategoriesSelected ] = useState<string[]>([]);
	const [ isLoadingProducts, setIsLoadingProducts ] = useState<boolean>(true);

	const handleFormattedProducts = useCallback((products: ProductProps[]) => {
		const categories = [] as CategoryProps[];

		products.forEach(item => {
			if(categories.find(i => item.category._id === i._id)) return;

			categories.push(item.category);
		});

		setIsCategories(categories);
		setIsProducts(products);
	}, []);

	const handleSearchProduct = useCallback((search: string) => {
		if(search.length <= 0) {
			setIsSearch(undefined);
			return;
		}

		const isSearchProducts = [] as ProductProps[];

		isProducts.forEach(item => {
			if(item.name.toLowerCase().includes(search.toLowerCase())) {
				isSearchProducts.push(item);
			}
		});

		setIsSearch(isSearchProducts);
	}, [isProducts]);

	const handleSearchSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.target as HTMLFormElement);
		let isValue;
		for (const [key, value] of data.entries()) { 
			if(key === 'search') {
				isValue = value;
			}
		}
		handleSearchProduct(isValue as string);
	}, []);
    
	const handleFilterPerCategory = useCallback((_id: string, categoriesSelected: string[]) => {
		let isSearchProducts = [] as ProductProps[];
		if(categoriesSelected && categoriesSelected.find(i => i === _id)) {
			isSearchProducts = isProducts.filter(item => categoriesSelected.filter(i => i !== _id).includes(item.category._id));
			setIsCategoriesSelected(current => current.filter(i => i !== _id));
		} else {
			isSearchProducts = isProducts.filter(item => [...categoriesSelected, _id].includes(item.category._id));
			setIsCategoriesSelected(current => [...current, _id]);

		}

		if(isSearchProducts.length <= 0) {
			setIsSearch(undefined);
		} else {
			setIsSearch(isSearchProducts);
		}
	}, [isProducts]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoadingProducts(false);
		}, 1000);
		if(!error && data) {
			handleFormattedProducts(data.nodes);
		}
		if(error) {
			setIsLoadingProducts(false);
		}

		return () => clearTimeout(timeout);
	}, [data, error]);

	return (
		<AppContext.Provider value={{ 
			categories: isCategories,
			products: isProducts,
			search: isSearch,
			catgoriesSelected: isCatgoriesSelected,
			loadingProducts: isLoadingProducts,
			onSearchProduct: handleSearchProduct, 
			onSearchSubmit: handleSearchSubmit,
			onFilterPerCategory: handleFilterPerCategory
		}}>
			{children}
		</AppContext.Provider>
	);
};

export function useApp(): AppContextProps {
	const context = useContext(AppContext);
	return context;
}