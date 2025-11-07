const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const assetsDir = path.join(__dirname, '../public/assets/footer');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Footer assets from Figma
const assets = [
  {
    url: 'https://www.figma.com/api/mcp/asset/e2708fba-32be-495d-8878-0fbe1d45c0bc',
    filename: 'logo-left.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/a7772baf-354d-486a-a895-c4f4998a62b5',
    filename: 'logo-right.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/d3bd1beb-4063-4416-b7d0-c247cbcc3693',
    filename: 'linkedin-icon.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/4faf55ea-320a-4e5f-8eb4-3f1a24018b29',
    filename: 'line-divider.svg'
  }
];

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`❌ Error downloading ${path.basename(filepath)}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('🚀 Starting footer assets download...\n');
  
  for (const asset of assets) {
    const filepath = path.join(assetsDir, asset.filename);
    try {
      await downloadFile(asset.url, filepath);
    } catch (error) {
      console.error(`Failed to download ${asset.filename}`);
    }
  }
  
  console.log('\n✨ Footer assets download complete!');
}

downloadAll();
