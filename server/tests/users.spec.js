const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const app = require('../index');
const baseRoutes = require('../constants/base-routes');

chai.use(chaiHttp);
chai.should();

describe('Users', function () {
  describe('PUT /auth', function () {
    it('should retrieve existing user and update if it already exists', function (done) {
      chai
        .request(app)
        .put(`${baseRoutes.users}/auth`)
        .send({
          id: 'test-id',
          firstName: 'first-name',
          lastName: 'last-name',
          imageLink: 'image-link',
        })
        .end((_err, res) => {
          res.should.have.status(200);
          expect(res.body.user.value.id).to.equal('test-id');
          expect(res.body.user.value.firstName).to.equal('first-name');
          expect(res.body.user.value.lastName).to.equal('last-name');
          expect(res.body.user.value.imageLink).to.equal('image-link');
          done();
        });
    });

    it('should update an existing user and return with updated values', function (done) {
      chai
        .request(app)
        .put(`${baseRoutes.users}/auth`)
        .send({
          name: 'updated-name',
          id: 'test-id',
          accessToken: 'test-access-token',
          email: 'updated-email',
        })
        .end((_err, res) => {
          res.should.have.status(200);
          expect(res.body.user.value.id).to.equal('test-id');
          expect(res.body.user.value.firstName).to.equal('first-name');
          expect(res.body.user.value.lastName).to.equal('last-name');
          expect(res.body.user.value.imageLink).to.equal('image-link');
          done();
        });
    });
  });
});
