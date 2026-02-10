export type DependencyItem = {
    name: string;
    version: (string | null);
    registry: string;
    is_dev: boolean;
};
