import { SiteSettings } from '../models/SiteSettings';
import { oneOrNone } from '../db';
import { parse } from 'url';

const findByHostname = (hostname: string) => {
  return oneOrNone<SiteSettings>('SELECT id, name, hostname FROM sites WHERE hostname = $1', hostname);
};

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
