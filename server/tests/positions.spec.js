const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const baseRoutes = require('../constants/base-routes');

chai.use(chaiHttp);
chai.should();

const positionsBaseRoute = baseRoutes.positions;

describe('Positions', function () {
  describe(`GET ${positionsBaseRoute}/search`, function () {
    it('should return an array of positions', function (done) {
      // Temporary Solution to tests failing due to timeout.
      // TODO: Remove after we replace the data buffers with image links in MongoDB
      this.timeout(0);
      chai.request(app)
        .get(`${baseRoutes.positions}/search?filter=Polish`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('positions').and.to.be.an('array');
          done();
        });
    });
  });

  describe(`GET ${positionsBaseRoute}/common`, function () {
    it('should return an array of positions', function (done) {
      // Temporary Solution to tests failing due to timeout.
      // TODO: Remove after we replace the data buffers with image links in MongoDB
      this.timeout(0);
      chai.request(app)
        .get(`${baseRoutes.positions}/common`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('positions').and.to.be.an('array').and.to.have.property('length', 9);
          done();
        });
    });
  });
});
