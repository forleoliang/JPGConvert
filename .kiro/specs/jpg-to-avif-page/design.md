# Design Document

## Overview

The JPG → AVIF page will be a specialized conversion interface that leverages the existing application architecture while providing AVIF-specific functionality. The design follows the established macOS-inspired UI patterns and maintains consistency with the existing jpg2webp.html page structure.

## Architecture

### Page Structure
The jpg2avif.html page will follow the same architectural pattern as the existing pages:
- **HTML Structure**: Semantic HTML5 with proper meta tags and internationalization support
- **CSS Styling**: Shared style.css with AVIF-specific customizations
- **JavaScript Logic**: Reuse existing script.js with AVIF format pre-selected
- **AVIF Processing**: Leverage existing squoosh-avif.js implementation

### Component Hierarchy
```
jpg2avif.html
├── Header (with language selector and navigation)
├── Main Conversion Interface
│   ├── Upload Area (drag-and-drop)
│   ├── Format Controls (AVIF pre-selected)
│   ├── Quality Slider
│   └── Action Buttons
├── File List (batch processing)
├── Preview Area (original vs converted)
├── AVIF Information Section
├── Conversion Options (navigation to other formats)
├── Features Section
└── FAQ Section (AVIF-specific)
```

## Components and Interfaces

### 1. HTML Document Structure
- **Base Template**: Copy from jpg2webp.html with AVIF-specific modifications
- **Meta Tags**: AVIF-focused descriptions and keywords
- **Canonical URL**: `/jpg2avif` with proper hreflang attributes
- **Title**: "JPG to AVIF Converter - [Language] - macOS Style"

### 2. JavaScript Integration
- **Format Pre-selection**: Set `selectedFormat = 'avif'` on page load
- **AVIF Button State**: Mark AVIF format button as active by default
- **Browser Compatibility**: Enhanced error handling for AVIF support detection
- **Conversion Logic**: Reuse existing AVIF conversion from squoosh-avif.js

### 3. AVIF Information Section
```html
<section class="avif-info-section">
    <h2>Why Choose AVIF?</h2>
    <div class="avif-benefits-grid">
        <div class="benefit-card">
            <h3>Superior Compression</h3>
            <p>Up to 50% smaller files than JPEG</p>
        </div>
        <div class="benefit-card">
            <h3>High Quality</h3>
            <p>Better quality at same file size</p>
        </div>
        <div class="benefit-card">
            <h3>Modern Standard</h3>
            <p>Next-generation image format</p>
        </div>
    </div>
</section>
```

### 4. Navigation Integration
- **Homepage Link**: Update main page AVIF card to link to `/jpg2avif`
- **Cross-format Navigation**: Provide links to other conversion pages
- **Breadcrumb**: Show current page context

## Data Models

### Page Configuration
```javascript
const pageConfig = {
    defaultFormat: 'avif',
    supportedInputFormats: ['image/jpeg', 'image/png'],
    outputFormat: 'image/avif',
    defaultQuality: 75,
    pageTitle: 'JPG to AVIF Converter',
    canonicalUrl: '/jpg2avif'
};
```

### AVIF-Specific Translations
```javascript
// Additional translation keys for AVIF page
const avifTranslations = {
    'avif_page_title': 'JPG to AVIF Converter',
    'avif_page_desc': 'Convert JPG/PNG to AVIF format for superior compression',
    'avif_benefits_title': 'Why Choose AVIF?',
    'avif_superior_compression': 'Superior Compression',
    'avif_high_quality': 'High Quality',
    'avif_modern_standard': 'Modern Standard',
    'avif_browser_support': 'Browser Support',
    'avif_compatibility_note': 'AVIF is supported in modern browsers'
};
```

## Error Handling

### AVIF Support Detection
1. **Browser Compatibility Check**: Use existing checkAvifSupport() function
2. **Graceful Degradation**: Show warning if AVIF not supported
3. **Fallback Options**: Suggest WebP as alternative format
4. **Error Messages**: Clear, actionable error messages in user's language

### Conversion Error Handling
1. **File Format Validation**: Reject unsupported file types
2. **Size Limitations**: Handle large file processing
3. **Memory Management**: Proper cleanup of blob URLs
4. **Network Issues**: Handle offline scenarios

## Testing Strategy

### Unit Testing
- **AVIF Support Detection**: Test browser compatibility checks
- **Format Pre-selection**: Verify AVIF is selected by default
- **Translation Loading**: Test AVIF-specific translation keys
- **URL Routing**: Verify proper navigation from homepage

### Integration Testing
- **End-to-End Conversion**: Test complete JPG → AVIF workflow
- **Multi-language Support**: Test all 20 languages on AVIF page
- **Cross-browser Testing**: Test AVIF support across different browsers
- **Mobile Responsiveness**: Test on various device sizes

### Performance Testing
- **Conversion Speed**: Measure AVIF conversion performance
- **Memory Usage**: Monitor memory consumption during batch processing
- **Page Load Time**: Ensure fast initial page load
- **Large File Handling**: Test with high-resolution images

## SEO and Accessibility

### SEO Optimization
- **Unique Meta Descriptions**: AVIF-specific descriptions for each language
- **Structured Data**: Schema.org markup for image conversion tool
- **Internal Linking**: Proper linking between conversion pages
- **Sitemap Updates**: Include jpg2avif.html in sitemap.xml

### Accessibility Features
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Color Contrast**: Maintain WCAG AA compliance
- **Focus Management**: Clear focus indicators

## Browser Compatibility

### AVIF Support Matrix
- **Chrome 85+**: Full AVIF support
- **Firefox 93+**: Full AVIF support  
- **Safari 16+**: Full AVIF support
- **Edge 85+**: Full AVIF support

### Fallback Strategy
1. **Detection**: Check AVIF encoding support on page load
2. **Warning Display**: Show compatibility notice if unsupported
3. **Alternative Suggestion**: Recommend WebP for older browsers
4. **Progressive Enhancement**: Core functionality works without AVIF

## Implementation Notes

### File Creation Process
1. **Copy Base Structure**: Use jpg2webp.html as template
2. **Update Meta Tags**: Change descriptions and keywords to AVIF-focused
3. **Modify JavaScript**: Set AVIF as default format
4. **Add AVIF Information**: Include benefits and compatibility sections
5. **Update Navigation**: Link from homepage AVIF card

### Vercel Configuration
```json
{
  "rewrites": [
    {
      "source": "/jpg2webp",
      "destination": "/jpg2webp.html"
    },
    {
      "source": "/jpg2avif", 
      "destination": "/jpg2avif.html"
    }
  ]
}
```

### Language File Updates
Add AVIF-specific translation keys to all 20 language files in the `/languages/` directory.