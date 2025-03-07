// ko 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['ko'] = {
        // Header
        'title': 'JPG 변환기',
        
        // Upload Area
        'drag_drop': '이미지를 여기에 끌어다 놓거나',
        'browse': '찾아보기',
        
        // Controls
        'convert_to': '변환 형식:',
        'quality': '품질:',
        'convert_all': '모두 변환',
        
        // Conversion Options Section
        'conversion_options': '변환 옵션',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'JPG 이미지를 현대적인 WebP 형식으로 변환하여 품질은 유지하면서 파일 크기를 줄입니다.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': '최고의 압축률과 더 빠른 웹사이트 로딩을 위해 고급 AVIF 형식을 사용합니다.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': '투명한 배경이나 고품질이 필요한 이미지에 이상적인 무손실 PNG 형식으로 변환합니다.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': '인쇄, 출판 및 전문 편집 워크플로우에 적합한 전문 TIFF 형식으로 변환합니다.',
        
        // Format descriptions
        'webp_desc': 'WebP - 좋은 압축률, 넓은 지원',
        'avif_desc': 'AVIF - 최고의 압축률, 더 새로운 형식',
        
        // AVIF specific messages
        'avif_processing': 'AVIF 처리 중(더 오래 걸릴 수 있음)...',
        'avif_not_supported': '브라우저에서 AVIF 인코딩이 지원되지 않습니다',
        'using_avif_encoder': 'AVIF 변환에 Squoosh 사용 중...',
        'avif_conversion_failed': 'AVIF 변환 실패',
        'avif_not_available': 'AVIF 인코더를 사용할 수 없습니다. 다른 형식을 시도하세요',
        
        // Preview Area
        'original': '원본',
        'converted': '변환됨',
        
        // Conversion status messages
        'converting': '변환 중...',
        'converting_fallback': '대체 방법으로 변환 중...',
        'conversion_failed': '변환 실패',
        'converted_size': '변환됨 ({0} KB)',
        'original_kept': '원본 유지됨 ({0} KB)',
        'size_info': '크기: {0} KB',
        'files_skipped': '일부 파일이 건너뛰어졌습니다. JPEG와 PNG 파일만 지원됩니다.',
        
        // Buttons
        'clear_all': '모두 지우기',
        'download': '다운로드',
        'download_all': '모두 다운로드',
        
        // Metadata removal message
        'metadata_note': '참고: EXIF와 같은 메타데이터는 변환 과정에서 제거됩니다',
        
        // Key features section
        'key_features': '주요 기능',
        'no_uploads': '서버에 업로드 없음',
        'privacy_desc': '이미지는 비공개로 유지됩니다. 어떤 데이터도 서버로 전송되지 않습니다.',
        'local_processing': '로컬 처리',
        'local_desc': '모든 처리는 브라우저에서 로컬로 수행됩니다.',
        'best_web': '웹에 최적화',
        'web_desc': '웹사이트 및 웹 앱에 완벽하게 적합한 최적화된 이미지.',
        'removes_metadata': '메타데이터 제거',
        'metadata_desc': '변환하는 동안 불필요한 메타데이터를 자동으로 제거합니다.',
        'fast_conversion': '빠른 변환',
        'fast_desc': '성능이 뛰어나고 빠른 변환 프로세스.',
        'top_performance': '최고의 성능',
        'performance_desc': '로컬 이미지 변환기 중 최고의 성능.',
        'batch_processing': '일괄 처리',
        'batch_desc': '대량 처리로 여러 이미지를 한 번에 변환.',
        'size_reduction': '크기 감소',
        'size_desc': '품질을 유지하면서 파일 크기를 크게 줄입니다.',
        
        // Reviews section
        'user_reviews': '사용자 리뷰',
        'review1_name': '로버트 톰슨',
        'review1_text': '이 이미지 변환기는 내 사진 비즈니스에 혁신적입니다. 일괄 처리 기능으로 수시간의 작업 시간을 절약할 수 있으며, 품질 관리도 뛰어납니다.',
        'review2_name': '제니퍼 파커',
        'review2_text': '그래픽 디자이너로서, 이 도구의 정밀함과 신뢰성에 감사드립니다. 인터페이스가 직관적이고 변환 품질이 지속적으로 우수합니다.',
        'review3_name': '윌리엄 첸',
        'review3_text': '로컬 처리 기능으로 민감한 고객 이미지를 처리할 때 마음의 평화를 얻을 수 있습니다. 빠르고, 안전하며, 전문적인 - 정확히 내가 필요로 하던 것입니다.',
        'review4_name': '에밀리 로드리게스',
        'review4_text': '소셜 미디어 콘텐츠를 위해 매일 이 도구를 사용합니다. 파일 크기를 줄이면서도 이미지 품질을 유지하는 능력은 내 작업에 매우 가치 있습니다.',
        'review5_name': '다니엘 마르티네즈',
        'review5_text': '내 웹 개발 프로젝트에 완벽합니다. 일괄 변환 기능과 형식의 유연성으로 이 도구는 내 워크플로우의 필수적인 부분이 되었습니다.',
        'review6_name': '소피 앤더슨',
        'review6_text': '이 변환기의 속도와 효율성은 놀랍습니다. 많은 양의 이미지를 원활하게 처리하여 디자인 작업에서 귀중한 시간을 절약할 수 있습니다.',
        
        // FAQ Section
        'faq': '자주 묻는 질문',
        'faq1_q': '어떤 이미지 형식을 WebP로 변환할 수 있나요?',
        'faq1_a': '이 도구는 특별히 JPG/JPEG 및 PNG 이미지를 WebP 형식으로 변환하도록 설계되었습니다. 현재 다른 형식은 지원되지 않습니다.',
        'faq2_q': '이 도구를 사용할 때 내 데이터는 안전한가요?',
        'faq2_a': '물론입니다! 모든 처리는 브라우저에서 로컬로 이루어집니다. 이미지는 귀하의 기기를 떠나지 않으며, 어떤 데이터도 서버로 전송되지 않아 완전한 개인 정보 보호와 보안을 보장합니다.',
        'faq3_q': 'WebP란 무엇이며 왜 사용해야 하나요?',
        'faq3_a': 'WebP는 Google에서 개발한 현대적인 이미지 형식으로, 웹 이미지를 위한 우수한 무손실 및 손실 압축을 제공합니다. WebP 이미지는 비슷한 시각적 품질을 유지하면서도 일반적으로 JPEG나 PNG 파일보다 25-35% 더 작아 웹사이트 로딩 시간을 단축하고 대역폭 사용량을 줄입니다.',
        'faq4_q': '어떤 품질 설정을 사용해야 하나요?',
        'faq4_a': '대부분의 웹 사용에는 70-85% 사이의 품질 설정이 파일 크기와 이미지 품질 사이에 최상의 균형을 제공합니다. 낮은 값(70% 미만)은 더 작은 파일을 생성하지만 압축 아티팩트가 더 많이 나타날 수 있습니다. 높은 값(85% 이상)은 더 높은 품질을 유지하지만 파일 크기 감소 효과는 점점 줄어듭니다.',
        'faq5_q': '한 번에 몇 개의 이미지를 변환할 수 있나요?',
        'faq5_a': '한 번에 변환할 수 있는 이미지 수는 장치의 성능에 따라 달라집니다. 최적의 성능을 위해 20-30개의 이미지를 한 번에 변환하는 것을 권장합니다. 더 큰 그룹은 브라우저의 속도를 늦출 수 있습니다.',
        'faq6_q': 'WebP 이미지는 모든 브라우저에서 지원되나요?',
        'faq6_a': 'WebP는 이제 Chrome, Firefox, Edge, Safari, Opera 등 모든 주요 최신 브라우저에서 지원됩니다. 그러나 오래된 브라우저 버전은 WebP를 지원하지 않을 수 있습니다. 웹사이트에서는 picture 요소를 사용하여 백업 형식을 제공하는 것을 권장합니다.',
        
        // Email
        'email': '이메일:'
    };