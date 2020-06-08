const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('handles the / route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('handles the /echo route', () => {
    return request(app)
      .post('/echo')
      .send('this is the body echo')
      .then(res => {
        expect(res.text).toEqual('this is the body echo');
      });
  });

  it('handles the /red route', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });

  it('handles the /green route', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });

  it('handles the /blue route', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });

  it('returns 404 for other routes', () => {
    return request(app)
      .get('/anythingelse')
      .then(res => {
        expect(res.text).toEqual('<h1>404 Not found</h1>');
      });
  });
});
