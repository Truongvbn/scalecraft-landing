const fs = require('fs');
const path = require('path');

// Mapping từ Figma URL → Local path
const assetMapping = {
  // HeroSection
  'https://www.figma.com/api/mcp/asset/4e38debe-abb7-4b2c-b949-b0dea4b42556': '/assets/images/hero-texture.svg',
  'https://www.figma.com/api/mcp/asset/aaee62a3-73ce-422f-9c6b-e10b74b77ca7': '/assets/images/hero-frame2.svg',
  'https://www.figma.com/api/mcp/asset/fe3c087e-00b6-4d0e-af80-3761f4b8b448': '/assets/images/hero-group.svg',
  'https://www.figma.com/api/mcp/asset/01cbd87a-56a1-4ee9-9344-6bc197f6c331': '/assets/images/hero-group1.svg',
  'https://www.figma.com/api/mcp/asset/3f987da4-20c0-4ba9-9e74-ec0d3d5eec4d': '/assets/images/hero-logo-1.png',
  'https://www.figma.com/api/mcp/asset/b4b39354-2e3d-4711-82d3-18f4234ad921': '/assets/images/hero-logo-2.png',
  'https://www.figma.com/api/mcp/asset/f811ec4b-ad39-4d00-97ea-51b13b253cb0': '/assets/images/hero-logo-3.png',
  'https://www.figma.com/api/mcp/asset/36ea3dba-6a2a-48c1-979f-66110e54cbfe': '/assets/images/hero-logo-4.png',
  'https://www.figma.com/api/mcp/asset/9a2e3edc-1bef-4b2f-982f-6b4224d338ad': '/assets/images/hero-logo-5.png',
  'https://www.figma.com/api/mcp/asset/1f632fc7-0f10-49a4-9e2e-72cc3eb02fdc': '/assets/images/hero-logo-6.png',
  'https://www.figma.com/api/mcp/asset/92867c9c-16b9-462b-b88f-7c3cd9b02a59': '/assets/images/hero-logo-7.png',
  'https://www.figma.com/api/mcp/asset/c968a5d2-63b0-4882-bd9e-237bf29ea6ce': '/assets/images/hero-logo-8.png',
  'https://www.figma.com/api/mcp/asset/1f058abd-bd89-47b6-ac7a-9d4acc6b4f17': '/assets/images/hero-logo-9.png',
  'https://www.figma.com/api/mcp/asset/7361d01b-2173-487a-a621-4ea7db97534d': '/assets/images/hero-icon.svg',
  'https://www.figma.com/api/mcp/asset/82a2ff38-4a3f-45b5-9e15-61119d05465c': '/assets/images/hero-image28.png',
  'https://www.figma.com/api/mcp/asset/a0c597a8-100f-4176-bb74-d1ebe4cf91eb': '/assets/images/hero-intersect.svg',
  'https://www.figma.com/api/mcp/asset/dc202982-7f2b-4d02-a12d-44902714d03a': '/assets/images/hero-image25.png',
  'https://www.figma.com/api/mcp/asset/3e9d495e-90dd-40c2-81ff-c96b65bba077': '/assets/images/hero-image27.png',
  'https://www.figma.com/api/mcp/asset/8aa83aa7-1eb7-4819-b34b-3af687866f8f': '/assets/images/hero-image24.png',
  'https://www.figma.com/api/mcp/asset/4223603d-2410-47ea-b0f9-83ff899a62e1': '/assets/images/hero-image291.png',
  'https://www.figma.com/api/mcp/asset/7d672339-8d18-4706-ad7e-cb3e94bbdda4': '/assets/images/hero-group13681.svg',
  'https://www.figma.com/api/mcp/asset/b35da799-df5f-4fda-86e6-5748dd0888a5': '/assets/images/hero-nav-logo-1.svg',
  'https://www.figma.com/api/mcp/asset/b8700ec2-7c8f-4eec-80ed-82770fc378ab': '/assets/images/hero-nav-logo-2.svg',
  'https://www.figma.com/api/mcp/asset/8a490a81-626e-4387-9368-d53d77ddfa86': '/assets/images/hero-nav-frame.svg',
  
  // StatsHeroSection
  'https://www.figma.com/api/mcp/asset/5690b901-139a-45e7-b9f4-4347abedcf7d': '/assets/images/stats-hero-texture.svg',
  'https://www.figma.com/api/mcp/asset/3d54865f-591a-4614-9208-6bd42c42642e': '/assets/images/stats-hero-gradient.svg',
  'https://www.figma.com/api/mcp/asset/3474f3b9-fad4-4738-b23c-42dafe68d3e8': '/assets/images/stats-hero-gradient1.svg',
  'https://www.figma.com/api/mcp/asset/69ceb7f0-f83a-4c70-aafc-55052502a07d': '/assets/images/stats-hero-icon3.svg',
  'https://www.figma.com/api/mcp/asset/2e929ee2-bebd-42c4-964d-4506289220c2': '/assets/images/stats-hero-icon1.svg',
  'https://www.figma.com/api/mcp/asset/09f7ac03-55d4-4dd7-a4cc-02b208dbfd90': '/assets/images/stats-hero-icon4.svg',
  'https://www.figma.com/api/mcp/asset/2537abdd-c352-49f1-a9bb-1c3f0de1ae25': '/assets/images/stats-hero-icon2.svg',
  
  // StatsSection
  'https://www.figma.com/api/mcp/asset/87460ff5-572a-4a4e-ae9c-df4e6f30eb71': '/assets/images/stats-illustration.png',
  'https://www.figma.com/api/mcp/asset/65119399-b474-483f-9a6a-23edce0c2954': '/assets/images/stats-gradient-bg.png',
  'https://www.figma.com/api/mcp/asset/11210c89-a6ac-490b-a444-ce013d5d18f1': '/assets/images/stats-texture.png',
  
  // CaseStudiesSlider
  'https://www.figma.com/api/mcp/asset/fc450db9-c27a-4c46-97d4-25a6787602f8': '/assets/images/case-slider-1-dark.png',
  'https://www.figma.com/api/mcp/asset/dd93278a-5f78-4247-a048-9b7ae0ac2bf6': '/assets/images/case-slider-1-texture.png',
  'https://www.figma.com/api/mcp/asset/fed19027-3c73-4300-bcbf-e701f3836ad9': '/assets/images/case-slider-1-frame.png',
  'https://www.figma.com/api/mcp/asset/56a95fe3-7a22-4de4-a429-54f084c34a34': '/assets/images/case-slider-1-img3.png',
  'https://www.figma.com/api/mcp/asset/02d1418d-9432-4aae-bc3f-c8f6e798d088': '/assets/images/case-slider-1-img4.png',
  'https://www.figma.com/api/mcp/asset/c50d20ec-762f-4f1b-bc29-8b83bce52124': '/assets/images/case-slider-1-img13.png',
  'https://www.figma.com/api/mcp/asset/0a6d28f0-2cb0-41e3-b651-c02e372141c3': '/assets/images/case-slider-1-group344.png',
  'https://www.figma.com/api/mcp/asset/ccee1ae3-7158-436a-8737-7487e731eb79': '/assets/images/case-slider-1-group343.png',
  'https://www.figma.com/api/mcp/asset/2aac8f3f-5a52-42dc-ac35-e000fb94e1a6': '/assets/images/case-slider-1-check1.svg',
  'https://www.figma.com/api/mcp/asset/209dbca9-3001-4e46-9850-713166d78979': '/assets/images/case-slider-1-check2.svg',
  'https://www.figma.com/api/mcp/asset/fce5e027-a4fc-4298-9d05-dd08f3f28c62': '/assets/images/case-slider-2-dark.png',
  'https://www.figma.com/api/mcp/asset/704aae83-16f4-4ba5-99af-8ee43a528ea0': '/assets/images/case-slider-2-texture.png',
  'https://www.figma.com/api/mcp/asset/f4378045-9978-495d-a136-39d3b2b7d3ac': '/assets/images/case-slider-2-frame.png',
  'https://www.figma.com/api/mcp/asset/d23ad32e-3af0-4868-a326-5d0e5ded529b': '/assets/images/case-slider-2-img3.png',
  'https://www.figma.com/api/mcp/asset/c4f0a6ff-3fd9-4069-b0a6-7e3898b3121b': '/assets/images/case-slider-2-img4.png',
  'https://www.figma.com/api/mcp/asset/fe355c15-986e-4c00-b519-35e84be6084e': '/assets/images/case-slider-2-img13.png',
  'https://www.figma.com/api/mcp/asset/b493a74e-6379-4396-a2ef-657ea4fd5f37': '/assets/images/case-slider-2-group344.png',
  'https://www.figma.com/api/mcp/asset/d9b3e27f-08fe-4d57-ba12-3a31900984e2': '/assets/images/case-slider-2-group343.png',
  'https://www.figma.com/api/mcp/asset/d532c0ae-3bf9-47ce-913b-2aaa6a995f44': '/assets/images/case-slider-2-check3.svg',
  'https://www.figma.com/api/mcp/asset/46345d4b-280b-407f-890e-f2302d6fb6a7': '/assets/images/case-slider-2-check4.svg',
  
  // CaseStudySection
  'https://www.figma.com/api/mcp/asset/2254675d-b151-47ac-9e66-52209445df74': '/assets/images/case-study-main.png',
  'https://www.figma.com/api/mcp/asset/495d45b9-c910-4e7f-b4ae-8cbfa01c5696': '/assets/images/case-study-overlay1.png',
  'https://www.figma.com/api/mcp/asset/8e7749c5-eb27-4eb3-ab3a-00a493f35833': '/assets/images/case-study-overlay2.png',
  'https://www.figma.com/api/mcp/asset/3471ef88-21ba-41b0-a85e-f7537254148f': '/assets/images/case-study-icon.png',
  
  // ScalecraftComparisonSection
  'https://www.figma.com/api/mcp/asset/e19eb4e7-4c73-4e42-9c9e-a01c36010db9': '/assets/images/comparison-agenturen-1.png',
  'https://www.figma.com/api/mcp/asset/3056be36-3d81-4f68-a651-9cb2628dc5a3': '/assets/images/comparison-agenturen-2.png',
  'https://www.figma.com/api/mcp/asset/e6ed6fff-114b-485c-b1d1-c44091ae01f4': '/assets/images/comparison-agenturen-3.png',
  'https://www.figma.com/api/mcp/asset/c5f8dd2e-e28f-4aa5-8365-ccf1b63ff50f': '/assets/images/comparison-mitarbeiter-1.png',
  'https://www.figma.com/api/mcp/asset/2e067ec6-e5ed-40df-92fb-f442389c3318': '/assets/images/comparison-mitarbeiter-2.png',
  'https://www.figma.com/api/mcp/asset/197b781e-fdf1-4ae5-995a-feea72a4dc93': '/assets/images/comparison-systeme.png',
  
  // BenefitsSection
  'https://www.figma.com/api/mcp/asset/72a80d30-3dfa-4fd2-b445-9fd0e31d40b0': '/assets/images/benefit-1.png',
  'https://www.figma.com/api/mcp/asset/0367fb3b-d1d6-4741-90b2-afc4dab21401': '/assets/images/benefit-2.png',
  'https://www.figma.com/api/mcp/asset/558e2e1a-6728-4532-a4c5-949a439b0082': '/assets/images/benefit-3.png',
  'https://www.figma.com/api/mcp/asset/354f1e61-7db8-478f-998d-9a07a115f062': '/assets/images/benefit-4.png',
  
  // FeatureCardsSection
  'https://www.figma.com/api/mcp/asset/a433ef98-2a54-4228-a0e3-94817748df73': '/assets/images/feature-texture.png',
  'https://www.figma.com/api/mcp/asset/d74237fa-ce71-41db-9066-2f770f184507': '/assets/images/feature-profile.png',
  'https://www.figma.com/api/mcp/asset/221537e7-0ea5-4734-bb29-340b132a2089': '/assets/images/feature-icon-1.svg',
  'https://www.figma.com/api/mcp/asset/de619ce2-c4d1-470b-9d49-6bb441f59189': '/assets/images/feature-icon-2.svg',
  'https://www.figma.com/api/mcp/asset/0b4e5c09-40ba-4a7a-9a13-eca5871fa217': '/assets/images/feature-timeline-dot-1.svg',
  'https://www.figma.com/api/mcp/asset/e12a1448-c2ce-45cb-bf16-6ead2ad007ee': '/assets/images/feature-timeline-dot-2.svg',
  'https://www.figma.com/api/mcp/asset/43d9f7ee-1a33-482e-a8ba-c381dbd936dc': '/assets/images/feature-timeline-dot-3.svg',
  'https://www.figma.com/api/mcp/asset/852beaa3-8020-4731-af95-d241d48c95ee': '/assets/images/feature-timeline-dot-4.svg',
  'https://www.figma.com/api/mcp/asset/0531e5dd-35c7-4e93-b1a6-16fbeaf7cf50': '/assets/images/feature-scalecraft-text.svg',
  
  // VisualSolutionsSection
  'https://www.figma.com/api/mcp/asset/05e39ed4-e212-4ff9-8fb2-e1bff19aa6e8': '/assets/images/visual-check-icon-1.svg',
  'https://www.figma.com/api/mcp/asset/6b9047fc-5390-4c9f-8c87-6c8b991273f4': '/assets/images/visual-check-icon-2.svg',
  'https://www.figma.com/api/mcp/asset/65c537c1-9aff-4203-a659-6c8068c2eb36': '/assets/images/visual-check-icon-3.svg',
  'https://www.figma.com/api/mcp/asset/7aa74443-0e08-415b-a85c-3ef833657a65': '/assets/images/visual-main.png',
  'https://www.figma.com/api/mcp/asset/9dbbdfce-e4d3-4d01-b157-72125f82681e': '/assets/images/visual-bento-1.png',
  'https://www.figma.com/api/mcp/asset/ba6bdbcf-020e-454c-8d8c-652884f679f7': '/assets/images/visual-bento-2.png',
  'https://www.figma.com/api/mcp/asset/ad2aff21-c7da-45a1-a462-99cb40803a5a': '/assets/images/visual-bento-3.png',
  'https://www.figma.com/api/mcp/asset/f43ce5d0-14ce-477e-8fce-2b96707f3920': '/assets/images/visual-bento-4.png',
  'https://www.figma.com/api/mcp/asset/83c9698c-c955-40de-896b-fe5f76169f2e': '/assets/images/visual-bento-5.png',
  
  // FAQSection
  'https://www.figma.com/api/mcp/asset/21c1fc39-8a03-449b-bdab-6d6dd4b9a943': '/assets/images/faq-collapse-icon.svg',
  'https://www.figma.com/api/mcp/asset/ffbcf209-03da-4725-8ce9-845b8387e704': '/assets/images/faq-expand-icon.svg',
  
  // CTASection
  'https://www.figma.com/api/mcp/asset/a31e81ce-881c-4818-ae86-301d036925f9': '/assets/images/cta-avatar-1.png',
  'https://www.figma.com/api/mcp/asset/c7f6f661-c848-497f-8871-633698ce4e3a': '/assets/images/cta-avatar-2.png',
  'https://www.figma.com/api/mcp/asset/f898d277-96fa-46c9-a343-3de87b17649d': '/assets/images/cta-avatar-3.png',
  'https://www.figma.com/api/mcp/asset/3e5c5fc2-f95c-4b8e-8228-9a7f56882c2b': '/assets/images/cta-avatar-4.png',
  'https://www.figma.com/api/mcp/asset/e5d9f07e-12bf-4ce6-9140-37aff4cedc1e': '/assets/images/cta-avatar-5.png',
  'https://www.figma.com/api/mcp/asset/f5d67ebd-b8dc-4aaf-b3ee-0b8405a3e414': '/assets/images/cta-avatar-6.png',
};

