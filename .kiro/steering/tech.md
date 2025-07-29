# Technology Stack

## Core Technologies
- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Image Processing**: Canvas API, Web Workers, OffscreenCanvas
- **Build System**: None - static files served directly
- **Deployment**: Vercel with simple rewrites configuration

## Key Libraries & Dependencies
- **JSZip**: For batch download functionality (ZIP file creation)
- **Squoosh AVIF**: Custom AVIF encoding implementation
- **Web Workers**: Background image processing to prevent UI blocking

## Browser APIs Used
- Canvas API and OffscreenCanvas for image manipulation
- File API for drag-and-drop and file selection
- Blob API for file creation and downloads
- Web Workers for non-blocking image processing
- LocalStorage for language preferences

## Architecture Patterns
- **Modular JavaScript**: Separate files for different concerns (main script, worker, AVIF handler)
- **Progressive Enhancement**: Fallback methods when modern APIs aren't available
- **Client-side Processing**: All image conversion happens in browser
- **Internationalization**: Modular language system with dynamic loading

## Development Commands
Since this is a static site with no build process:

```bash
# Local development server
python -m http.server 8000
# or
python3 -m http.server 8000

# Access at http://localhost:8000
```

## Deployment
- **Platform**: Vercel
- **Configuration**: `vercel.json` handles URL rewrites
- **Process**: Direct file upload, no build step required
- **Domain**: jpgconvert.org with multi-language SEO optimization

## Performance Considerations
- Web Workers prevent main thread blocking during conversion
- Fallback methods ensure compatibility across browsers
- Efficient memory management with URL.revokeObjectURL()
- Batch processing optimized for browser capabilities