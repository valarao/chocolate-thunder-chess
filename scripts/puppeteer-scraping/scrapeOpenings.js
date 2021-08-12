/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const puppeteer = require('puppeteer');
const fs = require('fs');
const logger = require('../../server/util/logger');

const parseOpeningPage = async (page) => {
  await page.waitForSelector('.ecoTitleOpening');
  const nameSelector = await page.$('.ecoTitleOpening');
  const name = await page.evaluate((el) => el.textContent, nameSelector);

  await page.waitForSelector('.ecoNotation');
  const notationSelector = await page.$('.ecoNotation');
  const notation = await page.evaluate((el) => el.textContent, notationSelector);

  await page.waitForSelector('#ecoLink');
  const ecoCodeSelector = await page.$('#ecoLink');
  const ecoCode = await page.evaluate((el) => el.textContent, ecoCodeSelector);

  let variation;
  try {
    await page.waitForSelector('.ecoSubTitleOpening', { timeout: 500 });
    const variationSelector = await page.$('.ecoSubTitleOpening');
    variation = await page.evaluate((el) => el.textContent, variationSelector);
    variation = variation.replace(/\s\s+/g, ' ');
  } catch (error) {
    // Nothing
  }

  return variation ? {
    name: name.trim(),
    pgn: notation.trim(),
    variation,
    ecoCode: ecoCode.trim(),
  } : {
    name: name.trim(),
    pgn: notation.trim(),
    ecoCode: ecoCode.trim(),
  };
};

async function getOpeningPageLinks(openingDirectoryLinks, page) {
  let openingPageLinks = [];
  let counter = 0;
  const total = openingDirectoryLinks.length;
  for (const openingDirectoryLink of openingDirectoryLinks) {
    await page.goto(openingDirectoryLink);
    const subDirectoryPageLinks = await page.$$eval('a', (as) => as.map((a) => a.href));
    openingPageLinks = openingPageLinks.concat(
      [...new Set(subDirectoryPageLinks)].filter((pageLink) => pageLink.includes(page.url())),
    );
    const logMessage = `${counter} of ${total} Directories (${(Math.round((counter * 1000) / 10) / total).toFixed(1)}%)`;
    logger.info(logMessage);
    counter += 1;
  }
  return [...new Set(openingPageLinks)];
}

async function getOpeningDirectoryLinks(page) {
  const rootPageLinks = await page.$$eval('a', (as) => as.map((a) => a.href));
  const openingDirectoryLinks = [...new Set(rootPageLinks.filter((pageLink) => pageLink.includes('/eco/')))];
  return openingDirectoryLinks;
}

const getData = async () => {
  const openings = [];

  logger.info('Starting browser...');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://chessopenings.com/eco/');

  logger.info('Retrieving directory links...');
  const openingDirectoryLinks = await getOpeningDirectoryLinks(page);

  // Test Directory
  logger.info('Retrieving page links...');
  const openingPageLinks = await getOpeningPageLinks(openingDirectoryLinks, page);

  // Test Opening Page
  let counter = 0;
  const total = openingPageLinks.length;
  logger.info('Retrieving openings...');
  for (const openingPageLink of openingPageLinks) {
    await page.goto(openingPageLink);
    const opening = await parseOpeningPage(page);
    openings.push(opening);
    const message = `[${counter} of ${total} (${(Math.round((counter * 1000) / 10) / total).toFixed(1)}%)]: ${opening.name} ${opening.variation ? `- ${opening.variation}` : ''}`;
    logger.info(message);
    counter += 1;
  }

  const jsonString = JSON.stringify(openings);
  fs.writeFileSync('./openings.json', jsonString);
  browser.close();
};

getData();
