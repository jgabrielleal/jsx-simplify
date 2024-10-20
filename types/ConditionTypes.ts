import { ReactNode } from 'react';

export interface ConditionProviderTypes {
    condition?: boolean | string | null | undefined;
    children?: ReactNode;
}

export interface ConditionTypes {
    condition?: boolean | string | null | undefined;
    children?: ReactNode;
}

export interface ConditionErrorTypes {
    children?: ReactNode;
}