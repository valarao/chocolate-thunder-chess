/* eslint-disable no-console */
const ChessImageGenerator = require('chess-image-generator');
const fs = require('fs');
const path = require('path');

const PGN_FOLDER = './pgn';

// This is a temporary script to generate Chess images given a folder
// TODO: Convert image generator script into a backend endpoint
const generateChessImages = async () => {
  try {
    const pgnFilepaths = fs.readdirSync(PGN_FOLDER);
    pgnFilepaths.forEach(async (pgnFilepath) => {
      const filename = path.basename(pgnFilepath, path.extname(pgnFilepath));
      const pgnFile = fs.readFileSync(`${PGN_FOLDER}/${pgnFilepath}`, 'utf8');
      const imageGenerator = new ChessImageGenerator();
      await imageGenerator.loadPGN(pgnFile);
      const outputFilepath = `./images/${filename}.png`;
      imageGenerator.generatePNG(outputFilepath);
    });
  } catch (error) {
    console.log(error);
  }
};

generateChessImages();
