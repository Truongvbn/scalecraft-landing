const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsDir = path.join(__dirname, '../public/assets/images');

// 5 assets còn thiếu từ Card1Illustration
const remainingAssets = [
  { url: 'https://www.figma.com/api/mcp/asset/b191b271-fa72-4105-aa5b-25dfb6cfc0d2', name: 'card1-illustration-0.png' },
  { url: 'https://www.figma.com/api/mcp/asset/9de8d5aa-5a39-4c84-a859-09620fc6682b', name: 'card1-illustration-1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/6faa092a-cb44-4cb9-bf07-cb9bef194bc9', name: 'card1-illustration-2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/8799c56b-61e9-414d-aefc-c36c314e5528', name: 'card1-illustration-3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/0af4a2bf-1ed9-449b-95e9-6bee36816d36', name: 'card1-illustration-4.png' },
];

const assetMapping = {
  'https://www.figma.com/api/mcp/asset/b191b271-fa72-4105-aa5b-25dfb6cfc0d2': '/assets/images/card1-illustration-0.png',
  'https://www.figma.com/api/mcp/asset/9de8d5aa-5a39-4c84-a859-09620fc6682b': '/assets/images/card1-illustration-1.png',
  'https://www.figma.com/api/mcp/asset/6faa092a-cb44-4cb9-bf07-cb9bef194bc9': '/assets/images/card1-illustration-2.png',
  'https://www.figma.com/api/mcp/asset/8799c56b-61e9-414d-aefc-c36c314e5528': '/assets/images/card1-illustration-3.png',
  'https://www.figma.com/api/mcp/asset/0af4a2bf-1ed9-449b-95e9-6bee36816d36': '/assets/images/card1-illustration-4.png',
};

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(assetsDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        fs.unlink(filePath, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadRemainingAssets() {
  console.log('\n🚀 Downloading 5 remaining assets from Card1Illustration...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const asset of remainingAssets) {
    try {
      await downloadFile(asset.url, asset.name);
      console.log(`✅ ${asset.name}`);
      successCount++;
    } catch (err) {
      console.error(`❌ ${asset.name} - ${err.message}`);
      failCount++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`✨ Download complete!`);
  console.log(`📊 Success: ${successCount} | Failed: ${failCount}`);
  console.log('='.repeat(60) + '\n');
  
  if (successCount > 0) {
    replaceInIllustration();
  }
}

function replaceInIllustration() {
  console.log('🔄 Replacing URLs in Card1Illustration.tsx...\n');
  
  const filePath = path.join(__dirname, '../app/components/illustrations/Card1Illustration.tsx');
  const backupPath = path.join(__dirname, '../backups/Card1Illustration-' + Date.now() + '.tsx');
  
  // Create backup
  const backupDir = path.dirname(backupPath);
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  fs.copyFileSync(filePath, backupPath);
  
  let replacements = 0;
  
  // Replace all URLs
  for (const [figmaUrl, localPath] of Object.entries(assetMapping)) {
    const regex = new RegExp(figmaUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, localPath);
      replacements += matches.length;
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ Card1Illustration.tsx: ${replacements} replacements`);
  console.log(`💾 Backup saved to: ${backupPath}\n`);
  console.log('='.repeat(60));
  console.log('🎉 All assets migrated to local!');
  console.log('='.repeat(60) + '\n');
}

downloadRemainingAssets();
