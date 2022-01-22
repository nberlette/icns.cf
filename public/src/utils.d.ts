import type { VercelResponse as Response, VercelRequestQuery as RequestQuery } from '@vercel/node';
export declare type QueryParams = {
    slug?: string;
    name?: string;
    color?: string;
    type?: string;
} & RequestQuery;
export declare function preflight(res: Response): void;
export declare function toSlug(title: string): string;
export declare function toSVG(svg: string, props?: Record<string, any>): string;
