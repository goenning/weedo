import * as supertest from 'supertest';
import { app } from '../';

const request = supertest(app);

describe('Index Page', () => {
  it('should render index page', (done) => {
    request.get('/')
      .expect(200)
      .end(done);
  });
});
