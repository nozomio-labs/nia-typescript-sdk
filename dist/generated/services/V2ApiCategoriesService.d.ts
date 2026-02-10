import type { CategoryListCompatResponse } from '../models/CategoryListCompatResponse';
import type { CategoryResponse } from '../models/CategoryResponse';
import type { routes__v2__categories__CategoryCreate } from '../models/routes__v2__categories__CategoryCreate';
import type { routes__v2__categories__CategoryUpdate } from '../models/routes__v2__categories__CategoryUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiCategoriesService {
    /**
     * List categories
     * List categories for the authenticated user/organization.
     * @param limit Number of categories to return
     * @param offset Number of categories to skip
     * @returns CategoryListCompatResponse Successful Response
     * @throws ApiError
     */
    static listCategoriesV2CategoriesGet(limit?: number, offset?: number): CancelablePromise<CategoryListCompatResponse>;
    /**
     * Create category
     * Create a new category for organizing data sources.
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    static createCategoryV2CategoriesPost(requestBody: routes__v2__categories__CategoryCreate): CancelablePromise<CategoryResponse>;
    /**
     * Update category
     * Update an existing category.
     * @param categoryId
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    static updateCategoryV2CategoriesCategoryIdPatch(categoryId: string, requestBody: routes__v2__categories__CategoryUpdate): CancelablePromise<CategoryResponse>;
    /**
     * Delete category
     * Delete a category. Data sources with this category will become uncategorized.
     * @param categoryId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteCategoryV2CategoriesCategoryIdDelete(categoryId: string): CancelablePromise<any>;
}
