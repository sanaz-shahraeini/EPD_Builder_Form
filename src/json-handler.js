import fs from 'fs/promises';
import path from 'path';

export async function saveToJson(data, filename) {
  try {
    const outputDir = 'output';
    const outputPath = path.join(outputDir, filename);

    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Save data to JSON file with pretty formatting
    await fs.writeFile(
      outputPath,
      JSON.stringify(data, null, 2),
      'utf8'
    );

    console.log(`Data successfully saved to ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error('Error saving JSON file:', error.message);
    throw error;
  }
}