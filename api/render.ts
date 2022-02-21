import icons, { SimpleIcon } from 'simple-icons';
import type { Request, Response, QueryParams } from './utils';
import { tc, preflight, toSVG, toSlug } from './utils';

const fallback: string = 'simpleicons';

export default async function handler(req: Request, res: Response): Promise<any> {
	let { slug = fallback, color = 'default', type = 'svg' }: QueryParams = req.query;

	// set cache-control and other headers before takeoff
	preflight(res);

	if (req.method !== 'GET') return res.status(403).send('forbidden');

	[slug, color] = ~slug.indexOf('-') ? slug.split('-') : [toSlug(slug), `${color}`.replace(/^[#]/g, '')];

	let icon: SimpleIcon = icons.Get(slug) || icons.Get(toSlug(color));
	if (!icon || typeof icon === 'undefined') return res.status(404).send(toSVG(icons.Get(fallback).svg));

	if (type === 'png') {
		// TODO: Add support for rasterized `.png` icons
	}

	console.log('[%s][HTTP][%s]: %s', new Date().toJSON(), req.method, req.url);
	const fill = tc(color).isValid() ? (color === 'default' ? icon.hex : color) : icon.hex || '#000000';

	return res.status(200).send(toSVG(icon.svg, { fill }));
}
