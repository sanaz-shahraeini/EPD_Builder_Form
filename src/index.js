import { config } from './config.js';
import { parseSitemap } from './sitemap-parser.js';
import { scrapeProduct } from './product-scraper.js';
import { saveToJson } from './json-handler.js';

async function main() {
  try {
    console.log('Starting product scraping...');
    
    // Parse sitemap to get product URLs
    const productUrls = await parseSitemap(config.sitemapUrl);
    console.log(`Found ${productUrls.length} products to scrape`);

    // Scrape each product
    const products = [];
    for (const url of productUrls) {
      console.log(`Scraping: ${url}`);
      const productData = await scrapeProduct(url);
      if (productData) {
        products.push(productData);
      }
      // Add a small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Save results to JSON file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `products-${timestamp}.json`;
    await saveToJson(products, filename);

    console.log('\nScraping completed!');
    console.log(`Successfully scraped ${products.length} products`);
  } catch (error) {
    console.error('Scraping failed:', error.message);
  }
}

main();