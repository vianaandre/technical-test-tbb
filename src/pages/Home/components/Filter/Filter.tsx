import React, { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { ContainerFilter } from './styles';
import { useApp } from 'common/hooks/useApp';
import { Checkbox } from 'components/Form';
import { SkeletonComponent } from './Skeleton';
import { Filter as FilterIcon, Close } from 'components/Icons';
import { theme } from 'common/styles/theme';
import { IconButton } from 'components/IconButton';
import { Empty } from 'components/Empty';

export const Filter: React.FC = () => {
	const { categories, onFilterPerCategory, catgoriesSelected, loadingProducts } = useApp();
	const [ isShowFilter, setIsShowFilter ] = useState<boolean>(false);

	useEffect(() => {
		if(isShowFilter) {
			document.body.style.overflow = 'hidden';
		}
	}, []);

	return (
		<ContainerFilter>
			<header>
				<h4 className='normal'>Filtros</h4>
				<button type="button" className='mobile' onClick={() => setIsShowFilter(true)}>
					<h4 >Filtro</h4>
					<div className='icon_filter'>
						<FilterIcon  width={24} height={32} color={theme.colors.PRIMARY.DARK} />
					</div>
				</button>
			</header>
			<div className={`categories ${isShowFilter ? 'active' : ''}`} onClick={(event) => {
				if((event.target as HTMLDivElement).classList.contains('active')) {
					setIsShowFilter(false);
				}
			}}>
				<div className='content'>
					<header>
						<div className='btn_close'>
							<IconButton type="button" onClick={() => setIsShowFilter(false)}>
								<Close width={24} height={24} color={theme.colors.GREY[500]} />
							</IconButton>
						</div>
						<h6>Filtros</h6>
					</header>
					<ul className={`${loadingProducts ? 'loading' : ''} mobile`}>
						{loadingProducts && (
							<SkeletonTheme>
								{[1, 2, 3, 4, 5, 6, 7].map(item => (
									<SkeletonComponent key={item} />
								))}
							</SkeletonTheme>
						)}
						{!loadingProducts && categories.length > 0 && categories.map(item => (
							<li key={item._id}>
								<Checkbox name={item._id} id={item._id} label={item.name} value={item._id} onChange={(event) => {
									onFilterPerCategory(event.target.value, catgoriesSelected);
								}} />
							</li>
						))}
						{!loadingProducts && categories.length <= 0 && (
							<div className='empty'>
								<Empty text="Nenhum filtro disponível" />
							</div>
						)}
					</ul>
					<footer>
						<button type="button" onClick={() => setIsShowFilter(false)}>Feito</button>
					</footer>
				</div>
			</div>
		</ContainerFilter>
	);
};