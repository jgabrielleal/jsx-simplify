import React from 'react';
import { FilterTypes } from '../types/FilterTypes';

export function Filter<T>({ items, condition, children }: FilterTypes<T>) {
    return (
        <>
            {items.filter(condition).map((item: T, index: number) => (
                <React.Fragment key={index}>
                    {children(item, index)}
                </React.Fragment>
            ))}
        </>
    );
}
