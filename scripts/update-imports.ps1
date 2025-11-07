# Update all asset imports to use new folder structure

$sections = @(
    @{
        File = "app/components/sections/ScalecraftComparisonSection.tsx"
        OldPath = '"/assets/images/comparison-'
        NewPath = '"/assets/images/comparison/comparison-'
    },
    @{
        File = "app/components/sections/StatsSection.tsx"
        OldPath = '"/assets/images/stats-'
        NewPath = '"/assets/images/stats/stats-'
    },
    @{
        File = "app/components/sections/BenefitsSection.tsx"
        OldPath = '"/assets/images/benefit-'
        NewPath = '"/assets/images/benefits/benefit-'
    },
    @{
        File = "app/components/sections/FeatureCardsSection.tsx"
        OldPath1 = '"/assets/images/feature-'
        NewPath1 = '"/assets/images/features/feature-'
        OldPath2 = '"/assets/images/card1-'
        NewPath2 = '"/assets/images/features/card1-'
    },
    @{
        File = "app/components/sections/VisualSolutionsSection.tsx"
        OldPath = '"/assets/images/visual-'
        NewPath = '"/assets/images/visual-solutions/visual-'
    },
    @{
        File = "app/components/sections/FAQSection.tsx"
        OldPath = '"/assets/images/faq-'
        NewPath = '"/assets/images/faq/faq-'
    },
    @{
        File = "app/components/sections/CTASection.tsx"
        OldPath = '"/assets/images/cta-'
        NewPath = '"/assets/images/cta/cta-'
    },
    @{
        File = "app/components/Footer.tsx"
        OldPath = '"/assets/images/hero-nav-'
        NewPath = '"/assets/images/hero/hero-nav-'
    }
)

foreach ($section in $sections) {
    $file = $section.File
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        if ($section.OldPath) {
            $content = $content -replace [regex]::Escape($section.OldPath), $section.NewPath
        }
        
        if ($section.OldPath1) {
            $content = $content -replace [regex]::Escape($section.OldPath1), $section.NewPath1
        }
        
        if ($section.OldPath2) {
            $content = $content -replace [regex]::Escape($section.OldPath2), $section.NewPath2
        }
        
        Set-Content $file -Value $content -NoNewline
        Write-Host "Updated: $file" -ForegroundColor Green
    } else {
        Write-Host "Not found: $file" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "All imports updated successfully!" -ForegroundColor Green
