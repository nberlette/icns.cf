import type {
  VercelRequest as Request,
  VercelResponse as Response
} from '@vercel/node';
import type { SimpleIcon } from 'simple-icons';
import icons from 'simple-icons';
import tc from 'tinycolor2';

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

function toSVG(svg: string, props: Record<string, unknown> = {}): string {
  let properties = Object.assign({},
    {
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 24 24',
      'role': 'img'
    },
    props,
    { 'fill': tc(props.fill).toHex8String() }
  );
  return svg.replace(/^<svg[^>]+>/, `<svg ${<String>(Object.entries(properties).map(([k, v]) => `${k}="${v}"`).join(' '))}>`);
}

declare const DAYS: number;
declare const CACHE_BROWSER: number;
declare const CACHE_CDN: number;
declare const CONTENT_TYPE: string;

interface RequestQueryParams {
  slug: string;
  name?: string;
  color?: string;
  type?: 'svg' | 'png' | null;
};

const DAYS = 60 * 60 * 24; 		// 86400 = 1 day
const CACHE_BROWSER = 0.01 * DAYS; 	// 86400 * 7 days
const CACHE_CDN = 0.01 * DAYS;		// 86400 * 5 days
const CONTENT_TYPE = 'image/svg+xml;charset=utf-8';

res.prototype.cors = function cors (res: Response = this) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", '*');
  res.setHeader("Access-Control-Allow-Headers", '*');
}

res.prototype.preflight = function preflight (res: Response = this) {
  res.cors();
  res.setHeader('Content-Type', CONTENT_TYPE);
  if (process.env.NODE_ENV !== 'production') {
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=0, must-revalidate');
    return;
  }
  res.setHeader('Cache-Control', `public, max-age=${CACHE_BROWSER}, s-maxage=${CACHE_CDN}, immutable`);
}

export default async function handler (req: Request, res: Response): any {
  let {
    slug,
    name,
    color = 'default',
    type = 'svg'
  }: RequestQueryParams = req.query;

  // set cache-control and other headers before takeoff
  res.preflight();
  
  // res.send() helper function
  const send = (data: any, code = 200, type = 'image/svg+xml;charset=utf-8') => {
    res.setHeader('Content-Type', type);
    console.log("[HTTP][%d][%s][%s]: %s", code, req.method, type, req.url);
    return res.status(code).send(data);
  }

  // json helper function
  const json = (data: any, code = 200, spaces = 2) => {
    return send(JSON.stringify(data, null, spaces), code, 'application/json;charset=utf-8')
  }

  if (req.method !== 'GET') {
    return json({ statusText: 'unauthorized request method', status: 403 }, 403, 2);
  }

  console.log(JSON.stringify(req.query, null, 0))

  if (~slug.indexOf('.')) [slug,  type] = slug.split('.');
  if (~slug.indexOf('/')) [color, slug] = slug.split('/');
  if (~slug.indexOf('-')) [slug, color] = slug.split(/[-_]{1}/);

  let icon: SimpleIcon = icons.Get(slug);
  let icon_alt: SimpleIcon = icons.Get(color);
  
  if (!icon && icon_alt) icon = icon_alt;
  if (!icon) return json({ statusText: "Not found", status: 404 }, 404);
  
  const fill: string = (tc(color).isValid() && color != 'default' ? color : icon.hex);
  const response = toSVG(icon.svg, { fill })

  return send(response, 200);
}

