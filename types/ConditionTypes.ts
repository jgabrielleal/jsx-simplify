import { ReactNode } from 'react';

export interface ConditionProviderTypes {
    condition?: boolean | null | undefined;
    children?: ReactNode;
}

export interface ConditionTypes {
    condition?: boolean | null | undefined;
    children?: ReactNode;
}

export interface ConditionErrorTypes {
    children?: ReactNode;
}