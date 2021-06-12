const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const baseRoutes = require('../constants/base-routes');

chai.use(chaiHttp);
chai.should();

// TODO: This is a placeholder test. Update after routes are written complete.
describe('Users', function () {
  describe('Placeholder GET /', function () {
    it('should return a message', function (done) {
      chai.request(app)
        .get(`${baseRoutes.users}/`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').and.to.be.a('string');
          done();
        });
    });
  });
});
