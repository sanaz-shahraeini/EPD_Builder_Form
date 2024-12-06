import fs from 'fs/promises';
import path from 'path';

async function getLatestJsonFile(directory) {
  const files = await fs.readdir(directory);
  const jsonFiles = files.filter(file => file.startsWith('products-') && file.endsWith('.json'));
  
  if (jsonFiles.length === 0) {
    throw new Error('No product JSON files found');
  }
  
  const latestFile = jsonFiles.sort().pop();
  return path.join(directory, latestFile);
}

async function extractUrls() {
  try {
    // Get the latest JSON file
    const inputFile = await getLatestJsonFile('output');
    console.log(`Reading from: ${inputFile}`);

    // Read and parse the JSON file
    const data = JSON.parse(await fs.readFile(inputFile, 'utf8'));
    
    // Extract product and image URLs
    const urls = data.map(product => ({
      product_url: product.product_url,
      image_url: product.image_url
    }));

    // Create filename for URLs
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const outputFile = path.join('output', `urls-${timestamp}.json`);

    // Save URLs to new JSON file
    await fs.writeFile(
      outputFile,
      JSON.stringify(urls, null, 2),
      'utf8'
    );

    console.log(`URLs successfully extracted to: ${outputFile}`);
    console.log(`Total URLs extracted: ${urls.length}`);
  } catch (error) {
    console.error('Error extracting URLs:', error.message);
  }
}

extractUrls();