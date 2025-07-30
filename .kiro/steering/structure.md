# Project Structure

## Root Directory Layout
```
/
├── index.html              # Main application page
├── jpg2webp.html          # Alternative entry point
├── script.js              # Main application logic
├── imageWorker.js         # Web Worker for image processing
├── squoosh-avif.js        # AVIF conversion implementation
├── style.css              # Main stylesheet (macOS-inspired design)
├── vercel.json            # Deployment configuration
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── ads.txt                # Advertising configuration
└── README.md              # Project documentation
```

## Language System
```
/languages/
├── languages_main.js      # Core i18n system and language loader
├── en.js                  # English translations (default)
├── es.js                  # Spanish translations
├── pt.js                  # Portuguese translations
├── fr.js                  # French translations
├── de.js                  # German translations
├── it.js                  # Italian translations
├── el.js                  # Greek translations
├── zh.js                  # Chinese translations
├── ja.js                  # Japanese translations
├── ko.js                  # Korean translations
├── ru.js                  # Russian translations
├── ar.js                  # Arabic translations
├── hi.js                  # Hindi translations
├── nl.js                  # Dutch translations
├── pl.js                  # Polish translations
├── tr.js                  # Turkish translations
├── th.js                  # Thai translations
├── vi.js                  # Vietnamese translations
├── id.js                  # Indonesian translations
└── sv.js                  # Swedish translations
```

## Assets
```
/logo/
├── logo.svg               # Main logo (SVG format)
└── og.png                 # Open Graph image for social sharing
```

## File Organization Principles

### JavaScript Architecture
- **script.js**: Main application logic, UI interactions, file handling
- **imageWorker.js**: Background image processing to prevent UI blocking
- **squoosh-avif.js**: Specialized AVIF conversion with fallbacks
- **languages/**: Modular internationalization system

### CSS Structure
- **Single stylesheet**: All styles in `style.css` for simplicity
- **CSS Custom Properties**: Used for theming and consistency
- **macOS Design System**: Consistent with Apple's design language
- **Responsive Design**: Mobile-first approach with progressive enhancement

### HTML Structure
- **Semantic HTML**: Proper use of semantic elements
- **Accessibility**: ARIA labels and keyboard navigation support
- **SEO Optimization**: Meta tags, structured data, multi-language support
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## Naming Conventions
- **Files**: kebab-case for HTML/CSS, camelCase for JavaScript
- **CSS Classes**: BEM-inspired naming (e.g., `.file-item`, `.upload-area`)
- **JavaScript**: camelCase for variables/functions, PascalCase for constructors
- **Language Keys**: snake_case for translation keys (e.g., `drag_drop`, `convert_all`)

## Development Guidelines
- **No Build Process**: Direct file serving for simplicity
- **Browser Compatibility**: Progressive enhancement with fallbacks
- **Performance**: Lazy loading, efficient memory management
- **Internationalization**: All user-facing text must be translatable
- **Privacy**: No external dependencies that compromise user privacy