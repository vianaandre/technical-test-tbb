import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { ContainerSkeleton } from './styles';

export const SkeletonComponent: React.FC = () => {
	return (
		<ContainerSkeleton>
			<div>
				<Skeleton count={1} width="100%" height={27} />
			</div>
			<p>
				<Skeleton count={1} width="100%" height={27} />
			</p>
		</ContainerSkeleton>
	);
};