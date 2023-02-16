import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { ContainerSkeleton } from './styles';

export const SkeletonComponent: React.FC = () => {
	return (
		<ContainerSkeleton>
			<div className='normal'>
				<Skeleton count={1} width="100%" height={239} />
			</div>
			<div className='desktop'>
				<Skeleton count={1} width="100%" height={200} />
			</div>
			<div className='tablet'>
				<Skeleton count={1} width="100%" height={225} />
			</div>
			<div className='mobile'>
				<Skeleton count={1} width="100%" height={220} />
			</div>
			<p>
				<Skeleton count={1} width="100%" height={28} />
			</p>
			<p>
				<Skeleton count={1} width="100%" height={28} />
			</p>
		</ContainerSkeleton>
	);
};