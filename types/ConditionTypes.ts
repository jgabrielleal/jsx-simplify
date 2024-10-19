import { ReactNode } from 'react';

export interface ConditionProviderTypes {
    condition?: boolean;
    children?: ReactNode;
}

export interface ConditionTypes {
    condition?: boolean;
    children?: ReactNode;
}

export interface ConditionErrorTypes {
    children?: ReactNode;
}