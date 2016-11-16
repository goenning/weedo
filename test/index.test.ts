import * as supertest from 'supertest';
import { app } from '../src/app';

const request = supertest(app);

describe('Index Page', () => {
  it('should return 200 for know site', (done) => {
    request.get('/')
      .set('host', 'orange.weedo-dev.io')
      .expect(200)
      .end(done);
  });

  it('should return 404 for unknow site', (done) => {
    request.get('/')
      .set('host', 'unknown.weedo-dev.io')
      .expect(404)
      .end(done);
  });
});
