import React, { createContext, useContext } from 'react';
import { ConditionProviderTypes, ConditionTypes, ConditionErrorTypes } from '../types/ConditionTypes';

const context = createContext<boolean | undefined>(undefined);

function ConditionProvider({ condition, children }: ConditionProviderTypes) {
    return (
        <context.Provider value={condition}>
            {children}
        </context.Provider>
    );
}

export function Condition({ condition, children }: ConditionTypes) {
    return (
        <ConditionProvider condition={condition}>
            {condition ? children : null}
        </ConditionProvider>
    );
}

export function ConditionError({ children }: ConditionErrorTypes) {
    const condition = useContext(context);
    return !condition ? children : null;
}
