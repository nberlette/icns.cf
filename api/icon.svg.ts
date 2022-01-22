import type {
  VercelRequest as Request,
  VercelResponse as Response,
  VercelRequestQuery as RequestQuery
} from '@vercel/node';
import type { SimpleIcon } from 'simple-icons';

import icons from 'simple-icons';
import tc from 'tinycolor2';

/**
 * Converts a brand title into a slug/filename.
 * @param {String} title The title to convert
 */
function toSlug (title: string): string {
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

function toSVG(svg: string, props: Record<string, any> = {}): string {
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

/*
declare const DAYS: number;
declare const CACHE_BROWSER: number;
declare const CACHE_CDN: number;
declare const CONTENT_TYPE: string;
*/

declare type QueryParams = {
  slug?: string,
  name?: string,
  color?: string,
  type?: string,
} & RequestQuery;

const DAYS = 60 * 60 * 24; 		// 86400 = 1 day
const CACHE_BROWSER = 0.01 * DAYS; 	// 86400 * 7 days
const CACHE_CDN = 0.01 * DAYS;		// 86400 * 5 days
const CONTENT_TYPE = 'image/svg+xml;charset=utf-8';

function preflight (res: Response) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", '*');
  res.setHeader("Access-Control-Allow-Headers", '*');

  res.setHeader('Content-Type', CONTENT_TYPE);
  if (process.env.NODE_ENV !== 'production') {
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=0, must-revalidate');
    return;
  }
  res.setHeader('Cache-Control', `public, max-age=${CACHE_BROWSER}, s-maxage=${CACHE_CDN}, immutable`);
}

export default async function handler (req: Request, res: Response): Promise<any> {
  let {
    slug,
    name,
    color = 'default',
    type = 'svg'
  }: QueryParams = req.query;

  // set cache-control and other headers before takeoff
  preflight(res);
  
  // res.send() helper function
  const send = (data: any, code = 200, type = 'image/svg+xml;charset=utf-8'): any => {
    res.setHeader('Content-Type', type);
    console.log("[HTTP][%d][%s][%s]: %s", code, req.method, type, req.url);
    return res.status(code).send(data);
  }

  // json helper function
  const json = (data: any, code = 200, spaces = 2): any => {
    return send(JSON.stringify(data, null, spaces), code, 'application/json;charset=utf-8')
  }

  if (req.method !== 'GET') {
    return json({ statusText: 'unauthorized request method', status: 403 }, 403, 2);
  }

  console.log(JSON.stringify(req.query, null, 0))

  let _slug: string = slug || name || '';
  let _type: string = type || 'svg';
  let _color: string = color || 'default';

  //if (~slug.indexOf('.')) [slug,  type] = slug.split('.') || [_slug, _type];
  //if (~slug.indexOf('/')) [color, slug] = slug.split('/') || [_color, slug];
  if (~_slug.indexOf('-')) [slug, color] = _slug.split('-') || [slug, color];

  let icon: SimpleIcon = icons.Get(slug);
  let icon_alt: SimpleIcon = icons.Get(color);
  
  if ((!icon || typeof icon == 'undefined') && (!!icon_alt && typeof icon_alt != 'undefined')) 
	  icon = icon_alt;
  if (!icon || typeof icon == 'undefined')
	  return json({ statusText: "Not found", status: 404 }, 404);
  
  const fill: string = (tc(color).isValid() && color != 'default' ? color : icon.hex);
  const response: string = toSVG(icon.svg, { fill });

  return send(response, 200);
}

