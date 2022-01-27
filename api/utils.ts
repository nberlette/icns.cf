import type {
  VercelRequest,
  VercelResponse,
  VercelRequestQuery
} from '@vercel/node';
import tc from 'tinycolor2';

export { tc };

export declare type QueryParams = {
  slug?: string,
  name?: string,
  color?: string,
  type?: string,
} & VercelRequestQuery;

export declare type Response = VercelResponse;
export declare type Request = VercelRequest;

const DAYS = 60 * 60 * 24; 		// 86400 = 1 day
const CACHE_BROWSER = 7 * DAYS; 	// 86400 * 7 days
const CACHE_CDN = 5 * DAYS;		// 86400 * 5 days
const CONTENT_TYPE = 'image/svg+xml;charset=utf-8';

export function preflight (res: VercelResponse): void {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", 'GET');
  res.setHeader("Access-Control-Allow-Headers", '*');
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
 */
export function toSlug (title: string): string {
  return title.toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/\./g, "dot")
    .replace(/&/g, "and")
    .replace(/đ/g, "d")
    .replace(/ħ/g, "h")
    .replace(/ı/g, "i")
    .replace(/ĸ/g, "k")
    .replace(/ŀ/g, "l")
    .replace(/ł/g, "l")
    .replace(/ß/g, "ss")
    .replace(/ŧ/g, "t")
    .normalize("NFD")
    .replace(/[^a-z0-9]/g, "");
}

/**
 * Rewrites our icon's SVG with normalized attributes and desired fill color.
 * @param {string} svg - our svg string
 * @param {{ fill?: string }} [fill] - the fill color
 * @returns {string} the rewritten svg string
 */

export function toSVG(svg: string, props: Record<string, any> = {}): string {
  let properties = Object.assign({},
    {
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 24 24',
      'role': 'img'
    },
    props,
    { 'fill': tc(props.fill).toHex8String() }
  );
  return svg.replace(/^<svg[^>]+>/, `<svg ${<string>(Object.entries(properties).map(([k, v]) => `${k}="${v}"`).join(' '))}>`);
}
