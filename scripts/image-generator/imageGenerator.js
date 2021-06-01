/* eslint-disable no-console */
const ChessImageGenerator = require('chess-image-generator');
const fs = require('fs');
const path = require('path');

const PGN_FOLDER = './pgn';
const PNG_FOLDER = './png';
const BASE64_FOLDER = './base64';

// This is a temporary script to generate Chess images given a folder
// TODO: Convert image generator script into a backend endpoint
const generatePNGImages = async () => {
  try {
    const pgnFilepaths = fs.readdirSync(PGN_FOLDER);
    pgnFilepaths.forEach(async (pgnFilepath) => {
      const filename = path.basename(pgnFilepath, path.extname(pgnFilepath));
      const pgnFile = fs.readFileSync(`${PGN_FOLDER}/${pgnFilepath}`, 'utf8');
      const imageGenerator = new ChessImageGenerator();
      await imageGenerator.loadPGN(pgnFile);
      const outputFilepath = `./${PNG_FOLDER}/${filename}.png`;
      await imageGenerator.generatePNG(outputFilepath);
    });
  } catch (error) {
    console.log(error);
  }
};

const generateBase64Images = async () => {
  try {
    const pngFilepaths = fs.readdirSync(PNG_FOLDER);
    pngFilepaths.forEach(async (pngFilepath) => {
      const filename = path.basename(pngFilepath, path.extname(pngFilepath));
      const pngFile = fs.readFileSync(`${PNG_FOLDER}/${pngFilepath}`);
      const base64String = Buffer.from(pngFile).toString('base64');
      fs.writeFileSync(`./${BASE64_FOLDER}/${filename}.b64`, base64String);
    });
  } catch (error) {
    console.log(error);
  }
};

const generatePositionImages = async () => {
  await generatePNGImages();
  await generateBase64Images();
};

generatePositionImages();
