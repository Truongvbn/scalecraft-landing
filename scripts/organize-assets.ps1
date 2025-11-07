# Organize Assets Script
# Move files to appropriate section folders

$baseDir = "public/assets/images"

# Hero Section
Move-Item "$baseDir/hero-*.png" "$baseDir/hero/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/hero-*.svg" "$baseDir/hero/" -Force -ErrorAction SilentlyContinue

# Stats Hero Section
Move-Item "$baseDir/stats-hero-*.png" "$baseDir/stats-hero/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/stats-hero-*.svg" "$baseDir/stats-hero/" -Force -ErrorAction SilentlyContinue

# Case Study Section
Move-Item "$baseDir/case-study-*.png" "$baseDir/case-study/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/case-study-*.svg" "$baseDir/case-study/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/case-slider-*.png" "$baseDir/case-study/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/case-slider-*.svg" "$baseDir/case-study/" -Force -ErrorAction SilentlyContinue

# Comparison Section
Move-Item "$baseDir/comparison-*.png" "$baseDir/comparison/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/comparison-*.svg" "$baseDir/comparison/" -Force -ErrorAction SilentlyContinue

# Stats Section
Move-Item "$baseDir/stats-*.png" "$baseDir/stats/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/stats-*.svg" "$baseDir/stats/" -Force -ErrorAction SilentlyContinue

# Benefits Section
Move-Item "$baseDir/benefit-*.png" "$baseDir/benefits/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/benefit-*.svg" "$baseDir/benefits/" -Force -ErrorAction SilentlyContinue

# Features Section
Move-Item "$baseDir/feature-*.png" "$baseDir/features/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/feature-*.svg" "$baseDir/features/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/card1-*.png" "$baseDir/features/" -Force -ErrorAction SilentlyContinue

# Visual Solutions Section
Move-Item "$baseDir/visual-*.png" "$baseDir/visual-solutions/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/visual-*.svg" "$baseDir/visual-solutions/" -Force -ErrorAction SilentlyContinue

# FAQ Section
Move-Item "$baseDir/faq-*.png" "$baseDir/faq/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/faq-*.svg" "$baseDir/faq/" -Force -ErrorAction SilentlyContinue

# CTA Section
Move-Item "$baseDir/cta-*.png" "$baseDir/cta/" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir/cta-*.svg" "$baseDir/cta/" -Force -ErrorAction SilentlyContinue

Write-Host "Assets organized successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Folder structure:"
Get-ChildItem "$baseDir" -Directory | ForEach-Object {
    $count = (Get-ChildItem $_.FullName -File).Count
    Write-Host "  - $($_.Name): $count files" -ForegroundColor Cyan
}
