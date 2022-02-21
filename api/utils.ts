import type { VercelRequest, VercelResponse, VercelRequestQuery } from '@vercel/node';

/**
 * Colors.
 * @link https://npm.im/tinycolor2
 */
import tinycolor, { ColorInput, ColorFormats } from 'tinycolor2';

/**
 * Convert a color to Hexadecimal (3, 4, 6, or 8)
 * @param {ColorInput} color - the input color to parse.
 * @param {3|4|6|8} length - the length of hex color to return
 * @returns {String} hexadecimal string
 */
export const toHex = (color: ColorInput, length: 3 | 4 | 6 | 8 = 6): string =>
	tinycolor(color).toString(`hex${length}`);

/**
 * Convert a color to RGBA object
 * @param {ColorInput} color - the input color to parse.
 * @returns {ColorFormats.RGBA} RGBA object
 */
export const toRgb = (color: ColorInput): ColorFormats.RGBA => tinycolor(color).toRgb();

/**
 * Convert a color to RGB string (for CSS)
 * @example toRgbString('f00') -> rgba(255, 0, 0, 1.0)
 * @param {ColorInput} color - the input color to parse.
 * @returns {String} RGB string
 */
export const toRgbString = (color: ColorInput): string => tinycolor(color).toString('rgb');

/**
 * Convert a color to RGBA array.
 * @example toRgbArray('f00') -> [255, 0, 0, 1]
 * @param {ColorInput} color - the input color to parse.
 * @returns {[number, number, number, number]} RGBA array
 */
export const toRgbArray = (color: ColorInput): any[] => Object.values(tinycolor(color).toRgb());

export { tinycolor as tc };

/**
 * Query Parameters
 * @link https://npm.im/@vercel/node
 */
export declare type QueryParams = {
	slug?: string;
	name?: string;
	color?: string;
	type?: string;
} & VercelRequestQuery;

export declare type Response = VercelResponse;
export declare type Request = VercelRequest;

const DAYS = 60 * 60 * 24; // 86400 = 1 day
const CACHE_BROWSER = 7 * DAYS; // 86400 * 7 days
const CACHE_CDN = 5 * DAYS; // 86400 * 5 days
const CONTENT_TYPE = 'image/svg+xml;charset=utf-8';

/**
 * Set preflight settings and headers on our response.
 * @param {Response} res
 * @returns {void}
 */
export function preflight(res: Response): void {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Content-Type', CONTENT_TYPE);
	if (process.env.NODE_ENV !== 'production') {
		res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=0, must-revalidate');
		return;
	}
	res.setHeader('Cache-Control', `public, max-age=${CACHE_BROWSER}, s-maxage=${CACHE_CDN}, immutable`);
}

/**
 * Converts a brand title into a slug/filename.
 * @param {String} title The title to convert
 * @returns {String}
 * @see {simple-icons}
 */
export function toSlug(title: string): string {
	return title
		.toLowerCase()
		.replace(/\+/g, 'plus')
		.replace(/\./g, 'dot')
		.replace(/&/g, 'and')
		.replace(/đ/g, 'd')
		.replace(/ħ/g, 'h')
		.replace(/ı/g, 'i')
		.replace(/ĸ/g, 'k')
		.replace(/ŀ/g, 'l')
		.replace(/ł/g, 'l')
		.replace(/ß/g, 'ss')
		.replace(/ŧ/g, 't')
		.normalize('NFD')
		.replace(/[^a-z0-9]/g, '');
}

/**
 * Rewrites our icon's SVG with normalized attributes and desired fill color.
 * @param {string} svg - our svg string
 * @param {{ fill?: string }} [fill] - the fill color
 * @returns {string} the rewritten svg string
 * @see {simple-icons}
 */

export function toSVG(svg: string, props: Record<string, any> = {}): string {
	let properties = Object.assign(
		{},
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 24 24',
			role: 'img',
		},
		props,
		{ fill: tinycolor(props.fill).toHex8String() }
	);
	return svg.replace(
		/^<svg[^>]+>/,
		`<svg ${<string>Object.entries(properties)
			.map(([k, v]) => `${k}="${v}"`)
			.join(' ')}>`
	);
}
