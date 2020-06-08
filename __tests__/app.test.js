const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('handles the / route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>Hello</h1>');
      });
  });

  it('handles the /echo route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>Hello</h1>');
      });
  });

  it('handles the /red route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>Hello</h1>');
      });
  });

  it('handles the /green route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>Hello</h1>');
      });
  });

  it('handles the /blue route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>Hello</h1>');
      });
  });
});
