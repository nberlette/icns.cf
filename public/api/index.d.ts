import type { VercelResponse as Response, VercelRequest as Request } from '@vercel/node';
export default function handler(req: Request, res: Response): Promise<Response>;
