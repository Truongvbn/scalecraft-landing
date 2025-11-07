const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsDir = path.join(__dirname, '../public/assets/images');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// TOÀN BỘ 115+ assets từ 11 sections (đã scan lại kỹ lưỡng)
const assets = [
  // ========== HeroSection - 25 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/4e38debe-abb7-4b2c-b949-b0dea4b42556', name: 'hero-texture.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/aaee62a3-73ce-422f-9c6b-e10b74b77ca7', name: 'hero-frame2.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/fe3c087e-00b6-4d0e-af80-3761f4b8b448', name: 'hero-group.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/01cbd87a-56a1-4ee9-9344-6bc197f6c331', name: 'hero-group1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/3f987da4-20c0-4ba9-9e74-ec0d3d5eec4d', name: 'hero-logo-1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/b4b39354-2e3d-4711-82d3-18f4234ad921', name: 'hero-logo-2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/f811ec4b-ad39-4d00-97ea-51b13b253cb0', name: 'hero-logo-3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/36ea3dba-6a2a-48c1-979f-66110e54cbfe', name: 'hero-logo-4.png' },
  { url: 'https://www.figma.com/api/mcp/asset/9a2e3edc-1bef-4b2f-982f-6b4224d338ad', name: 'hero-logo-5.png' },
  { url: 'https://www.figma.com/api/mcp/asset/1f632fc7-0f10-49a4-9e2e-72cc3eb02fdc', name: 'hero-logo-6.png' },
  { url: 'https://www.figma.com/api/mcp/asset/92867c9c-16b9-462b-b88f-7c3cd9b02a59', name: 'hero-logo-7.png' },
  { url: 'https://www.figma.com/api/mcp/asset/c968a5d2-63b0-4882-bd9e-237bf29ea6ce', name: 'hero-logo-8.png' },
  { url: 'https://www.figma.com/api/mcp/asset/1f058abd-bd89-47b6-ac7a-9d4acc6b4f17', name: 'hero-logo-9.png' },
  { url: 'https://www.figma.com/api/mcp/asset/7361d01b-2173-487a-a621-4ea7db97534d', name: 'hero-icon.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/82a2ff38-4a3f-45b5-9e15-61119d05465c', name: 'hero-image28.png' },
  { url: 'https://www.figma.com/api/mcp/asset/a0c597a8-100f-4176-bb74-d1ebe4cf91eb', name: 'hero-intersect.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/dc202982-7f2b-4d02-a12d-44902714d03a', name: 'hero-image25.png' },
  { url: 'https://www.figma.com/api/mcp/asset/3e9d495e-90dd-40c2-81ff-c96b65bba077', name: 'hero-image27.png' },
  { url: 'https://www.figma.com/api/mcp/asset/8aa83aa7-1eb7-4819-b34b-3af687866f8f', name: 'hero-image24.png' },
  { url: 'https://www.figma.com/api/mcp/asset/4223603d-2410-47ea-b0f9-83ff899a62e1', name: 'hero-image291.png' },
  { url: 'https://www.figma.com/api/mcp/asset/7d672339-8d18-4706-ad7e-cb3e94bbdda4', name: 'hero-group13681.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/b35da799-df5f-4fda-86e6-5748dd0888a5', name: 'hero-nav-logo-1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/b8700ec2-7c8f-4eec-80ed-82770fc378ab', name: 'hero-nav-logo-2.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/8a490a81-626e-4387-9368-d53d77ddfa86', name: 'hero-nav-frame.svg' },
  
  // ========== StatsHeroSection - 7 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/5690b901-139a-45e7-b9f4-4347abedcf7d', name: 'stats-hero-texture.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/3d54865f-591a-4614-9208-6bd42c42642e', name: 'stats-hero-gradient.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/3474f3b9-fad4-4738-b23c-42dafe68d3e8', name: 'stats-hero-gradient1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/69ceb7f0-f83a-4c70-aafc-55052502a07d', name: 'stats-hero-icon3.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/2e929ee2-bebd-42c4-964d-4506289220c2', name: 'stats-hero-icon1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/09f7ac03-55d4-4dd7-a4cc-02b208dbfd90', name: 'stats-hero-icon4.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/2537abdd-c352-49f1-a9bb-1c3f0de1ae25', name: 'stats-hero-icon2.svg' },
  
  // ========== StatsSection - 3 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/87460ff5-572a-4a4e-ae9c-df4e6f30eb71', name: 'stats-illustration.png' },
  { url: 'https://www.figma.com/api/mcp/asset/65119399-b474-483f-9a6a-23edce0c2954', name: 'stats-gradient-bg.png' },
  { url: 'https://www.figma.com/api/mcp/asset/11210c89-a6ac-490b-a444-ce013d5d18f1', name: 'stats-texture.png' },
  
  // ========== CaseStudiesSlider - 20 assets (đã bổ sung thiếu) ==========
  // Card 1 - Amazon Agentur
  { url: 'https://www.figma.com/api/mcp/asset/fc450db9-c27a-4c46-97d4-25a6787602f8', name: 'case-slider-1-dark.png' },
  { url: 'https://www.figma.com/api/mcp/asset/dd93278a-5f78-4247-a048-9b7ae0ac2bf6', name: 'case-slider-1-texture.png' },
  { url: 'https://www.figma.com/api/mcp/asset/fed19027-3c73-4300-bcbf-e701f3836ad9', name: 'case-slider-1-frame.png' },
  { url: 'https://www.figma.com/api/mcp/asset/56a95fe3-7a22-4de4-a429-54f084c34a34', name: 'case-slider-1-img3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/02d1418d-9432-4aae-bc3f-c8f6e798d088', name: 'case-slider-1-img4.png' },
  { url: 'https://www.figma.com/api/mcp/asset/c50d20ec-762f-4f1b-bc29-8b83bce52124', name: 'case-slider-1-img13.png' },
  { url: 'https://www.figma.com/api/mcp/asset/0a6d28f0-2cb0-41e3-b651-c02e372141c3', name: 'case-slider-1-group344.png' },
  { url: 'https://www.figma.com/api/mcp/asset/ccee1ae3-7158-436a-8737-7487e731eb79', name: 'case-slider-1-group343.png' },
  { url: 'https://www.figma.com/api/mcp/asset/2aac8f3f-5a52-42dc-ac35-e000fb94e1a6', name: 'case-slider-1-check1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/209dbca9-3001-4e46-9850-713166d78979', name: 'case-slider-1-check2.svg' },
  // Card 2 - Branding
  { url: 'https://www.figma.com/api/mcp/asset/fce5e027-a4fc-4298-9d05-dd08f3f28c62', name: 'case-slider-2-dark.png' },
  { url: 'https://www.figma.com/api/mcp/asset/704aae83-16f4-4ba5-99af-8ee43a528ea0', name: 'case-slider-2-texture.png' },
  { url: 'https://www.figma.com/api/mcp/asset/f4378045-9978-495d-a136-39d3b2b7d3ac', name: 'case-slider-2-frame.png' },
  { url: 'https://www.figma.com/api/mcp/asset/d23ad32e-3af0-4868-a326-5d0e5ded529b', name: 'case-slider-2-img3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/c4f0a6ff-3fd9-4069-b0a6-7e3898b3121b', name: 'case-slider-2-img4.png' },
  { url: 'https://www.figma.com/api/mcp/asset/fe355c15-986e-4c00-b519-35e84be6084e', name: 'case-slider-2-img13.png' },
  { url: 'https://www.figma.com/api/mcp/asset/b493a74e-6379-4396-a2ef-657ea4fd5f37', name: 'case-slider-2-group344.png' },
  { url: 'https://www.figma.com/api/mcp/asset/d9b3e27f-08fe-4d57-ba12-3a31900984e2', name: 'case-slider-2-group343.png' },
  { url: 'https://www.figma.com/api/mcp/asset/d532c0ae-3bf9-47ce-913b-2aaa6a995f44', name: 'case-slider-2-check3.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/46345d4b-280b-407f-890e-f2302d6fb6a7', name: 'case-slider-2-check4.svg' },
  
  // ========== CaseStudySection - 4 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/2254675d-b151-47ac-9e66-52209445df74', name: 'case-study-main.png' },
  { url: 'https://www.figma.com/api/mcp/asset/495d45b9-c910-4e7f-b4ae-8cbfa01c5696', name: 'case-study-overlay1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/8e7749c5-eb27-4eb3-ab3a-00a493f35833', name: 'case-study-overlay2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/3471ef88-21ba-41b0-a85e-f7537254148f', name: 'case-study-icon.png' },
  
  // ========== ScalecraftComparisonSection - 6 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/e19eb4e7-4c73-4e42-9c9e-a01c36010db9', name: 'comparison-agenturen-1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/3056be36-3d81-4f68-a651-9cb2628dc5a3', name: 'comparison-agenturen-2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/e6ed6fff-114b-485c-b1d1-c44091ae01f4', name: 'comparison-agenturen-3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/c5f8dd2e-e28f-4aa5-8365-ccf1b63ff50f', name: 'comparison-mitarbeiter-1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/2e067ec6-e5ed-40df-92fb-f442389c3318', name: 'comparison-mitarbeiter-2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/197b781e-fdf1-4ae5-995a-feea72a4dc93', name: 'comparison-systeme.png' },
  
  // ========== BenefitsSection - 4 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/72a80d30-3dfa-4fd2-b445-9fd0e31d40b0', name: 'benefit-1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/0367fb3b-d1d6-4741-90b2-afc4dab21401', name: 'benefit-2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/558e2e1a-6728-4532-a4c5-949a439b0082', name: 'benefit-3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/354f1e61-7db8-478f-998d-9a07a115f062', name: 'benefit-4.png' },
  
  // ========== FeatureCardsSection - 9 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/a433ef98-2a54-4228-a0e3-94817748df73', name: 'feature-texture.png' },
  { url: 'https://www.figma.com/api/mcp/asset/d74237fa-ce71-41db-9066-2f770f184507', name: 'feature-profile.png' },
  { url: 'https://www.figma.com/api/mcp/asset/221537e7-0ea5-4734-bb29-340b132a2089', name: 'feature-icon-1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/de619ce2-c4d1-470b-9d49-6bb441f59189', name: 'feature-icon-2.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/0b4e5c09-40ba-4a7a-9a13-eca5871fa217', name: 'feature-timeline-dot-1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/e12a1448-c2ce-45cb-bf16-6ead2ad007ee', name: 'feature-timeline-dot-2.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/43d9f7ee-1a33-482e-a8ba-c381dbd936dc', name: 'feature-timeline-dot-3.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/852beaa3-8020-4731-af95-d241d48c95ee', name: 'feature-timeline-dot-4.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/0531e5dd-35c7-4e93-b1a6-16fbeaf7cf50', name: 'feature-scalecraft-text.svg' },
  
  // ========== VisualSolutionsSection - 9 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/05e39ed4-e212-4ff9-8fb2-e1bff19aa6e8', name: 'visual-check-icon-1.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/6b9047fc-5390-4c9f-8c87-6c8b991273f4', name: 'visual-check-icon-2.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/65c537c1-9aff-4203-a659-6c8068c2eb36', name: 'visual-check-icon-3.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/7aa74443-0e08-415b-a85c-3ef833657a65', name: 'visual-main.png' },
  { url: 'https://www.figma.com/api/mcp/asset/9dbbdfce-e4d3-4d01-b157-72125f82681e', name: 'visual-bento-1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/ba6bdbcf-020e-454c-8d8c-652884f679f7', name: 'visual-bento-2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/ad2aff21-c7da-45a1-a462-99cb40803a5a', name: 'visual-bento-3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/f43ce5d0-14ce-477e-8fce-2b96707f3920', name: 'visual-bento-4.png' },
  { url: 'https://www.figma.com/api/mcp/asset/83c9698c-c955-40de-896b-fe5f76169f2e', name: 'visual-bento-5.png' },
  
  // ========== FAQSection - 2 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/21c1fc39-8a03-449b-bdab-6d6dd4b9a943', name: 'faq-collapse-icon.svg' },
  { url: 'https://www.figma.com/api/mcp/asset/ffbcf209-03da-4725-8ce9-845b8387e704', name: 'faq-expand-icon.svg' },
  
  // ========== CTASection - 6 assets ==========
  { url: 'https://www.figma.com/api/mcp/asset/a31e81ce-881c-4818-ae86-301d036925f9', name: 'cta-avatar-1.png' },
  { url: 'https://www.figma.com/api/mcp/asset/c7f6f661-c848-497f-8871-633698ce4e3a', name: 'cta-avatar-2.png' },
  { url: 'https://www.figma.com/api/mcp/asset/f898d277-96fa-46c9-a343-3de87b17649d', name: 'cta-avatar-3.png' },
  { url: 'https://www.figma.com/api/mcp/asset/3e5c5fc2-f95c-4b8e-8228-9a7f56882c2b', name: 'cta-avatar-4.png' },
  { url: 'https://www.figma.com/api/mcp/asset/e5d9f07e-12bf-4ce6-9140-37aff4cedc1e', name: 'cta-avatar-5.png' },
  { url: 'https://www.figma.com/api/mcp/asset/f5d67ebd-b8dc-4aaf-b3ee-0b8405a3e414', name: 'cta-avatar-6.png' },
];

// Function để download file
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

// Download tất cả assets
async function downloadAllAssets() {
  console.log(`\n🚀 Downloading ${assets.length} assets from 11 sections...\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const asset of assets) {
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
  console.log(`📁 Assets saved to: ${assetsDir}`);
  console.log('='.repeat(60) + '\n');
}

downloadAllAssets();
