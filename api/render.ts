import type {
  VercelRequest as Request,
  VercelResponse as Response
} from '@vercel/node';
import icons, { SimpleIcon } from 'simple-icons';
import tc from 'tinycolor2';
import { preflight, toSVG, toSlug, QueryParams } from '../src/utils';

const fallback: string = 'simpleicons';

export default async function handler (req: Request, res: Response): Promise<any> {
  let {
    slug,
    name,
    color = 'default',
    type = 'svg'
  }: QueryParams = req.query;

  // set cache-control and other headers before takeoff
  preflight(res);
  if (req.method !== 'GET')
    return res.status(403).send('forbidden');

  [slug, color] = (~slug.indexOf('-'))
    ? slug.split('-')
    : [toSlug(slug || name || fallback), toSlug(color)];

  let icon_alt: SimpleIcon = icons.Get(color) || null;
  let icon: SimpleIcon = icons.Get(slug) || icon_alt || icons.Get(fallback);

  if (!icon || typeof icon === 'undefined')
    return res.status(404).send('not found');
  
  console.log("[%s][HTTP][%s]: %s", new Date().toJSON(), req.method, req.url);
  const fill: string = (tc(color).isValid() && color !== 'default' ? color : icon.hex);
  return res.status(200).send(toSVG(icon.svg, { fill }));
}

