export type CategoryResponse = {
    id: string;
    name: string;
    user_id: string;
    organization_id?: (string | null);
    color?: (string | null);
    order?: number;
    created_at: string;
    updated_at: string;
};
