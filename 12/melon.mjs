import { chromium } from 'playwright';
import fs from 'fs/promises';

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.melon.com/chart/index.htm');

  const songs = await page.evaluate(() => {
    const songRows = Array.from(document.querySelectorAll('#lst50, #lst100 tr.lst50, tr.lst100'));
    return songRows.map(row => {
      const titleElement = row.querySelector('.ellipsis.rank01 a');
      const artistElement = row.querySelector('.ellipsis.rank02 span');
      const albumElement = row.querySelector('.ellipsis.rank03 a');
      return {
        title: titleElement?.textContent?.trim() || '',
        artist: artistElement?.textContent?.trim() || '',
        album: albumElement?.textContent?.trim() || ''
      };
    });
  });

  const jsonData = JSON.stringify(songs, null, 2);
  await fs.writeFile('melonChart.json', jsonData, 'utf8');

  await browser.close();
})();