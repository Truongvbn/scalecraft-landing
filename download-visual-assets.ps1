# Script to download all Visual Solutions assets from Figma
# Run this script from the project root directory

Write-Host "Starting download of Visual Solutions assets..." -ForegroundColor Green

# Create directory if it doesn't exist
$targetDir = "public\assets\images\visual-solutions"
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    Write-Host "Created directory: $targetDir" -ForegroundColor Yellow
}

# Define all assets with their URLs and filenames
$assets = @(
    # Product Images
    @{url='https://www.figma.com/api/mcp/asset/b915dfc6-062a-4969-a7f1-4b80a6b0a0e7'; name='product1.jpg'; desc='Main product image'},
    @{url='https://www.figma.com/api/mcp/asset/10bff595-3c30-4806-9a5b-5810d928768c'; name='product2.jpg'; desc='Product image 2'},
    @{url='https://www.figma.com/api/mcp/asset/52da5c54-f981-4142-a6e7-bb417d367d3b'; name='product3.jpg'; desc='Product image 3'},
    @{url='https://www.figma.com/api/mcp/asset/7cc56587-4c7f-4471-aa11-ed51db110ba2'; name='product4.jpg'; desc='Product image 4'},
    @{url='https://www.figma.com/api/mcp/asset/4d9b0559-193a-4d76-b639-400ec794d527'; name='product5.jpg'; desc='Product image 5'},
    @{url='https://www.figma.com/api/mcp/asset/605adcaa-592b-4071-aaa4-35f3d7b99892'; name='product6.jpg'; desc='Product image 6'},
    
    # Team Member Avatars
    @{url='https://www.figma.com/api/mcp/asset/6c9bba88-a821-4d09-bf55-5261f5202928'; name='avatar1.jpg'; desc='Team avatar 1'},
    @{url='https://www.figma.com/api/mcp/asset/7bf8f4cb-ee8b-4c85-8607-1877707a7029'; name='avatar2.jpg'; desc='Team avatar 2'},
    @{url='https://www.figma.com/api/mcp/asset/a05786c6-4d37-4d1e-ac07-7421d3a08518'; name='avatar3.jpg'; desc='Team avatar 3'},
    @{url='https://www.figma.com/api/mcp/asset/31927256-6e15-4d54-82f1-2d070fa8aa88'; name='avatar4.jpg'; desc='Team avatar 4'},
    @{url='https://www.figma.com/api/mcp/asset/e90af437-e458-4239-9dd1-f75675780977'; name='avatar5.jpg'; desc='Team avatar 5'},
    @{url='https://www.figma.com/api/mcp/asset/f7dafda0-af14-44bb-8339-b18d73d0a7de'; name='avatar6.jpg'; desc='Team avatar 6'},
    @{url='https://www.figma.com/api/mcp/asset/b42c5ccc-d72e-483c-a54a-89b7e2db00ec'; name='avatar7.jpg'; desc='Team avatar 7'},
    @{url='https://www.figma.com/api/mcp/asset/2a64ea0a-d0d2-4fa0-9e6d-033f49d58393'; name='avatar8.jpg'; desc='Team avatar 8'},
    
    # Timeline Icons
    @{url='https://www.figma.com/api/mcp/asset/c28dadeb-099a-4b99-b195-5a5cb8ba9550'; name='icon-2021.svg'; desc='Timeline icon 2021'},
    @{url='https://www.figma.com/api/mcp/asset/268a2ae3-52c1-4602-abff-b2e94f81f57c'; name='icon-2022.svg'; desc='Timeline icon 2022'},
    @{url='https://www.figma.com/api/mcp/asset/fc288544-0a76-4707-ad12-e5f34d8b54e0'; name='icon-2023.svg'; desc='Timeline icon 2023'},
    @{url='https://www.figma.com/api/mcp/asset/fe11cd9e-62a4-4539-910a-482f6924f834'; name='icon-2024.svg'; desc='Timeline icon 2024'},
    @{url='https://www.figma.com/api/mcp/asset/d266f86c-70fc-4b4d-a1d7-00ad25ec372b'; name='icon-2025.svg'; desc='Timeline icon 2025'}
)

# Download each asset
$successCount = 0
$failCount = 0
$total = $assets.Count

Write-Host "`nDownloading $total assets...`n" -ForegroundColor Cyan

foreach ($asset in $assets) {
    $outputPath = Join-Path $targetDir $asset.name
    
    try {
        Write-Host "[$($successCount + $failCount + 1)/$total] Downloading: $($asset.desc)..." -NoNewline
        
        # Download the file
        Invoke-WebRequest -Uri $asset.url -OutFile $outputPath -ErrorAction Stop
        
        # Check if file was created and has content
        if ((Test-Path $outputPath) -and ((Get-Item $outputPath).Length -gt 0)) {
            $fileSize = [math]::Round((Get-Item $outputPath).Length / 1KB, 2)
            Write-Host " OK ($fileSize KB)" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host " FAILED (File empty or not created)" -ForegroundColor Red
            $failCount++
        }
    }
    catch {
        Write-Host " FAILED (Error: $($_.Exception.Message))" -ForegroundColor Red
        $failCount++
    }
    
    # Small delay to avoid rate limiting
    Start-Sleep -Milliseconds 200
}

# Summary
Write-Host "`n" + "="*60 -ForegroundColor Cyan
Write-Host "Download Summary:" -ForegroundColor Cyan
Write-Host "="*60 -ForegroundColor Cyan
Write-Host "Total assets: $total" -ForegroundColor White
Write-Host "Successfully downloaded: $successCount" -ForegroundColor Green
Write-Host "Failed: $failCount" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "White" })
Write-Host "Target directory: $targetDir" -ForegroundColor Yellow
Write-Host "="*60 -ForegroundColor Cyan

if ($successCount -eq $total) {
    Write-Host "`nSUCCESS: All assets downloaded successfully!" -ForegroundColor Green
} elseif ($successCount -gt 0) {
    Write-Host "`nWARNING: Some assets failed to download. Please check the errors above." -ForegroundColor Yellow
} else {
    Write-Host "`nERROR: All downloads failed. Please check your internet connection and try again." -ForegroundColor Red
}

Write-Host "`nNote: Figma asset URLs expire after 7 days. If downloads fail, you may need to regenerate the URLs." -ForegroundColor Yellow
