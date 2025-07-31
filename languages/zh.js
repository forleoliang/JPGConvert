// zh 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['zh'] = {
        // 标题
        'title': 'JPG 转换器',
        
        // 上传区域
        'drag_drop': '拖放您的图片到这里或',
        'browse': '浏览',
        'click_anywhere': '点击任意位置选择文件',
        
        // 控制区
        'convert_to': '转换为:',
        'quality': '质量:',
        'convert_all': '全部转换',
        
        // 转换选项部分
        'conversion_options': '转换选项',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': '将JPG图像转换为现代WebP格式，减小文件大小并保持高质量。',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': '使用先进的AVIF格式获得最佳压缩比，为网站提供更快加载速度。',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': '转换为无损PNG格式，适用于需要透明背景或高质量图像的场景。',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': '转换为专业TIFF格式，适合印刷、出版和专业图像编辑工作流程。',
        // 格式描述
        'webp_desc': 'WebP - 良好压缩率，广泛支持',
        'avif_desc': 'AVIF - 最佳压缩率，较新格式',
        
        // AVIF特定消息
        'avif_processing': '正在处理AVIF（可能需要更长时间）...',
        'avif_not_supported': '您的浏览器不支持AVIF编码',
        'using_avif_encoder': '正在使用Squoosh进行AVIF转换...',
        'avif_conversion_failed': 'AVIF转换失败',
        'avif_not_available': 'AVIF编码器不可用，请尝试其他格式',
        
        // 预览区域
        'original': '原图',
        'converted': '已转换',
        
        // 转换状态消息
        'converting': '转换中...',
        'converting_fallback': '使用备用方法转换中...',
        'conversion_failed': '转换失败',
        'converted_size': '已转换 ({0} KB)',
        'original_kept': '保留原图 ({0} KB)',
        'size_info': '大小: {0} KB',
        'files_skipped': '部分文件被跳过。仅支持JPEG和PNG文件。',
        
        // 按钮
        'clear_all': '全部清除',
        'download': '下载',
        'download_all': '全部下载',
        
        // 元数据移除信息
        'metadata_note': '注意：转换过程中将移除EXIF等元数据',
        
        // 核心功能部分
        'key_features': '核心功能',
        'no_uploads': '无需上传到服务器',
        'privacy_desc': '您的图片保持私密。不会发送任何数据到服务器。',
        'local_processing': '本地处理',
        'local_desc': '所有处理都在您的浏览器中完成。',
        'best_web': '网页最佳选择',
        'web_desc': '为网站和Web应用优化的图像。',
        'removes_metadata': '移除元数据',
        'metadata_desc': '在转换过程中自动去除不必要的元数据。',
        'fast_conversion': '快速转换',
        'fast_desc': '高性能且极速的转换过程。',
        'top_performance': '顶级性能',
        'performance_desc': '本地图像转换器中的最佳性能。',
        'batch_processing': '批量处理',
        'batch_desc': '通过批量处理一次转换多张图片。',
        'size_reduction': '减小文件大小',
        'size_desc': '在保持质量的同时显著减少文件大小。',
        
        // 用户证言部分
        'user_reviews': '用户证言',
        'review1_name': '李明',
        'review1_text': '这个图像转换器对我的摄影业务是个改变游戏规则的工具。批量处理功能为我节省了数小时的工作时间，而且质量控制非常出色。',
        'review2_name': '张颖',
        'review2_text': '作为一名平面设计师，我非常欣赏这个工具的精确性和可靠性。界面直观，转换质量始终如一地出色。',
        'review3_name': '王伟',
        'review3_text': '本地处理功能让我在处理客户敏感图像时倍感安心。快速、安全、专业 - 正是我所需要的。',
        'review4_name': '刘婷',
        'review4_text': '我每天都使用这个工具处理我的社交媒体内容。在减小文件大小的同时保持图像质量的能力对我的工作来说是无价的。',
        'review5_name': '赵军',
        'review5_text': '非常适合我的网站开发项目。批量转换功能和格式灵活性使这个工具成为我工作流程中不可或缺的部分。',
        'review6_name': '孙丽',
        'review6_text': '这个转换器的速度和效率令人印象深刻。它无缝处理大批量图像，为我的设计工作节省了宝贵的时间。',
        
        // 常见问题部分
        'faq': '常见问题',
        'faq1_q': '我可以将哪些图像格式转换为WebP和AVIF？',
        'faq1_a': '该工具专为将JPG/JPEG和PNG图像转换为WebP或AVIF格式而设计。目前不支持其他格式。',
        'faq2_q': '使用此工具时我的数据安全吗？',
        'faq2_a': '绝对安全！所有处理都在您的浏览器本地完成。您的图像永远不会离开您的设备，也不会将任何数据发送到任何服务器，确保完全的隐私和安全。',
        'faq3_q': '什么是WebP和AVIF，为什么我应该使用它们？',
        'faq3_a': 'WebP是由谷歌开发的现代图像格式，为网络图像提供了更好的有损和无损压缩。AVIF是更新的格式，提供更高的压缩率，但浏览器支持相对较新。这两种格式通常比同等质量的JPEG或PNG文件小25-50%，同时保持相似的视觉质量，从而缩短网站加载时间并减少带宽使用。',
        'faq4_q': '我应该使用什么质量设置？',
        'faq4_a': '对于大多数网络用途，70-85%的质量设置提供了文件大小和图像质量之间的最佳平衡。较低的值（低于70%）将产生更小的文件，但可能显示更多的压缩失真。较高的值（高于85%）将保持更高的质量，但文件大小减少的效果将逐渐减弱。',
        'faq5_q': '我一次可以转换多少图像？',
        'faq5_a': '没有固定限制，但性能取决于您设备的能力。为了获得最佳性能，我们建议一次转换20-30张图像。更大批量的转换可能会导致浏览器速度变慢。',
        'faq6_q': 'WebP和AVIF图像是否被所有浏览器支持？',
        'faq6_a': 'WebP现在被所有主要的现代浏览器支持，包括Chrome、Firefox、Edge、Safari和Opera。AVIF支持较新，主要在Chrome、Firefox和Opera中提供。对于网站，建议使用picture元素提供后备格式。',
        
        // 邮箱
        'email': '邮箱:',
        
        // About页面
        'nav_home': '首页',
        'nav_jpg_to_webp': 'JPG转WebP',
        'nav_jpg_to_avif': 'JPG转AVIF',
        'nav_jpg_to_png': 'JPG转PNG',
        'nav_jpg_to_tiff': 'JPG转TIFF',
        'nav_about': '关于我们',
        'about_title': '关于JPGConvert.org',
        'about_subtitle': 'JPGConvert.org是一个专注于图像格式转换和压缩的在线平台，由专注摄影的网站LensClear.net设计和运营。我们致力于为摄影师、设计师和内容创作者提供快速、可靠且无干扰的JPG图像处理解决方案。',
        'mission_title': '我们的使命',
        'mission_content': '我们相信图像处理不应该依赖复杂的软件或臃肿的工作流程。JPGConvert.org的使命很简单：让JPG转换和压缩对每个人来说都变得简单、高效和安全。无论您是在桌面、平板、移动设备上工作，还是将我们的工具集成到您的工作流程中，我们都提供快速、稳定且用户友好的解决方案。',
        'story_title': '我们的故事',
        'story_content': 'JPGConvert.org由LensClear.net推出——一个专注于摄影教育和器材评测的独立平台。经过多年的内容创作和用户互动，我们了解了摄影师在处理JPG图像时面临的常见痛点：格式兼容性、文件过大、质量损失等等。',
        'story_content2': '为了满足我们自己和受众的实际图像优化需求，我们创建了JPGConvert.org——一个以"图像优先"理念构建的工具。从一开始目标就很明确：专注于JPG图像转换、压缩和格式优化——没有多余功能，没有干扰。',
        'story_content3': '从基本的JPG到WebP和AVIF转换，到无损压缩、批量处理、Exif数据移除和透明背景处理等高级功能，我们始终秉承一个原则：从摄影师的角度构建摄影师真正需要的工具。',
        'lensclear_title': '关于LensClear.net',
        'lensclear_content': 'LensClear.net是面向全球摄影爱好者的独立内容平台。它专注于教育资源、器材使用指南和摄影的原创观点。JPGConvert.org是我们"摄影+技术"理念的延伸——标志着我们进入图像处理工具领域的第一步。',
        'visit_lensclear': '访问LensClear.net →',
        'values_title': '我们的价值观',
        'privacy_title': '隐私优先',
        'privacy_content': '所有图像处理都在您的浏览器本地进行。您的图像永远不会离开您的设备，确保完全的隐私和安全。',
        'speed_title': '闪电般快速',
        'speed_content': '优化的算法和本地处理确保快速转换，无需服务器上传或下载。',
        'quality_title': '专注质量',
        'quality_content': '先进的压缩技术在保持视觉质量的同时显著减少文件大小，实现最佳的网页性能。',
        'accessibility_title': '通用访问',
        'accessibility_content': '在所有设备和平台上无缝工作——桌面、平板和移动设备——无需安装软件。',
        'contact_title': '联系我们',
        'contact_content': '有问题、建议或反馈吗？我们很乐意听到您的声音。联系我们，帮助我们让JPGConvert.org变得更好。',
        'footer_navigation': '导航',
        'footer_company': '公司',
        'footer_operated_by': 'JPGConvert.org由LensClear.net运营',
        'footer_visit_lensclear': '访问LensClear.net',
        'footer_contact': '联系方式',
        'footer_privacy_note': '我们尊重您的隐私。所有转换都在您的浏览器中本地处理。',
        'footer_copyright': '© 2025 JPGConvert.org. 保留所有权利。'
    };