import { Idea } from '../models/Idea';
import { SiteSettings } from '../models/SiteSettings';
import { manyOrNone } from '../db';

export async function queryIdeas(site: SiteSettings): Promise<Idea[]>  {
  return await manyOrNone<Idea>('SELECT * FROM ideas WHERE site_id = $1', site.id);
};
