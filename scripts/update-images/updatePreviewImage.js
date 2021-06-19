const mongoose = require('mongoose');
const ChessImageGenerator = require('chess-image-generator');
const fs = require('fs');
const logger = require('../../server/util/logger');
const Position = require('../../server/models/Position');
require('dotenv').config({ path: '../../.env' });

const savePNGBuffer = async (collection) => {
  try {
    collection.forEach(async (pos) => {
      const imageGenerator = new ChessImageGenerator({
        light: 'rgb(220, 220, 220)',
        dark: 'rgb(104, 79, 111)',
      });
      imageGenerator.loadPGN(pos.pgn);
      imageGenerator.generateBuffer().then((buffer) => {
        const pngEncoded = buffer.toString('base64');
        logger.info(pos.baseOpening.name);
        // eslint-disable-next-line no-param-reassign
        pos.previewImage = { data: pngEncoded, contentType: 'image/png;base64' };
        pos.save();
      }).catch((err) => {
        logger.error(err);
      });
    });
  } catch (error) {
    logger.error(error);
  }
};

function downloadPNGImages(query) {
  // Make sure to create a png directory in the update-images directory
  const PNG_FOLDER = './png';

  query.forEach((q) => {
    const { name } = q.baseOpening;
    const buffer = q.previewImage.data.toString();
    const outputFilepath = `./${PNG_FOLDER}/${name}.png`;

    fs.writeFile(outputFilepath, buffer, 'base64', (err) => {
      if (err !== null) {
        logger.error(err);
      }
    });
  });
}

const updatePhotos = async () => {
  // Add fields inside curly to filter Positions e.g. Positions.find({'pgn' : '1.b4'})
  Position.find({}).then((q) => {
    // To update the preview images in Mongo
    savePNGBuffer(q);
  });
};

const downloadPhotos = async () => {
  // How many positions you want to download
  const MAX_POSITION_LIMIT = 10;
  // Add fields inside curly to filter Positions e.g. Positions.find({'pgn' : '1.b4'})
  Position.find({}).limit(MAX_POSITION_LIMIT).then((q) => {
    downloadPNGImages(q);
  });
};

const connection = process.env.MONGODB_CONNECTION;

mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  logger.info('Database connection successful');
  // Update preview images
  updatePhotos();
  // To confirm that the data buffer in MongoDB is encoded properly.
  downloadPhotos();
});
