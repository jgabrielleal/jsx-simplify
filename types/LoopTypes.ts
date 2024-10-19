import { ReactNode } from 'react';

export interface LoopTypes<T> {
    items: T[];
    children: (item: T) => ReactNode;
}