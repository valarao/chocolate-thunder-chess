const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const baseRoutes = require('../constants/base-routes');

chai.use(chaiHttp);
chai.should();

const positionsBaseRoute = baseRoutes.positions;

describe('Positions', function () {
  describe(`GET ${positionsBaseRoute}/search?filter=Polish+Opening`, function () {
    it('should return an array of positions', function (done) {
      chai.request(app)
        .get(`${baseRoutes.positions}/search?filter=Polish`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('data').and.to.be.an('array');
          done();
        });
    });
  });

  describe(`GET ${positionsBaseRoute}/common-positions`, function () {
    it('should return an array of positions', function (done) {
      chai.request(app)
        .get(`${baseRoutes.positions}/common-positions`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('data').and.to.be.an('array').and.to.have.property('length', 9);
          done();
        });
    });
  });
});
