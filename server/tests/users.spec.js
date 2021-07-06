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
          userID: 'test-userID',
          name: 'test-name',
          id: 'test-id',
          accessToken: 'test-access-token',
          email: 'test-email@mail.com',
        })
        .end((_err, res) => {
          res.should.have.status(200);
          expect(res.body.user.value.id).to.equal('test-id');
          expect(res.body.user.value.name).to.equal('test-name');
          expect(res.body.user.value.email).to.equal('test-email@mail.com');
          done();
        });
    });

    it('should update an existing user and return with updated values', function (done) {
      chai
        .request(app)
        .put(`${baseRoutes.users}/auth`)
        .send({
          userID: 'updated-userID',
          name: 'updated-name',
          id: 'test-id',
          accessToken: 'test-access-token',
          email: 'updated-email',
        })
        .end((_err, res) => {
          res.should.have.status(200);
          expect(res.body.user.value.id).to.equal('test-id');
          expect(res.body.user.value.name).to.equal('updated-name');
          expect(res.body.user.value.email).to.be.equal('updated-email');
          done();
        });
    });
  });
});