const sectionsDir = path.join(__dirname, '../app/components/sections');
const backupDir = path.join(__dirname, '../backups/sections-' + Date.now());

// Tạo backup folder
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

function replaceInFile(filePath) {
  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let replacements = 0;
  
  // Backup file
  fs.copyFileSync(filePath, path.join(backupDir, fileName));
  
  // Replace all Figma URLs
  for (const [figmaUrl, localPath] of Object.entries(assetMapping)) {
    const regex = new RegExp(figmaUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, localPath);
      replacements += matches.length;
    }
  }
  
  // Write back
  if (replacements > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  
  return replacements;
}

async function replaceAllUrls() {
  console.log('\n🔄 Starting URL replacement...\n');
  console.log(`📦 Backup created at: ${backupDir}\n`);
  
  const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));
  let totalReplacements = 0;
  
  for (const file of files) {
    const filePath = path.join(sectionsDir, file);
    const count = replaceInFile(filePath);
    
    if (count > 0) {
      console.log(`✅ ${file}: ${count} replacements`);
      totalReplacements += count;
    } else {
      console.log(`⚪ ${file}: no changes`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`✨ Replacement complete!`);
  console.log(`📊 Total: ${totalReplacements} URLs replaced`);
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`💾 Backups saved to: ${backupDir}`);
  console.log('='.repeat(60) + '\n');
}

replaceAllUrls();
