import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    id: string;
    placeholder: string;
    defaultValue?: string;
    error?: string;
    icon?: {
        icon: React.ReactNode;
        direction: 'left' | 'right';
    };
}