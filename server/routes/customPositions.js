const { v4: uuidv4 } = require('uuid');
const express = require('express');
const ChessImageGenerator = require('chess-image-generator');
const AWS = require('aws-sdk');
const fs = require('fs');
const logger = require('../util/logger');

const router = express.Router();
const CustomPosition = require('../models/CustomPosition');
require('dotenv').config({ path: '../../.env' });

const bucketName = process.env.AWS_S3_CUSTOM_BUCKET;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;

AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const s3 = new AWS.S3();

router.post('/add', async (req, res) => {
  try {
    const newCustomPosition = new CustomPosition(req.body);
    const imageGenerator = new ChessImageGenerator({
      light: 'rgb(220, 220, 220)',
      dark: 'rgb(104, 79, 111)',
    });
    imageGenerator.loadPGN(newCustomPosition.pgn);
    return imageGenerator.generateBuffer().then(async (buffer) => {
      const pngEncoded = buffer.toString('base64');
      const path = uuidv4();

      await fs.writeFile(path, pngEncoded, 'base64', (err) => {
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
        Key: path,
      };
      s3.upload(params).promise().then(async (result) => {
        newCustomPosition.previewImageLink = result.Location;
        fs.unlink(path, () => {});
        return newCustomPosition.save().then(() => {
          CustomPosition.find({ owner: newCustomPosition.owner }).then((query) => {
            res.status(200).json({ customPositions: query });
          });
        });
      }).catch((err) => logger.error(err));
    });
  } catch (e) {
    logger.error(e);
    return res.status(500).json(e);
  }
});

router.get('/get/:id', async (req, res) => {
  try {
    const { id } = req.params;
    return CustomPosition.find({
      owner: id,
    }).then((query) => res.status(200).json({ customPositions: query }));
  } catch (e) {
    logger.error(e);
    return res.status(500).json(e);
  }
});

router.delete('/delete/:ownerId/:id', async (req, res) => {
  try {
    const { id, ownerId } = req.params;
    return CustomPosition.deleteOne({
      _id: id,
    }).then(() => CustomPosition.find({
      owner: ownerId,
    }).then((query) => res.status(200).json({ customPositions: query })));
  } catch (e) {
    logger.error(e);
    return res.status(500).json(e);
  }
});

module.exports = router;
