import React, { ReactNode } from 'react';
import { LoopTypes } from '../types/LoopTypes';

export function Loop<T>({ items, children }: LoopTypes<T>) {
    return (
        <>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {children(item, index)}
                </React.Fragment>
            ))}
        </>
    );
}
