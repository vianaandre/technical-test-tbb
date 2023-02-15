import { CategoryProps } from './CategoryProps';
import { ImageProps } from './ImageProps';

export interface ProductProps {
    name: string;
    shortDescription: string;
    id: string;
    images: ImageProps[];
    category: CategoryProps;
}