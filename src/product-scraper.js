import axios from 'axios';
import * as cheerio from 'cheerio';
import { config } from './config.js';

export async function scrapeProduct(url) {
  try {
    const response = await axios.get(url, { headers: config.headers });
    const $ = cheerio.load(response.data);

    return {
      category_name: $('.breadcrumb li').eq(-2).text().trim(),
      solution: $('.breadcrumb li').eq(1).text().trim(),
      product_name: $('h1').first().text().trim(),
      product_url: url,
      item_no: $('.product-number').text().trim(),
      description: $('.product-description').text().trim(),
      image_url: $('.product-image img').attr('src')
    };
  } catch (error) {
    console.error(`Error scraping product ${url}:`, error.message);
    return null;
  }
}