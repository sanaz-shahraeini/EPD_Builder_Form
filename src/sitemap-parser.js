import axios from 'axios';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXml = promisify(parseString);

export async function parseSitemap(url) {
  try {
    const response = await axios.get(url);
    const result = await parseXml(response.data);
    
    if (!result.urlset || !result.urlset.url) {
      throw new Error('Invalid sitemap format');
    }

    return result.urlset.url.map(url => url.loc[0]);
  } catch (error) {
    console.error('Error parsing sitemap:', error.message);
    throw error;
  }
}