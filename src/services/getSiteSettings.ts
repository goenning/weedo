import { SiteSettings } from '../models/SiteSettings';
import db from '../db';
import { parse } from 'url';

const findByHostname = (hostname: string) => db.findOne<SiteSettings>('sites', { hostname });

export async function getSiteSettings(host: string): Promise<SiteSettings | null>  {
  const url = parse(host);
  if (!url.hostname) {
    return null;
  }

  let settings = await findByHostname(url.hostname);
  if (!settings) {
    settings = await findByHostname(url.hostname.substring(0, url.hostname.indexOf('.')));
  }
  return settings;
};
