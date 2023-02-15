import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    id: string;
    label: string;
    value: string;
}