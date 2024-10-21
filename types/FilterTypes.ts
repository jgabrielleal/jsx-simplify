export interface FilterTypes<T> {
    items: T[];
    condition: (item: T) => boolean;
    children: (item: T, index: number) => ReactNode;
}