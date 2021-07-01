const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const fs = require('fs');
const logger = require('../../server/util/logger');
const Position = require('../../server/models/Position');
require('dotenv').config({ path: '../../.env' });

const bucketName = process.env.AWS_S3_BUCKET_NAME;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;

AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const s3 = new AWS.S3();

const connection = process.env.MONGODB_CONNECTION;

const upload = () => {
  Position.find({ previewImageLink: { $exists: false } }).lean().then((positions) => {
    positions.forEach(async (position) => {
      const key = position.variant ?? position.baseOpening.name;
      logger.info(key);
      const path = `png/${key.replace('/', '-')}.png`;
      const buf = position.previewImage.data;

      await fs.writeFile(path, buf.toString(), 'base64', (err) => {
        if (err !== null) {
          logger.error(err);
        }
      });
      const readStream = await fs.createReadStream(path);

      const params = {
        ACL: 'public-read',
        Bucket: bucketName,
        Body: readStream,
        ContentType: 'image/png',
        Key: `${key}.png`,
      };

      s3.upload(params).promise().then(async (result) => {
        logger.info(`${key} Done`);
        // eslint-disable-next-line no-underscore-dangle
        Position.updateOne({ _id: position._id }, {
          $set: { previewImageLink: result.Location },
        }, (err) => {
          if (err) {
            logger.error(err);
          }
        });
        fs.unlink(path, () => {});
      }).catch((err) => logger.error(err));
    });
  });
};

mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  logger.info('Database connection successful');
  upload();
});
