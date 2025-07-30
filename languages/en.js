// en 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['en'] = {
        // Header
        'title': 'JPG Convert',
        
        // Upload Area
        'drag_drop': 'Drag and drop your image here or',
        'browse': 'browse',
        'click_anywhere': 'Click anywhere to select files',
        
        // Controls
        'convert_to': 'Convert to:',
        'quality': 'Quality:',
        'convert_all': 'Convert All',
        
        // Conversion Options Section
        'conversion_options': 'Conversion Options',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Convert JPG images to modern WebP format for smaller file size while maintaining quality.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Use advanced AVIF format for best compression ratio and faster website loading.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Convert to lossless PNG format, ideal for images requiring transparency or high quality.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Convert to professional TIFF format, suitable for printing, publishing, and pro editing workflows.',
        
        // Format descriptions
        'webp_desc': 'WebP - Good compression, wide support',
        'avif_desc': 'AVIF - Best compression, newer format',
        
        // AVIF specific messages
        'avif_processing': 'Processing AVIF (may take longer)...',
        'avif_not_supported': 'AVIF encoding not supported in your browser',
        'using_avif_encoder': 'Using Squoosh for AVIF conversion...',
        'avif_conversion_failed': 'AVIF conversion failed',
        'avif_not_available': 'AVIF encoder not available, try another format',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Converted',
        
        // Conversion status messages
        'converting': 'Converting...',
        'converting_fallback': 'Converting with fallback...',
        'conversion_failed': 'Conversion failed',
        'converted_size': 'Converted ({0} KB)',
        'original_kept': 'Original kept ({0} KB)',
        'size_info': 'Size: {0} KB',
        'files_skipped': 'Some files were skipped. Only JPEG and PNG files are supported.',
        
        // Buttons
        'clear_all': 'Clear All',
        'download': 'Download',
        'download_all': 'Download All',
        
        // Metadata removal message
        'metadata_note': 'Note: Metadata like EXIF will be removed during conversion',
        
        // Key features section
        'key_features': 'Key Features',
        'no_uploads': 'No Uploads to Server',
        'privacy_desc': 'Your images stay private. No data is sent to any server.',
        'local_processing': 'Local Processing',
        'local_desc': 'All processing is done locally in your browser.',
        'best_web': 'Best for Web',
        'web_desc': 'Optimized images perfectly suited for websites and web apps.',
        'removes_metadata': 'Removes Metadata',
        'metadata_desc': 'Automatically strips unnecessary metadata while converting.',
        'fast_conversion': 'Fast Conversion',
        'fast_desc': 'Performant and lightning-fast conversion process.',
        'top_performance': 'Top Performance',
        'performance_desc': 'Best-in-class performance for local image converters.',
        'batch_processing': 'Batch Processing',
        'batch_desc': 'Convert multiple images at once with bulk processing.',
        'size_reduction': 'Size Reduction',
        'size_desc': 'Significantly reduces file size while maintaining quality.',
        
        // Testimonials section
        'user_reviews': 'User Testimonials',
        'review1_name': 'Robert Thompson',
        'review1_text': 'This image converter is a game-changer for my photography business. The batch processing feature saves me hours of work, and the quality control is exceptional.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'As a graphic designer, I appreciate the precision and reliability of this tool. The interface is intuitive, and the conversion quality is consistently excellent.',
        'review3_name': 'William Chen',
        'review3_text': 'The local processing feature gives me peace of mind when handling sensitive client images. Fast, secure, and professional - exactly what I needed.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'I use this tool daily for my social media content. The ability to maintain image quality while reducing file size is invaluable for my work.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Perfect for my web development projects. The batch conversion feature and format flexibility make this tool an essential part of my workflow.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'The speed and efficiency of this converter are remarkable. It handles large batches of images seamlessly, saving me valuable time in my design work.',
        
        // FAQ Section
        'faq': 'Frequently Asked Questions',
        'faq1_q': 'What image formats can I convert to WebP?',
        'faq1_a': 'This tool is specifically designed to convert JPG/JPEG and PNG images to WebP format. Other formats are not supported at this time.',
        'faq2_q': 'Is my data secure when using this tool?',
        'faq2_a': 'Absolutely! All processing is done locally in your browser. Your images never leave your device, and no data is sent to any server, ensuring complete privacy and security.',
        'faq3_q': 'What is WebP and why should I use it?',
        'faq3_a': 'WebP is a modern image format developed by Google that provides superior lossless and lossy compression for web images. WebP images are typically 25-35% smaller than comparable JPEG or PNG files while maintaining similar visual quality, resulting in faster website loading times and reduced bandwidth usage.',
        'faq4_q': 'What quality setting should I use?',
        'faq4_a': 'For most web usage, a quality setting between 70-85% offers the best balance between file size and image quality. Lower values (below 70%) will produce smaller files but may show more compression artifacts. Higher values (above 85%) will maintain higher quality but with diminishing returns on file size reduction.',
        'faq5_q': 'Is there a limit to how many images I can convert at once?',
        'faq5_a': 'There\'s no fixed limit, but performance depends on your device\'s capabilities. For optimal performance, we recommend converting batches of 20-30 images at a time. Larger batches may cause your browser to slow down.',
        'faq6_q': 'Are WebP images supported in all browsers?',
        'faq6_a': 'WebP is now supported in all major modern browsers including Chrome, Firefox, Edge, Safari, and Opera. However, older browser versions might not support WebP. For websites, it\'s recommended to provide fallback formats using the picture element.',
        
        // Email
        'email': 'Email:',
        
        // AVIF Page Specific
        'avif_page_title': 'JPG to AVIF Converter',
        'avif_benefits_title': 'Why Choose AVIF?',
        'avif_superior_compression': 'Superior Compression',
        'avif_compression_desc': 'Up to 50% smaller files than JPEG with better quality',
        'avif_high_quality': 'High Quality',
        'avif_quality_desc': 'Better quality at same file size compared to other formats',
        'avif_modern_standard': 'Modern Standard',
        'avif_standard_desc': 'Next-generation image format for the modern web',
        'avif_browser_support': 'Browser Support',
        'avif_compatibility_note': 'AVIF is supported in Chrome 85+, Firefox 93+, Safari 16+, and Edge 85+. For older browsers, consider using WebP as a fallback.',
        'current_page': 'Current Page',
        
        // About Page
        'nav_home': 'Home',
        'nav_jpg_to_webp': 'JPG to WebP',
        'nav_jpg_to_avif': 'JPG to AVIF',
        'nav_jpg_to_png': 'JPG to PNG',
        'nav_jpg_to_tiff': 'JPG to TIFF',
        'nav_about': 'About Us',
        'about_title': 'About JPGConvert.org',
        'about_subtitle': 'JPGConvert.org is an online platform dedicated to image format conversion and compression, designed and operated by the photography-focused website LensClear.net. We are committed to providing photographers, designers, and content creators with a fast, reliable, and distraction-free solution for JPG image processing.',
        'mission_title': 'Our Mission',
        'mission_content': 'We believe that image processing shouldn\'t rely on complex software or bloated workflows. Our mission at JPGConvert.org is simple: to make JPG conversion and compression easy, efficient, and secure for everyone. Whether you\'re working from a desktop, tablet, mobile device, or integrating our tools into your workflow, we offer fast, stable, and user-friendly solutions.',
        'story_title': 'Our Story',
        'story_content': 'JPGConvert.org was launched by LensClear.net — an independent platform focused on photography education and gear reviews. Over years of content creation and user interaction, we came to understand the common pain points photographers face when handling JPG images: format compatibility, oversized files, quality loss, and more.',
        'story_content2': 'To meet both our own and our audience\'s real-world image optimization needs, we created JPGConvert.org — a tool built with an "image-first" philosophy. The goal was clear from the beginning: focus solely on JPG image conversion, compression, and format optimization — no fluff, no distractions.',
        'story_content3': 'From basic JPG to WebP and AVIF conversion, to advanced features like lossless compression, batch processing, Exif data removal, and transparent background handling, we continue to evolve with one principle in mind: build the tools photographers actually need, from a photographer\'s perspective.',
        'lensclear_title': 'About LensClear.net',
        'lensclear_content': 'LensClear.net is an independent content platform for global photography enthusiasts. It focuses on educational resources, gear usage guides, and original perspectives on photography. JPGConvert.org is an extension of our "photography + technology" philosophy — and marks our first step into the world of image-processing tools.',
        'visit_lensclear': 'Visit LensClear.net →',
        'values_title': 'Our Values',
        'privacy_title': 'Privacy First',
        'privacy_content': 'All image processing happens locally in your browser. Your images never leave your device, ensuring complete privacy and security.',
        'speed_title': 'Lightning Fast',
        'speed_content': 'Optimized algorithms and local processing ensure rapid conversion without the need for server uploads or downloads.',
        'quality_title': 'Quality Focused',
        'quality_content': 'Advanced compression techniques maintain visual quality while significantly reducing file sizes for optimal web performance.',
        'accessibility_title': 'Universal Access',
        'accessibility_content': 'Works seamlessly across all devices and platforms - desktop, tablet, and mobile - with no software installation required.',
        'contact_title': 'Get in Touch',
        'contact_content': 'Have questions, suggestions, or feedback? We\'d love to hear from you. Reach out to us and help us make JPGConvert.org even better.',
        'footer_navigation': 'Navigation',
        'footer_company': 'Company',
        'footer_operated_by': 'JPGConvert.org is operated by LensClear.net',
        'footer_visit_lensclear': 'Visit LensClear.net',
        'footer_contact': 'Contact',
        'footer_privacy_note': 'We respect your privacy. All conversions are processed locally in your browser.',
        'footer_copyright': '© 2025 JPGConvert.org. All rights reserved.'
    };