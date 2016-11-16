import { SiteSettings } from '../models/SiteSettings';

export async function getSiteSettings(host: string): Promise<SiteSettings>  {
  return {
    name: 'orange',
    hostname: 'orange.weeedo-dev.io',
    color: 'red'
  };
};
