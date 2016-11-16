import { getSiteSettings } from '../../src/services/getSiteSettings';
import { expect } from 'chai';
import { theTriShopSettings, orangeSettings } from '../bootstrap';

describe('getSiteSettings', () => {
  it('should return null when hostname is not found', async () => {
    const settings = await getSiteSettings('http://unknown.weedo-dev.io');
    expect(settings).to.be.null;
  });

  it('should return null when hostname is not a valid url', async () => {
    const settings = await getSiteSettings('unknown');
    expect(settings).to.be.null;
  });

  it('should return the settings when hostname is known', async () => {
    const settings = await getSiteSettings('http://feedback.thetrishop.com');
    expect(settings).to.deep.eq(theTriShopSettings);
  });

  it('should return the settings when subdomain is known', async () => {
    const settings = await getSiteSettings('http://orange.weedo-dev.io');
    expect(settings).to.deep.eq(orangeSettings);
  });
});
